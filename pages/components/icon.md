<!--lede
  Icons are illustrative aids to enhance understanding, supplement meaning, and reinforce brand tone and style.
lede-->

<!--twig
{% embed "@tch/includes/example.twig" %}
{% block content %}
<tcds-icon>texas-childrens</tcds-icon>
{% endblock %}
{% endembed %}
twig-->

## Best practices
**Avoid using icons by themselves.** Icons cannot be guaranteed to have universally well-understood meaning ([1](https://www.nngroup.com/articles/icon-usability/ "Icon Usability - Nielsen Norman Group")). Icons are best used as illustrative aids to *enhance* meaning (in addition to text), *not* to be the sole indicator of it.

**Ensure icons are meaningful and relevant.** An icon should, to the extent possible, independently and accurately reflect the sense of the accompanying text. Deduce the context-dependent [icon classification](https://www.nngroup.com/articles/classifying-icons/) (resemblance, symbolic, or conventional), and consider whether an icon of a different classification may be more effective.

## Library
<tcds-tabs size="large">
  <tcds-tab label="UI icons">
<!--twig
  {% set icons = [
    ["Arrows", [
      "arrow-down",
      "arrow-left",
      "arrow-right",
      "arrow-up",
      "chevron-down",
      "chevron-left",
      "chevron-right",
      "chevron-up",
    ]],
    ["Symbols", [
      "check",
      "code",
      "edit",
      "external",
      "eye",
      "grid",
      "hamburger",
      "info",
      "list",
      "marker",
      "marker-filled",
      "minus",
      "pause",
      "pdf",
      "play",
      "plus",
      "search",
      "smartphone",
      "type",
      "x",
      "wheelchair",
    ]],
    ["Brands", [
      "facebook",
      "instagram",
      "mychart",
      "pinterest",
      "texas-childrens",
      "twitter",
      "youtube",
    ]],
  ] %}
  {% for category in icons %}
    <h3 class="font-size-medium font-weight-bold">{{ category[0] }}</h3>
    <ul class="icon-grid">
      {% for index, icon in category[1] %}
        <li class="icon-grid__item" title="Click to copy code snippet">
          <tcds-icon>{{ icon }}</tcds-icon>
          <span class="icon-grid__label">{{ icon }}</span>
        </li>
      {% endfor %}
    </ul>
  {% endfor %}
twig-->
  </tcds-tab>
  <tcds-tab label="Display icons">
    Nothing to see here
  </tcds-tab>
</tcds-tabs>

## Usage
### Fallback text
The name of the icon in the [default slot](#default-slot) is what will render if the component fails to mount. It is also case-insensitive and allows for spaces, so it can be a good way to provide fallback text in instances where the JavaScript fails to load or run. The following example simulates a fallback scenario:

<!--twig
{% embed "@tch/includes/example.twig" %}
{% block content %}
MyChart arrow right
{% endblock %}
{% block code %}
<tcds-icon>MyChart</tcds-icon>
<tcds-icon>arrow right</tcds-icon>
{% endblock %}
{% endembed %}
twig-->

In some instances, it may be more desirable to render nothing at all if the component fails, in which case the icon can be specified with the [`icon` prop](#icon-attribute):

<!--twig
{% embed "@tch/includes/example.twig" %}
{% block content %}
(Nothing to see here)
{% endblock %}
{% block code %}
<tcds-icon icon="mychart"></tcds-icon>
{% endblock %}
{% endembed %}
twig-->

Note that per [best practices](#best-practices), icons should always be optional regardless. However, in some situations it may or may not be useful to include the icon text as well.

### Styling
The icon can be styled directly from the `tcds-icon` element. The color can be changed with the `color` property, and is set to `inherit` by default. The size can be changed with the `font-size` property, and is set to `1em` by default (100% of the parent's `font-size`).

<!--twig
{% embed "@tch/includes/example.twig" %}
{% block content %}
<style>
.icon-examples tcds-icon {
  color: var(--tcds-color-blue);
}

.icon-examples tcds-icon:nth-child(1) {
  font-size: 1rem;
}

.icon-examples tcds-icon:nth-child(2) {
  font-size: 2rem;
}

.icon-examples tcds-icon:nth-child(3) {
  font-size: 3rem;
}
</style>

<div class="icon-examples row align-end gap-normal">
<tcds-icon>mychart</tcds-icon>
<tcds-icon>mychart</tcds-icon>
<tcds-icon>mychart</tcds-icon>
</div>
{% endblock %}
{% block code %}
<style>
  tcds-icon {
    color: blue;
  }

  tcds-icon:nth-child(1) {
    font-size: 1rem;
  }

  tcds-icon:nth-child(2) {
    font-size: 2rem;
  }

  tcds-icon:nth-child(3) {
    font-size: 3rem;
  }
</style>

<tcds-icon>mychart</tcds-icon>
<tcds-icon>mychart</tcds-icon>
<tcds-icon>mychart</tcds-icon>
{% endblock %}
{% endembed %}
twig-->

To make icons styleable, they are not externally linked. To enhance performance, the SVG code isn't inserted into the DOM by the component, nor is a single large sprite used. Rather, icons are masks applied to an `::after` pseudo-element in CSS. The mask URLs are encoded and inlined, meaning no extra HTTP requests are made for icons.

To make icon colors handled with `color` and size with `font-size`, the `background-color` of the masked element is set to `currentColor`, and the `width` and `height` are set to `1em`. These can technically be manipulated directly, but it's not recommended, as this ensures icons have a contextual default style through inheritance.

## API
<!--twig {{ include("@tch/includes/api.twig", {
  attributes: [
    {
      name: "icon",
      type: ["prop", "string"],
      description: "The ident of the icon (see <a href='#library'>library</a>).",
      required: "no",
    },
  ],
  slots: [
    {
      name: "(default)",
      multiple: "no",
      description: "The ident of the icon (case-insensitive, spaces allowed).",
      required: "no",
    },
  ],
}) }} twig-->

## Resources
[Source code on GitHub](https://github.com/jacecotton/tcds/blob/main/components/icon/)