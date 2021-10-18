const gulp = require("gulp");
const { src, dest, series } = require("gulp");

// Script utilites
const babel = require("gulp-babel");
const terser = require("gulp-terser");
const concat = require("gulp-concat");

// Style utilities
const sass = require("gulp-dart-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cleancss = require("gulp-clean-css");

// General utilities
const sourcemaps = require("gulp-sourcemaps");

const config = {
  export: {
    scripts: {
      src: [
        "./src/tcds/scripts/utilities/*.js",
        "./src/tcds/scripts/components/*.js",
        "./src/tcds/scripts/**/*.js",
      ],
      dest: "./public/dist/tcds",
    },

    styles: {
      src: "./src/tcds/styles/**/*.scss",
      dest: "./public/dist/tcds/",
    },
  },

  local: {
    scripts: {
      src: "./src/local/scripts/**/*.js",
      dest: "./public/scripts/",
    },

    styles: {
      src: "./src/local/styles/**/*.scss",
      dest: "./public/styles/",
    },
  },
};

const tasks = {
  scripts: {
    export: () => {
      return src(config.export.scripts.src)
        .pipe(sourcemaps.init())
        .pipe(concat("tcds.js"))
        .pipe(babel({
          presets: [
            [
              "@babel/env",
              {
                targets: {
                  "chrome": "70",
                  "ie": "11",
                  "safari": "13",
                },
              },
            ],
          ],
        }))
        .pipe(terser())
        .pipe(sourcemaps.write("."))
        .pipe(dest(config.export.scripts.dest));
    },

    local: () => {
      return src(config.local.scripts.src)
        .pipe(sourcemaps.init())
        .pipe(concat("main.js"))
        .pipe(babel({
          presets: [
            [
              "@babel/env",
              {
                targets: {
                  "chrome": "70",
                  "ie": "11",
                  "safari": "13",
                },
              },
            ],
          ],
        }))
        .pipe(terser())
        .pipe(sourcemaps.write("."))
        .pipe(dest(config.local.scripts.dest));
    },
  },

  styles: {
    export: () => {
      return src(config.export.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([
          autoprefixer({
            grid: "autoplace",
          }),
        ]))
        .pipe(cleancss({ level: 2}, (details) => {
          console.log("clean-css stats:", details.stats);
        }))
        .pipe(sourcemaps.write("."))
        .pipe(dest(config.export.styles.dest));
    },

    local: () => {
      return src(config.local.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([
          autoprefixer({
            grid: "autoplace",
          }),
        ]))
        .pipe(cleancss({ level: 2}, (details) => {
          console.log("clean-css stats:", details.stats);
        }))
        .pipe(sourcemaps.write("."))
        .pipe(dest(config.local.styles.dest));
    },
  },
};

gulp.task("local:scripts", tasks.scripts.local);
gulp.task("export:scripts", tasks.scripts.export);
gulp.task("local:styles", tasks.styles.local);
gulp.task("export:styles", tasks.styles.export);

gulp.task("watch", () => {
  gulp.watch("./src/tcds/scripts/", tasks.scripts.export);
  gulp.watch("./src/local/scripts/", tasks.scripts.local);
  gulp.watch("./src/tcds/styles/", tasks.styles.export);
  gulp.watch("./src/local/styles/", tasks.styles.local);
});

gulp.task("default", series([
  "export:scripts",
  "local:scripts",
  "export:styles",
  "local:styles",
  "watch",
]));