<!--lead
  Color can be used to create pleasing designs, convey meaning and tone, establish brand identity, influence focus and emotion, and more. However, if used inconsistently or improperly, color can negatively impact a user's experience.
lead-->

## Palette

Texas Children's Design System provides a standardized, brand-compliant color palette. It uses a semantic naming system and numbered grading to help in the selection of colors that are thematically **consistent**, contextually **meaningful**, and **accessible** to those with low color perception.

<!--twig
  {% set colors = {
    "red": {
      "0": "#fff6f6",
      "100": "#ffdada",
      "200": "#ff888b",
      "300": "#da2530",
      "400": "#93000f",
      "500": "#410003",
    },
    "blue": {
      "0": "#f5f8ff",
      "100": "#d5e3ff",
      "200": "#71adff",
      "300": "#2d73bc",
      "400": "#004880",
      "500": "#001c37",
    },
    "green": {
      "0": "#e3ffe8",
      "100": "#aff2bd",
      "200": "#4cc16e",
      "300": "#248142",
      "400": "#005322",
      "500": "#002109",
    },
    "yellow": {
      "0": "#fff9d4",
      "100": "#fbe090",
      "200": "#c9a900",
      "300": "#886f24",
      "400": "#504400",
      "500": "#211b00",
    },
    "gray": {
      "0": "#f8f8f9",
      "100": "#e2e2e7",
      "200": "#aaaab3",
      "300": "#707079",
      "400": "#464652",
      "500": "#1b1b1e",
    },
  } %}
twig-->

<div class="color-chart">
  <!--twig
    {% for color, grades in colors %}
      <div class="row color">
        <div class="color-name">{{ color }}</div>
        <div class="row gap-normal flex-1">
          {% for grade, value in grades %}
            <div class="color-data">
              <div class="color-swatch" style="background: {{ value }}"></div>
              <div class="color-grade">{{ grade }}</div>
              <div class="color-value">{{ value }}</div>
            </div>
          {% endfor %}
        </div>
      </div>
    {% endfor %}
  twig-->
</div>

## Grading system

The grading system organizes each color by lightness ([perceptual luminance](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_Colors_and_Luminance "Web Accessibility: Understanding Colors and Luminance — MDN")), providing a range from 0 to 500 at increments of 100. This is to provide a broad selection of color options, but most importantly to help with choosing color combinations that are accessible, passing [WCAG color contrast guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html "Understanding Success Criterion 1.4.3: Contrast (Minimum) — W3.org").

