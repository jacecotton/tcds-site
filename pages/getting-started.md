## Quick start (CDN)

To start using the Design System with minimal setup, you can load the precompiled CSS and JavaScript bundles straight from a CDN (via UNPKG, powered by Cloudflare).

```html
<head>
  ...
  <link rel="stylesheet" href="https://unpkg.com/@txch/tcds/dist/styles/tcds.css">
</head>
<body>
  ...
  <script async src="https://unpkg.com/@txch/tcds/dist/scripts/tcds.js"></script>
</body>
```

Then, you can use the HTML snippets documented for each component, primitive, and utility class, with styling and functionality taken care of. For example, from the [Button component](/components/button):

```html
<button class="Button">My TCDS button</button>
```

However, because the code is precompiled, you are limited to HTML snippets, and have no options for configuration. To fully integrate the Design System, we recommend [installing it as a project dependency](#local-installation).

## Local installation
Installing the Design System locally gives you greater configuration options, access to Twig components, and uncompiled assets and utilities for Sass and JavaScript. You can then import, bundle, and compile the Design System along with your project's other code.

### Step 1. Download project files
Download the following files, and place them in whatever directory you keep the front-end code of your project (CSS, JavaScript, etc.) This could be the root folder of your project, or, in the case of a Drupal site, a custom theme folder.

* <a download href="/downloads/package.json">Download package.json</a> — Specifies the necessary dependencies for the project (including the Design System).
* <a download href="/downloads/gulpfile.js">Download gulpfile.js</a> — Sets up a build process for compiling the Design System along with your project's other code.

<details>
  <summary>Recommended file structure</summary>
  <div>

It is recommended to structure your front-end code as follows.

* (Your project's folder for front-end code)
  * `package.json`
  * `gulpfile.js`
  * `assets/` — Uncompiled source code.
    * `styles/` — Sass stylesheets.
    * `scripts/` — JavaScript modules.
    * `images/` — Theme image assets.
  * `public/` — Compiled production code.
    * `styles/` — CSS stylesheets.
    * `scripts/` — JavaScript bundles.
    * `images/` — Optimized theme images.
      * `icons/` — SVG files from the TCDS icon library.
  * `views/` — Twig files.
    * `templates/` — Twig templates.
      * `components/` — Twig components.
      * `icons/` — Twig SVG files from the TCDS icon library.

If you have a different structure, you will need to modify the gulpfile as instructed in the comments.
  </div>
</details>

<details>
  <summary>Already have an npm project or build process?</summary>
  <div>

The above files are not required to use—they are provided only for convenience. If you already have a `package.json` file, you can install the Design System directly by running:

```command
npm install --save-dev @txch/tcds
```

Note that you will also need to install the other dependencies listed in the provided `package.json` file. If you already have your own build process, you will also need to replicate the build steps in the provided `gulpfile.js`. The most important utilities are:

* [webpack](https://www.npmjs.com/package/webpack-stream) — A module bundler for JavaScript files.
* [dart-sass](https://www.npmjs.com/package/gulp-dart-sass) — A pre-processor for CSS for added programming features.
* [postcss](https://www.npmjs.com/package/gulp-postcss) — A post-processor for CSS for added browser compatibility.
* [babel](https://babeljs.io/) ([core](https://www.npmjs.com/package/@babel/core), [preset-env](https://www.npmjs.com/package/@babel/preset-env), [loader](https://www.npmjs.com/package/babel-loader)) — A JavaScript compiler for added browser compatibility.
  </div>
</details>

### Step 2. Install dependencies
Next, from a command line, `cd` into the folder you placed the downloads (e.g. `my-project/`):

```command
cd my-project
```

Make sure you have [installed Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (npm is a package manager used to manage the Design System as a dependency). Then, install the dependencies listed in the `package.json` file by running:

```command
npm install
```

### Step 3. Import, configure, and build

Now, you should be able to import Design System assets from your front-end code.

#### JavaScript
From a JavaScript file, you can import specific modules as needed:

```javascript
import Tabs from "@tcds/components/Tabs.js";
```

#### Sass
**Tip:** Familiarize yourself with Sass's [module system](https://sass-lang.com/blog/the-module-system-is-launched) (`@use` and `@forward`) before proceeding.

From a Sass file, you can import the entire Design System bundle:

```css
/* main.scss */
@use "@tcds/tcds";
```

Alternatively, you can import specific modules:

```css
/* main.scss */
@use "@tcds/typography/utilities";
@use "@tcds/components/button";
```

To use and configure Sass members (variables, functions, mixins, etc.), create a file and `@forward` the `_all.scss` partial. You can set configuration variables via the `with` keyword:

```css
/* _all.scss */
@forward "@tcds/_all" with (
  $theme-color-primary: "blue",
);
```

To apply these configurations to the TCDS style bundle, `@use` this forwarding file before importing the Design System:
```css
/* main.scss */
@use "_all" as *;
@use "@tcds/tcds";
```

Now, from any file throughout your project's code, you can `@use` the forwarding file to bring in Design System utilities with the configurations.

```css
/* partials/sidebar.scss */
@use "../_all" as *;
```

You can also extend and overwrite Sass maps by creating a corresponding `_variables` file, importing the respective `_variables` file from the TCDS package, and then `map.merge`-ing the original map with your new map. For example:

```css
/* layout/_variables.scss */
@use "sass:map";
@use "@tcds/layout/_variables" as *;

$breakpoints: map.merge($breakpoints, (
  /* Overwrite the small breakpoint. */
  "small": 360px,
  /* Add an xx-large breakpoint. */
  "xx-large": 1920px,
));
```

Now in the root forwarding file, `@forward` your new `_variables` partial:

```css
/* _all.scss */
@forward "@tcds/_all" with (
  $theme-color-primary: "blue",
);

@forward "layout/_variables";
```

In this example, the `small` breakpoint is now redefined as `360px`, and a new `1920px` breakpoint has been added (making it available in the `breakpoint()` getter function, as well as generating breakpoint-based utility classes for `xx-large`).

#### Compile and watch for changes
Lastly, you can compile all your code together by running the following:

```command
npm run build
```

This will build your front-end code from `assets/` to `public/` (unless otherwise configured), and will continuously watch for changes, recompiling on every save.

#### To-do

Instructions for setting up and importing Twig templates.

* Custom/multiple namespaces in Drupal?
* Automatically copying templates from node module to template path?