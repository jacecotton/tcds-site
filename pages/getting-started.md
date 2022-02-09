WIP notes:

* Replace Gulp with Webpack for CSS, images, and icons
* Then, set up hot-reloading or at least a watch mechanism (maybe just a simple `onchange`?)
* Before the first reference of a "root folder of the project", specify (maybe with the Message component) that this doesn't necessarily have to be the root folder of the entire site (though it can), but rather the root folder containing all of the front-end code of the website (so for instance, in Drupal this would be the theme folder, `docroot/themes/custom/THEME_NAME`). This folder is where `package.json`, `webpack.config.js`, and `node_modules` will live.
* Next, rather than give detailed step by step instructions about what to download, what files to add, where to change, etc., split the manual installation section into two parts:
  * **I already have a Node.js project set up**
    * Give a single terminal command for installing everything in one fell swoop (the design system, webpack, all the loaders, etc.)
    * Provide a download for the webpack config file.
  * **I do not have a Node.js project set up**
    * Instruct to `npm init` from the folder you want to install your Node dependencies (this folder must contain all styles, scripts, and HTML).
    * Provide a `package.json` file.
    * Instruct to `npm install`
    * Provide a download for the webpack config file.
* Next, give a recommended folder structure. Where `.` is the folder that contains the `webpack.config.js` file:
  * Uncompiled assets: `./assets/styles`, `./assets/scripts`
  * Compiled files: `./public/styles`, `./public/scripts`
  * If the chosen folder structure is different, instruct where to go to change it (should be very simple constants defined at the top of the webpack config).
* Then, the Twig instructions may as well be an entirely different section. Again, split this up into two:
  * **I am using Drupal**
    * Provide the snippet to add to the theme config file for adding the `@tcds` Twig namespace
  * **I am using Express.js**
    * Provide the snippet for adding a file path to the environment loader.

## Quick start (CDN)

To start using the Design System with minimal setup, you can load the precompiled CSS and JavaScript bundles straight from a CDN (via UNPKG, powered by Cloudflare).

```html
<head>
  ...
  <link rel="stylesheet" href="https://unpkg.com/@txch/tcds/tcds.min.css">
</head>
<body>
  ...
  <script async src="https://unpkg.com/@txch/tcds/tcds.min.js"></script>
</body>
```

Then, you can use the HTML snippets documented for each [component](/components), [primitive](/primitives), and [utility class](/design), with styling and functionality taken care of. For example, from the [Button component](/components/button):

```html
<button class="Button">My TCDS button</button>
```

