---
category: Layout
title: Breakpoints
description: The Design System uses a standard set of breakpoints internally, and exposes them externally through a variety of conditional component props and utility classes.
---

Texas Children's Design System provides the following standard breakpoints.

<!--twig
{% set breakpoints = [
  {
    token: "xs",
    value: "640",
    icon: "mobile",
  },
  {
    token: "s",
    value: "896",
    icon: "tablet",
  },
  {
    token: "m",
    value: 1280,
    icon: "laptop",
  },
  {
    token: "l",
    value: 1536,
    icon: "desktop",
  },
  {
    token: "xl",
    value: 1920,
    icon: "desktop",
  },
] %}

<table class="breakpoint-chart table--semantic bg-secondary" id="chart">
  <caption><b>Note:</b> Proportional, not to scale</caption>
  {% for breakpoint in breakpoints %}
    <tr>
      <th>{{ breakpoint.token }}</th>
      <td>
        <div style="
          width: {{ (breakpoint.value / breakpoints[breakpoints|length - 1].value * 100)|round(2) }}%;
        ">{{ breakpoint.value }}px</div>
      </td>
      <td><tcds-icon icon="{{ breakpoint.icon }}"></tcds-icon></td>
    </tr>
  {% endfor %}
</table>
twig-->

## Best practices
**Use custom breakpoints as appropriate.** The standard breakpoints are convenient reference points and good ways to coordinate changes between multiple elements consistently. However, we also encourage using custom breakpoint values to fit specific content and design needs. (In the future, [container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries) will replace most instances of window-level breakpoints with component- and container-level breakpoints.)

**A "mobile-first" approach is encouraged.** Generally, it is more maintainable and scalable to style your content and elements first as they appear at smaller window sizes, then use breakpoints to target larger sizes. This is why most of the Design System's conditional utilities and props are based on which breakpoint the available window size is "above" (e.g. `class="text-center@above:m"`). In CSS, this is accomplished by using `min-width` queries instead of `max-width`.

**Avoid trying to target specific device types.** "Mobile" or "desktop" are useful shorthands to refer to small or large screen sizes, but remember that window sizes are flexible and devices are too numerous to count or establish a precise average. (Instead, our breakpoints are based on the horizontal measure of industry standard screen resolutions at industry standard aspect ratios, e.g. 1080p at 16:9 &rarr; 1920.)

## Usage
All breakpoint references in code are based upon the [above tokens](#chart) (e.g. `xs`, `s`, etc.)

### Media queries
For now, you will have to manually write media queries using the [above chart](#chart) as a reference.

```css
@media (min-width: 1280px) {
  ...
}
```

If using [Sass](https://sass-lang.com/), you can add [node-sass-json-importer](https://www.npmjs.com/package/node-sass-json-importer) to import `/src/01-layout/layout.json` and access the breakpoint variables as properties of `layout.$breakpoints` (this is more maintainable and less memory- or reference-dependent).

```css
@use "@txch/tcds/src/01-layout/layout.json";

@debug map.get(layout.$breakpoints, "m"); // => 1280

@media (min-width: map.get(layout.$breakpoints, "m") * 1px) {
  ...
}
```

The Design System does currently define custom media queries based on our standard breakpoints. Although there has been no browser adoption of the [custom media query specification](https://www.w3.org/TR/mediaqueries-5/#custom-mq), we use [postcss-custom-media](https://www.npmjs.com/package/postcss-custom-media) internally to transpile them. (If a part of your own build process, you can do the same by setting the `importFrom` plugin option to `/src/01-layout/props.scss` where the `@custom-media` rules are defined.)

Syntax:
```css
/* min-width */
@media (--above-[xs|s|m|l|xl]) {
  ...
}

/* max-width */
@media (--below-[xs|s|m|l|xl]) {
  ...
}
```

However, custom media queries should be limited on downstream projects, as community adoption of the spec is a failure to launch. In the future, when browser support permits, we will create custom property toggles binded to `:root`-scoped media queries, which can then be [style queried as demonstrated here](https://thathtml.blog/2024/03/superpowered-container-style-queries/).

### Conditional utility classes
Some utility classes, such as [`.text-center`](/brand/typography#text-alignment-1) and [`.hide`](#display-toggling), can be conditionally applied by appending an `@`-separated modifier specifying a [breakpoint token](#chart).

Syntax:
```css
<classname>@[above|below]:[xs|s|m|l|xl]
```

Example:
```html
<p class="text-center@above:m">
  This text is centered only above the medium (m) breakpoint.
</p>
```

Note that not all utility classes have conditional options. All relevant documentation for a utility class will indicate if and which conditional options are available.

### Display toggling
Generally, it is not recommended to achieve responsive design by duplicating content and then swapping different variations based on the breakpoint.

However, sometimes it is useful to simply show or hide content based on the current window size. The Design System provides a `.hide` utility class that will apply `display: none` based on the [breakpoint conditional](#conditional-utility-classes) applied. Example:

```html
<p class="hide@above:l">
  This is for screen sizes below 1536px
</p>

<p class="hide@below:l">
  This is for screen sizes above 1536px
</p>
```

<!--
* https://www.meshdesignsystem.com/foundations/breakpoints
* https://cedar.rei.com/guidelines/responsive
-->