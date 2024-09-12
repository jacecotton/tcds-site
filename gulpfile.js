import gulp from "gulp";
const {task, watch, src, dest, series} = gulp;
import {join, resolve} from "path";

import markdown from "gulp-markdown";
import frontmatter from "gulp-front-matter";
import map from "map-stream";
import rename from "gulp-rename";

import postcss from "gulp-postcss";
import custommedia from "postcss-custom-media";
import autoprefixer from "autoprefixer";
import dartsass from "sass";
import gulpsass from "gulp-sass";
import jsonsass from "node-sass-json-importer";
const sass = gulpsass(dartsass);

import imagemin from "gulp-imagemin";

import webpack from "webpack-stream";

const tasks = {
  pages: () => {
    return src("./src/pages/**/*.md")
      .pipe(frontmatter({remove: true}))
      .pipe(markdown())
      .pipe(rename(path => path.extname = ".twig"))
      .pipe(map((page, callback) => {
        // Stringify the contents of the page so that it can be manipulated.
        let contents = page.contents.toString();

        // Define the gates for protected twig code.
        const twigStart = "<!--twig";
        const twigEnd = "twig-->";

        // Define twig syntax delimiters for encoding/substitution.
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

        if(contents.includes(twigStart)) {
          // Get the contents between the gates (returns an array of each twig
          // block, without the signifiers).
          const twigBlocks = contents.match(new RegExp(twigStart + "(.*?)" + twigEnd, "gs")).map((result) => {
            return result.replace(new RegExp(twigStart, "gs"), "").replace(new RegExp(twigEnd, "gs"), "");
          });

          // Substitute twig syntax delimiters to protect from encoding.
          twigBlocks.forEach((twigBlock) => {
            let twigBlockSubst = twigBlock;

            twigSyntax.forEach((delimiter) => {
              twigBlockSubst = twigBlockSubst.replace(new RegExp(delimiter.delimiter, "g"), delimiter.placeholder);
            });

            contents = contents.replace(twigBlock, twigBlockSubst);
          });
        }

        // Now encode all remaining twig code (code not placed between gates).
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

        // Now that the twig has been trojaned, we can remove the twig gates
        // (uncommenting the twig) and cleanup.
        contents = contents.replace(new RegExp(twigStart, "g"), "");
        contents = contents.replace(new RegExp(twigEnd, "g"), "");
        contents = contents.trim();

        // Add explanatory comment and extend base twig template.
        contents = `{# DO NOT EDIT. This file was compiled from Markdown; please edit the source .md\nfile and run the gulp process to compile (either \`gulp\` or \`npm run dev\`). #}\n{% extends "@tc/base.twig" %}\n{% block body %}\n${contents}\n{% endblock %}`;

        // Replace the page contents with the manipulated content.
        page.contents = new Buffer(contents);

        callback(null, page);
      }))
      .pipe(dest("./views/pages/"));
  },

  styles: () => {
    return src("./src/styles/**/*.scss")
      .pipe(sass({
        includePaths: ["node_modules"],
        outputStyle: "compressed",
        importer: jsonsass(),
      }))
      .pipe(postcss([
        autoprefixer(),
        custommedia({
          importFrom: "./node_modules/@txch/tcds/src/01-layout/props",
        }),
      ]))
      .pipe(dest("./public/styles"));
  },

  javascript: () => {
    return src("./src/scripts/index.js")
      .pipe(webpack({
        entry: ["./src/scripts/index.js"],
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: [
                {
                  loader: "babel-loader",
                  options: {
                    presets: ["@babel/preset-env"],
                  },
                }
              ],
            },
          ],
        },
        resolve: {
          alias: {
            "@txch": resolve(join(), "./node_modules/@txch/"),
          },
        },
        output: {
          filename: "site.js",
        },
      }))
      .pipe(dest("./public/scripts/"));
  },

  fonts: () => {
    return src("./node_modules/@txch/tcds/dist/fonts/**/*")
      .pipe(dest("./public/fonts"));
  },

  images: () => {
    return src("./src/images/**/*")
      .pipe(imagemin())
      .pipe(dest("./public/images"));
  },
};

task("pages", tasks.pages);
task("styles", tasks.styles);
task("javascript", tasks.javascript);
task("fonts", tasks.fonts);
task("images", tasks.images);

task("watch", function watcher() {
  watch("./src/pages/", tasks.pages);
  watch("./src/styles/", tasks.styles);
  watch("./src/scripts/", tasks.javascript);
  watch("./src/images/", tasks.images);
});

task("build", series(["pages", "styles", "javascript", "fonts", "images"]));
task("default", series(["build", "watch"]));