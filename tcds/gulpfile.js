/**
 * Dependencies.
 */

import gulp from "gulp";
const { task, watch, src, dest, series } = gulp;
 
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

task("components", tasks.components);
task("icons", tasks.icons);
 
task("watch", function watcher() {
  watch(`${inputPath}/components/`, tasks.components);
  watch(`${inputPath}/icons/`, tasks.icons);
});

task("default", series(["components", "icons", "watch"]));