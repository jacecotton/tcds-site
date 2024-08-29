---
title: Section
category: Components
description: The Section component creates a boxed container with a full-bleed background and vertical padding, useful for creating distinct sections on landing pages, as well as large introductory sections such as heroes and profile mastheads. Accordingly, it also increases the font size of paragraphs and list items.
---

<!--twig
{% embed "@tc/includes/example.twig" with {full_screen: true} %}
{% block content %}
<section class="tcds-section">
  <h2>This is a section</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
</section>
{% endblock %}
{% endembed %}
twig-->

## Best practices
### When to use
**On landing and home pages.** The Section component is a good option for distinguishing sections of content on full-width landing pages.

<details>
  <summary>For developers and maintainers</summary>

**To build other components and page templates.** Sections are highly versatile and extensible, allowing you to use them as a base for things like profile mastheads, article ledes, footers, etc.
</details>

### When not to use
**On interior content pages.** The Section component is not a generic wrapper for content, and should not be used inside containers that are already internally boxed. Consider using a [Callout](/components/callout) for this purpose.

## Usage
### Backgrounds
To add a background color to a section, use a [background utility](/brand/color#utilities). Note that colors are referenced by their semantic theme alias ("primary" is pink/red, "secondary" is blue/navy, etc.)

<!--twig
{% embed "@tc/includes/example.twig" with {
  full_screen: true,
  line_highlight: "1",
} %}
{% block content %}
<section class="tcds-section bg-secondary">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
</section>
{% endblock %}
{% endembed %}
twig-->

To use a dark theme, combine the background utility with a `data-theme` attribute of `dark` (or `auto` to follow the user's system preference).

<!--twig
{% embed "@tc/includes/example.twig" with {
  full_screen: true,
  line_highlight: "1",
} %}
{% block content %}
<section class="tcds-section bg-secondary" data-theme="dark">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
</section>
{% endblock %}
{% endembed %}
twig-->

To add a [Texas Children's logomark](/brand/logos) flourish, add the [background utility](/brand/logos).

<!--twig
{% embed "@tc/includes/example.twig" with {
  full_screen: true,
  line_highlight: "1",
} %}
{% block content %}
<section class="tcds-section bg-secondary bg-logo">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
</section>
{% endblock %}
{% endembed %}
twig-->