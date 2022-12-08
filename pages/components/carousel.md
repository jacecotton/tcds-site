<!--
/**
 * @todo Separate functionality and slotting between tcds-carousel and
 *   tcds-slide, same as was done for Accordion and Tabs.
 */
-->

<!--lede
  Carousels rotate through slides of content, allowing users to advance forward or backward, play or pause, and select specific slides from a row of dots.
lede-->

<!--twig
{% embed "@tch/includes/example.twig" %}
{% block content %}
<tcds-carousel>
  <tcds-slide>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </p>
  </tcds-slide>
  <tcds-slide>
    <p>
      Lorem ipsum is simply dummy text of the printing and typesetting
      industry. Lorem ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of 
      type and scrambled it to make a type specimen book.
    </p>
  </tcds-slide>
  <tcds-slide>
    <p>
      Contrary to popular belief, Lorem Ipsum is not simply random text.
      It has roots in a piece of classical Latin literature from 45 BC,
      making it over two millennia old.
    </p>
  </tcds-slide>
</tcds-carousel>
{% endblock %}
{% block code %}
<tcds-carousel>
  <tcds-slide>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
  </tcds-slide>
  <tcds-slide>
    Lorem ipsum is simply dummy text of the printing and typesetting
    industry. Lorem ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of 
    type and scrambled it to make a type specimen book.
  </tcds-slide>
  <tcds-slide>
    Contrary to popular belief, Lorem Ipsum is not simply random text.
    It has roots in a piece of classical Latin literature from 45 BC,
    making it over two millennia old.
  </tcds-slide>
</tcds-carousel>
{% endblock %}
{% endembed %}
twig-->

