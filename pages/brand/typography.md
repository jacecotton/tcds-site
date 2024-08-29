---
title: Typography
category: Brand
description: Good typography communicates ideas clearly and reinforces our brand. To these ends, the Design System provides styles that establish clear visual hierarchy, consistency, and rhythm, while reflecting brand identity and tone.
---

<style>
  .typeface-demo {
    position: relative;
    z-index: 1;
    padding: 3rem;
    border-radius: var(--tcds-border-radius-l);
  }

  .typeface-demo span:nth-of-type(1) {
    display: block;
    color: var(--tcds-color-navy);
  }

  .typeface-demo span:nth-of-type(2) {
    color: var(--tcds-color-red);
    position: relative;
  }

  .typeface-demo span small {
    position: absolute;
    top: 1.75rem;
  }
</style>

<div class="typeface-demo bg-secondary bg-logo line-height-xs">
  <span class="font-subheadings font-size-xl font-weight-semibold">The difference is</span>
  <span class="font-display font-size-3xl font-weight-semibold">
    life changing <small class="font-size-m">&trade;</small>
  </span>
  <p class="font-copy font-size-m">At <b>Texas Children's Hospital</b>, we're proud to be recognized as one of the nation's best children's hospitals.</p>
  <p class="font-ui font-size-xs font-weight-semibold">Button or small text</p>
</div>

