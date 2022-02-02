<!--lead
  Layout is the arrangement, sizing, and spacing of elements on a page. The Design System provides utilities for implementing layouts in a cohesive and consistent manner, working across platforms and screen sizes.
lead-->

## Size and space

The Design System provides a collection of tokens for setting space (margin, padding, gap) and size (width, height) on elements. Each constant is a multiple of a base unit of 4px.

<div class="size-space-chart [ column gap-loose ]">
  <div class="row gap-tight">
    <div class="column justify-center flex-1">
      <span class="text-semibold">Size</span>
      <span>(ex <code>height</code>)</span>
    </div>
    <dl class="size-chart [ flex-6 ]">
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
  </div>
  <div class="row gap-tight">
    <div class="column justify-center flex-1">
      <span class="text-semibold">Space</span>
      <span>(ex <code>padding</code>)</span>
    </div>
    <dl class="space-chart [ flex-6 ]">
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
</div>

<!--twig
  {{ include("@tch/components/message/message.html.twig", {
    content: "<strong>Tip:</strong> Because these tokens represent fixed constants at relatively low pixel sizes, they are most useful for micro-layouts. For example, setting spacing between or sizing on individual <a href='/components'>components</a>, <a href='/primitives/forms'>form elements</a>, etc. At the macro-level, layouts need to be <a href='/design/responsive'>responsive</a> and should use <a href='#grid'>grid</a> or <a href='#flexbox'>flexbox</a>, along with relative or flexible units and <a href='#breakpoints'>breakpoint sizes</a>.",
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

Spacing tokens are also available as utility classes for the `gap` property in [grid](#grid) or [flexbox](#flexbox).

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

## Breakpoints

Breakpoints are useful to apply conditional styles based on the user's current viewport size. The Design System provides a set of standard breakpoints for global coordination.

<table>
  <thead>
    <tr>
      <th style="width: 12ch">Breakpoint</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>small</code></td>
      <td><code>640px</code>
    </tr>
    <tr>
      <td><code>medium</code></td>
      <td><code>768px</code>
    </tr>
    <tr>
      <td><code>large</code></td>
      <td><code>1024px</code>
    </tr>
    <tr>
      <td><code>x-large</code></td>
      <td><code>1300px</code>
    </tr>
  </tbody>
</table>

Breakpoint values are accessible via the `breakpoint()` custom Sass function. However, breakpoints are generally more useful as [CSS media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries), for which there are the `breakpoint-above()` and `breakpoint-below()` custom Sass mixins. Example:

```css
@include breakpoint-above("small") {
  // Applies only to screen sizes above 640px...
}

@include breakpoint-below("large") {
  // Applies only to screen sizes below 1024px...
}
```

<!--twig
  {{ include("@tch/components/message/message.html.twig", {
    content: "<strong>Tips:</strong>
      <ul>
        <li><strong>Don't assume specific devices.</strong> The modern web is viewed on a wide diversity of screen sizes, even beyond the traditional mobile–desktop spectrum.</li>
        <li><strong>Develop for smaller screens first.</strong> Progressively enhance the experience as the available screen space grows. Avoid \"gracefully degrading\" the experience as the screen space shrinks, which is both more difficult and targets a minority of visitors.</li>
        <li><strong>Use custom breakpoints.</strong> The provided breakpoints are only reasonable defaults, not hard-set rules. Consider using custom breakpoints to optimize for the specific experience at hand.</li>
      </ul>
    ",
  }) }}
twig-->

### Viewport-based hiding

Breakpoint tokens are also available in utility classes for hiding content based on the screen size. The class format is `.hide-below-[breakpoint]` or `.hide-above-[breakpoint]`. Example:

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" with {
  examples: {
    "HTML": '<p class="hide-below-small">Content not for screen sizes below 640px.</p>
<p class="hide-above-medium">Content not for screen sizes above 768px.</p>',
    "CSS": '@media (max-width: 640px) {
  .hide-below-small {
    display: none !important;
  }
}
...

@media (min-width: 768px) {
  .hide-above-medium {
    display: none !important;
  }
}
...',
  },
} %}
  {% block result %}
    <span class="hide-below-small">Content not for screen sizes below 640px.</span>
    <span class="hide-above-medium">Content not for screen sizes above 768px.</span>
  {% endblock %}
{% endembed %}
twig-->

Note these utilities are only intended to switch out actual content. Avoid duplicating elements just to adjust styling between different screen sizes. Instead, prefer adjusting the design of a single element in CSS with media queries.

## Layout utilities

### Flexbox

The below utilities are provided in the Design System stylesheet for convenience. However, they should only be used to style text content or construct one-off pages. They should be avoided when creating elements that are reused or systematized, e.g. components, partials, and page templates (see [CSS Style Guide &sect; Semantic vs. functional](/style-guide/css#semantic-vs-functional)).

Note that in the below examples, the corresponding CSS to the utility class is shown. This is simply for informational purposes—it is not necessary to copy this to your project manually if you have [installed the Design System](/getting-started).

This documentation assumes some basic familiarity with [CSS flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox).

#### Row

Use `.row` to create a flex container with a horizontal flow. All immediate children become flex items.

<!--twig
  {% embed "@tch/includes/example-box/example-box.html.twig" with {
    show_first: true,
    examples: {
      "HTML": '<div class="row">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>',
      "CSS": '.row {
  display: flex;
}',
    },
  } %}
    {% block result %}
      <div class="row gap-normal">
        <div class="fake-item">1</div>
        <div class="fake-item">2</div>
        <div class="fake-item">3</div>
      </div>
    {% endblock %}
  {% endembed %}
twig-->

#### Column

Use `.column` to create a flex container with a vertical flow. All immediate children become flex items. (Note that this class is not necessary to add to items of a `.row`.)

<!--twig
  {% embed "@tch/includes/example-box/example-box.html.twig" with {
    show_first: true,
    examples: {
      "HTML": '<div class="column">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>',
      "CSS": '.column {
  display: flex;
  flex-direction: column;
}',
    },
  } %}
    {% block result %}
      <div class="column gap-normal">
        <div class="fake-item">1</div>
        <div class="fake-item">2</div>
        <div class="fake-item">3</div>
      </div>
    {% endblock %}
  {% endembed %}
twig-->

#### Wrapping

Use `.row-wrap` or `.column-wrap` to allow items to wrap onto a new row. Without wrapping, the items will shrink if possible, or overflow along the main axis of the container if not.

<!--twig
  {% embed "@tch/includes/example-box/example-box.html.twig" with {
    show_first: true,
    examples: {
      "HTML": '<div class="row row-wrap">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <!-- ... --\>
</div>',
      "CSS": '.row-wrap {
  flex-wrap: wrap;
}',
    },
  } %}
    {% block result %}
      <div class="row row-wrap gap-normal">
        <div class="fake-item">1</div>
        <div class="fake-item">2</div>
        <div class="fake-item">3</div>
        <div class="fake-item">4</div>
        <div class="fake-item">5</div>
        <div class="fake-item">6</div>
        <div class="fake-item">7</div>
        <div class="fake-item">8</div>
        <div class="fake-item">9</div>
        <div class="fake-item">10</div>
        <div class="fake-item">11</div>
        <div class="fake-item">12</div>
      </div>
    {% endblock %}
  {% endembed %}
twig-->

#### Proportional sizing

To create columns that are proportionately sized to each other, via flex units, use the `.flex-1` through `.flex-12` classes.

<!--twig
  {% embed "@tch/includes/example-box/example-box.html.twig" with {
    show_first: true,
    examples: {
      "HTML": '<div class="row">
  <div class="flex-1">1/4</div>
  <div class="flex-3">3/4</div>
</div>',
      "CSS": '.flex-1 {
  flex: 1;
}\n
/* ... */
.flex-3 {
  flex: 3;
}\n
/* ... */',
    },
  } %}
    {% block result %}
      <div class="row gap-normal">
        <div class="fake-item flex-1">1/4</div>
        <div class="fake-item flex-3">3/4</div>
      </div>
    {% endblock %}
  {% endembed %}
