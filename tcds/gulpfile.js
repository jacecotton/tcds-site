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
    src: `${inputPath}/styles/@tcds/**/*.scss`,
    dest: `${outputPath}/styles/`,
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
task("components", tasks.components);
task("icons", tasks.icons);
 
task("watch", function watcher() {
  watch(`${inputPath}/styles/`, tasks.styles);
  watch(`${inputPath}/components/`, tasks.components);
  watch(`${inputPath}/icons/`, tasks.icons);
});

task("default", series(["styles", "components", "icons", "watch"]));