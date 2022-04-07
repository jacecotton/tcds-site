/**
 * This is a sample gulpfile for getting a build process up and running that is
 * integrated with Texas Children's Design System.
 *
 * Of note is the INPUT_PATH, OUTPUT_PATH, and TEMPLATE_PATH variables in the
 * "Configuration" section below (lines 50 through 52). If your project's
 * directory structure differs, change these variables as necessary. Otherwise,
 * no further changes are needed.
 *
 * See https://texaschildrens.design/getting-started
 */

/**
 * Dependencies.
 */

import gulp from "gulp";
const { task, watch, src, dest, series } = gulp;
import { join, resolve } from "path";

// Script utilities
import webpack from "webpack-stream";

// Style utilities
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);

// Image utilities
import imagemin from "gulp-imagemin";

// General utilities
import sourcemaps from "gulp-sourcemaps";

/**
 * Configuration.
 *
 * 1. This is the folder that contains uncompiled source code. Sass code will be
 *    in the `styles/` folder, JavaScript code will be in the `scripts/` folder,
 *    and images will be in the `images/` folder.
 * 2. This is the folder that each task will compile to for production code.
 *    Subfolders correspond to the input path.
 * 3. This is the folder that contains Twig templates, such as components and
 *    icons.
 */

// These may need to be changed depending on your project's folder structure.
/* 1 */ const INPUT_PATH = "./assets";
/* 2 */ const OUTPUT_PATH = "./public";
/* 3 */ const TEMPLATE_PATH = "./views/templates";

const config = {
  styles: {
    src: `${INPUT_PATH}/styles/**/*.scss`,
    dest: `${OUTPUT_PATH}/styles/`,
  },

  scripts: {
    src: `${INPUT_PATH}/scripts/index.js`,
    dest: `${OUTPUT_PATH}/scripts/`,
  },

  images: {
    src: `${INPUT_PATH}/images/**/*`,
    dest: `${OUTPUT_PATH}/images/`,
  },

  icons: {
    src: "./node_modules/@txch/tcds/assets/icons/**/*.svg",
    dest: `${OUTPUT_PATH}/images/icons/`,
  },
};

/**
 * Define tasks.
 */

const tasks = {
  styles: () => {
    return src(config.styles.src)
      // Start sourcemap input.
      .pipe(sourcemaps.init())
      // Preprocessing (Sass).
      .pipe(sass({
        outputStyle: "compressed",
        // This will make Sass imports look inside the TCDS node package. Inside
        // the `styles` folder is a `@tcds` folder, so any Sass imports that
        // begin with `@tcds` will import from the Design System.
        includePaths: ["./node_modules/@txch/tcds/assets/styles"],
      }))
      // Post-processing (PostCSS).
      .pipe(postcss([
        autoprefixer({
          grid: "autoplace",
        }),
      ]))
      // Write sourcemaps.
      .pipe(sourcemaps.write("."))
      // Output final file.
      .pipe(dest(config.styles.dest));
  },

  scripts: () => {
    return src(config.scripts.src)
      // Start sourcemap input.
      .pipe(sourcemaps.init())
      // Module bundler.
      .pipe(webpack({
        entry: config.scripts.src,
        module: {
          rules: [
            {
              test: /\.js$/,
              use: [
                {
                  // Use Babel for transpiling new syntax to older,
                  // browser-compatible syntax.
                  loader: "babel-loader",
                  options: {
                    presets: ["@babel/preset-env"],
                  },
                },
              ],
            },
          ],
        },
        resolve: {
          alias: {
            // This will make JavaScript module imports that begin with "@tcds"
            // look inside the TCDS package.
            "@tcds": resolve(join(), "./node_modules/@txch/tcds/assets/scripts/"),
          },
        },
      }))
      // Write sourcemaps.
      .pipe(sourcemaps.write("."))
      // Output final file.
      .pipe(dest(config.scripts.dest));
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

task("styles", tasks.styles);
task("scripts", tasks.scripts);
task("images", tasks.images);
task("icons", tasks.icons);

task("watch", function watcher() {
  watch(`${INPUT_PATH}/styles/`, tasks.styles);
  watch(`${INPUT_PATH}/scripts/`, tasks.scripts);
  watch(`${INPUT_PATH}/images/`, tasks.images);
});

task("default", series(["styles", "scripts", "images", "icons", "watch"]));