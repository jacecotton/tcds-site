<!--lead
  Good typography helps communicate ideas clearly and effectively. The Design System provides styles to establish and enforce visual hierarchy, consistency, and rhythm.
lead-->

## Typeface

[Inter](https://fonts.google.com/specimen/Inter) is the default and used for copy and UI. [Metropolis](https://github.com/dw5/Metropolis) is used for headings and display text.

### Font stack

The Design System provides a set of font stacks based on the purpose of the text. While in practice some font stacks are the same as others, referring to them separately in the codebase provides for future-proof scalability.

<table>
  <thead>
    <tr>
      <th>Token</th>
      <th>Font stack</th>
      <th>Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>default</code></td>
      <td><code>Inter, system-ui, sans-serif</code></td>
      <td>General purpose</td>
    </tr>
    <tr>
      <td><code>copy</code></td>
      <td><code>Inter, system-ui, sans-serif</code></td>
      <td>Body copy (paragraphs, captions, tables, etc.)</td>
    </tr>
    <tr>
      <td><code>ui</code></td>
      <td><code>Inter, system-ui, sans-serif</code></td>
      <td>Interface elements (buttons, tabs, form labels, etc.)</td>
    </tr>
    <tr>
      <td><code>headings</code></td>
      <td><code>Metropolis, sans-serif</code></td>
      <td>Heading elements (H1–H6)</td>
    </tr>
    <tr>
      <td><code>display</code></td>
      <td><code>Metropolis, sans-serif</code></td>
      <td>Display text (slogans, taglines, etc.)</td>
    </tr>
  </tbody>
</table>

In the codebase, all `font-family` declarations should reference a font stack by its token using the `font-stack()` custom Sass function.

<details>
  <summary>Example</summary>
  <div>

```css
h1, h2, h3, h4, h5, h6 {
  font-family: font-stack("headings");
}
```
  </div>
</details>

These font stacks are overridable by setting `$theme-font-(token)` configuration variables when importing the Design System into a project.

<details>
  <summary>Example</summary>
  <div>
  
```css
@forward "@tcds" with (
  $theme-font-headings: serif,
  ...
);
```
  </div>
</details>

## Type scale

The Design System provides tokens for setting type sizes. For accessibility reasons, type is set in `rem` (see [WCAG 2.0 Success Criterion 1.4.4](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)), but the equivalent `px` sizes are shown below for reference.

<table class="type-scale-table" data-in-viewport="false">
  <thead>
    <tr>
      <th aria-hidden="true">&nbsp;</th>
      <th>Token</th>
      <th colspan="2">Size</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td aria-hidden="true" class="text-x-small"><span>The quick brown fox jumps over the lazy dog</span></td>
      <td><code>x-small</code></td>
      <td>0.75rem</td>
      <td>12px</td>
    </tr>
    <tr>
      <td aria-hidden="true" class="text-small"><span>The quick brown fox jumps over the lazy dog</span></td>
      <td><code>small</code></td>
      <td>0.875rem</td>
      <td>14px</td>
    </tr>
    <tr>
      <td aria-hidden="true" class="text-medium"><span>The quick brown fox jumps over the lazy dog</span></td>
      <td><code>medium</code></td>
      <td>1rem</td>
      <td>16px</td>
    </tr>
    <tr>
      <td aria-hidden="true" class="text-medium-plus"><span>The quick brown fox jumps over the lazy dog</span></td>
      <td><code>medium-plus</code></td>
      <td>1.25rem</td>
      <td>20px</td>
    </tr>
    <tr>
      <td aria-hidden="true" class="text-large"><span>The quick brown fox jumps over the lazy dog</span></td>
      <td><code>large</code></td>
      <td>1.5rem</td>
      <td>24px</td>
    </tr>
    <tr>
      <td aria-hidden="true" class="text-x-large"><span>The quick brown fox jumps over the lazy dog</span></td>
      <td><code>x-large</code></td>
      <td>2rem</td>
      <td>32px</td>
    </tr>
    <tr>
      <td aria-hidden="true" class="text-xx-large"><span>The quick brown fox jumps over the lazy dog</span></td>
      <td><code>xx-large</code></td>
      <td>2.5rem</td>
      <td>40px</td>
    </tr>
  </tbody>
</table>

These can be used with the `font-size()` custom Sass function, or utility classes in the format of `.text-(token)`.

<details>
  <summary>Example</summary>
  <div>

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" with {
  show_first: true,
  examples: {
    "HTML": '<p class="text-x-large">This is extra large text.</p>
<p class="text-medium">This is normal text.</p>
<p class="text-x-small">And this is extra small text.</p>',
    "CSS": '.text-x-small {
  font-size: font-size("x-small");
}

...
.text-medium {
  font-size: font-size("medium");
}

...
.text-x-large {
  font-size: font-size("x-large");
}',
  },
} %}
  {% block result %}
    <p class="text-x-large">This is extra large text.</p>
    <p class="text-medium">This is normal text.</p>
    <p class="text-x-small">And this is extra small text.</p>
  {% endblock %}
{% endembed %}
twig-->
  </div>
