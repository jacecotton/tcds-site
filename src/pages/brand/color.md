---
category: Brand
title: Color
description: Color is used to establish brand identity and create pleasing designs. It can also be used to convey meaning and tone, as well as influence focus and emotion. Used inconsistently or improperly, color can negatively impact user experience or brand integrity.
---

## Palette
Texas Children's Design System provides a standardized, brand-compliant color palette. It uses a semantic naming system to help in the selection of colors that are thematically consistent and contextually meaningful.

<!--twig
{% set colors = {
  "Primary": [
    {
      token: "red",
      hex: "#DA2530",
      cmyk: "C0 M100 Y95 K3",
    },
    {
      token: "red-2",
      hex: "#CC111C",
      cmyk: "C0 M90 Y85 K20",
    },
    {
      token: "red-3",
      hex: "#B70F19",
      cmyk: "C0 M92 Y86 K28",
    },
    {
      token: "pink",
      hex: "#FFF7F7",
      cmyk: "C2 M4 Y3 K0",
    },
    {
      token: "pink-2",
      hex: "#F2E6E6",
      cmyk: "C4 M8 Y5 K0",
    },
  ],
  "Secondary": [
    {
      token: "navy",
      hex: "#122840",
      cmyk: "C100 M40 Y0 K82",
    },
    {
      token: "baby-blue",
      hex: "#F5FAFF",
      cmyk: "C7 M2 Y1 K0",
    },
    {
      token: "baby-blue-2",
      hex: "#DDE7Ef",
      cmyk: "C11 M3 Y1 K1",
    },
  ],
  "Tertiary": [
    {
      token: "gray",
      hex: "#EAEAEA",
      cmyk: "C0 M0 Y0 K8",
    },
    {
      token: "gray-2",
      hex: "#A8A8A8",
      cmyk: "C0 M0 Y0 K34",
    },
    {
      token: "gray-3",
      hex: "#555555",
      cmyk: "C0 M0 Y0 K66",
    },
    {
      token: "gray-4",
      hex: "#1A1A1A",
      cmyk: "C0 M0 Y0 K90",
    },
  ]
} %}

{% for category, palette in colors %}
  <h3>{{ category }}</h3>

  <dl class="color-palette dl--semantic font-variant-tabular-nums">
    {% for color in palette %}
      <div class="color-palette__item">
        <div class="color-palette__swatch" style="background: var(--tcds-color-{{ color.token }})"></div>
        <dt><code>{{ color.token }}</code></dt>
        <dd>
          <b>{{ color.hex }}</b>
          <span>{{ color.cmyk }}</span>
        </dd>
      </div>
    {% endfor %}
  </dl>
{% endfor %}
twig-->