If the difference between the grade of any two colors is **300 or greater**, it has a minimum 4.5 contrast ratio (Level AA compliance for [medium text](/design/typography#type-scale "Typography &sect; Type scale — Texas Children's Design System")). For example, red-0 and red-300 are accessible together, or even red-100 and blue-400.

<details>
  <summary>Find out how</summary>
  <div>

This is achieved by using a color space designed for **perceptual uniformity**. Traditionally with HSL, two hues of the same value are not necessarily perceptually equiluminant (similarly light). For instance, red at 50% lightness is darker to the human eye than yellow at 50%. This makes comparing and coupling colors impossible with respect to visual contrast.

In a color space designed for perceptual uniformity, like [CIELUV](https://en.wikipedia.org/wiki/CIELUV), luminance can be specified irrespective of hue. This makes calculating the contrast ratio between two colors reliable and predictable across color families. The [HSLuv](https://www.hsluv.org/) tool was used to generate the above grades in the CIELUV color space but in an HSL-like format. For further reading, see [Color Spaces for Human Beings](https://www.boronine.com/2012/03/26/Color-Spaces-for-Human-Beings/).
  </div>
</details>

Each grade increments in lightness roughly between 10%–20%. Exact percentages were decided based on need and conformance to existing brand colors. They do not necessarily correspond to the differences between grade numbers, allowing for a margin of adjustment.

<table>
  <thead>
    <tr>
      <th aria-hidden="true" style="width: 1rem">&nbsp;</th>
      <th style="width: 8ch">Grade</th>
      <th>Lightness</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td aria-hidden="true"><div class="color-swatch color-swatch--small" style="background: var(--color-gray-0)"></div></td>
      <td>0</td>
      <td>97.5%</td>
    </tr>
    <tr>
      <td aria-hidden="true"><div class="color-swatch color-swatch--small" style="background: var(--color-gray-100)"></div></td>
      <td>100</td>
      <td>90%</td>
    </tr>
    <tr>
      <td aria-hidden="true"><div class="color-swatch color-swatch--small" style="background: var(--color-gray-200)"></div></td>
      <td>200</td>
      <td>70%</td>
    </tr>
    <tr>
      <td aria-hidden="true"><div class="color-swatch color-swatch--small" style="background: var(--color-gray-300)"></div></td>
      <td>300</td>
      <td>47.6%</td>
    </tr>
    <tr>
      <td aria-hidden="true"><div class="color-swatch color-swatch--small" style="background: var(--color-gray-400)"></div></td>
      <td>400</td>
      <td>30%</td>
    </tr>
    <tr>
      <td aria-hidden="true"><div class="color-swatch color-swatch--small" style="background: var(--color-gray-500)"></div></td>
      <td>500</td>
      <td>10%</td>
    </tr>
  </tbody>
</table>

## Usage
### By color name
Colors can be accessed by their normal name (e.g. `red`) via the `color()` custom Sass function. The function accepts two parameters, one for the color token, and an optional second for the color grade (defaults to `300`).

<details>
  <summary>Example</summary>
  <div>

  Input (SCSS):
  ```css
  @use "../../" as *;

  p {
    background-color: color("red");
    color: color("red", "0");

    a {
      color: color("blue", "0");
    }
  }
  ```

  Output (CSS):
  ```css
  p {
    background-color: #da2530;
    color: #fff6f6;
  }

  p a {
    color: #f5f8ff;
  }
  ```
  </div>
</details>

### By theme alias

Colors can be accessed by their theme aliases via the `theme-color()` Sass custom function.

The `theme-color()` function works identically to the `color()` function, except it requires colors be referred to by their theme alias, e.g. `primary`, rather than their hue, e.g. `red`.

<details>
  <summary>Example</summary>
  <div>

  Input (SCSS):
  ```css
  @use "../../" as *;

  p {
    background-color: theme-color("primary");
    color: theme-color("primary", "0");

    a {
      color: theme-color("link", "0");
    }
  }
  ```

  Output (CSS):
  ```css
  p {
    background-color: #da2530;
    color: #fff6f6;
  }

  p a {
    color: #f5f8ff;
  }
  ```
  </div>
</details>

Utility classes for setting background colors are also provided, in the format `.bg-(alias)-(grade)`.

<details>
  <summary>Example</summary>
  <div>

<!--twig
{% embed "@tch/includes/example.html.twig" with {
  examples: {
    "HTML": '<p class="bg-secondary-100">This is background color is the secondary theme color at grade 100.</div>',
    "CSS": '.bg-secondary-100 {
  background-color: theme-color("secondary", "100");
  color: theme-color("secondary", "400");
}
...',
  },
} %}
  {% block result %}
    <p class="bg-secondary-100" style="padding: 8px 16px">This is background color is the secondary theme color at grade 100.</p>
  {% endblock %}
{% endembed %}
twig-->
Note that the text color is automatically set for each <code>.bg-</code> utility.
  </div>
</details>

The below table shows the color each theme alias token is set to by default. However, there are also configuration variables that can be used to change the color theme when importing the Design System.

<table>
  <thead>
    <tr>
      <th aria-hidden="true" style="width: 1rem">&nbsp;</th>
      <th style="width: 15ch">Theme alias</th>
      <th style="width: 13ch">Default value</th>
      <th>Configuration variable</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><div class="color-swatch color-swatch--small bg-primary"></div></td>
      <td><code>primary</code></td>
      <td><code>red</code></td>
      <td><code>$theme-color-primary</code></td>
    </tr>
    <tr>
      <td><div class="color-swatch color-swatch--small bg-secondary"></div></td>
      <td><code>secondary</code></td>
      <td><code>blue</code></td>
      <td><code>$theme-color-secondary</code></td>
    </tr>
    <tr>
      <td><div class="color-swatch color-swatch--small bg-tertiary"></div></td>
      <td><code>tertiary</code></td>
      <td><code>gray</code></td>
      <td><code>$theme-color-tertiary</code></td>
    </tr>
    <tr>
      <td><div class="color-swatch color-swatch--small bg-link"></div></td>
      <td><code>link</code></td>
      <td><code>blue</code></td>
      <td><code>$theme-color-link</code></td>
    </tr>
  </tbody>
</table>

### By interface alias

Colors can be accessed by their interface role (e.g. `attention`) via the `interface-color()` custom Sass function.

<details>
  <summary>Example</summary>
  <div>

  Input (SCSS):
  ```css
  @use "../../" as *;

  p {
    background-color: interface-color("positive");
    color: interface-color("positive", "0");
  }
  ```

  Output (CSS):
  ```css
  p {
    background-color: #248142;
    color: #e3ffe8;
  }
  ```
  </div>
</details>

The below table shows the color each interface alias token is set to.

<table>
  <thead>
    <tr>
      <th aria-hidden="true" style="width: 1rem">&nbsp;</th>
      <th style="width: 15ch">Interface alias</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><div class="color-swatch color-swatch--small" style="background: var(--color-green-300)"></div></td>
      <td><code>positive</code></td>
      <td><code>green</code></td>
    </tr>
    <tr>
      <td><div class="color-swatch color-swatch--small" style="background: var(--color-red-300)"></div></td>
      <td><code>negative</code></td>
      <td><code>red</code></td>
    </tr>
    <tr>
      <td><div class="color-swatch color-swatch--small" style="background: var(--color-yellow-300)"></div></td>
      <td><code>attention</code></td>
      <td><code>yellow</code></td>
    </tr>
    <tr>
      <td><div class="color-swatch color-swatch--small" style="background: var(--color-blue-300)"></div></td>
      <td><code>notice</code></td>
      <td><code>blue</code></td>
    </tr>
    <tr>
      <td><div class="color-swatch color-swatch--small" style="background: var(--color-gray-300)"></div></td>
      <td><code>neutral</code></td>
      <td><code>gray</code></td>
    </tr>
  </tbody>
</table>