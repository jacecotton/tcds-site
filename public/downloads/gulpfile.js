/**
 * This is a sample gulpfile for getting a build process up and running that is
 * integrated with Texas Children's Design System.
 *
 * Of note is the INPUT_PATH and OUTPUT_PATH variables in the "Configuration"
 * section below (lines 44 and 45). If your project's directory structure
 * differs, change these variables as necessary. Otherwise, no further changes
 * are needed.
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

// General utilities
import sourcemaps from "gulp-sourcemaps";

/**
 * Configuration.
 *
 * 1. This is the folder that contains uncompiled source code. Sass code will be
 *    in the `styles/` folder, JavaScript code will be in the `scripts/` folder.
 * 2. This is the folder that each task will compile to for production code.
 *    Subfolders correspond to the input path.
 */

// These may need to be changed depending on your project's folder structure.
const INPUT_PATH = "./assets"; // 1
const OUTPUT_PATH = "./public"; // 2

const config = {
  styles: {
    src: `${INPUT_PATH}/styles/**/*.scss`,
    dest: `${OUTPUT_PATH}/styles/`,
  },

  scripts: {
    src: `${INPUT_PATH}/scripts/index.js`,
    dest: `${OUTPUT_PATH}/scripts/`,
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
        // This will make Sass imports look inside the TCDS node package.
        includePaths: ["./node_modules/@txch/tcds/assets/styles"],
      }))
      // Post-processing (PostCSS).
      .pipe(postcss([autoprefixer()]))
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
      }))
      // Write sourcemaps.
      .pipe(sourcemaps.write("."))
      // Output final file.
      .pipe(dest(config.scripts.dest));
  },
};
 
/**
 * Register tasks.
 */

task("styles", tasks.styles);
task("scripts", tasks.scripts);

task("watch", function watcher() {
  watch(`${INPUT_PATH}/styles/`, tasks.styles);
  watch(`${INPUT_PATH}/scripts/`, tasks.scripts);
});

task("default", series(["styles", "scripts", "watch"]));