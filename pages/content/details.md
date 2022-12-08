<!--lede
  The Design System provides styling for the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details">details element</a>, which toggles visibility for a single section of content.
lede-->

<!--twig
{% embed "@tch/includes/example.twig" %}
{% block content %}
<details>
  <summary>Toggle content</summary>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
  </p>
</details>
{% endblock %}
{% endembed %}
twig-->

## Best practices
### When to use
**To progressively disclose a single section of content.** Details elements are useful for toggling independent sections to improve readability and navigation.

### When not to use
**As an accordion.** Details elements should not be used in groups to create makeshift accordions. They lack the proper semantics and assistive technology support, do not require that only one in a group opens at a time, and do not have the necessary UX features for accommodating multiple open sections at a time. Use the [accordion](/components/accordion) component instead.

## Resources
[Source code on GitHub](https://github.com/jacecotton/tcds/blob/main/styles/content/details.scss)