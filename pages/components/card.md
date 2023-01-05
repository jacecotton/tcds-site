<!--lede
  Cards display snippets of content, typically including the meta information of a linked page, such as an image, title, description, and link.
lede-->

<!--twig
{% embed "@tch/includes/example.twig" %}
{% block content %}
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
### Small card
A compact card can be created by setting the [`size` attribute](#size-attribute) to `small`.

<!--twig
{% embed "@tch/includes/example.twig" with {
  line_highlight: "1",
} %}
{% block content %}
<tcds-card size="small">
  <img slot="image" src="https://www.texaschildrensurgentcare.org/sites/urgentcare/files/2022-07/MyChart%20video%20visits.png" alt="">
  <a slot="title" href="#some-page">Small card example</a>
  <p slot="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt.
  </p>
</tcds-card>
{% endblock %}
{% block code %}
<tcds-card size="small">
  <img slot="image" src="image.jpg" alt="">
  <a slot="title" href="#some-page">Small card example</a>
  <p slot="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt.
  </p>
</tcds-card>
{% endblock %}
{% endembed %}
twig-->

### Large card
A large card can be created by setting the `size` attribute to `large`.

<!--twig
{% embed "@tch/includes/example.twig" with {
  line_highlight: "1",
} %}
{% block content %}
<tcds-card size="large">
  <img slot="image" src="https://www.texaschildrensurgentcare.org/sites/urgentcare/files/2022-07/MyChart%20video%20visits.png" alt="">
  <a slot="title" href="#some-page">Large card example</a>
  <p slot="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt.
  </p>
</tcds-card>
{% endblock %}
{% block code %}
<tcds-card size="large">
  <img slot="image" src="image.jpg" alt="">
  <a slot="title" href="#some-page">Large card example</a>
  <p slot="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt.
  </p>
</tcds-card>
{% endblock %}
{% endembed %}
twig-->

### Orientation
The card's orientation is responsive to its container. If below 600px, it will be vertical (image above content), while if above, it will be horizontal (image to the left of content).

You can lock the card into a particular orientation by setting the [`orientation` attribute](#orientation-attribute) to either `horizontal` or `vertical`.

<!--twig
{% embed "@tch/includes/example.twig" with {
  line_highlight: "1",
} %}
{% block content %}
<tcds-card orientation="vertical">
  <img slot="image" src="https://www.texaschildrensurgentcare.org/sites/urgentcare/files/2022-07/MyChart%20video%20visits.png" alt="">
  <a slot="title" href="#some-page">Vertically locked card</a>
  <p slot="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt.
  </p>
</tcds-card>
{% endblock %}
{% block code %}
<tcds-card orientation="vertical">
  <img slot="image" src="image.jpg" alt="">
  <a slot="title" href="#some-page">Vertically locked card</a>
  <p slot="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt.
  </p>
</tcds-card>
{% endblock %}
{% endembed %}
twig-->

### Variants
Cards used more for UI, rather than content, have a `ui` option available with the [`variant` attribute](#variant-attribute).

<!--twig
{% embed "@tch/includes/example.twig" with {
  line_highlight: "1",
} %}
{% block content %}
<tcds-card variant="ui">
  <img slot="image" src="https://www.texaschildrensurgentcare.org/sites/urgentcare/files/2022-07/MyChart%20video%20visits.png" alt="">
  <a slot="title" href="#some-page">UI card title</a>
  <p slot="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt.
  </p>
</tcds-card>
{% endblock %}
{% block code %}
<tcds-card variant="ui">
  <img slot="image" src="image.jpg" alt="">
  <a slot="title" href="#some-page">UI card title</a>
  <p slot="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt.
  </p>
</tcds-card>
{% endblock %}
{% endembed %}
twig-->

In practice, this simply changes the typeface of the card to our UI font (see [Typography](/design/typography)).

### Tag
A tag can be added to a card with the `tag` slot. Tags often contain dates or category labels.

<!--twig
{% embed "@tch/includes/example.twig" with {
  line_highlight: "2",
} %}
{% block content %}
<tcds-card>
  <span slot="tag">Jan 1</span>
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
  <span slot="tag">Jan 1</span>
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

### Custom footer
By default, the footer will simply contain a button, labeled "Read more" unless specified otherwise with the [`action-label` attribute](#action-label-attribute).

However, a fully customizable `footer` slot is provided, which should be marked up with the `footer` tag.

<!--twig
{% embed "@tch/includes/example.twig" with {
  line_highlight: "8-11",
} %}
{% block content %}
<tcds-card>
  <img slot="image" src="https://www.texaschildrensurgentcare.org/sites/urgentcare/files/2022-07/MyChart%20video%20visits.png" alt="">
  <a slot="title" href="#some-page">Custom footer card</a>
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
  <a slot="title" href="#some-page">Custom footer card</a>
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

To completely omit the footer, set the `action-label` attribute to an empty string.

<!--twig
{% embed "@tch/includes/example.twig" with {
  line_highlight: "1",
} %}
{% block content %}
<tcds-card action-label="">
  <img slot="image" src="https://www.texaschildrensurgentcare.org/sites/urgentcare/files/2022-07/MyChart%20video%20visits.png" alt="">
  <a slot="title" href="#some-page">No footer card</a>
  <p slot="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt.
  </p>
</tcds-card>
{% endblock %}
{% block code %}
<tcds-card action-label="">
  <img slot="image" src="image.jpg" alt="">
  <a slot="title" href="#some-page">No footer card</a>
  <p slot="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt.
  </p>
</tcds-card>
{% endblock %}
{% endembed %}
twig-->

### Image fit and size
The [`image` attribute](#image-attribute) can be used to adjust the fit and size of the card's image.

By default, the card crops the image using [`cover` fitting](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit). Alternatively, `contain` can be used to ensure the entire image fits within the container.

<!--twig
{% embed "@tch/includes/example.twig" with {
  line_highlight: "1",
} %}
{% block content %}
<tcds-card image="contain">
  <img slot="image" src="https://www.texaschildrensurgentcare.org/sites/urgentcare/files/2022-07/MyChart%20video%20visits.png" alt="">
  <a slot="title" href="#some-page">Contained image card</a>
  <p slot="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt.
  </p>
</tcds-card>
{% endblock %}
{% block code %}
<tcds-card image="contain">
  <img slot="image" src="image.jpg" alt="">
  <a slot="title" href="#some-page">Contained image card</a>
  <p slot="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt.
  </p>
</tcds-card>
{% endblock %}
{% endembed %}
twig-->

For horizontal cards, the `image` attribute can be set to `half` to make the image take up half the available width.

<!--twig
{% embed "@tch/includes/example.twig" with {
  line_highlight: "1",
} %}
{% block content %}
<tcds-card image="half">
  <img slot="image" src="https://www.texaschildrensurgentcare.org/sites/urgentcare/files/2022-07/MyChart%20video%20visits.png" alt="">
  <a slot="title" href="#some-page">Half-width image card</a>
  <p slot="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt.
  </p>
</tcds-card>
{% endblock %}
{% block code %}
<tcds-card image="half">
  <img slot="image" src="image.jpg" alt="">
  <a slot="title" href="#some-page">Half-width image card</a>
  <p slot="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt.
  </p>
</tcds-card>
{% endblock %}
{% endembed %}
twig-->

## API
<!--twig {{ include("@tch/includes/api.twig", {
  attributes: [
    {
      name: "size",
      type: ["prop", "string"],
      description: "One of <code>small</code> or <code>large</code>.",
      required: "no",
    },
    {
      name: "orientation",
      type: ["state", "string"],
      description: "One of <code>vertical</code> or <code>horizontal</code>.",
      required: "no",
    },
    {
      name: "action-label",
      type: ["prop", "string"],
      description: "The label of the footer link. Defaults to <code>Read more</code>.",
      required: "no",
    },
    {
      name: "variant",
      type: ["prop", "string"],
      description: "Optionally <code>ui</code>.",
      required: "no",
    },
    {
      name: "divider",
      type: ["state", "boolean"],
      description: "Adds an accentual red border between the image and content when in vertical orientation.",
      required: "no",
    },
    {
      name: "image",
      type: ["state", "string"],
      description: "Any or both of <code>contain</code> or <code>half</code>.",
      required: "no",
    },
  ],
  slots: [
    {
      name: "tag",
      multiple: "no",
      description: "A label to add to an \"eyebrow\".",
      required: "no",
    },
    {
      name: "image",
      multiple: "no",
      description: "The card's image.",
      required: "no",
    },
    {
      name: "title",
      multiple: "no",
      description: "The card's title.",
      required: "no",
    },
    {
      name: "description",
      multiple: "no",
      description: "The card's description.",
      required: "no",
    },
    {
      name: "footer",
      multiple: "no",
      description: "A custom card footer.",
      required: "no",
    },
  ],
}) }} twig-->

## Resources
[Source code on GitHub](https://github.com/jacecotton/tcds/blob/main/components/card/)