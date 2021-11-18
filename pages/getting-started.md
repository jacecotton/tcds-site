The fastest and easiest way to get started is to [link CSS and JavaScript files from a CDN](#linking-from-cdn). Then, you can copy and paste example HTML code, modifying it per your requirements.

However, this method is extremely limited. This only gives you access to *compiled* code, and requires that you manually copy and paste HTML, which is not very maintainable.

The recommended way to use the Design System is to download the uncompiled assets, and use them as a part of the build process of your project. This gives you access to variables, functions, mixins, and templates. You can do this via a [package manager](#npm) or downloading and manually including the files from the [downloads](#download-archive).

## Linking from CDN

You can load the Design System straight from a CDN via UNPKG, powered by Cloudflare:

```html
<head>
  ...
  <link rel="stylesheet" href="https://unpkg.com/@tch/tcds/tcds.min.css">
</head>
<body>
  ...
  <script async src="https://unpkg.com/@tch/tcds/tcds.min.js"></script>
</body>
```

## Installation

### NPM

### Download archive