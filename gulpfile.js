import gulp from "gulp";
const { task, watch, src, dest, series } = gulp;
import { join, resolve } from "path";

import markdown from "gulp-markdown";
import map from "map-stream";
import rename from "gulp-rename";

import webpack from "webpack-stream";

import postcss from "gulp-postcss";
import custommedia from "postcss-custom-media";
import autoprefixer from "autoprefixer";
import dartsass from "sass";
import gulpsass from "gulp-sass";
const sass = gulpsass(dartsass);

const tasks = {
  "pages": () => {
    return src("./pages/**/*.md")
      .pipe(markdown())
      .pipe(rename(path => path.extname = ".twig"))
      .pipe(map((page, callback) => {
        // Stringify the contents of the page so it can be manipulated.
        let contents = page.contents.toString();

        // Define the gates for protected twig code and lede block.
        const twigStart = "<!--twig";
        const twigEnd = "twig-->";
        const ledeStart = "<!--lede";
        const ledeEnd = "lede-->";

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

        // Initialize a variable for the lede content for the template block.
        let lede;

        // If a lede exists...
        if(contents.includes(ledeStart)) {
          // Get the content between the signifiers.
          lede = contents.substring(contents.lastIndexOf(ledeStart) + ledeStart.length, contents.lastIndexOf(ledeEnd));

          // Remove the content and the signifiers from the output file (to be
          // reinserted later).
          contents = contents.replace(new RegExp(ledeStart + "(.*?)" + ledeEnd, "gs"), "");
        }

        // Trim the body and lede content.
        contents = contents.trim();
        lede = lede && lede.trim();

        // Add a warning comment, extend the base template, add the lede in the
        // lede block, and the body content in the body block.
        contents = `{# DO NOT EDIT. This file was compiled from Markdown; please edit the source .md\nfile and run the gulp process to compile (either \`gulp\` or \`npm run dev\` from\nthe terminal). #}\n{% extends "@tch/base.twig" %}\n${lede ? `{% block lede %}${lede}{% endblock %}\n` : ""}{% block body %}\n${contents}\n{% endblock %}`;

        // Replace the page content with the manipulated content.
        page.contents = new Buffer(contents);

        // Finish.
        callback(null, page);
      }))
      .pipe(dest("./views/pages/"));
  },

  "styles": () => {
    return src("./assets/styles/**/*.scss")
      .pipe(sass({
        includePaths: ["node_modules"],
        outputStyle: "compressed",
      }))
      .pipe(postcss([
        autoprefixer(),
        custommedia({
          importFrom: "./node_modules/@txch/tcds/styles/layout/layout",
        }),
      ]))
      .pipe(dest("./public/styles/"));
  },

  "scripts": () => {
    return src("./assets/scripts/index.js")
      .pipe(webpack({
        entry: ["./assets/scripts/index.js"],
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: [
                // Use Babel for transpiling to older syntax.
                {
                  loader: "babel-loader",
                  options: {
                    presets: ["@babel/preset-env"],
                  },
                },
              ],
            },
            {
              test: /\.css$/i,
              use: ["constructable-style-loader"],
            },
          ],
        },
        // resolve: {
        //   alias: {
        //     "@txch": resolve(join(), "../"),
        //   },
        // },
        output: {
          filename: "main.js",
        },
      }))
      .pipe(dest("./public/scripts/"));
  },

  "fonts": () => {
    return src("./node_modules/@txch/tcds/assets/fonts/**/*")
      .pipe(dest("./public/fonts/"));
  },

  "images": () => {
    return src("./assets/images/**/*")
      .pipe(dest("./public/images/"));
  },
};

task("pages", tasks["pages"]);
task("styles", tasks["styles"]);
task("scripts", tasks["scripts"]);
task("fonts", tasks["fonts"]);
task("images", tasks["images"]);

task("watch", function watcher() {
  watch("./pages/", tasks["pages"]);
  watch("./assets/styles/", tasks["styles"]);
  watch("./assets/scripts/", tasks["scripts"]);
  watch("./assets/images/", tasks["images"]);
});

task("build", series(["pages", "styles", "scripts", "fonts", "images"]))
task("default", series(["build", "watch"]));