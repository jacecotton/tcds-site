---
category: Brand
title: Color
description: Color is used to establish brand identity and create pleasing designs. It can also be used to convey meaning and tone, as well as influence focus and emotion. Used inconsistently or improperly, color can negatively impact user experience or brand integrity.
---

<tcds-icon icon="error" style="--tcds-icon-size: 5rem; color: var(--tcds-color-red)"></tcds-icon>

## Under construction
Please check back later.

## Palette
Texas Children's Design System provides a standardized, brand-compliant color palette. It uses a semantic naming system to help in the selection of colors that are thematically consistent and contextually meaningful.

<!--twig
{% set colors = {
  primary: [
    {
      token: "Red",
      hex: "#DA2530",
      cmyk: "C0 M100 Y95 K3",
    },
    {
      token: "Red 2",
      hex: "#CC111C",
      cmyk: "C0 M90 Y85 K20",
    },
    {
      token: "Red 3",
      hex: "#B70F19",
      cmyk: "C0 M92 Y86 K28",
    },
    {
      token: "Pink",
      hex: "#FFF7F7",
      cmyk: "C2 M4 Y3 K0",
    },
    {
      token: "Pink 2",
      hex: "#F2E6E6",
      cmyk: "C4 M8 Y5 K0",
    },
  ],
  secondary: [
    {
      token: "Navy",
      hex: "#122840",
      cmyk: "C100 M40 Y0 K82",
    },
    {
      token: "Baby blue",
      hex: "#F5FAFF",
      cmyk: "C7 M2 Y1 K0",
    },
    {
      token: "Baby blue 2",
      hex: "#DDE7Ef",
      cmyk: "C11 M3 Y1 K1",
    },
  ],
  tertiary: [
    {
      token: "Gray",
      hex: "#EAEAEA",
      cmyk: "C0 M0 Y0 K8",
    },
    {
      token: "Gray 2",
      hex: "#A8A8A8",
      cmyk: "C0 M0 Y0 K34",
    },
    {
      token: "Gray 3",
      hex: "#555555",
      cmyk: "C0 M0 Y0 K66",
    },
    {
      token: "Gray 4",
      hex: "#1A1A1A",
      cmyk: "C0 M0 Y0 K90",
    },
  ]
} %}
twig-->

### Primary palette
Our primary brand color is red, and in certain circumstances we utilize supporting shades (red 2 and 3) and tints (pink and pink 2).

<!--twig
<dl class="color-palette dl--semantic font-variant-tabular-nums">
  {% for color in colors.primary %}
    <div class="color-palette__item">
      <div class="color-palette__swatch" style="background: var(--tcds-color-{{ color.token|clean_id }})"></div>
      <dt>{{ color.token }}</dt>
      <dd>
        <b>{{ color.hex }}</b>
        <span>{{ color.cmyk }}</span>
      </dd>
    </div>
  {% endfor %}
</dl>
twig-->

**Use red for brand identity, icons, and accents.** For example, red is appropriate for logos, accent borders, buttons, and hyperlinks.

**Exercise restraint in your use of red.** Red is our primary brand color—it is used in our logo, and displayed prominently in many of our print and digital materials. Protect brand integrity by only using it to reinforce brand identity, *not* for generic or frivolous purposes.

**Do not use red as a background of a large section or multiple lines of text.** Red is a stark and striking color, which can visually overwhelm an experience if overused. Use pink for these purposes instead, which communicates the same identity.

**Do not use red text on the same line as differently colored text.** Text lockups can utilize different colors, but ensure red text is used on its own line. Hyperlinks in body content is an exception.

**Red 2 and 3 are strictly for state changes.** For example, red 2 is used when a [Button](/components/interface/button) is hovered over, while red 3 is used when clicked.

**Pink 2 is strictly for dark overlays on pink backgrounds.**