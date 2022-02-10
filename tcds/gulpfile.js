/**
 * Dependencies.
 */

import gulp from "gulp";
const { task, watch, src, dest, series } = gulp;

// Script utilities
import webpack from "webpack-stream";

// Style utilities
import sass from "gulp-dart-sass";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import cleancss from "gulp-clean-css";
 
// Image utilities
import imagemin from "gulp-imagemin";

// General utilities
import sourcemaps from "gulp-sourcemaps";
import rename from "gulp-rename";
  
/**
 * Configuration.
 */
  
const inputPath = "./src";
const outputPath = "./dist";
 
const config = {
  styles: {
    src: `${inputPath}/styles/**/*.scss`,
    dest: `${outputPath}/styles/`,
  },

  scripts: {
    src: `${inputPath}/scripts/index.js`,
    dest: `${outputPath}/scripts/`,
  },

  components: {
    src: `${inputPath}/components/**/*.twig`,
    dest: `${outputPath}/components/`,
  },

  icons: {
    src: `${inputPath}/icons/**/*.svg`,
    dest: `${outputPath}/icons/`,
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
      .pipe(sass())
      // Post-processing (PostCSS).
      .pipe(postcss([
        autoprefixer({
          grid: "autoplace",
        }),
      ]))
      // File optimization.
      .pipe(cleancss({ level: 2}, (details) => {
        console.log("clean-css report:", details.stats);
      }))
      // Write sourcemaps.
      .pipe(sourcemaps.write("."))
      // Output final file.
      .pipe(dest(config.styles.dest));
  },

  scripts: () => {
    return src(config.scripts.src)
      .pipe(sourcemaps.init())
      .pipe(webpack({
        entry: config.scripts.src,
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
                },
              ],
            },
          ],
        },
      }))
      .pipe(sourcemaps.write("."))
      .pipe(dest(config.scripts.dest));
  },

  components: () => {
    return src(config.components.src)
      .pipe(dest(config.components.dest));
  },

  icons: () => {
    return src(config.icons.src)
      .pipe(imagemin())
      .pipe(dest(config.icons.dest))
      .pipe(rename((path) => {
        path.extname = ".svg.twig";
      }))
      .pipe(dest(config.icons.dest));
  },
};
 
/**
 * Register tasks.
 */

task("styles", tasks.styles);
task("scripts", tasks.scripts);
task("components", tasks.components);
task("icons", tasks.icons);
 
task("watch", function watcher() {
  watch(`${inputPath}/styles/`, tasks.styles);
  watch(`${inputPath}/scripts/`, tasks.scripts);
  watch(`${inputPath}/components/`, tasks.components);
  watch(`${inputPath}/icons/`, tasks.icons);
});

task("default", series(["styles", "scripts", "components", "icons", "watch"]));