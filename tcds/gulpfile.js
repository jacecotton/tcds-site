/**
 * Dependencies.
 */

import gulp from "gulp";
const { task, watch, src, dest, series } = gulp;
 
// Style utilities
import sass from "gulp-dart-sass";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import cleancss from "gulp-clean-css";
 
// General utilities
import sourcemaps from "gulp-sourcemaps";
  
/**
 * Configuration.
 */
  
const inputPath = "./src";
const outputPath = "./dist";
 
const config = {
  styles: {
    src: `${inputPath}/styles/@tcds/**/*.scss`,
    dest: `${outputPath}/styles/`,
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
      // Post-processing.
      .pipe(postcss([
        autoprefixer({
          grid: "autoplace",
        }),
      ]))
      // File minimization.
      .pipe(cleancss({ level: 2 }, (details) => {
        console.log("clean-css report:", details.stats);
      }))
      // Write sourcemap output.
      .pipe(sourcemaps.write("."))
      // Output final file.
      .pipe(dest(config.styles.dest));
  },
};
 
/**
 * Register tasks.
 */
 
task("styles", tasks.styles);
 
task("watch", function watcher() {
  watch(`${inputPath}/styles/`, tasks.styles);
});

task("default", series(["styles", "watch"]));