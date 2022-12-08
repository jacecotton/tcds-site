<!--lede
  The callout is a section style used to bring stronger emphasis to a paragraph and other content. It typically has a background color, and spans the full width of the parent container, "bleeding" past the container's horizontal padding.
lede-->

<!--twig
{% embed "@tch/includes/example.twig" %}
{% block content %}
<section class="tcds-callout bg-secondary" data-theme="light">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
  </p>
</section>
{% endblock %}
{% endembed %}
twig-->

## Usage
### Theme
In order to give a background color to a callout, use a [background utility class](/design/color#utilities) and a `data-theme` attribute with the value `light` or `dark`. This will also take care of coloring for foreground elements automatically.

<!--twig
{% embed "@tch/includes/example.twig" with {
  line_highlight: "1",
} %}
{% block content %}
<section class="tcds-callout bg-secondary" data-theme="dark">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
  </p>
</section>
{% endblock %}
{% endembed %}
twig-->

### Full-bleed only
If you wish to achieve the "full bleed" effect without a background color or additional spacing, you can use the `.full-bleed` utility class. The below example demonstrates its use with an image.

<!--twig
{% embed "@tch/includes/example.twig" %}
{% block content %}
<img src="https://women.texaschildrens.org/sites/pavilion/files/styles/grid_-_9_column/public/pavilion_about_us.jpg?itok=YWzr9u7q" alt="" class="full-bleed">
{% endblock %}
{% block code %}
<img src="image.jpg" alt="" class="full-bleed">
{% endblock %}
{% endembed %}
twig-->

## Resources
[Source code on GitHub](https://github.com/jacecotton/tcds/blob/main/styles/content/callout.scss)