The above demonstrates an effective visual hierarchy through the combination of [type size](#type-scale) and [weight](#typefaces), as well as brand identity and tone through [typeface](#typefaces) and [color](#type-color).

## Typefaces
Texas Children's typefaces include the serif [Calluna](https://fonts.adobe.com/fonts/calluna) and the sans-serif [Mont](https://www.fontfabric.com/fonts/mont/).

<style>
  .typeface-box {
    padding: 4rem 3rem;
    margin-bottom: 1.5rem;
    display: grid;
    align-items: center;
  }

  @media (min-width: 720px) {
    .typeface-box {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .typeface-box p {
    margin: 0;
  }

  .typeface-box p span {
    display: block;
  }

  .typeface-box p small:first-of-type {
    margin-right: 1ch;
  }

  .typeface-box ul {
    letter-spacing: .3px;
    margin: 2rem 0 0 2rem;
  }

  @media (min-width: 720px) {
    .typeface-box ul {
      margin: 0;
    }
  }

  .typeface-box ::marker {
    color: var(--tcds-color-primary);
    font-size: 1.5rem;
    line-height: 0;
  }

  @media (min-width: 720px) {
    .typeface-box li {
      padding-left: 1rem;
    }
  }
</style>

<div class="typeface-box bg-secondary">
  <p class="font-serif line-height-s">
    <span class="font-size-3xl">Calluna</span>
    <small class="font-weight-semibold font-size-m">Calluna Semibold</small>
    <small class="font-weight-bold font-size-m">Calluna Bold</small>
  </p>
  <ul class="font-ui font-weight-semibold font-size-s">
    <li>Display text (slogans, taglines)</li>
    <li>Heading elements (H1 and H2)</li>
    <li>Body copy (paragraphs, lists)</li>
  </ul>
</div>

<div class="typeface-box bg-secondary">
  <p class="font-sans-serif line-height-s">
    <span class="font-size-3xl">Mont</span>
    <small class="font-weight-semibold font-size-m">Mont Semibold</small>
    <small class="font-weight-bold font-size-m">Mont Bold</small>
  </p>
  <ul class="font-ui font-weight-semibold font-size-s">
    <li>Complementary lockup text</li>
    <li>Subheadings (H3 through H6) and captions</li>
    <li>Interface elements (buttons, tables, labels)</li>
  </ul>
</div>

**Calluna and Mont are meant to be complementary.** Use them together to create striking lockups and introduce variety.

**Place visual weight on Calluna over Mont.** Calluna is our primary typeface, while Mont is secondary. Maintain a sufficient difference in font sizes between the two to avoid overcrowding and competition in the visual hierarchy.

**Stick to semibold fonts (600) at large text sizes.** Regular fonts (400) should be reserved for copy and small text, while bold fonts (700) should be reserved for emphasis. Semibold can also be used for very small text to boost readability.

See the [font family API](#font-families) for available CSS and HTML utilities.

## Type scale
Texas Children's Design System uses a base-16 pixel font size on the web, with a type scale based on the following ratios.

<style>
  .typescale-box {
    padding: 1rem 0 2rem 2rem;
  }

  .typescale-table {
    width: 100%;
  }

  .typescale-table td {
    vertical-align: bottom;
    line-height: 1;
  }

  .typescale-table td:nth-child(1) {
    font-family: var(--tcds-font-monospace);
    font-size: var(--tcds-font-size-xs);
    text-align: right;
    padding: 0 1rem 8px 0;
    width: 0%;
  }

  .typescale-table td:nth-child(2) {
    padding-block: 1.5rem .5rem;
    border-bottom: 1px solid var(--tcds-color-baby-blue-2);
    position: relative;

    &::before {
      content: "&nbsp;";
      visibility: hidden;
    }

    span {
      position: absolute;
      left: 0;
      right: 0;
      white-space: nowrap;
      overflow: hidden;
      /* text-overflow: ellipsis; */

      &::after {
        content: "";
        position: absolute;
        width: 100px;
        height: 100%;
        right: 0;
        top: 0;
        background-image: linear-gradient(90deg, rgb(0 0 0 / 0%), var(--tcds-color-background) 85%);
      }
    }
  }

  .typescale-table td:nth-child(3) {
    font-family: var(--tcds-font-monospace);
    font-size: var(--tcds-font-size-xs);
    padding-inline: 1rem;
    width: 0%;
    text-transform: uppercase;
  }
</style>

<!--twig
{% set typescale = {
  "4xl": 6,
  "3xl": 4,
  "2xl": 3,
  "xl": 2,
  "l": 1.5,
  "ml": 1.125,
  "m": 1,
  "s": 0.875,
  "xs": 0.8125,
} %}

<tcds-tabs>
  <tcds-tab label="Calluna">
    <div class="typescale-box bg-secondary">
      <table class="typescale-table">
        <tr>
          <th class="visually-hidden">Size in points</th>
          <th class="visually-hidden">Visual example</th>
          <th class="visually-hidden">Size token</th>
        </tr>
        {% for size, value in typescale %}
          <tr>
            <td>{{ value }}:1</td>
            <td class="font-size-{{ size }}"><span>The difference is life changing and it starts with you.</span></td>
            <td>{{ size }}</td>
          </tr>
        {% endfor %}
      </table>
    </div>
  </tcds-tab>
  <tcds-tab label="Mont">
    <div class="typescale-box bg-secondary">
      <table class="typescale-table font-sans-serif">
        <tr>
          <th class="visually-hidden">Size in points</th>
          <th class="visually-hidden">Visual example</th>
          <th class="visually-hidden">Size token</th>
        </tr>
        {% for size, value in typescale %}
          <tr>
            <td>{{ value }}:1</td>
            <td class="font-size-{{ size }}"><span>The difference is life changing and it starts with you.</span></td>
            <td>{{ size }}</td>
          </tr>
        {% endfor %}
      </table>
    </div>
  </tcds-tab>
</tcds-tabs>
twig-->

**Extra large 4 (4XL) and 3XL are considered reserved and use cases should be reported.** Generally, these sizes are far too large for the web. In rare and highly specific instances, they're used for promotional displays like in splash pages and certain [Hero](/components/hero) variants.

**2XL and XL should be reserved for section headings.** Heading elements (H1 and H2) help organize content and structure a page layout, so subordinate elements, like components, should not have text that competes with them (see [&sect; Heading elements](#heading-elements)). With rare exception, stick to large (L) and smaller when designing components and templates.

**Medium-large (ML) should be reserved for article ledes.** A lede is an introduction to the rest of the article's copy, and thus only has a slight bump from medium (M) text (hence "medium-large" instead of "<i>n</i>th-large"). Before using it, see if M or L fits your use case, as there's clearer differentiation between those and other sizes compared to ML.

See the [font size API](#font-sizes) for available CSS and HTML utilities.

## Type color
In most cases, type color is handled automatically by the containing element, but you can further adjust it with [color utilities](/brand/color).

<style>
.color-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  font-family: var(--tcds-font-ui);
  font-size: var(--tcds-font-size-xs);
  margin: 2rem 0;
}

.color-item {
  padding: 2rem;
  border-radius: var(--tcds-border-radius-m);
}
</style>

<!--twig
{% set schemes = [
  {
    text: "Navy",
    background: "default",
    link: "red",
    theme: "light",
    scheme: "default",
  },
  {
    text: "Navy",
    background: "pink",
    link: "red",
    theme: "light",
    scheme: "primary",
  },
  {
    text: "Navy",
    background: "baby-blue",
    link: "red",
    theme: "light",
    scheme: "secondary",
  },
  {
    text: "White",
    background: "navy",
    link: "baby-blue",
    theme: "dark",
    scheme: "secondary",
  },
] %}

<div class="color-grid">
  {% for scheme in schemes %}
    <div class="color-item bg-{{ scheme.scheme }}" data-theme="{{ scheme.theme }}">
      {{ scheme.text }} text on a {{ scheme.background }} background with a <a href="#">{{ scheme.link }} link</a>.
    </div>
  {% endfor %}
</div>
twig-->

**Do not arbitrarily change type color.** Type color is already carefully considered and implemented in the Design System's global stylesheet and for each of its components and utilities. Do not use color merely for emphasis or adjusting placement in the visual hierarchy.

**Type color is not decorative.** Color plays an important role in conveying meaning and carries specific connotations within our brand. Red is reserved for display headlines and taglines, and should not be used for routine section headings or anywhere in standard body copy (except for links).

**Stick to navy for body copy, and red for primary headlines and links.** Alternatively, if using navy as a background color, use white for text and baby blue links.

## API
Prefixes and tokens are combined to create HTML utilities (example: <code>class="font-serif"</code>) or CSS variables (example: <code>var(--tcds-font-size-2xl)</code>).

### Font families
Each token may have semantic, role-based aliases which should be used **instead** of their base token if applicable (example: <code>class="font-headings"</code>).

<table class="doc-table doc-table--typography">
  <thead>
    <tr>
      <th colspan="2">Prefix</th>
      <th rowspan="2">Token</th>
      <th rowspan="2">Aliases</th>
      <th rowspan="2">Font stack</th>
    </tr>
    <tr>
      <th style="white-space: nowrap">Class name</th>
      <th style="white-space: nowrap">Custom property</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="7" style="white-space: nowrap"><code>.font-</code></td>
      <td rowspan="7" style="white-space: nowrap"><code>--tcds-font-</code></td>
      <td rowspan="3"><code>serif</code></td>
      <td><code>display</code></td>
      <td rowspan="3">
        <pre>calluna, serif</pre>
      </td>
    </tr>
    <tr>
      <td><code>headings</code></td>
    </tr>
    <tr>
      <td><code>copy</code></td>
    </tr>
    <tr>
      <td rowspan="2" style="white-space: nowrap"><code>sans-serif</code></td>
      <td>
        <code>subheadings</code>
      </td>
      <td rowspan="2">
        <pre>mont, helvetica neue, helvetica, system-ui, sans-serif</pre>
      </td>
    </tr>
    <tr>
      <td><code>ui</code></td>
    </tr>
  </tbody>
</table>

### Font weights
<table class="doc-table doc-table--typography">
  <thead>
    <tr>
      <th colspan="2">Prefix</th>
      <th rowspan="2" style="width: 25ch">Token</th>
      <th rowspan="2" style="width: 25ch">Value</th>
    </tr>
    <tr>
      <th style="width: 15ch">Class name</th>
      <th style="width: 15ch">Custom property</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="4" style="white-space: nowrap"><code>.font-weight-</code></td>
      <td rowspan="4" style="white-space: nowrap"><code>--tcds-font-weight-</code></td>
      <td><code>normal</code></td>
      <td><code>400</code></td>
    </tr>
    <tr>
      <td><code>semibold</code></td>
      <td><code>600</code></td>
    </tr>
    <tr>
      <td><code>bold</code></td>
      <td><code>700</code></td>
    </tr>
  </tbody>
</table>

### Font sizes
For accessibility reasons, font sizes are set in `rem`s (see [WCAG 2.2 Technique C14: Using `em` units for font sizes](https://www.w3.org/WAI/WCAG22/Techniques/css/C14)), but the equivalent `pt` sizes are also shown for reference.

<table class="doc-table doc-table--typography">
  <thead>
    <tr>
      <th colspan="2">Prefix</th>
      <th rowspan="2" style="width: 25ch">Token</th>
      <th colspan="2" style="width: 25ch">Value</th>
    </tr>
    <tr>
      <th style="width: 15ch">Class name</th>
      <th style="width: 15ch">Custom property</th>
      <th>Root ems</th>
      <th>Points</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="9" style="white-space: nowrap"><code>.font-size-</code></td>
      <td rowspan="9" style="white-space: nowrap"><code>--tcds-font-size-</code></td>
      <td><code>xs</code></td>
      <td><code>0.8125rem</code></td>
      <td><code>9.75pt</code></td>
    </tr>
    <tr>
      <td><code>s</code></td>
      <td><code>0.8750rem</code></td>
      <td><code>10.50pt</code></td>
    </tr>
    <tr>
      <td><code>m</code></td>
      <td><code>1.0000rem</code></td>
      <td><code>12.00pt</code></td>
    </tr>
    <tr>
      <td><code>ml</code></td>
      <td><code>1.1250rem</code></td>
      <td><code>13.50pt</code></td>
    </tr>
    <tr>
      <td><code>l</code></td>
      <td><code>1.5000rem</code></td>
      <td><code>18.00pt</code></td>
    </tr>
    <tr>
      <td><code>xl</code></td>
      <td><code>2.0000rem</code></td>
      <td><code>24.00pt</code></td>
    </tr>
    <tr>
      <td><code>2xl</code></td>
      <td><code>3.0000rem</code></td>
      <td><code>36.00pt</code></td>
    </tr>
    <tr>
      <td><code>3xl</code></td>
      <td><code>4.0000rem</code></td>
      <td><code>48.00pt</code></td>
    </tr>
    <tr>
      <td><code>4xl</code></td>
      <td><code>6.0000rem</code></td>
      <td><code>72.00pt</code></td>
    </tr>
  </tbody>
</table>

### Line heights
<table class="doc-table doc-table--typography">
  <thead>
    <tr>
      <th colspan="2">Prefix</th>
      <th rowspan="2" style="width: 25ch">Token</th>
      <th rowspan="2" style="width: 25ch">Value</th>
    </tr>
    <tr>
      <th style="width: 15ch">Class name</th>
      <th style="width: 15ch">Custom property</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="6" style="white-space: nowrap"><code>.line-height-</code></td>
      <td rowspan="6" style="white-space: nowrap"><code>--tcds-line-height-</code></td>
      <td><code>xs</code></td>
      <td><code>1.00</code></td>
    </tr>
    <tr>
      <td><code>s</code></td>
      <td><code>1.20</code></td>
    </tr>
    <tr>
      <td><code>m</code></td>
      <td><code>1.75</code></td>
    </tr>
    <tr>
      <td><code>l</code></td>
      <td><code>2.00</code></td>
    </tr>
    <tr>
      <td><code>xl</code></td>
      <td><code>2.50</code></td>
    </tr>
  </tbody>
</table>