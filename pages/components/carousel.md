<!--lead
  Carousels rotate through slides of content, allowing users to advance forward or backward, play or pause the cycle, and select specific slides from a row of dots.
lead-->

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" %}
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
{% endembed %}
twig-->

## Best practices

**Use with general caution.** Even when properly implemented, research shows that users seldom interact with carousels, especially beyond the first slide.<span data-footnote>[Carousel Interaction Stats](https://erikrunyon.com/2013/01/carousel-interaction-stats/) — Erik Runyon</span> They represent a form of sequential access, as opposed to the more preferable direct access.<span data-footnote>[Direct Access vs. Sequential Access: Definition](https://www.nngroup.com/articles/direct-vs-sequential-access/) — Nielsen Norman Group</span> Furthermore, carousels necessarily have complicated [interaction features](#usability-checklist) that come with a high [interaction cost](https://www.nngroup.com/articles/interaction-cost-definition/ "Interaction cost – Nielsen Norman Group"), potentially causing annoyance.<span data-footnote>[Auto-Forwarding Carousels and Accordions Annoy Users and Reduce Visibility](https://www.nngroup.com/articles/auto-forwarding/) — Nielsen Norman Group</span>

**Curate relevant and high quality content for each slide.** Carousels with content that is perceived to be irrelevant, redundant, or unhelpful will discourage users from investigating and interacting with the carousel further. It could also contribute to a [banner blindness](https://www.nngroup.com/articles/tunnel-vision-and-selective-attention/ "Tunnel Vision and Selective Attention – Nielsen Norman Group") that will reduce perception and engagement of carousels elsewhere on the website.<span data-footnote>[10 Requirements For Making Home Page Carousels Work For End Users (If Needed)](https://www.smashingmagazine.com/2016/07/ten-requirements-for-making-home-page-carousels-work-for-end-users/) — Smashing Magazine</span>

**Prioritize slide order, and limit the number of slides.** Most users will not see all of the slides in a carousel.<span data-footnote>[10 Requirements For Making Home Page Carousels Work For End Users (If Needed)](https://www.smashingmagazine.com/2016/07/ten-requirements-for-making-home-page-carousels-work-for-end-users/) — Smashing Magazine</span> Put the most important and engaging slides first, and avoid adding too many slides to begin with (as the more there are, the less likely they are to be discovered).

**Allow sufficient time between slides.** The [`timing` property](#timing-property), which determines the time between slides when the carousel is playing, should be based on a generous approximation of how long the slide with the most content takes to read, understand, and interact with.

### When to use

**When presenting a series of inessential or sample content.** Examples include decorative pictures or testimonials. Only use a carousel for presenting content that users were not likely searching for when they navigated to the page, and may only be interested in consuming in a passive manner.

### When not to use

**When presenting important or user goal-oriented content.** Because slides are not labeled, users are unlikely to find content buried in carousels if they're looking for it. Furthermore, users are highly likely to miss content they may be looking for if the carousel auto-forwards.<span data-footnote>[Auto-Forwarding Carousels and Accordions Annoy Users and Reduce Visibility](https://www.nngroup.com/articles/auto-forwarding/) — Nielsen Norman Group</span> However, carousels are often useful to condense content into one container, and then progressively or selectively disclose it. If the content of a slide is supposed to serve a user goal, consider a different component that achieves a similar purpose, such as:

* [Tabs](/components/tabs), useful for quick comparison between different content of the same information type.
* [Accordion](/components/accordion), useful for collapsing multiple sections of content under headers, allowing users to quickly scan a page and choose whether or not to see the content.

Note that both the above components label their sections, imparting [information scent](https://www.nngroup.com/articles/information-scent/ "Information scent – Nielsen Norman Group") that makes it more likely a user will find what they're looking for if it's contained therein.

## Usage
### Auto-cycling carousel
To auto-cycle the Carousel on an interval, set the `timing` property (in milliseconds).

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" %}
{% block content %}
<tcds-carousel timing="5000">
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
{% endembed %}
twig-->

See [&sect; Usability checklist](#usability-checklist) for auto-playing and auto-pausing criteria.

### Expand-collapse header

A header can be added with the `header` slot. If provided, expand/collapse functionality will also be added.

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" %}
{% block result %}
<tcds-carousel>
  <h2 slot="header" data-toc-exclude><a href="#some-page">My carousel</a></h2>
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
  <h2 slot="header"><a href="#some-page">My carousel</a></h2>
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
{% endembed %}
twig-->

## Implementation
### Responsive behavior
By default, the indicator dots and play/pause button are hidden until the Carousel receives hover or focus. On devices without hovering capability, these elements are always shown.

On smaller screen sizes, the left and right navigation arrows are removed to create more space for the slide content. The persistent display of the indicator dots implicitly informs the user that they can navigate left and right by swiping, negating the need for the navigation arrows.

### Progressive enhancement
If the JavaScript fails to execute and register the custom elements that create the carousel, the slide content will still be accessible as plain sections. This will be the result in browsers that do not support the JavaScript techniques used to program the component, as well as clients that fail to load the required assets.

### Accessibility
The Carousel component was designed and implemented according to the [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/). The `<tcds-carousel>` custom element takes care of all the required implementation details, which are included here only for documentation purposes.

#### Usability checklist
The following features are required for all carousels, for general UX and accessibility.

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
    1. The carousel automatically begins playing if `timing` attribute is given, the `paused` attribute is not present, "reduced motion" preference is *not* set, *and* the device's primary pointer device can hover (mouse or trackpad).
    1. The carousel is paused by default if `paused` attribute is present, "reduced motion" preference is set, *or* the device's primary pointer device cannot hover (touchscreen or stylus).
1. Responsive play state. If playing:
    1. The carousel will temporarily pause itself when any of the following occurs, *and* will resume when they are no longer true *or* when the inverse occurs:
        1. The user hovers over the slide container (mouse or trackpad only).
        1. An element inside the slide container receives keyboard focus.
        1. The carousel is not fully in view (due to scrolling).
        1. The user navigates away from the browser tab or window.
    1. The carousel will permanently pause when any of the following occurs, *until* the user presses the play button:
        1. The user presses the pause button.
        1. The user presses the next or previous buttons.
        1. The user selects an indicator (clicks or navigates using the arrow keys).
        1. The user swipes between slides (`touchstart` event).**

<small>\* Except where otherwise noted, advancing "forward" when the last slide is active means returning to the first slide (recycling); and vice versa, advancing "backward" when the first slide is active means recycling to the last slide.</small>

<small>\** Scrolling (with a mouse or trackpad, as opposed to swiping with a touchscreen) is excluded from triggering a pause, because it inherits the temporary pause scenario of the hover state. The carousel will resume playing when the cursor exits the slide container, a condition that doesn't exist with touchscreen devices.</small>
</div>
</details>

#### Screen reader announcements
When the carousel is not playing, the element that contains the slides (`[part=viewport]`) has an `aria-live` attribute of `polite`. The result is that, when using a screen reader, after a new slide becomes visible (by selecting an indicator or arrow button), it is read to the user after the user becomes idle (so as to not interrupt other announcements).

However, if a carousel is playing (auto-forwarding), `aria-live` is set to `off` so that changes are not announced. The user would have to focus inside the carousel for the slide contents to be read, at which point the carousel will pause itself due to the received focus. This is to minimize distractions and interruptions, and simplify the experience of the screen reader user with a carousel. However, be cautioned that this may limit discoverability of carousel content.

#### Tabs pattern implementation
The screen reader experience and semantic meaning of the Carousel component is functionally identical to the [Tabs](/components/tabs) component (with added features). As a result, this component inherits the [accessibility details of the Tabs component](/components/tabs#accessibility).

Carousel reuses Tabs' semantics and interaction design, extending the source code to layer functionality for next and previous navigation, playing, and pausing. The indicator dots are converted tab buttons (`[role=tab]`), and the slides are converted tab panels (`[role=tabpanel]` with `[aria-roledescription=slide]`).

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
      <td id="timing-property"><code>timing</code></td>
      <td>integer</td>
      <td>The time between slides in milliseconds.</td>
      <td>no</td>
    </tr>
    <tr>
      <td><code>paused</code></td>
      <td>boolean</td>
      <td>Whether the Carousel is paused by default. Only applicable given a <code>timing</code> attribute is present.</td>
      <td>no</td>
    </tr>
  </tbody>
</table>

Source code: [Carousel.js](https://github.com/jacecotton/tcds/blob/main/assets/scripts/components/Carousel.js), [carousel.scss](https://github.com/jacecotton/tcds/blob/main/assets/styles/%40tcds/components/carousel.scss)

## Citations
<!--twig {{ include("@tch/components/footnotes/footnotes.html.twig") }} twig-->

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