twig-->

<!--twig
  {{ include("@tch/components/message/message.html.twig", {
    content: "<strong>Note:</strong> The numbers do not denote a width, but a fractional share. So two columns, one with <code>.flex-1</code> and one with <code>.flex-3</code>, would be the same as two columns with <code>.flex-3</code> and <code>.flex-9</code>—in both cases, the first column would have a 25% width (1/4 or 3/12), and the second column would have a 75% width (3/4 or 9/12).",
  }) }}
twig-->

#### Layout composition

To compose a larger layout from flex utilities, you can use `.row`, `.column`, and `.flex-1` through `.flex-12` together.

The below example demonstrates the traditional "Holy Grail" layout in flexbox.

<!--twig
  {% embed "@tch/includes/example-box/example-box.html.twig" with {
    show_first: true,
    examples: {
      "HTML": '<div class="column">
  <header>Header (4/4)</header>
  <div class="row">
    <aside class="flex-1">Sidebar (1/4)</aside>
    <main class="flex-3">Main area (3/4)</main>
  </div>
  <footer>Footer (4/4)</footer>
</div>',
      "CSS": '.row {
  display: flex;
}\n
.column {
  display: flex;
  flex-direction: column;
}\n
.flex-1 {
  flex: 1;
}
...

.flex-3 {
  flex: 3;
}
...',
    },
  } %}
    {% block result %}
      <div class="column gap-normal">
        <div class="fake-item flex-1">Header (4/4)</div>
        <div class="row gap-normal">
          <div class="fake-item flex-1" style="min-height: 200px">Sidebar (1/4)</div>
          <div class="fake-item flex-3" style="min-height: 200px">Main area (3/4)</div>
        </div>
        <div class="fake-item flex-1">Footer (4/4)</div>
      </div>
    {% endblock %}
  {% endembed %}
