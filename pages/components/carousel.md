<!--lead
  Carousels allow multiple pieces of content to occupy a single space by rotating through them one "slide" at a time. They allow users to advance forward or backward, play or pause the auto-cycle, and select specific slides from a row of dots.
lead-->

## Best practices

**Use with general caution.** Even when properly implemented, research shows that users seldom interact with carousels, especially beyond the first slide.<span data-footnote>[Carousel Interaction Stats](https://erikrunyon.com/2013/01/carousel-interaction-stats/) — Erik Runyon</span> They represent a form of sequential access, as opposed to the more preferable direct access.<span data-footnote>[Direct Access vs. Sequential Access: Definition](https://www.nngroup.com/articles/direct-vs-sequential-access/) — Nielsen Norman Group</span> Furthermore, carousels necessarily have complicated [interaction features](#usability-checklist) that come with a high [interaction cost](https://www.nngroup.com/articles/interaction-cost-definition/ "Interaction cost – Nielsen Norman Group"), potentially causing annoyance.<span data-footnote>[Auto-Forwarding Carousels and Accordions Annoy Users and Reduce Visibility](https://www.nngroup.com/articles/auto-forwarding/) — Nielsen Norman Group</span>

**Curate relevant and high quality content for each slide.** Carousels with content that is perceived to be irrelevant, redundant, or unhelpful will discourage users from investigating and interacting with the carousel further. It could also contribute to a [banner blindness](https://www.nngroup.com/articles/tunnel-vision-and-selective-attention/ "Tunnel Vision and Selective Attention – Nielsen Norman Group") that will reduce perception and engagement of carousels elsewhere on the website.<span data-footnote>[10 Requirements For Making Home Page Carousels Work For End Users (If Needed)](https://www.smashingmagazine.com/2016/07/ten-requirements-for-making-home-page-carousels-work-for-end-users/) — Smashing Magazine</span>

**Prioritize slide order, and limit the number of slides.** Most users will not see all of the slides in a carousel.<span data-footnote>[10 Requirements For Making Home Page Carousels Work For End Users (If Needed)](https://www.smashingmagazine.com/2016/07/ten-requirements-for-making-home-page-carousels-work-for-end-users/) — Smashing Magazine</span> Put the most important and engaging slides first, and avoid adding too many slides to begin with (as the more there are, the less likely they are to be discovered).

**Allow sufficient time between slides.** The [`interval` property](#interval-property), which determines the time between slides when the carousel is playing, should be based on a generous approximation of how long the slide with the most content takes to read, understand, and interact with.

### When to use

**When presenting a series of inessential or sample content.** Examples include decorative pictures or testimonials. Only use a carousel for presenting content that users were not likely searching for when they navigated to the page, and may only be interested in consuming in a passive manner.

### When not to use

**When presenting important or user goal-oriented content.** Because slides are not labeled, users are unlikely to find content buried in carousels if they're looking for it. Furthermore, users are highly likely to miss content they may be looking for if the carousel auto-forwards.<span data-footnote>[Auto-Forwarding Carousels and Accordions Annoy Users and Reduce Visibility](https://www.nngroup.com/articles/auto-forwarding/) — Nielsen Norman Group</span> However, carousels are often useful to condense content into one container, and then progressively or selectively disclose it. If the content of a slide is supposed to serve a user goal, consider a different component that achieves a similar purpose, such as:

* [Tabs](/components/tabs), useful for quick comparison between different content of the same information type.
* [Accordion](/components/accordion), useful for collapsing multiple sections of content under headers, allowing users to quickly scan a page and choose whether or not to see the content.

Note that both the above components label their sections, imparting [information scent](https://www.nngroup.com/articles/information-scent/ "Information scent – Nielsen Norman Group") that makes it more likely a user will find what they're looking for if it's contained therein.

## Example

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" with {
  examples: {
    "Twig": '{{ include("@tcds/components/carousel/carousel.html.twig", {
  heading: "Example carousel",
  hide_header: "true",
  playable: "false",
  slides: [
    {
      content: "Slide 1",
    },
    {
      content: "Slide 2",
    },
    {
      content: "Slide 3",
    },
    {
      content: "Slide 4",
    },
  ],
}) }}',
    "HTML": '<section class="Carousel" data-component="Carousel" aria-roledescription="carousel" data-autoplay="true">
  <header class="Carousel__header">
    <h2 class="Carousel__heading">Example carousel</h2>
    <button class="Button Button--icon-only Button--small Button--round" data-action="expand-collapse" data-component="Button" aria-label="Expand carousel" title="Expand carousel" type="button" aria-controls="example-carousel-carousel-slides">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square"><path d="m6 10 6 6 6-6"></path></svg>
    </button>
  </header>
  <div role="tablist" class="Carousel__indicators">
    <button role="tab" id="example-carousel-slide-1-button" aria-controls="example-carousel-slide-1-content" class="Carousel__indicator" aria-label="Slide 1 of 4" title="Slide 1 of 4"></button>
    <button role="tab" id="example-carousel-slide-2-button" aria-controls="example-carousel-slide-2-content" class="Carousel__indicator" aria-label="Slide 2 of 4" title="Slide 2 of 4"></button>
    <button role="tab" id="example-carousel-slide-3-button" aria-controls="example-carousel-slide-3-content" class="Carousel__indicator" aria-label="Slide 3 of 4" title="Slide 3 of 4"></button>
    <button role="tab" id="example-carousel-slide-4-button" aria-controls="example-carousel-slide-4-content" class="Carousel__indicator" aria-label="Slide 4 of 4" title="Slide 4 of 4"></button>
  </div>
  <div data-component-part="tabpanels" id="example-carousel-carousel-slides" class="Carousel__slides">
    <div role="tabpanel" id="example-carousel-slide-1-content" aria-labelledby="example-carousel-slide-1-button" aria-roledescription="slide" class="Carousel__slide">
      Slide 1
    </div>
    <div role="tabpanel" id="example-carousel-slide-2-content" aria-labelledby="example-carousel-slide-2-button" aria-roledescription="slide" class="Carousel__slide">
      Slide 2
    </div>
    <div role="tabpanel" id="example-carousel-slide-3-content" aria-labelledby="example-carousel-slide-3-button" aria-roledescription="slide" class="Carousel__slide">
      Slide 3
    </div>
    <div role="tabpanel" id="example-carousel-slide-4-content" aria-labelledby="example-carousel-slide-4-button" aria-roledescription="slide" class="Carousel__slide">
      Slide 4
    </div>
  </div>
  <button class="Button Button--icon-only Button--small Button--round Button--ghost" data-action="play-pause" data-component="Button" aria-label="Pause carousel" title="Pause carousel" type="button" aria-controls="example-carousel-carousel-slides">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
  </button>
  <button class="Button Button--icon-only Button--small Button--round" data-action="previous" data-component="Button" aria-label="Previous slide" title="Previous slide" type="button" aria-controls="example-carousel-carousel-slides">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square"><path d="m15 18-6-6 6-6"></path></svg>
  </button>
  <button class="Button Button--icon-only Button--small Button--round" data-action="next" data-component="Button" aria-label="Next slide" title="Next slide" type="button" aria-controls="example-carousel-carousel-slides">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square"><path d="m9 18 6-6-6-6"></path></svg>
  </button>
</section>',
  },
} %}
  {% block result %}
    {{ include("@tcds/components/carousel/carousel.html.twig", {
      heading: "Example carousel",
      hide_header: "true",
      playable: "false",
      slides: [
        {
          content: "Slide 1",
        },
        {
          content: "Slide 2",
        },
        {
          content: "Slide 3",
        },
        {
          content: "Slide 4",
        },
      ],
    }) }}
  {% endblock %}
{% endembed %}
twig-->

