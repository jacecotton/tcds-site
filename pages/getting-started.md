## Quick start (CDN)

To start using the Design System with minimal setup, you can load the precompiled CSS and JavaScript bundles straight from a CDN.

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
<button class="Button">Click me</button>
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
  * `views/` — Twig files.
    * `templates/` — Twig templates.

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

If you already have your own build process, you will need to replicate the build steps in the provided `gulpfile.js`. The required ones are:
* An ES module bundler, we use [webpack](https://www.npmjs.com/package/webpack-stream)
* [Sass](https://www.npmjs.com/package/sass) for preprocessing and compiling source stylesheets
* [Babel](https://babeljs.io/) for compiling next-generation JavaScript to backwards-compatible syntax

Not required, but recommended:
* [PostCSS](https://www.npmjs.com/package/gulp-postcss) for browser compatibility
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
From a JavaScript file, you can import the entire bundle:

```javascript
import "@tcds/index.js";
```

Or only the specific modules and/or utilities you actually need:

```javascript
import Tabs from "@tcds/components/Tabs.js";
import AnimateElement from "@tcds/animation/AnimateElement.js";
```

#### Sass
**Tip:** Familiarize yourself with Sass's [module system](https://sass-lang.com/blog/the-module-system-is-launched) (`@use` and `@forward`) before proceeding.

From a Sass file, you can import the entire Design System bundle:

```css
/* main.scss */
@use "@tcds/tcds";
```

Alternatively, you can import specific package bundles:

```css
/* main.scss */
@use "@tcds/typography/bundle";
@use "@tcds/components/bundle";
```

Or even specific modules within a package:

```css
/* main.scss */
@use "@tcds/typography/globals";
@use "@tcds/components/button";
```

To use and configure Sass abstracts (variables, functions, mixins, etc.), create a new `_index.scss` file and `@forward` the `@tcds/_index.scss` file (you only have to specify the path name, as `_index` files are loaded by default). You can set configuration variables via the `with` keyword:

```css
/* _index.scss */
@forward "@tcds" with (
  $theme-color-primary: "blue",
);
```

To apply these configurations to the TCDS style bundle, `@use` the `_index.scss` file before importing the Design System:

```css
/* main.scss */
@use "_index" as *;
@use "@tcds/tcds";
```

Now, from any file throughout your project's code, you can `@use` the forwarding file to bring in Design System utilities with the configurations. For example:

```css
/* partials/sidebar.scss */
@use "../" as *;
```

You can also extend and overwrite Sass maps by creating a corresponding `variables` file, importing the respective `variables` file from the TCDS package, and then `map.merge`-ing the original map with your new map. For example:

```css
/* layout/_variables.scss */
@use "sass:map";
@use "@tcds/layout/abstracts/variables" as *;

$breakpoints: map.merge($breakpoints, (
  /* Overwrite the small breakpoint. */
  "small": 360px,
  /* Add an xx-large breakpoint. */
  "xx-large": 1920px,
));
```

Now in the root forwarding file, `@forward` your new `variables` file after the `@tcds/_index.scss` file:

```css
/* _index.scss */
@forward "@tcds" with (
  $theme-color-primary: "blue",
);

@forward "layout/variables";
```

In this example, the `small` breakpoint is now redefined as `360px`, and a new `1920px` breakpoint has been added. All breakpoint-relevant code utilities will be generated based off of this map.

#### Compile and watch for changes
Lastly, you can compile all your code together by running the following:

```command
npm run dev
```

This will build your front-end code from `assets/` to `public/` (unless otherwise configured), and will continuously watch for changes, recompiling on every save.