However, because the code is precompiled, you are limited to HTML snippets. To fully integrate the Design System, we recommend [installing it as a project dependency](#local-installation).

## Local installation
Installing the Design System locally gives you greater customization and configuration options, access to Twig templates, uncompiled Sass utilities (variables, functions, etc.), JavaScript APIs, and more. The documentation for components, primitives, etc. assumes you've installed the Design System locally.

### Starter template
If you are starting a new project, and are using Node.js, the easiest way to integrate the Design System is to use our starter template, [tcds-express-starter-template](https://github.com/jacecotton/tcds-express-starter-template). It has all dependencies and directory structures already set up, and requires minimal configuration from there.

While the starter template is opinionated (using [Express](https://expressjs.com/) as a back-end framework), exploring its architecture and directory structure can help give you a better idea for how to [manually set up the Design System](#manual-installation) in an existing project, or a new one with a different technology stack.

### Manual installation
#### Step 1. Install package
First, install the Design System by typing the following in your command line (from your project's root folder):

```terminal
npm install @txch/tcds
```

<!--twig
  {{ include("@tcds/components/message/message.html.twig", {
    content: "<b>Note:</b> In order to install Node packages, you must have <a href='https://npmjs.com/'>npm</a> installed on your computer, and your project initialized (with <code>npm init</code>, which will generate a <code>package.json</code> file). If you are new to npm, try <a href='https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/'>An Absolute Beginner's Guide to Using npm</a> by NodeSource. If you are new to command lines, try <a href='https://tutorials.codebar.io/command-line/introduction/tutorial.html'>Introduction to the command line</a> by codebar.io",
    modifiers: ["small", "attention"],
  }) }}
twig-->

Then, go to your project's `package.json` file, and below the `"name"` property, add the following line:

```javascript
"type": "module",
```

#### Step 2. Configure a build process

Design System stylesheets use [Sass](https://sass-lang.com/), a preprocessor for CSS. Sass allows us to systematize our styles, through the use of [module](https://sass-lang.com/blog/the-module-system-is-launched) organization, [variables, functions, and more](https://sass-lang.com/guide "Sass: Sass Basics").

To bundle Design System styles with your own styles (as well as reuse, import, and configure specific parts of it), we will ensure you have set up Sass and properly configured a <strong>build process</strong> to combine them.

<details>
  <summary>Info: What is a build process?</summary>
  <div>
    A build process takes source code files, runs certain tasks on them (like optimizations), and produces production files. Source code files can use third-party tools that make development easier but that browsers don't understand. Production files are intended to only be seen and processed by a browser, and are optimized for performance.
  </div>
</details>

<details>
  <summary>Step 2.1. Installing gulp.js</summary>
  <div>

[gulp.js](https://gulpjs.com/) is the recommended build tool. To set it up, from your project's root directory, install `gulp` and `gulp-dart-sass`.

```terminal
npm install --save-dev gulp gulp-dart-sass
```
  </div>
</details>

<details>
  <summary>Step 2.2. Adding a gulpfile.js</summary>
  <div>

Then, copy the below code to a <b>gulpfile.js</b> file that you place in the root folder of your project.
1. Replace `PATH_TO_UNCOMPILED_ASSETS` with the path to your project's uncompiled code (for example, <code>./assets</code>).
1. Replace `PATH_TO_COMPILED_ASSETS` with the path to your project's static production files (for example, <code>./public</code>).

<details>
  <summary>gulpfile.js</summary>
  <div>

```js
// Import gulp and utilities.
import gulp from "gulp";
const { task, watch, src, dest, series } = gulp;

// Import Sass.
import sass from "gulp-dart-sass";

// Configure project paths.
const inputPath = "PATH_TO_UNCOMPILED_ASSETS";
const outputPath = "PATH_TO_COMPILED_ASSETS";

// This function specifies what to do with a project's styles.
const stylesTask = () => {
  // Take files from the input path.
  return src(`${inputPath}/styles/**/*.scss`)
    // Process them with Sass.
    .pipe(sass({
      // Do not change.
      includePaths: ["./node_modules/@txch/tcds/src/styles"],
    }))
    // Output files to the output path.
    .pipe(dest(`${outputPath}/styles/`));
};

// Register the styles task.
task("styles", stylesTask);
// Register a task to watch the input path for changes, and re-run the task
// when one is detected.
task("watch", function watcher() {
  watch(`${inputPath}/styles/`, stylesTask);
});

// Define the default task to run when the `gulp` command is executed.
task("default", series(["styles", "watch"]));
```
  </div>
</details>
</div>
</details>

<details>
  <summary>Step 2.3. Running the build process</summary>
  <div>

Now, any time you want to compile your CSS, run `gulp` from the command line. It will continuously watch for saved changes to any `.scss` file, and re-run the styles task from the gulpfile.
  </div>
</details>

For how to import and begin using Sass from the Design System, see [&sect; Using Sass](#using-sass) below.

#### Step 3. Configure a module bundler
Design System JavaScript is organized as [modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules). To bundle these modules along with your other JavaScript code, we recommend a module bundler like [webpack.js](https://webpack.js.org/).

<details>
  <summary>Info: What is a module bundler?</summary>
  <div>
    In its simplest use case, a module bundler combines separate code files into one file, making sure that any dependencies between the different files are sufficiently connected, and that the final bundle file is optimized for performance. We only use a module bundler for JavaScript, because CSS module bundling is handled by Sass's own module system.
  </div>
</details>

<details>
  <summary>Step 3.1. Installing webpack.js</summary>
  <div>

To set it up, from your project's root directory, install `webpack` and `webpack-cli`.

```terminal
npm install --save-dev webpack webpack-cli
```
  </div>
</details>

<details>
  <summary>Step 3.2. Adding a webpack.config.js file</summary>
  <div>

Then, copy the below code to a <b>webpack.config.js</b> file that you place in the root folder of your project.

1. Replace `MAIN_SCRIPT_FILE` with the "entry" script (a file from which you import all your other scripts, for example, `./assets/scripts/index.js`).
1. Replace `PATH_TO_COMPILED_SCRIPTS` with the folder you want bundled scripts to go (for example, `./public/scripts`).

<details>
  <summary>webpack.config.js</summary>
  <div>

```js
import { join, resolve } from "path";

export default {
  entry: "MAIN_SCRIPT_FILE",
  output: {
    path: join(resolve(), "PATH_TO_COMPILED_SCRIPTS"),
    filename: "main.js",
  },
};
```

  <b>Tip:</b> You can name the final bundle whatever you want. In the above example, we chose <code>main.js</code>.
  </div>
</details>
</div>
</details>

<details>
  <summary>Step 3.3. Running a bundle process</summary>
  <div>

To actually bundle JavaScript modules, go to the `package.json` file, and inside the `scripts` object, add the below line:

```javascript
"build": "webpack"
```

Now, you can run `npm run build` to bundle all JavaScript assets together.
  </div>
</details>

For how to import and begin using JavaScript modules from the Design System, see [&sect; Using JavaScript](#using-javascript) below.

#### Step 4. Configure templating
[Twig](https://twig.symfony.com/)

##### Drupal
[Drupal](https://www.drupal.org/) is an open source content management system (CMS), which comes with Twig installed automatically. If your project runs on Drupal, all that's left to do is register a custom [Twig namespace](https://www.drupal.org/docs/contributed-modules/components/understanding-twig-namespaces) to point to the Design System's component files.

##### Node.js

### Browser support

browserslist, autoprefixer, babel, polyfills, etc.

## API
### Using Sass

### Using JavaScript

### Using Twig