</details>

### Headings

Heading styles use the above type scale, with a combination of weight, letter spacing, and line height (click to see details). The Design System also provides utility classes for each heading style, in order to replicate the design without the semantic meaning.

<div data-component="Accordion" class="typography-accordion">
  <section>
    <button data-component-part="panel-toggle" id="heading-1-button" aria-controls="heading-1-panel" class="h1">Heading 1</button>
    <div data-component-part="panel" id="heading-1-panel" aria-labelledby="heading-1-button" class="typography-accordion__panel">
      <table>
        <tr>
          <th>Size</th>
          <th>Weight</th>
          <th>Letter spacing</th>
          <th>Line height</th>
          <th>Utility class</th>
        </tr>
        <tr>
          <td><code>xx-large</code></td>
          <td><code>700</code></td>
          <td><code>-.025em</code></td>
          <td><code>1.25</code></td>
          <td><code>.h1</code></td>
        </tr>
      </table>
    </div>
  </section>

  <section>
    <button data-component-part="panel-toggle" id="heading-2-button" aria-controls="heading-2-panel" class="h2">Heading 2</button>
    <div data-component-part="panel" id="heading-2-panel" aria-labelledby="heading-2-button" class="typography-accordion__panel">
      <table>
        <tr>
          <th>Size</th>
          <th>Weight</th>
          <th>Letter spacing</th>
          <th>Line height</th>
          <th>Utility class</th>
        </tr>
        <tr>
          <td><code>x-large</code></td>
          <td><code>700</code></td>
          <td><code>-.0125em</code></td>
          <td><code>1.25</code></td>
          <td><code>.h2</code></td>
        </tr>
      </table>
    </div>
  </section>

  <section>
    <button data-component-part="panel-toggle" id="heading-3-button" aria-controls="heading-3-panel" class="h3">Heading 3</button>
    <div data-component-part="panel" id="heading-3-panel" aria-labelledby="heading-3-button" class="typography-accordion__panel">
      <table>
        <tr>
          <th>Size</th>
          <th>Weight</th>
          <th>Letter spacing</th>
          <th>Line height</th>
          <th>Utility class</th>
        </tr>
        <tr>
          <td><code>large</code></td>
          <td><code>400</code></td>
          <td><code>0</code></td>
          <td><code>1.25</code></td>
          <td><code>.h3</code></td>
        </tr>
      </table>
    </div>
  </section>

  <section>
    <button data-component-part="panel-toggle" id="heading-4-button" aria-controls="heading-4-panel" class="h4">Heading 4</button>
    <div data-component-part="panel" id="heading-4-panel" aria-labelledby="heading-4-button" class="typography-accordion__panel">
      <table>
        <tr>
          <th>Size</th>
          <th>Weight</th>
          <th>Letter spacing</th>
          <th>Line height</th>
          <th>Utility class</th>
        </tr>
        <tr>
          <td><code>medium-plus</code></td>
          <td><code>400</code></td>
          <td><code>0</code></td>
          <td><code>1.6</code></td>
          <td><code>.h4</code></td>
        </tr>
      </table>
    </div>
  </section>

  <section>
    <button data-component-part="panel-toggle" id="heading-5-button" aria-controls="heading-5-panel" class="h5">Heading 5</button>
    <div data-component-part="panel" id="heading-5-panel" aria-labelledby="heading-5-button" class="typography-accordion__panel">
      <table>
        <tr>
          <th>Size</th>
          <th>Weight</th>
          <th>Letter spacing</th>
          <th>Line height</th>
          <th>Utility class</th>
        </tr>
        <tr>
          <td><code>medium</code></td>
          <td><code>700</code></td>
          <td><code>0</code></td>
          <td><code>1.6</code></td>
          <td><code>.h5</code></td>
        </tr>
      </table>
    </div>
  </section>

  <section>
    <button data-component-part="panel-toggle" id="heading-6-button" aria-controls="heading-6-panel" class="h6">Heading 6</button>
    <div data-component-part="panel" id="heading-6-panel" aria-labelledby="heading-6-button" class="typography-accordion__panel">
      <table>
        <tr>
          <th>Size</th>
          <th>Weight</th>
          <th>Letter spacing</th>
          <th>Line height</th>
          <th>Utility class</th>
        </tr>
        <tr>
          <td><code>small</code></td>
          <td><code>700</code></td>
          <td><code>0</code></td>
          <td><code>1.6</code></td>
          <td><code>.h6</code></td>
        </tr>
      </table>
    </div>
  </section>
</div>