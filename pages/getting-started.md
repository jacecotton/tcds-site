## Quick start (CDN)
To start using the Design System with minimal setup, you can load the precompiled CSS and JavaScript bundles straight from a CDN.

```html
<head>
  ...
  <link rel="stylesheet" href="https://unpkg.com/@txch/tcds/dist/tcds.css">
</head>
<body>
  ...
  <script src="https://unpkg.com/@txch/tcds/dist/tcds.js"></script>
</body>
```

This allows you to use all components, utility classes, base styles, and content and form styles.

However, to use Twig templates and local copies of static assets (images, fonts), you will need to install the Design System as a project dependency and set up a build process, or integrate it with an existing one.

## Local setup
Installing the Design System locally gives you uncompiled assets that you will then need to bundle and compile with the rest of your project's code.

### Build system
We use [npm](https://www.npmjs.com/) for front-end package management, for which you will need to install [Node.js](https://nodejs.org/en/). We recommend using [Gulp](https://www.npmjs.com/package/gulp) for the build system and [Webpack](https://www.npmjs.com/package/webpack-stream) for module bundling and loading.

The only strictly necessary dependency is [Sass](https://www.npmjs.com/package/sass), a stylesheet preprocessor. It is also necessary to use the [constructable-style-loader](https://github.com/alextech/constructable-style-loader) in your Webpack configuration for your scripts.

For browser support, we also recommend using our [.browserslistrc](https://github.com/jacecotton/tcds/blob/main/.browserslistrc) config and [PostCSS](https://www.npmjs.com/package/postcss) with [Autoprefixer](https://www.npmjs.com/package/autoprefixer) and [postcss-custom-media](https://www.npmjs.com/package/postcss-custom-media) for CSS, and [Babel](https://www.npmjs.com/package/babel-loader) ([core](https://www.npmjs.com/package/@babel/core), [preset-env](https://www.npmjs.com/package/@babel/preset-env)) for JavaScript. Without these, the Design System will function as expected only for the latest evergreen browsers. Otherwise, it will function for <em>at least</em> the following:

<!--twig
{% set supported_browsers = {
  "Chrome": ["https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg", "100+"],
  "Edge": ["https://upload.wikimedia.org/wikipedia/commons/9/98/Microsoft_Edge_logo_%282019%29.svg", "100+"],
  "Firefox": ["https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg", "&lt; 1 year"],
  "Safari": ["https://upload.wikimedia.org/wikipedia/commons/5/52/Safari_browser_logo.svg", "13+"],
  "Internet Explorer": ["https://upload.wikimedia.org/wikipedia/commons/1/18/Internet_Explorer_10%2B11_logo.svg", "🚫"],
} %}

<ul class="row gap-x-loose justify-center" style="margin: 3rem 0">
  {% for browser, data in supported_browsers %}
    <li class="column gap-normal align-center" {% if data[1] == "🚫" %} style="opacity: .2" {% endif %}>
      <img src="{{ data[0] }}" alt="{{ browser }} logo" title="{{ browser }}" width="24">
      <span class="font-sans-serif font-size-small">{{ data[1]|raw }}</span>
    </li>
  {% endfor %}
</ul>
twig-->

### Installation
Install the Design System by running the following from whatever directory you keep your front-end assets (theme folder, etc.):

```terminal
npm install --save-dev @txch/tcds
```

This will install the [@txch/tcds](https://www.npmjs.com/package/@txch/tcds) package from the npm registry as a development dependency.

### Import and use
Import the Design System in the main entry files for your stylesheet and scripts. Sass and webpack will both look inside the closest `node_modules` folder.

```css
// main.scss
@use "~@txch/tcds";
```

```js
// main.js
import "@txch/tcds";
```

#### Local asset location
<!-- consider https://github.com/postcss/postcss-url for css static assets -->

Note that [web components](/components) inject the Design System's base styles into their shadow trees by looking for a `link` element in the `head` of the document with a `title` of `tcds-base`. If none is found, it will be pulled from a CDN using [UNPKG](https://unpkg.com/).

This is sub-optimal for performance, so to provide a local one, import the Design System package in a `tcds.scss` file, then link to it separately in your template's `head`:

```css
// tcds.scss
@use "~@txch/tcds";
```

```html
<!-- index.html -->
<head>
  ...
  <!-- A separate link for the Design System -->
  <link rel="stylesheet" href="/styles/tcds.css" title="tcds-base">
  <!-- All other project-specific styles -->
  <link rel="stylesheet" href="/styles/main.css">
</head>
```

#### Granular imports
You can import only specific style and script modules if you do not need the entire Design System bundle:

```css
@use "~@txch/tcds/styles/color";
@use "~@txch/tcds/styles/typography";
```

```js
import "@txch/tcds/components/button/index.js";
import "@txch/tcds/components/card/index.js";
```

You can also import specific utilities directly from the Design System package's entry file:

```js
import { WebComponent, AnimateElement } from "@txch/tcds";
```

JavaScript utilities are documented on their relevant pages.