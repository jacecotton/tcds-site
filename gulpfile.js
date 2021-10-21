import gulp from "gulp";
const { task, watch, src, dest, series } = gulp;

// Script utilites
import babel from "gulp-babel";
import terser from "gulp-terser";
import concat from "gulp-concat";

// Style utilities
import sass from "gulp-dart-sass";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import cleancss from "gulp-clean-css";

// Image utilities
import imagemin from "gulp-imagemin";

// General utilities
import sourcemaps from "gulp-sourcemaps";

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

    images: {
      src: "./src/local/images/**/*",
      dest: "./public/images/",
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

  images: {
    local: () => {
      return src(config.local.images.src)
        .pipe(imagemin([
          // imagemin.svgo({
          //   plugins: [
          //     { removeViewBox: false },
          //     { removeTitle: false },
          //     { inlineStyles: false },
          //   ],
          // }),
        ]))
        .pipe(dest(config.local.images.dest));
    },
  },
};

task("local:scripts", tasks.scripts.local);
task("export:scripts", tasks.scripts.export);
task("local:styles", tasks.styles.local);
task("export:styles", tasks.styles.export);
task("local:images", tasks.images.local);

task("watch", function() {
  watch("./src/tcds/scripts/", tasks.scripts.export);
  watch("./src/tcds/styles/", tasks.styles.export);
  watch("./src/local/scripts/", tasks.scripts.local);
  watch("./src/local/styles/", tasks.styles.local);
  watch("./src/local/iamges/", tasks.images.local);
});

task("default", series([
  "export:scripts",
  "export:styles",
  "local:scripts",
  "local:styles",
  "local:images",
  "watch"
]));