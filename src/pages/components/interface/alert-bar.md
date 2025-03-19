---
title: Alert Bar
category: Components
parent: Interface
description: The Alert Bar is a banner located at the top of the page that categorizes alerts, enabling users to explore details or dismiss them as needed.
---

<tcds-icon icon="error" style="--tcds-icon-size: 5rem; color: var(--tcds-color-red)"></tcds-icon>

## Under construction
Please check back later.

<!--twig
{% embed "@tc/includes/example.twig" with {full_screen: true} %}
{% block content %}
<tcds-alert-bar>
  <details slot="alert">
    <summary>Severe weather notices</summary>
    <div>
      <p>
        <span class="font-weight-bold">Harris County</span>: Tropical storm watch remains in effect. Locations have modified hours. <a href="#">Learn more</a>
      </p>
    </div>
  </details>

  <details slot="alert">
    <summary>Scheduling</summary>
    <div>
      <p>
        Video visit appointments available 7 days a week from 9:00am to 11:00pm. <a href="#">Learn more</a>
      </p>
    </div>
  </details>

  <details slot="alert">
    <summary>COVID-19 Updates</summary>
    <div>
      <p>
        Get the latest on vaccine information, in-person appointments, video visits and more. <a href="#">Learn more</a>
      </p>
    </div>
  </details>
</tcds-alert-bar>
{% endblock %}
{% endembed %}
twig-->

## Best practices
**Use specific but concise category names.** Aim for labels that are concise enough to be read quickly, but descriptive enough to provide a strong [information scent](https://www.nngroup.com/divs/information-scent/ "Information Scent - Nielsen Norman Group").

## Usage
### Default open
To open an alert by default, add the [`open` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#attr-open) to the associated [`details` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details).

<!--twig
{% embed "@tc/includes/example.twig" with {
  full_screen: true,
  line_highlight: "2",
} %}
{% block content %}
<tcds-alert-bar>
  <details slot="alert" open>
    <summary>Severe weather notices</summary>
    <div>
      <p>
        <span class="font-weight-bold">Harris County</span>: Tropical storm watch remains in effect. Locations have modified hours. <a href="#">Learn more</a>
      </p>
    </div>
  </details>

  <details slot="alert">
    <summary>Scheduling</summary>
    <div>
      <p>
        Video visit appointments available 7 days a week from 9:00am to 11:00pm. <a href="#">Learn more</a>
      </p>
    </div>
  </details>

  <details slot="alert">
    <summary>COVID-19 Updates</summary>
    <div>
      <p>
        Get the latest on vaccine information, in-person appointments, video visits and more. <a href="#">Learn more</a>
      </p>
    </div>
  </details>
</tcds-alert-bar>
{% endblock %}
{% endembed %}
twig-->