## Usability checklist

The following features are required for all carousels, for general UX and accessibility. They are provided automatically by the component, but are documented here for informational purposes. They adhere to the [WAI-ARIA Authoring Practices 1.2 &sect; 3.6 Carousel](https://www.w3.org/TR/wai-aria-practices-1.2/#carousel) guidelines, with some further enhancements.

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
    1. The carousel begins automatically advancing through the slides at a set interval when the "play" button is pressed, then
        1. the "play" button becomes a "pause" button.
    1. The carousel stops advancing through the slides when the "pause" button is pressed, then
        1. the "pause" button becomes a "play" button.
    1. The carousel skips to a specific slide when its associated indicator is selected.
1. Autoplay
    1. The carousel automatically begins playing if `autoplay` prop is set to `true`, "reduced motion" preference is *not* set, *and* the device's primary pointer device can hover (mouse or trackpad).
    1. The carousel is paused by default if `autoplay` prop is set to `false`, "reduced motion" preference is set, *or* the device's primary pointer device cannot hover (touchscreen or stylus).
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

## Accessibility
### Screen reader announcements

When the carousel is not playing, the element that contains the slides (`[data-component-part=tabpanels]`) has an `aria-live` attribute of `polite`. The result is that, when using a screen reader, after a new slide becomes visible (by selecting an indicator or arrow button), it is read to the user after the user becomes idle (so as to not interrupt other announcements).

However, if a carousel is playing (auto-forwarding), `aria-live` is set to `off` so that changes are not announced. The user would have to focus inside the carousel for the slide contents to be read, at which point the carousel will pause itself due to the received focus. This is to minimize distractions and interruptions, and simplify the experience of the screen reader user with a carousel. However, be cautioned that this may limit discoverability of carousel content.

### Tabs pattern implementation

The screen reader experience and semantic meaning of the Carousel component is functionally identical to the [Tabs](/components/tabs) component (with added features). The Design System authors have opted to implement the tabs pattern for the carousel, as described in [Roles, States, and Properties](https://www.w3.org/TR/wai-aria-practices-1.2/#wai-aria-roles-states-and-properties-4) of the WAI-ARIA Authoring Practices guidelines for carousels.

Carousel reuses Tabs' semantics and interaction design, extending the source code to layer functionality for next and previous navigation, playing, and pausing. The indicator dots are converted tab buttons (`[role=tab]`), and the slides are converted tab panels (`[role=tabpanel]` with `[aria-roledescription=slide]`).

## API

<!--twig
{{ include("@tch/includes/api-table/api-table.html.twig", {
  properties: {
    specific: [
      {
        name: "heading",
        type: "string",
        description: "A short but descriptive name for the carousel, placed above the slides.",
        required: "yes",
      },
      {
        name: "heading_level",
        type: "number",
        description: "The <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements'>HTML heading level</a> (2–6) of the heading, for preserving the carousel's place in the document outline. Defaults to 2.",
        required: "no",
      },
      {
        name: "heading_link",
        type: "string",
        description: "A link for the heading.",
        required: "no",
      },
      {
        name: "autoplay",
        type: "boolean",
        description: "Whether to automatically begin playing the carousel, subject to <a href='#usability-checklist'>conditions</a>. Defaults to true.",
        required: "no",
      },
      {
        name: "interval",
        type: "number",
        description: "The time (in milliseconds) between slide forwarding (when playing). Defaults to 5000 (5 seconds).",
        required: "no",
      },
      {
        name: "slides",
        type: "array",
        description: "An array of objects containing data for each slide.",
        required: "yes",
      },
      {
        name: "slides[].content",
        type: "string",
        description: "The plain text content of the slide. Renders HTML with the <a href='https://twig.symfony.com/doc/2.x/filters/raw.html'><code>raw</code> filter</a>, but otherwise limited to string data. Only required in the absence of <code>slides[].block</code>.",
        required: "no",
      },
      {
        name: "slides[].block",
        type: "string",
        description: "The name of a custom block used as a content slot for rendering Twig code (must be used with an <code>embed</code>). Only required in the absence of <code>slides[].content</code>.",
        required: "no",
      },
    ],
    global: [
      {
        name: "modifiers",
        type: "array",
        description: "Modifiers specific to the accordion component.",
        required: "no",
      },
      {
        name: "custom_classes",
        type: "array",
        description: "Custom classes to add to the component's root element. This may be useful for adding global utilities or custom modifiers.",
        required: "no",
      },
      {
        name: "custom_attributes",
        type: "object",
        description: "An object of key–value pairs where the key is an attribute and the value is an attribute value to add to the component's root element. This may be useful for adding custom JavaScript hooks.",
        required: "no",
      },
    ],
  }
}) }}
twig-->

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

## Further reading

Additional research, techniques, and guidelines considered in the creation of this component.

* [WAI-ARIA Authoring Practices 1.2 &sect; 3.6 Carousel](https://www.w3.org/TR/wai-aria-practices-1.2/#carousel) — W3.org
* [Carousels on Mobile Devices](https://www.nngroup.com/articles/mobile-carousels/) — Nielsen Norman Group
* [Designing Effective Carousels for Websites and Mobile Apps (Video)](https://www.nngroup.com/videos/carousels-websites-mobile-apps/) — Nielsen Norman Group
* [Beware Horizontal Scrolling and Mimicking Swipe on Desktop](https://www.nngroup.com/articles/horizontal-scrolling/) — Nielsen Norman Group