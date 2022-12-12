## Quick start (CDN)
To start using the Design System with minimal setup, you can load the precompiled CSS and JavaScript bundles straight from a CDN.

**Warning:** Make sure to load the Design System stylesheet with `title="tcds-base"`.

<!--twig
<pre class="language-html line-numbers">
<code class="language-html">&lt;head>
  ...
  &lt;link rel="stylesheet" href="https://unpkg.com/@txch/tcds@{{ tcds_version }}/dist/tcds.css" title="tcds-base">
&lt;/head>
&lt;body>
  ...
  &lt;script src="https://unpkg.com/@txch/tcds@{{ tcds_version }}/dist/tcds.js">&lt/script>
&lt;/body></code>
</pre>
twig-->

This allows you to use all components, utility classes, base styles, and content styles.

## Local setup
Instead of linking from a CDN, you can install the Design System as a dependency and import and link to local copies of the assets.

```terminal
npm install --save-dev @txch/tcds
```

This will install the [@txch/tcds](https://www.npmjs.com/package/@txch/tcds) package from the npm registry as a development dependency.

The Design System package ships with compiled and uncompiled code. If you do not wish to set up a build process or integrate the Design System with an existing one, you can simply import the built assets:

```js
// tcds.js
import "@txch/tcds/dist/tcds.js";
```

```css
// tcds.scss
@use "~@txch/tcds/dist/tcds.css";
```

To have more control over the Design System—how it's built, which parts are imported, pre-compile configuration—as well as access to Twig templates and local copies of static assets (images, fonts), you will need to set up your own build system or integrate the Design System with your current one.

### Build system
We recommend using [Gulp](https://www.npmjs.com/package/gulp) for the build system and [Webpack](https://www.npmjs.com/package/webpack-stream) for module bundling and loading.

The only strictly necessary dependency is [Sass](https://www.npmjs.com/package/sass), a stylesheet preprocessor. It is also necessary to use the [constructable-style-loader](https://github.com/alextech/constructable-style-loader) in your Webpack configuration for your scripts (however, this doesn't need to be installed separately).

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

### Import and use
Import the Design System in the main entry files for your stylesheet and scripts. Sass and Webpack will both look inside the closest `node_modules` folder.

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

Note that [web components](/components) inject the Design System's base styles into their shadow trees by looking for a stylesheet with a `title` of `tcds-base`. So you will need to link to the Design System stylesheet separately from your other styles.

To do so, import the Design System package in a `tcds.scss` file, then link to it separately in your template's `head`:

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
import { WebComponent, AnimateElement } from "@txch/tcds/index.js";
```

JavaScript utilities are documented on their relevant pages.