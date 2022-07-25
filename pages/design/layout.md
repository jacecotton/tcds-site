<!--lead
  Layout is the arrangement, sizing, and spacing of elements on a page. The Design System provides utilities for implementing layouts in a consistent and responsive manner.
lead-->

## Grid

The Design System provides [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)-based utility classes for creating responsive layouts.

<table class="table">
  <thead>
    <tr>
      <th>Class</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.grid</code></td>
      <td>Creates a grid container, 12 columns by default. When the child grid items add up to the total number of columns, a new row is automatically created.</td>
    </tr>
    <tr>
      <td><code>.column-x</code></td>
      <td>Creates a grid item spanning <code>x</code> number of columns (<code>1</code> through <code>12</code>). If you want an item to span the full row, you can set <code>x</code> to <code>12</code> or <code>full</code>.</td>
    </tr>
    <tr>
      <td style="white-space: nowrap"><code>.above-x:column-y</code></td>
      <td>Sets <code>y</code> number of columns above <code>x</code> <a href="#breakpoints">breakpoint token</a>.</td>
    </tr>
  </tbody>
</table>

<style>
  .grid.example > div {
    background: #d5e3ff;
    padding: 1rem;
    border-radius: .5rem;
    text-align: center;
  }
</style>

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" %}
{% block result %}
<p><small>Resize the window to see responsive changes to the column spans.</small></p>

<div class="grid example gap-normal">
  <div class="column-full above-medium:column-6 above-large:column-3">
    <span class="hide-above-medium">12/12</span>
    <span class="hide-below-medium hide-above-large">6/12</span>
    <span class="hide-below-large">3/12</span>
  </div>
  <div class="column-full above-medium:column-6 above-large:column-9">
    <span class="hide-above-medium">12/12</span>
    <span class="hide-below-medium hide-above-large">6/12</span>
    <span class="hide-below-large">9/12</span>
  </div>
  <div class="column-full above-large:column-6">
    <span class="hide-above-large">12/12</span>
    <span class="hide-below-large">6/12</span>
  </div>
  <div class="column-full above-large:column-6">
    <span class="hide-above-large">12/12</span>
    <span class="hide-below-large">6/12</span>
  </div>
</div>
{% endblock %}
{% block code %}
<div class="grid">
  <div class="column-full above-medium:column-6 above-large:column-3">
    ...
  </div>
  <div class="column-full above-medium:column-6 above-large:column-9">
    ...
  </div>
  <div class="column-full above-large:column-6">
    ...
  </div>
  <div class="column-full above-large:column-6">
    ...
  </div>
</div>
{% endblock %}
{% endembed %}
twig-->

If you want grid items to fill whatever available cell is created by the grid container, you can set custom properties on the `.grid` container.

<table class="table">
  <thead>
    <tr>
      <th>Custom property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--grid-columns-default</code></td>
      <td>The default number of columns in the grid container.</td>
    </tr>
    <tr>
      <td><code>--above-x-grid-columns</code></td>
      <td>The number of columns in the grid container above <code>x</code> breakpoint token.</td>
    </tr>
  </tbody>
</table>

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" %}
{% block result %}
<p><small>Resize the window to see responsive changes to the grid column count.</small></p>

<div class="grid example gap-normal" style="
  --grid-columns-default: 2;
  --above-medium-grid-columns: 4;
  --above-large-grid-columns: 6;
">
  <div class="column-2">1 – 2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
</div>
{% endblock %}
{% block code %}
<div class="grid" style="
  --grid-columns-default: 2;
  --above-medium-grid-columns: 4;
  --above-large-grid-columns: 6;
">
  <div class="column-2">1 – 2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
</div>
{% endblock %}
{% endembed %}
twig-->

This allows you to forgo adding any classes on the child items, unless you also want a particular item to span some number of columns.

## Breakpoints

Breakpoints are used to apply styles based on the viewport size. The Design System provides a set of standard breakpoints, which can be accessed in Sass with a function or a mixin. Also, certain utility classes use breakpoint names to conditionally apply their styles (see below).

