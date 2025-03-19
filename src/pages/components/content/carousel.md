---
title: Carousel
category: Components
parent: Content
description: Carousels rotate through slides of content, allowing users to advance forward or backward, play or pause, and select specific slides from a row of indicator buttons.
---

<!--twig
{% embed "@tc/includes/example.twig" %}
{% block content %}
<tcds-carousel style="--tcds-carousel-slide-gap: 1rem">
  <tcds-slide>
    <p class="carousel-example">Slide 1</p>
  </tcds-slide>
  <tcds-slide>
    <p class="carousel-example">Slide 2</p>
  </tcds-slide>
  <tcds-slide>
    <p class="carousel-example">Slide 3</p>
  </tcds-slide>
</tcds-carousel>
{% endblock %}
{% block code %}
<tcds-carousel>
  <tcds-slide>
    <p style="...">Slide 1</p>
  </tcds-slide>
  <tcds-slide>
    <p style="...">Slide 2</p>
  </tcds-slide>
  <tcds-slide>
    <p style="...">Slide 3</p>
  </tcds-slide>
</tcds-carousel>
{% endblock %}
{% endembed %}
twig-->

## Guidance
### Best practices
**Use with caution.** <tcds-fn-ref aria-details="runyon-2013">Users seldom interact with carousels, even when implemented properly.</tcds-fn-ref> <tcds-fn-ref aria-details="nngroup-auto-forwarding">The inherent [interaction cost](https://www.nngroup.com/articles/interaction-cost-definition/ "Interaction cost – Nielsen Norman Group") of carousels can degrade user experience,</tcds-fn-ref> especially with goal-oriented content.

**Curate relevant, quality carousel content.** <tcds-fn-ref aria-details="smag-2016">Unhelpful or unattractive content may discourage further investigation and encourage [banner blindness](https://www.nngroup.com/articles/tunnel-vision-and-selective-attention/ "Tunnel Vision and Selective Attention – Nielsen Norman Group") for carousels.</tcds-fn-ref> Consider, however, that helpful content is likely [better served by something else](#when-not-to-use).

**Limit the number of slides and prioritize their order.** Account for the fact that <tcds-fn-ref aria-details="smag-2016">most users miss most carousel content.</tcds-fn-ref>

**Allow sufficient time between slides.** If playable, base the [timing](#auto-forwarding) on a generous approximation of how long the most content-dense slide takes to understand and interact with.

**Avoid blocks of text as slide content.** Stick to content that is quickly scanned and easily understood, like images and cards (without blurbs).

#### When to use
**To present a series of sample or interchangeable content.** For example, a decorative picture slideshow or a feed for related articles. Limit use of carousels to content that users were not likely searching for, and may only be passively interested in.

#### When not to use
**To present important or goal-oriented content.** Especially because slides are not labeled, users looking for something specific are less likely to find it if it's buried in a carousel. <tcds-fn-ref aria-details="nngroup-auto-forwarding">Autoplaying carousels further increase the likelihood of missed content.</tcds-fn-ref>

**When a different component is a better fit.** Carousels are useful to condense content into one container, then allow it to be progressively or selectively disclosed. If the content is goal-oriented, consider a different disclosure component, such as:

* [Tabs](/components/interface/tabs), useful for quick comparison or selection between different pieces of content of the same information type.
* [Accordion](/components/content/accordion), useful for associating hidden content with descriptive headings, allowing users to more quickly scan a page and choose whether to see the content.

Note that both the above components label their sections, imparting [information scent](https://www.nngroup.com/articles/information-scent/ "Information scent – Nielsen Norman Group") that increases the likelihood of users finding what they're looking for.

<tcds-fn-list>
  <ol>
    <li id="runyon-2013"><a href="https://erikrunyon.com/2013/01/carousel-interaction-stats/">Carousel Interaction Stats</a> - Erik Runyon (2013)</li>
    <li id="nngroup-auto-forwarding"><a href="https://www.nngroup.com/articles/auto-forwarding/">Auto-Forwarding Carousels and Accordions Annoy Users and Reduce Visibility</a> - Nielsen Norman Group (2013)</li>
    <li id="smag-2016"><a href="https://www.smashingmagazine.com/2016/07/ten-requirements-for-making-home-page-carousels-work-for-end-users/">10 Requirements For Making Home Page Carousels Work For End Users (If Needed)</a> - Smashing Magazine (2016)</li>
  </ol>
</tcds-fn-list>

### Usage
#### Auto-forwarding
To allow the user to play (auto-forward) the carousel, specify a timing interval. In HTML, this is done with the [`timing` attribute](#timing-attribute) (value in seconds). A button will appear that toggles between play and pause when clicked.

By default, the user will have to click the play button for the carousel to begin auto-forwarding. To have it play by default (subject to [certain conditions](#usability-checklist)), toggle on the initial "playing" state (via the [`playing` attribute](#playing-attribute) in HTML).

<!--twig
{% embed "@tc/includes/example.twig" with {line_highlight: 1} %}
{% block content %}
<tcds-carousel style="--tcds-carousel-slide-gap: 1rem" timing="5" playing>
  <tcds-slide>
    <p class="carousel-example">Slide 1</p>
  </tcds-slide>
  <tcds-slide>
    <p class="carousel-example">Slide 2</p>
  </tcds-slide>
  <tcds-slide>
    <p class="carousel-example">Slide 3</p>
  </tcds-slide>
</tcds-carousel>
{% endblock %}
{% block code %}
<tcds-carousel timing="5" playing>
  <tcds-slide>
    <p style="...">Slide 1</p>
  </tcds-slide>
  <tcds-slide>
    <p style="...">Slide 2</p>
  </tcds-slide>
  <tcds-slide>
    <p style="...">Slide 3</p>
  </tcds-slide>
</tcds-carousel>
{% endblock %}
{% endembed %}
twig-->

#### Multiple slides
Sometimes you may want to show multiple slides in the viewport at once, like when displaying a series of teaser cards. In HTML, this is done via the [`multiple` attribute](#multiple-attribute).

You cannot explicitly set the number of slides you want to appear at once, but you can adjust the slide size and gap values to your specific use case (see the [styling API](#styling), or the example below).

<!--twig
{% embed "@tc/includes/example.twig" with {line_highlight: "1-3"} %}
{% block content %}
<tcds-carousel multiple style="
  --tcds-carousel-slide-size: min(400px, 70vw);
  --tcds-carousel-slide-gap: 1rem;
">
  <tcds-slide>
    <p class="carousel-example">Slide 1</p>
  </tcds-slide>
  <tcds-slide>
    <p class="carousel-example">Slide 2</p>
  </tcds-slide>
  <tcds-slide>
    <p class="carousel-example">Slide 3</p>
  </tcds-slide>
</tcds-carousel>
{% endblock %}
{% block code %}
<tcds-carousel multiple style="
  --tcds-carousel-slide-size: min(400px, 70vw);
  --tcds-carousel-slide-gap: 1rem;
">
  <tcds-slide>
    <p style="...">Slide 1</p>
  </tcds-slide>
  <tcds-slide>
    <p style="...">Slide 2</p>
  </tcds-slide>
  <tcds-slide>
    <p style="...">Slide 3</p>
  </tcds-slide>
</tcds-carousel>
{% endblock %}
{% endembed %}
twig-->

For responsiveness, adjusting the slide sizes involves setting the *initial* size, which is fixed (400px in the example above) and the *minimum* size, which is relative (70% of the viewport in the example above). Under the hood, this is done with the [`min()` function](https://developer.mozilla.org/en-US/docs/Web/CSS/min) (picks the smallest calculated value between two). You can also set the slide size to `auto` which will adapt each slide to the content.

#### Default selected
You can change which slide is selected by default by toggling on its "selected" state (via the [`selected` attribute](#selected-attribute) in HTML).

<!--twig
{% embed "@tc/includes/example.twig" with {line_highlight: 5} %}
{% block content %}
<tcds-carousel style="--tcds-carousel-slide-gap: 1rem">
  <tcds-slide>
    <p class="carousel-example">Slide 1</p>
  </tcds-slide>
  <tcds-slide selected>
    <p class="carousel-example">Slide 2</p>
  </tcds-slide>
  <tcds-slide>
    <p class="carousel-example">Slide 3</p>
  </tcds-slide>
</tcds-carousel>
{% endblock %}
{% block code %}
<tcds-carousel>
  <tcds-slide>
    <p style="...">Slide 1</p>
  </tcds-slide>
  <tcds-slide selected>
    <p style="...">Slide 2</p>
  </tcds-slide>
  <tcds-slide>
    <p style="...">Slide 3</p>
  </tcds-slide>
</tcds-carousel>
{% endblock %}
{% endembed %}
twig-->

#### Control position
By default, the indicator buttons and navigation arrows are placed beneath the slides and horizontally centered. You can also place them on top of the slides and shifted to the right by setting the [`navigation` attribute](#navigation-attribute) to `top right`.

<!--twig
{% embed "@tc/includes/example.twig" with {line_highlight: 1} %}
{% block content %}
<tcds-carousel navigation="top right" style="--tcds-carousel-slide-gap: 1rem">
  <tcds-slide>
    <p class="carousel-example">Slide 1</p>
  </tcds-slide>
  <tcds-slide>
    <p class="carousel-example">Slide 2</p>
  </tcds-slide>
  <tcds-slide>
    <p class="carousel-example">Slide 3</p>
  </tcds-slide>
</tcds-carousel>
{% endblock %}
{% block code %}
<tcds-carousel navigation="top right">
  <tcds-slide>
    <p style="...">Slide 1</p>
  </tcds-slide>
  <tcds-slide>
    <p style="...">Slide 2</p>
  </tcds-slide>
  <tcds-slide>
    <p style="...">Slide 3</p>
  </tcds-slide>
</tcds-carousel>
{% endblock %}
{% endembed %}
twig-->

## Documentation
### Accessibility
#### Usability
The UX behavior of the carousel is as follows.

<details>
  <summary>Checklist</summary>
  <div>

1. The carousel advances forward\* one slide when
    1. the "next" button is pressed, or
    1. the right arrow key is pressed while an indicator has keyboard focus, or
    1. the user swipes left or scrolls right inside the slide container (does not recycle)*, or
    1. the carousel is playing.
1. The carousel advances backward\* one slide when
    1. the "previous" button is pressed, or
    1. the left arrow key is pressed while an indicator has keyboard focus, or
    1. the user swipes right or scrolls left inside the slide container (does not recycle).*
1. A play/pause button appears if a `timing` interval is provided.
1. The carousel begins automatically advancing through the slides at a set interval when the "play" button is pressed, then
    1. the "play" button becomes a "pause" button.
1. The carousel stops advancing through the slides when the "pause" button is pressed, then
    1. the "pause" button becomes a "play" button.
1. The carousel skips to a specific slide when its associated indicator dot is selected.
1. Autoplay
    1. The carousel automatically begins playing if `timing` attribute is given, the `playing` attribute is present, "reduced motion" preference is *not* set, *and* the device is hover-enabled (i.e. not touchscreen).
    1. Responsive play state. If playing:
        1. The carousel will temporarily pause itself when any of the following occurs, *and* will resume when they are no longer true *or* when the inverse occurs:
            1. The user hovers over the slide container (pointing device only).
            1. An element inside the slide container receives keyboard focus.
            1. The carousel is not fully in view (due to scrolling).
            1. The user navigates away from the browser tab or window.
            1. A [dialog](/components/dialog) is open.
        1. The carousel will stop until the user presses the play button when any of the following occurs:
            1. The user presses the pause button.
            1. The user presses the next or previous buttons.
            1. The user selects an indicator (clicks or navigates using the arrow keys).
            1. The user swipes between slides (`touchstart` event).**

<small>\* Except where otherwise noted, advancing "forward" when the last slide is active means returning to the first slide (recycling); and vice versa, advancing "backward" when the first slide is active means recycling to the last slide.</small>

<small>\** Scrolling (with a mouse or trackpad, as opposed to swiping with a touchscreen) is excluded from triggering a pause, because it inherits the temporary pause scenario of the hover state. The carousel will resume playing when the cursor exits the slide container, a condition that doesn't exist with touchscreen devices.</small>
</div>
</details>

#### Screen reader behavior
Screen readers will announce that a carousel is a carousel through the `aria-roledescription`.

When the carousel is not playing, the element that contains the slides has an `aria-live` attribute of `polite`. The result is that, when using a screen reader, after a new slide becomes visible (by selecting an indicator or arrow button), it is read to the user after the user becomes idle (so as to not interrupt other announcements).

However, if a carousel is playing, `aria-live` is set to `off` so that changes are not announced. The user would have to focus inside the carousel for the slide contents to be read, at which point the carousel will pause itself due to the received focus. This is to limit intrusiveness and interruptions, and simplify the screen reader experience.

### API
#### `tcds-carousel`
<!--twig
{{ include("@tc/includes/api.twig", {
  attributes: [
    {
      name: "multiple",
      type: ["prop", "boolean"],
      description: "Whether to show multiple slides in the viewport at once.",
      required: "no",
    },
    {
      name: "navigation",
      type: ["prop", "string"],
      values: "top right",
      required: "no",
      description: "The position of the navigation controls.",
    },
    {
      name: "playing",
      type: ["state", "boolean"],
      description: "Whether the carousel is playing (auto-forwarding). Corresponds to <code>playing</code> JavaScript property, which is a string with values <code>playing</code>, <code>stopped</code>, or <code>paused</code>.",
      required: "no",
    },
    {
      name: "timing",
      type: ["prop", "number"],
      description: "The time between switching slides (in seconds) when playing. Required if <code>playing</code> is present.",
      required: "no",
    },
  ],
  slots: [
    {
      name: "(default)",
      multiple: "yes",
      required: "yes",
      description: "Use to insert <code>tcds-slide</code> elements.",
    },
  ],
  methods: [
    {
      name: "play",
      description: "Begin auto-forwarding the carousel. <code>timing</code> must be specified.",
    },
    {
      name: "stop",
      description: "Stop auto-forwarding the carousel (will not resume until play button is clicked).",
    },
    {
      name: "toggle",
      description: "Begin if stopped, or stop if auto-forwarding, the carousel.",
    },
    {
      name: "pause",
      description: "Temporarily stop auto-forwarding the carousel. Internal component logic will resume auto-forwarding according to certain criteria.",
    },
    {
      name: "resume",
      description: "Begin auto-forwarding the carousel only if paused, not if stopped.",
    },
    {
      name: "select",
      description: "Selects a given slide. Parameters:<br><br><code>slide</code>: <code>HTMLElement</code> object that must be a <code>tcds-slide</code> element.<br><br><code>{}.scroll</code>: Scroll to the selected slide within the carousel viewport (default is <code>true</code>). Set to <code>false</code> to only update internal state.",
    },
  ],
}) }}
twig-->

#### `tcds-slide`
<!--twig
{{ include("@tc/includes/api.twig", {
  attributes: [
    {
      name: "selected",
      type: ["state", "boolean"],
      description: "Whether the slide is currently selected (scrolled-to and centered) in the carousel viewport.",
      required: "no",
    },
  ],
  slots: [
    {
      name: "(default)",
      multiple: "yes",
      required: "no",
      description: "Use to insert slide content.",
    },
  ],
}) }}
twig-->

#### Styling
<!--twig
{{ include("@tc/includes/api.twig", {
  custom_properties: [
    {
      name: "--tcds-carousel-slide-gap",
      syntax: "<calc-value>",
      description: "The space between slides.",
      default: "0",
    },
    {
      name: "--tcds-carousel-slide-size",
      syntax: "<calc-value>",
      description: "The inline size (width) of each slide. <code>auto</code> will size the slides to their respective contents.",
      default: "100%",
    },
    {
      name: "--tcds-carousel-viewport-align-items",
      syntax: "<keyword>",
      description: "The cross axis (vertical) alignment of the slides. Must be any valid <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/align-items\"><code>align-items</code></a> value.",
      default: "center",
    },
    {
      name: "--tcds-carousel-navigation-justify",
      syntax: "<keyword>",
      description: "The main axis (horizontal) justification of carousel navigation controls (arrows and indicators). Must be any valid <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content\"><code>justify-content</code></a> value.",
      default: "center",
    },
  ],
}) }}
twig-->

### Resources
* Baseline conformance document: [ARIA Authoring Practices (APG) for carousel pattern](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/)
* Source code on GitHub ([carousel](https://github.com/jacecotton/tcds/blob/main/src/02-components/carousel/), [slide](https://github.com/jacecotton/tcds/blob/main/src/02-components/carousel/slide/))

<!--
Other design system/pattern library implementations:
https://styleguide.audi.com/document/2442#/-/slideshow
https://ant.design/components/carousel/
https://www.oracle.com/webfolder/ux/mobile/component/carousel.html
https://www.lightningdesignsystem.com/components/carousel/
https://getbootstrap.com/docs/4.3/components/carousel/
https://www.w3.org/TR/wai-aria-practices/#carousel
https://a11y-101.com/development/carousels
-->