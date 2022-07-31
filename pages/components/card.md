<!--lead The Card component displays a snippet for content of a different page, including its associated image, title, description, and link. lead-->

<!--twig
{% embed "@tch/includes/example.html.twig" %}
{% block result %}
<tcds-card>
  <img slot="image" src="https://www.texaschildrensurgentcare.org/sites/urgentcare/files/2022-07/MyChart%20video%20visits.png" alt="">
  <a slot="title" href="#some-page">Card title</a>
  <p slot="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt.
  </p>
</tcds-card>
{% endblock %}
{% block code %}
<tcds-card>
  <img slot="image" src="image.jpg" alt="">
  <a slot="title" href="#some-page">Card title</a>
  <p slot="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt.
  </p>
</tcds-card>
{% endblock %}
{% endembed %}
twig-->

## Usage
Cards are native web components usable through the `<tcds-card>` custom element. The `image`, `title`, `link`, and `description` slots are provided to insert respective content into the Card body (see examples).

### Small card
To create a more compact Card, the `size` attribute may be set to `small`.

<!--twig
{% embed "@tch/includes/example.html.twig" %}
{% block result %}
<tcds-card size="small">
  <img slot="image" src="https://www.texaschildrensurgentcare.org/sites/urgentcare/files/2022-07/MyChart%20video%20visits.png" alt="">
  <a slot="title" href="#some-page">Example small card</a>
  <p slot="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt.
  </p>
</tcds-card>
{% endblock %}
{% block code %}
<tcds-card size="small">
  <img slot="image" src="image.jpg" alt="">
  <a slot="title" href="#some-page">Example small card</a>
  <p slot="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt.
  </p>
</tcds-card>
{% endblock %}
{% endembed %}
twig-->

### Responsive orientation
The Card's orientation is vertical (image above content) by default, but will become horizontal (image to the left of content) if its parent container is wider than 600px.

You can lock the Card into a particular orientation by setting the `orientation` property to either `horizontal` or `vertical`.

<!--twig
{% embed "@tch/includes/example.html.twig" %}
{% block result %}
<tcds-card orientation="vertical">
  <img slot="image" src="https://www.texaschildrensurgentcare.org/sites/urgentcare/files/2022-07/MyChart%20video%20visits.png" alt="">
  <a slot="title" href="#some-page">Example vertically locked card</a>
  <p slot="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt.
  </p>
</tcds-card>
{% endblock %}
{% block code %}
<tcds-card orientation="vertical">
  <img slot="image" src="image.jpg" alt="">
  <a slot="title" href="#some-page">Example vertically locked card</a>
  <p slot="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt.
  </p>
</tcds-card>
{% endblock %}
{% endembed %}
twig-->

### Background colors
By default, the Card's background color is [Gray 0](/design/color#palette). The `background` attribute can be set to either `none` (transparent) or `reverse` (white).

<!--twig
{% embed "@tch/includes/example.html.twig" %}
{% block result %}
<tcds-card background="reverse">
  <img slot="image" src="https://www.texaschildrensurgentcare.org/sites/urgentcare/files/2022-07/MyChart%20video%20visits.png" alt="">
  <a slot="title" href="#some-page">Example card with white background</a>
  <p slot="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt.
  </p>
</tcds-card>
{% endblock %}
{% block code %}
<tcds-card background="reverse">
  <img slot="image" src="image.jpg" alt="">
  <a slot="title" href="#some-page">Example card with white background</a>
  <p slot="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt.
  </p>
</tcds-card>
{% endblock %}
{% endembed %}
twig-->

### Custom footer
By default, the footer will simply show a "Read more" label. However, a fully customizable `footer` slot is provided, which should be marked up with the `footer` tag.

<!--twig
{% embed "@tch/includes/example.html.twig" %}
{% block result %}
<tcds-card>
  <img slot="image" src="https://www.texaschildrensurgentcare.org/sites/urgentcare/files/2022-07/MyChart%20video%20visits.png" alt="">
  <a slot="title" href="#some-page">Example card with custom footer</a>
  <p slot="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt.
  </p>
  <footer slot="footer">
    <a href="#link-1">Link 1</a>
    <a href="#link-2">Link 2</a>
  </footer>
</tcds-card>
{% endblock %}
{% block code %}
<tcds-card>
  <img slot="image" src="image.jpg" alt="">
  <a slot="title" href="#some-page">Example card with custom footer</a>
  <p slot="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt.
  </p>
  <footer slot="footer">
    <a href="#link-1">Link 1</a>
    <a href="#link-2">Link 2</a>
  </footer>
</tcds-card>
{% endblock %}
{% endembed %}
twig-->

Note that any links added inside the footer (or description) will be "elevated" above the Card surface's primary link added from the title.

## Implementation
### Progressive enhancement
The Card is by default
* a simple container with an image floated to the left of plain text content

to which the component will be limited when
* the browser does not support the techniques required for the additional features, or
* the client fails to load the required assets (poor network connection, etc.)

## API
<!--twig
{{ include("@tch/includes/api.html.twig", {
  properties: [
    {
      name: "size",
      type: "string",
      description: "Available option is <code>small</code>.",
      required: "no",
    },
    {
      name: "orientation",
      type: "string",
      description: "One of <code>vertical</code> or <code>horizontal</code>.",
      required: "no",
    },
    {
      name: "background",
      type: "string",
      description: "One of <code>none</code> (transparent) or <code>reverse</code> (white).",
      required: "no",
    },
    {
      name: "divider",
      type: "boolean",
      description: "Adds an accentual divider between the image and content when vertically oriented. To enable, add the attribute with no value. To disable, omit the attribute.",
      required: "no",
    },
    {
      name: "image",
      type: "string",
      description: "One of <code>contain</code> or <code>cover</code> (default) to determine how and whether to scale or crop the Card's image. See <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit'><code>object-fit</code> CSS property</a>.",
      required: "no",
    },
  ]
}) }}
twig-->

Source code: [Card.js](https://github.com/jacecotton/tcds/blob/main/assets/scripts/components/Card.js), [card.scss](https://github.com/jacecotton/tcds/blob/main/assets/styles/%40tcds/components/card.scss)

<!--
https://open-ui.org/components/card.research
https://ant.design/components/card/
https://www.lightningdesignsystem.com/components/cards/
-->