Also provided are configuration variables which can override the breakpoint values on importing the Design System to a project (see [Getting Started &sect; Sass](/getting-started#sass)).

<table>
  <thead>
    <tr>
      <th style="width: 12ch">Breakpoint</th>
      <th style="width: 12ch">Value</th>
      <th>SCSS configuration variable</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>small</code></td>
      <td><code>640px</code></td>
      <td><code>$theme-breakpoint-small</code></td>
    </tr>
    <tr>
      <td><code>medium</code></td>
      <td><code>768px</code></td>
      <td><code>$theme-breakpoint-medium</code></td>
    </tr>
    <tr>
      <td><code>large</code></td>
      <td><code>1024px</code></td>
      <td><code>$theme-breakpoint-large</code></td>
    </tr>
    <tr>
      <td><code>x-large</code></td>
      <td><code>1280px</code></td>
      <td><code>$theme-breakpoint-x-large</code></td>
    </tr>
  </tbody>
</table>

### Sass utilities
The `breakpoint()` Sass function can be used to get the value of a breakpoint directly. However, breakpoints are generally more useful as [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries), for which there are the `breakpoint-above()` and `breakpoint-below()` mixins. Example:

```css
@include breakpoint-above("small") {
  // Applies only to screen sizes above 640px.
}

@include breakpoint-below("large") {
  // Applies only to screen sizes below 1024px.
}
```

Because the majority of visitors are on handheld devices, **we recommend a "mobile-first" approach to responsive strategy.** Therefore, the `breakpoint-above()` mixin is recommended for most cases, [progressively enhancing](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement "Progressive Enhancement - MDN Web Docs Glossary") designs as the screen gets wider. The older approach is "desktop-first", [gracefully degrading](https://developer.mozilla.org/en-US/docs/Glossary/Graceful_degradation "Graceful degradation - MDN Web Docs Glossary") a design as the screen gets smaller, which can still be done if necessary with the `breakpoint-below()` mixin.

**Use custom breakpoints.** The provided breakpoints are only reasonable defaults, not hard-set rules. Consider using custom breakpoints to optimize for the specific experience at hand. For custom breakpoints, standard CSS `@media` query syntax can be used, or a custom value can be passed to the mixins:

```css
@include breakpoint-above("123px") {
  // Custom breakpoint.
}
```

## Size and space

The Design System provides a collection of tokens for setting space (margin, padding, gap) and size (width, height) on elements. Each constant is a multiple of a base unit of 4px.

<div class="size-space-chart grid gap-x-loose align-center">
  <div class="column-2">
    <span class="text-semibold">Size</span>
    <span>(ex <code>height</code>)</span>
  </div>
  <dl class="size-chart row gap-normal column-10">
    <div>
      <dt><code>x-small</code></dt>
      <dd style="--size-bar-height: 24px">24px</dd>
    </div>
    <div>
      <dt><code>small</code></dt>
      <dd style="--size-bar-height: 32px">32px</dd>
    </div>
    <div>
      <dt><code>medium</code></dt>
      <dd style="--size-bar-height: 40px">40px</dd>
    </div>
    <div>
      <dt><code>large</code></dt>
      <dd style="--size-bar-height: 48px">48px</dd>
    </div>
    <div>
      <dt><code>x-large</code></dt>
      <dd style="--size-bar-height: 56px">56px</dd>
    </div>
  </dl>

  <div class="column-2">
    <span class="text-semibold">Space</span>
    <span>(ex <code>padding</code>)</span>
  </div>
  <dl class="space-chart row gap-normal column-10">
    <div>
      <dt><code>x-tight</code></dt>
      <dd style="--space-bar-padding: 4px"><span>4px</span></dd>
    </div>
    <div>
      <dt><code>tight</code></dt>
      <dd style="--space-bar-padding: 8px"><span>8px</span></dd>
    </div>
    <div>
      <dt><code>normal</code></dt>
      <dd style="--space-bar-padding: 16px"><span>16px</span></dd>
    </div>
    <div>
      <dt><code>loose</code></dt>
      <dd style="--space-bar-padding: 24px"><span>24px</span></dd>
    </div>
    <div>
      <dt><code>x-loose</code></dt>
      <dd style="--space-bar-padding: 32px"><span>32px</span></dd>
    </div>
  </dl>
</div>

<!--twig
  {{ include("@tcds/components/message/message.html.twig", {
    content: "<strong>Tip:</strong> Because these tokens represent fixed constants at relatively low pixel sizes, they are most useful for micro-layouts. For example, setting spacing between or sizing on individual <a href='/components'>components</a>, <a href='/primitives/forms'>form elements</a>, etc. At the macro-level, layouts need to be <a href='/design/responsive'>responsive</a>, and should therefore use grid or <a href='#flexbox'>flexbox</a> with relative or flexible units and <a href='#breakpoints'>breakpoint sizes</a>.",
  }) }}
twig-->

Tokens are accessible via corresponding `size()` and `space()` custom Sass functions:

<details>
  <summary>Syntax</summary>
  <div>

  * `size(<token>, <unit>?)`
    * `<token>` — `x-small` through `x-large`, corresponding to the measurements indicated above.
    * `<unit>` — the unit to get the measurement in, `px | em | rem` (defaults to `px`).
  * `space(<token>, <unit>?)`
    * `<token>` — `x-tight` through `x-loose`, corresponding to the measurements indicated above.
    * `<unit>` — the unit to get the measurement in, `px | em | rem` (defaults to `px`).
  </div>
</details>

Spacing tokens are also available as utility classes for the `gap` property in grid or [flexbox](#flexbox).

<details>
  <summary>Utility classes</summary>
  <div>
    <table>
      <thead>
        <tr>
          <th style="width: 15ch">Utility class</th>
          <th>Property</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>.gap-x-tight</code></td>
          <td><code>gap: 4px</code></td>
        </tr>
        <tr>
          <td><code>.gap-tight</code></td>
          <td><code>gap: 8px</code></td>
        </tr>
        <tr>
          <td><code>.gap-normal</code></td>
          <td><code>gap: 16px</code></td>
        </tr>
        <tr>
          <td><code>.gap-loose</code></td>
          <td><code>gap: 24px</code></td>
        </tr>
        <tr>
          <td><code>.gap-x-loose</code></td>
          <td><code>gap: 32px</code></td>
        </tr>
      </tbody>
    </table>
  </div>
</details>

### Viewport-based hiding

Breakpoint tokens are also available in utility classes for hiding content based on the screen size. The class format is `.hide-below-[breakpoint]` or `.hide-above-[breakpoint]`. Example:

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" %}
{% block content %}
<span class="hide-below-small">Content not for screen sizes below 640px.</span>
<span class="hide-above-medium">Content not for screen sizes above 768px.</span>
{% endblock %}
{% endembed %}
twig-->

Note these utilities are only intended to switch out actual content. Avoid duplicating elements just to adjust styling between different screen sizes. Instead, prefer adjusting the design of a single element in CSS with media queries.

## Layout utilities

The following utilities apply to both grid and flexbox, and are used for alignment and spacing.

<table>
  <thead>
    <tr>
      <th style="width: 22ch">Utility class</th>
      <th>Property</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>row</code></td>
      <td><code>display: flex; flex-flow: row wrap;</code></td>
    </tr>
    <tr>
      <td><code>column</code></td>
      <td><code>display: flex; flex-direction: column;</code></td>
    </tr>
    <tr>
      <td><code>.justify-space-between</code></td>
      <td><code>justify-content: space-between;</code></td>
    </tr>
    <tr>
      <td><code>.justify-start</code><br><code>.justify-left</code></td>
      <td><code>justify-content: start;</code></td>
    </tr>
    <tr>
      <td><code>.justify-end</code><br><code>.justify-right</code></td>
      <td><code>justify-content: end;</code></td>
    </tr>
    <tr>
      <td><code>.justify-center</code></td>
      <td><code>justify-content: center;</code></td>
    </tr>
    <tr>
      <td><code>.align-start</code><br><code>.align-top</code></td>
      <td><code>align-items: start;</code></td>
    </tr>
    <tr>
      <td><code>.align-end</code><br><code>.align-bottom</code></td>
      <td><code>align-items: end;</code></td>
    </tr>
    <tr>
      <td><code>.align-center</code></td>
      <td><code>align-items: center;</code></td>
    </tr>
    <tr>
      <td><code>.gap-x-tight</code></td>
      <td><code>gap: 4px;</code></td>
    </tr>
    <tr>
      <td><code>.gap-tight</code></td>
      <td><code>gap: 8px;</code></td>
    </tr>
    <tr>
      <td><code>.gap-normal</code></td>
      <td><code>gap: 16px;</code></td>
    </tr>
    <tr>
      <td><code>.gap-loose</code></td>
      <td><code>gap: 24px;</code></td>
    </tr>
    <tr>
      <td><code>.gap-x-loose</code></td>
      <td><code>gap: 32px;</code></td>
    </tr>
  </tbody>
</table>