twig-->

### Grid

The following utilities provide only basic grid features for convenience. Because of the complex feature set of grid, it can't be fully utilized through utility classes alone. To do so, custom classes designed in a stylesheet would be required.

This documentation assumes some basic familiarity with [CSS grid](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids).

#### Basic grid

Use the `.grid` class to create a basic grid. By default, this will create a grid with an automatic amount of rows, but only one column. All immediate children will become grid items, and will automatically populate the available grid cells.

To define the number of evenly-sized columns, set the `--grid-columns` custom property.

<!--twig
  {% embed "@tch/includes/example-box/example-box.html.twig" with {
    show_first: true,
    examples: {
      "HTML": '<div class="grid" style="--grid-columns: 3">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>',
      "CSS": '.grid {
  display: grid;
  grid-template-columns: repeat(var(--grid-columns, 1), 1fr);
}',
    },
  } %}
    {% block result %}
      <div class="grid gap-normal" style="--grid-columns: 3">
        <div class="fake-item">1</div>
        <div class="fake-item">2</div>
        <div class="fake-item">3</div>
      </div>
    {% endblock %}
  {% endembed %}
twig-->

#### Responsive grid

You can create a responsive grid by setting `--grid-columns` to `auto-fit` or `auto-fill`. This will generate an automatic amount of evenly-sized columns, with one row by default. You can set the `--grid-column-min-width` property to specify the minimum width a column is allowed to reach before a new row is created, reducing the amount of columns but increasing their width.

<!--twig
  {% embed "@tch/includes/example-box/example-box.html.twig" with {
    show_first: true,
    examples: {
      "HTML": '<div class="grid" style="--grid-columns: auto-fit; --grid-column-min-width: 217px">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>',
      "CSS": '.grid {
  display: grid;
  grid-template-columns: repeat(var(--grid-columns, 1), minmax(var(--grid-column-min-width, 0px), 1fr));
}',
    },
  } %}
    {% block result %}
      <div class="grid gap-normal" style="--grid-columns: auto-fit; --grid-column-min-width: 217px">
        <div class="fake-item">1</div>
        <div class="fake-item">2</div>
        <div class="fake-item">3</div>
        <div class="fake-item">4</div>
      </div>
    {% endblock %}
  {% endembed %}
twig-->

#### Custom grid

To create unevenly-sized cells, you can set the `grid-template-columns` property directly, along with `grid-template-rows` and `grid-template-areas` if needed.

Beware that, when using this, the resulting grid applies to all breakpoints. To create a fully custom grid that changes at certain breakpoints, you will need to use a stylesheet.

The below example demonstrates the traditional "Holy Grail" layout in grid.

<!--twig
  {% embed "@tch/includes/example-box/example-box.html.twig" with {
    show_first: true,
    examples: {
      "HTML": '<div class="grid" style="
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 70px auto 70px;
  grid-template-areas:
    \'header header\'
    \'sidebar main\'
    \'footer footer\';
">
  <header style="grid-area: header">Header (4/4)</header>
  <aside style="grid-area: sidebar">Sidebar (1/4)</aside>
  <main style="grid-area: main">Main area (3/4)</main>
  <footer style="grid-area: footer">Footer (4/4)</footer>
</div>',
      "CSS": '.grid {
  display: grid;
}',
    },
  } %}
    {% block result %}
      <div class="grid gap-normal" style="grid-template-columns: 1fr 3fr; grid-template-rows: 70px minmax(200px, auto) 70px; grid-template-areas: 'header header' 'sidebar main' 'footer footer'">
        <div class="fake-item" style="grid-area: header">Header (4/4)</div>
        <div class="fake-item" style="grid-area: sidebar">Sidebar (1/4)</div>
        <div class="fake-item" style="grid-area: main">Main area (3/4)</div>
        <div class="fake-item" style="grid-area: footer">Footer (4/4)</div>
      </div>
    {% endblock %}
  {% endembed %}
twig-->

<!--twig
  {{ include("@tch/components/message/message.html.twig", {
    content: "<strong>Tip:</strong> Note the differences between this and the flexbox example. With grid, an extra <code>div</code> wrapper is not needed around the <code>aside</code> and <code>main</code> tags. While grid may seem more complicated than flexbox for this small, contrived example, as a layout grows in complexity, grid works better for this reason. Especially as responsive considerations are introduced; grids can be changed from the parent selector by redefining the relevant properties at each breakpoint. With flexbox, the classes on all child elements would need to be changed or overridden at each breakpoint.",
  }) }}
twig-->

### General

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