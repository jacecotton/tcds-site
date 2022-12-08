<!--lede
  Color can be used to create pleasing designs, convey meaning and tone, establish brand identity, influence focus and emotion, and more. However, if used inconsistently or improperly, color can negatively impact a user's experience.
lede-->

## Palette
Texas Children's Design System provides a standardized, brand-compliant color palette. It uses a semantic naming system to help in the selection of colors that are thematically consistent, contextually meaningful, and accessible to those with low color perception.

<style>
.color-palette {
  font-family: var(--tcds-font-sans-serif);
  margin: 1rem 0 3rem;
}

.color-palette code {
  background: none;
  border: none;
}

.color-palette dt {
  font-weight: normal;
}

.color-palette .hex {
  font-weight: bold;
}

.color-palette .pantone {
  color: var(--tcds-color-gray);
  font-size: var(--tcds-font-size-small);
}

.swatch {
  aspect-ratio: 2 / 1;
  border-radius: 10px;
}

.swatch--white {
  box-shadow: 0 5px 10px -2px rgba(0, 0, 0, .05);
}
</style>

<!--twig
{% set colors = {
  "Primary": [
    {
      token: "red",
      hex: "#DA2530",
      pantone: "485",
    },
    {
      token: "red-light",
      hex: "#F2E6E6",
      pantone: "7604 45%",
    },
    {
      token: "red-x-light",
      hex: "#F8F3F3",
      pantone: "7604 25%",
    },
  ],
  "Secondary": [
    {
      token: "blue-dark",
      hex: "#122840",
      pantone: "2965",
    },
    {
      token: "blue-light",
      hex: "#DDE7Ef",
      pantone: "650 60%",
    },
    {
      token: "blue-x-light",
      hex: "#F0F6FB",
      pantone: "656 50%",
    },
  ],
  "Tertiary": [
    {
      token: "black",
      hex: "#000000",
      pantone: "PROCESS BLACK 100%",
    },
    {
      token: "gray-dark",
      hex: "#252425",
      pantone: "PROCESS BLACK 90%",
    },
    {
      token: "gray",
      hex: "#555555",
      pantone: "COOL GRAY 6",
    },
    {
      token: "gray-light",
      hex: "#E3E3E3",
    },
    {
      token: "gray-x-light",
      hex: "#FAFAFA",
    },
    {
      token: "white",
      hex: "#FFFFFF",
    },
  ]
} %}

<div class="color-palette grid column-gap-x-loose row-gap-normal" style="--grid-columns-default: {{ colors["Primary"]|length }}">
  {% for category, palette in colors %}
    <div class="column-full">
      <p class="font-weight-bold" style="margin-top: 2rem">{{ category }}</p>
    </div>
    {% for color in palette %}
      <div class="column-1 column gap-tight">
        <div class="swatch swatch--{{ color.token }}" style="background: {{ color.hex }}"></div>
        <dl>
          <dt><code>{{ color.token }}</code></dt>
          <dd class="column">
            <span class="hex">
              <span class="visually-hidden">Hex code</span> {{ color.hex }}
            </span>
            {% if color.pantone %}
              <span class="pantone">PANTONE {{ color.pantone }}</span>
            {% endif %}
          </dd>
        </dl>
      </div>
    {% endfor %}
  {% endfor %}
</div>
twig-->

## Utilities
Tokens can be used with custom properties in CSS <span style="white-space: nowrap">(`--tcds-color-x`,</span> where `x` is a color token).

There are also tokens available for each color category—`primary`, `secondary`, and `tertiary`—for which there are utility classes, `.text-color-x`, which sets the text color, and `.bg-x`, which sets the background color of an element as well as appropriate text color and other foreground styles automatically.

The background utilities need to be paired with a `[data-theme]` attribute set to either `light` or `dark`. This will determine whether to use the light version of a color for the background with dark foreground elements, or the dark version for the background with light foreground elements, respectively.

<!--twig
{% embed "@tch/includes/example.twig" %}
{% block content %}
<div class="bg-primary" data-theme="light" style="padding: 2rem">
  <p>Light primary background with dark text and foreground elements.</p>
</div>
<div class="bg-secondary" data-theme="dark" style="padding: 2rem">
  <p>Dark secondary background with light text and foreground elements.</p>
</div>
{% endblock %}
{% block code %}
<div class="bg-primary" data-theme="light">
  <p>Light primary background with dark text and foreground elements.</p>
</div>
<div class="bg-secondary" data-theme="dark">
  <p>Dark secondary background with light text and foreground elements.</p>
</div>
{% endblock %}
{% endembed %}
twig-->