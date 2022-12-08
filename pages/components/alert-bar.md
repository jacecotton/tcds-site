<!--lede
  The alert bar is a banner affixed to the top of a page, breaking down alerts by category, allowing users to investigate further or dismiss altogether.
lede-->

<!--twig
{% embed "@tch/includes/example.twig" with {
  full_screen: true,
} %}
{% block content %}
<tcds-alert-bar>
  <details slot="alert">
    <summary>Severe weather notices</summary>
    <article>
      <p>
        <span class="font-weight-bold">Harris County</span>: Tropical storm watch remains in effect. Locations have modified hours. <a href="#">Learn more</a>
      </p>
    </article>
  </details>

  <details slot="alert">
    <summary>Scheduling</summary>
    <article>
      <p>
        Video visit appointments available 7 days a week from 9:00am to 11:00pm. <a href="#">Learn more</a>
      </p>
    </article>
  </details>

  <details slot="alert">
    <summary>COVID-19 Updates</summary>
    <article>
      <p>
        Get the latest on vaccine information, in-person appointments, video visits and more. <a href="#">Learn more</a>
      </p>
    </article>
  </details>
</tcds-alert-bar>
{% endblock %}
{% endembed %}
twig-->

## Best practices
**Use specific but concise category names.** Aim for labels that are concise enough to be read quickly, but descriptive enough to provide a strong [information scent](https://www.nngroup.com/articles/information-scent/ "Information Scent - Nielsen Norman Group").

## Usage
### Default open
To open an alert by default, add the [`open` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#attr-open) to the associated [`details` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details).

<!--twig
{% embed "@tch/includes/example.twig" with {
  full_screen: true,
  line_highlight: "2",
} %}
{% block content %}
<tcds-alert-bar>
  <details slot="alert" open>
    <summary>Severe weather notices</summary>
    <article>
      <p>
        <span class="font-weight-bold">Harris County</span>: Tropical storm watch remains in effect. Locations have modified hours. <a href="#">Learn more</a>
      </p>
    </article>
  </details>

  <details slot="alert">
    <summary>Scheduling</summary>
    <article>
      <p>
        Video visit appointments available 7 days a week from 9:00am to 11:00pm. <a href="#">Learn more</a>
      </p>
    </article>
  </details>

  <details slot="alert">
    <summary>COVID-19 Updates</summary>
    <article>
      <p>
        Get the latest on vaccine information, in-person appointments, video visits and more. <a href="#">Learn more</a>
      </p>
    </article>
  </details>
</tcds-alert-bar>
{% endblock %}
{% endembed %}
twig-->

## API
<!--twig {{ include("@tch/includes/api.twig", {
  slots: [
    {
      name: "alert",
      multiple: "yes",
      description: "<code>details</code> elements for each alert.",
      required: "no",
    },
  ],
  methods: [
    {
      name: "close",
      description: "Dismisses the alert bar.",
    },
  ],
}) }} twig-->

## Resources
[Source code on GitHub](https://github.com/jacecotton/tcds/blob/main/components/alert-bar/)