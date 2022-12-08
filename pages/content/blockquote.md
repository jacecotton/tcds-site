<!--lede
  The Design System provides styling for the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">blockquote element</a>, which is used to render pull quotations.
lede-->

<!--twig
{% embed "@tch/includes/example.twig" %}
{% block content %}
<blockquote>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
  </p>
</blockquote>
{% endblock %}
{% endembed %}
twig-->

## Usage
### Attribution
Mark up attribution by wrapping the `blockquote` in a `figure` element, and placing the attribution in a `figcaption` element. Cite the source of the quote with the `cite` element.

<!--twig
{% embed "@tch/includes/example.twig" %}
{% block content %}
<figure>
  <blockquote>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </p>
  </blockquote>
  <figcaption>
    John Doe, <cite>Lorem Ipsum</cite>
  </figcaption>
</figure>
{% endblock %}
{% endembed %}
twig-->

## Resources
[Source code on GitHub](https://github.com/jacecotton/tcds/blob/main/styles/content/blockquote.scss)