## Best practices
**Use with general caution.** Even when properly implemented, research shows that users seldom interact with carousels, especially beyond the first slide ([1](https://erikrunyon.com/2013/01/carousel-interaction-stats/ "Carousel Interaction Stats — Erik Runyon")). Furthermore, carousels have a high [interaction cost](https://www.nngroup.com/articles/interaction-cost-definition/ "Interaction cost – Nielsen Norman Group"), potentially causing inconvenience ([2](https://www.nngroup.com/articles/auto-forwarding/ "Auto-Forwarding Carousels and Accordions Annoy Users and Reduce Visibility Nielsen Norman Group")).

**Curate relevant and high quality content for each slide.** Carousel content that the user perceives to be irrelevant, redundant, or unhelpful will discourage them from investigating and interacting further. This can contribute to a [banner blindness](https://www.nngroup.com/articles/tunnel-vision-and-selective-attention/ "Tunnel Vision and Selective Attention – Nielsen Norman Group") that will reduce perception and engagement of carousels elsewhere on the website ([3](https://www.smashingmagazine.com/2016/07/ten-requirements-for-making-home-page-carousels-work-for-end-users/ "10 Requirements For Making Home Page Carousels Work For End Users (If Needed) - Smashing Magazine")).

**Prioritize slide order, and limit the number of slides.** Most users will not see all the content in a carousel ([3](https://www.smashingmagazine.com/2016/07/ten-requirements-for-making-home-page-carousels-work-for-end-users/ "10 Requirements For Making Home Page Carousels Work For End Users (If Needed) - Smashing Magazine")). Put the most important and engaging slides first, and avoid adding too many slides to begin with (as the more there are, the less likely they are to be discovered).

**Allow sufficient time between slides.** The [autoplay](#autoplaying) interval should be based on a generous approximation of how long the slide with the most content takes to read, understand, and interact with.

### When to use
**When presenting a series of inessential or sample content.** Examples include decorative pictures or testimonials. Only use a carousel for presenting content that users were not likely searching for when they navigated to the page, and may only be interested in consuming in a passive manner.

### When not to use
**When presenting important or user goal-oriented content.** Because slides are not labeled, users are unlikely to find content buried in carousels if they're looking for it. Furthermore, users are highly likely to miss content they may be looking for if the carousel autoplays ([2](https://www.nngroup.com/articles/auto-forwarding/ "Auto-Forwarding Carousels and Accordions Annoy Users and Reduce Visibility Nielsen Norman Group")). However, carousels are often useful to condense content into one container, and then progressively or selectively disclose it. If the content of a slide is supposed to serve a user goal, consider a different component that achieves a similar purpose, such as:

* [Tabs](/components/tabs), useful for quick comparison between different content of the same information type.
* [Accordion](/components/accordion), useful for collapsing multiple sections of content under headers, allowing users to quickly scan a page and choose whether or not to see the content.

Note that both the above components label their sections, imparting [information scent](https://www.nngroup.com/articles/information-scent/ "Information scent – Nielsen Norman Group") that makes it more likely a user will find what they're looking for if it's contained therein.

## Usage
### Autoplaying
To allow the user to play the carousel, set the [`timing` attribute](#timing-attribute) (in seconds). A button will appear that toggles between play and pause when clicked.

By default, the user will have to click the play button for the carousel to begin auto-forwarding. To have it play by default (subject to [certain conditions](#usability-checklist)), add the `playing` state attribute.

<!--twig
{% embed "@tch/includes/example.twig" with {
  line_highlight: "1",
} %}
{% block content %}
<tcds-carousel playing timing="5">
  <tcds-slide>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </p>
  </tcds-slide>
  <tcds-slide>
    <p>
      Lorem ipsum is simply dummy text of the printing and typesetting
      industry. Lorem ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of 
      type and scrambled it to make a type specimen book.
    </p>
  </tcds-slide>
  <tcds-slide>
    <p>
      Contrary to popular belief, Lorem Ipsum is not simply random text.
      It has roots in a piece of classical Latin literature from 45 BC,
      making it over two millennia old.
    </p>
  </tcds-slide>
</tcds-carousel>
{% endblock %}
{% block code %}
<tcds-carousel playing timing="5">
  <tcds-slide>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
  </tcds-slide>
  <tcds-slide>
    Lorem ipsum is simply dummy text of the printing and typesetting
    industry. Lorem ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of 
    type and scrambled it to make a type specimen book.
  </tcds-slide>
  <tcds-slide>
    Contrary to popular belief, Lorem Ipsum is not simply random text.
    It has roots in a piece of classical Latin literature from 45 BC,
    making it over two millennia old.
  </tcds-slide>
</tcds-carousel>
{% endblock %}
{% endembed %}
twig-->

### Control position
By default, the indicator buttons and navigation arrows are placed beneath the slides and horizontally centered. You can also place them on top of the slides and shifted to the right by setting the [`navigation` attribute](#navigation-attribute) to `top right`.

<!--twig
{% embed "@tch/includes/example.twig" with {
  line_highlight: "1",
} %}
{% block content %}
<tcds-carousel navigation="top right">
  <tcds-slide>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </p>
  </tcds-slide>
  <tcds-slide>
    <p>
      Lorem ipsum is simply dummy text of the printing and typesetting
      industry. Lorem ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of 
      type and scrambled it to make a type specimen book.
    </p>
  </tcds-slide>
  <tcds-slide>
    <p>
      Contrary to popular belief, Lorem Ipsum is not simply random text.
      It has roots in a piece of classical Latin literature from 45 BC,
      making it over two millennia old.
    </p>
  </tcds-slide>
</tcds-carousel>
{% endblock %}
{% block code %}
<tcds-carousel navigation="top right">
  <tcds-slide>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
  </tcds-slide>
  <tcds-slide>
    Lorem ipsum is simply dummy text of the printing and typesetting
    industry. Lorem ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of 
    type and scrambled it to make a type specimen book.
  </tcds-slide>
  <tcds-slide>
    Contrary to popular belief, Lorem Ipsum is not simply random text.
    It has roots in a piece of classical Latin literature from 45 BC,
    making it over two millennia old.
  </tcds-slide>
</tcds-carousel>
{% endblock %}
{% endembed %}
twig-->

## Accessibility
### Usability checklist
The UX behavior of the carousel is as follows.

<details>
  <summary>Checklist</summary>
  <div>

1. Basic controls
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
        1. The carousel is paused by default if the `playing` attribute is absent, "reduced motion" preference is set, *or* the device's primary pointer device cannot hover (i.e. touchscreen).
        1. Responsive play state. If playing:
            1. The carousel will temporarily pause itself when any of the following occurs, *and* will resume when they are no longer true *or* when the inverse occurs:
                1. The user hovers over the slide container (mouse or trackpad only).
                1. An element inside the slide container receives keyboard focus.
                1. The carousel is not fully in view (due to scrolling).
                1. The user navigates away from the browser tab or window.
            1. The carousel will stop when any of the following occurs until the user presses the play button:
                1. The user presses the pause button.
                1. The user presses the next or previous buttons.
                1. The user selects an indicator (clicks or navigates using the arrow keys).
                1. The user swipes between slides (`touchstart` event).**

<small>\* Except where otherwise noted, advancing "forward" when the last slide is active means returning to the first slide (recycling); and vice versa, advancing "backward" when the first slide is active means recycling to the last slide.</small>

<small>\** Scrolling (with a mouse or trackpad, as opposed to swiping with a touchscreen) is excluded from triggering a pause, because it inherits the temporary pause scenario of the hover state. The carousel will resume playing when the cursor exits the slide container, a condition that doesn't exist with touchscreen devices.</small>
</div>
</details>

### Screen reader behavior
When the carousel is not playing, the element that contains the slides (`[part=viewport]`) has an `aria-live` attribute of `polite`. The result is that, when using a screen reader, after a new slide becomes visible (by selecting an indicator or arrow button), it is read to the user after the user becomes idle (so as to not interrupt other announcements).

However, if a carousel is playing, `aria-live` is set to `off` so that changes are not announced. The user would have to focus inside the carousel for the slide contents to be read, at which point the carousel will pause itself due to the received focus. This is to limit intrusiveness and interruptions, and simplify the screen reader experience.

## API
<!--twig
{{ include("@tch/includes/api.twig", {
  attributes: [
    {
      name: "navigation",
      type: ["prop", "string"],
      description: "The position of the navigation controls. Available option is <code>top right</code>.",
      required: "no",
    },
    {
      name: "timing",
      type: ["prop", "number"],
      description: "The time between switching slides (in seconds) when playing. Required if <code>playing</code> is present.",
      required: "no",
    },
    {
      name: "playing",
      type: ["state", "boolean"],
      description: "Whether the carousel is playing (auto-forwarding).",
      required: "no",
    },
  ]
}) }}
twig-->

<!--
Other design system/pattern library implementations:
https://www.audi.com/ci/en/guides/user-interface/components/slideshow.html
https://ant.design/components/carousel/
https://www.oracle.com/webfolder/ux/mobile/component/carousel.html
https://www.lightningdesignsystem.com/components/carousel/
https://getbootstrap.com/docs/4.3/components/carousel/
https://www.w3.org/TR/wai-aria-practices/#carousel
https://a11y-101.com/development/carousels
-->

## Resources
This component was architected in conformance with [ARIA Authoring Practices (APG) for carousel pattern](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/).

Source code on GitHub ([carousel](https://github.com/jacecotton/tcds/blob/main/components/carousel/), [slide](https://github.com/jacecotton/tcds/blob/main/components/slide/))