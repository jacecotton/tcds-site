/**
 * Dependencies.
 */

import gulp from "gulp";
const { task, watch, src, dest, series } = gulp;

// Content utilities
import markdown from "gulp-markdown";
import map from "map-stream";

// Image utilities
import imagemin from "gulp-imagemin";

// General utilities
import rename from "gulp-rename";
 
 /**
  * Configuration.
  */
 
const inputPath = "./assets";
const outputPath = "./public";

const config = {
  pages: {
    src: "./pages/**/*.md",
    dest: "./views/pages/",
  },

  images: {
    src: `${inputPath}/images/**/*`,
    dest: `${outputPath}/images/`,
  },

  icons: {
    src: "./tcds/src/icons/**/*.svg",
    dest: `${outputPath}/images/icons/`,
  },
};

/**
 * Define tasks.
 */

const tasks = {
  pages: () => {
    return src(config.pages.src)
      /**
       * Currently there are two problems to solve.
       *
       * The first is that if bare twig code is typed in a markdown file, it
       * will be partially encoded in the output file, meaning the quotes but
       * not the delimiters. This will not only result in invalid twig code, but
       * will crash the view.
       *
       * However, anything typed inside an html comment is left alone. We can
       * leverage this fact to "trojan horse" twig code into the compiled
       * output. We'll do this by targeting and removing any HTML comments with
       * some sort of signifier (we'll choose `<!--twig` and `twig-->`), leaving
       * the untouched twig.
       *
       * The second issue is if we *do* want to show encoded twig code, like for
       * displaying example code. To do this, we'll have to take any twig code
       * not between the aforementioned signifiers, and manually encode the
       * syntax delimiters by substituting them.
       *
       * Also of note is that the base template has a "lead" block for creating
       * "intros" to a page, for which we'll use the `<!--lead` and `lead-->`
       * signifiers.
       */
      // Convert markdown to HTML
      .pipe(markdown())
      // Change file path from .md to .twig so it can be rendered as a template.
      .pipe(rename((path) => {
        path.extname = ".twig";
      }))
      .pipe(map((page, callback) => {
        // Stringify the contents of the page so it can be manipulated.
        let contents = page.contents.toString();

        // Define the gates for protected twig code and lead block.
        const twigStart = "<!--twig";
        const twigEnd = "twig-->";
        const leadStart = "<!--lead";
        const leadEnd = "lead-->";

        // Define twig syntax delimiters for encoding/substitution. Note that it
        // doesn't really matter what the placeholder is. Just chose something
        // that was unlikely to be coincidentally typed in a markdown file.
        const twigSyntax = [
          {
            delimiter: "{%",
            placeholder: "__OPEN_STATEMENT__",
            encode: "&lcub;&percnt;",
          },
          {
            delimiter: "%}",
            placeholder: "__CLOSE_STATEMENT__",
            encode: "&percnt;&rcub;",
          },
          {
            delimiter: "{{",
            placeholder: "__OPEN_EXPRESSION__",
            encode: "&lcub;&lcub;",
          },
          {
            delimiter: "}}",
            placeholder: "__CLOSE_EXPRESSION__",
            encode: "&rcub;&rcub;",
          },
        ];

        // If a starting twig gate exists...
        if(contents.includes(twigStart)) {
          // Get the content between the gates (returns an array of each
          // twig block, without the signifiers).
          const twigBlocks = contents.match(new RegExp(twigStart + "(.*?)" + twigEnd, "gs")).map((result) => {
            // Strip the start and end signifiers (only from the string, not
            // the file output).
            result = result.replace(new RegExp(twigStart, "gs"), "");
            result = result.replace(new RegExp(twigEnd, "gs"), "");

            return result;
          });

          // Substitute twig syntax delimiters to protect from encoding.
          twigBlocks.forEach((twigBlock) => {
            let twigBlockSubstituted = twigBlock;

            twigSyntax.forEach((delimiter) => {
              twigBlockSubstituted = twigBlockSubstituted.replace(new RegExp(delimiter.delimiter, "g"), delimiter.placeholder);
            });

            // Replace the original/unsubstituted twig block with the
            // substituted block in the output file.
            contents = contents.replace(twigBlock, twigBlockSubstituted);
          });
        }

        // Now, encode all remaining twig code (that code which was not placed
        // between <!--twig twig--> signifiers).
        twigSyntax.forEach((delimiter) => {
          contents = contents.replace(new RegExp(delimiter.delimiter, "g"), delimiter.encode);
        });

        // Re-substitute the placeholders with proper syntax, now that
        // unprotected twig has been encoded.
        if(contents.includes(twigStart)) {
          twigSyntax.forEach((delimiter) => {
            contents = contents.replace(new RegExp(delimiter.placeholder, "g"), delimiter.delimiter);
          });
        }

        // Now that the twig has been "trojan horsed", we can remove the twig
        // start and end comments.
        contents = contents.replace(new RegExp(twigStart, "g"), "");
        contents = contents.replace(new RegExp(twigEnd, "g"), "");

        // Initialize a variable for the lead content for the template block.
        let lead;

        // If a lead exists...
        if(contents.includes(leadStart)) {
          // Get the content between the signifiers.
          lead = contents.substring(contents.lastIndexOf(leadStart) + leadStart.length, contents.lastIndexOf(leadEnd));

          // Remove the content and the signifiers from the output file (to be
          // reinserted later).
          contents = contents.replace(new RegExp(leadStart + "(.*?)" + leadEnd, "gs"), "");
        }

        // Trim the body and lead content.
        contents = contents.trim();
        lead = lead && lead.trim();

        // Add a warning comment, extend the base template, add the lead in the
        // lead block, and the body content in the body block.
        contents = `{# DO NOT EDIT. This file was compiled from Markdown; please edit the source .md\nfile and run the gulp process to compile (either \`gulp\` or \`npm run dev\` from\nthe terminal). #}\n{% extends "@tch/base.twig" %}\n${lead ? `{% block lead %}${lead}{% endblock %}\n` : ""}{% block body %}\n${contents}\n{% endblock %}`;

        // Replace the page content with the manipulated content.
        page.contents = new Buffer(contents);

        // Finish.
        callback(null, page);
      }))
      // Output final file.
      .pipe(dest(config.pages.dest));
  },

  images: () => {
    return src(config.images.src)
      // File minimization.
      .pipe(imagemin())
      // Output final file.
      .pipe(dest(config.images.dest));
  },

  icons: () => {
    return src(config.icons.src)
      .pipe(imagemin())
      .pipe(dest(config.icons.dest));
  },
};

/**
 * Register tasks.
 */

task("pages", tasks.pages);
task("images", tasks.images);
task("icons", tasks.icons);

task("watch", function watcher() {
  watch(`./pages/`, tasks.pages);
  watch(`${inputPath}/images/`, tasks.images);
  watch(`./tcds/src/icons/`, tasks.icons);
});

task("default", series(["pages", "images", "icons", "watch"]));