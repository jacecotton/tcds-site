<!--lead The Card component displays a snippet for content of a different page, including its associated image, title, description, and link. lead-->

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" %}
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
{% embed "@tch/includes/example-box/example-box.html.twig" %}
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

If you wish to change the Card's default orientation before responsive calculations are made, you can set the `orientation` attribute to `horizontal`.

You can also lock the Card into a particular orientation by adding `lock` to the `orientation` attribute value.

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" %}
{% block result %}
<tcds-card orientation="lock vertical">
  <img slot="image" src="https://www.texaschildrensurgentcare.org/sites/urgentcare/files/2022-07/MyChart%20video%20visits.png" alt="">
  <a slot="title" href="#some-page">Example vertically locked card</a>
  <p slot="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt.
  </p>
</tcds-card>
{% endblock %}
{% block code %}
<tcds-card orientation="lock vertical">
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
{% embed "@tch/includes/example-box/example-box.html.twig" %}
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
{% embed "@tch/includes/example-box/example-box.html.twig" %}
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
If the JavaScript fails to execute and register the custom element that creates the card, the content will still be accessible as a plain image floated to the left of plain text. This will be the result in browsers that do not support the JavaScript techniques used to program the component, as well as clients that fail to load the required assets.

## API
<table class="table api-table">
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Description</th>
      <th>Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>size</code></td>
      <td>string</td>
      <td>Available option is <code>small</code>.</td>
      <td>no</td>
    </tr>
    <tr>
      <td><code>orientation</code></td>
      <td>string</td>
      <td>One of <code>vertical</code> (default) or <code>horizontal</code>, optionally in combination with <code>lock</code>.</td>
      <td>no</td>
    </tr>
    <tr>
      <td><code>background</code></td>
      <td>string</td>
      <td>One of <code>none</code> (transparent) or <code>reverse</code> (white).</td>
      <td>no</td>
    </tr>
    <tr>
      <td><code>divider</code></td>
      <td>boolean</td>
      <td>Adds a thick divider between the image and content, colored with the theme's <a href="/design/color#palette">primary color</a>. To enable, add the attribute with no value. To disable, omit the attribute.</td>
      <td>no</td>
    </tr>
    <tr>
      <td><code>image</code></td>
      <td>string</td>
      <td>If set to <code>contain</code>, a horizontal card's image's <em>maximum</em> height and width will be the image's container, with no minimum. The default is <code>cover</code>, which will make the image's container the <em>minimum</em> width and height, cropping whichever dimension exceeds the image's container. In both cases, the image is centered within the container and its dimensions are kept proportionate. See <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit"><code>object-fit</code> CSS property</a>.</td>
      <td>no</td>
    </tr>
  </tbody>
</table>

Source code: [Card.js](https://github.com/jacecotton/tcds/blob/main/assets/scripts/components/Card.js), [card.scss](https://github.com/jacecotton/tcds/blob/main/assets/styles/%40tcds/components/card.scss)

<!--
https://open-ui.org/components/card.research
https://ant.design/components/card/
https://www.lightningdesignsystem.com/components/cards/
-->