<!--lead
  An accordion is a group of sections collapsed under headers. Users can expand a section by tapping or clicking the header.
lead-->

## Best practices

**Use specific but concise section labels.** There is an inherent [interaction cost](https://www.nngroup.com/articles/interaction-cost-definition/ "Interaction Cost - Nielsen Norman Group") to accordions that may cause users to miss or ignore the content. Ensure your labels are concise enough to be read quickly, but descriptive enough to provide a strong [information scent](https://www.nngroup.com/articles/information-scent/).

### When to use

**Progressive disclosure.** When it would be more helpful to present a user with a choice before revealing content within a page. Sometimes, only certain sections of content on a page are likely to be relevant to a user, even if all the sections do belong on the page due to the nature of the topic (like with a Frequently Asked Questions page).

**Navigation assistance.** Sometimes, a page may become too long to be comfortably navigated. If it cannot be simplified or split into multiple pages, an accordion can help condense content to make it less cumbersome to navigate.

### When not to use

**Low engagement or low discoverability.** If there is evidence to suggest users cannot or are not accessing the content they're looking for, show it by default.

**The use case fits a different pattern better.** Consider one of the following:

* [Tabs](/components/tabs), which are more useful for quick comparison between different content of the same information type. Tabs do not move position when selected, making navigation between them faster and easier.
* [Table of Contents](/components/table-of-contents), which works better for navigating content that is expected to be read in full and in sequence.<span data-footnote>["Anchors OK? Re-Assessing In-Page Links"](https://www.nngroup.com/articles/in-page-links/) — Nielsen Norman Group</span> They also provide a simpler overview to examine before scrolling.
* [Details](/primitives/details), which work better for collapsing a single, independent section.

## Examples
### Default accordion

By default, only one section is expandable at a time. This tends to work best for selectively disclosing topics that are not necessarily related to one another.

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" with {
  transparent_background: true,
  examples: {
    "Twig": '{{ include("@tch/components/accordion/accordion.html.twig", {
  heading_level: "3",
  sections: [
    {
      heading: "Section 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ...",
    },
    {
      heading: "Section 2",
      content: "Lorem ipsum is simply dummy text of the printing and typesetting industry ...",
    },
    {
      heading: "Section 3",
      content: "Contrary to popular belief, lorem ipsum is not simply random text. It has ...",
    },
  ],
}) }}',
    "HTML": '<div class="Accordion" data-component="Accordion">
  <section class="Accordion__section">
    <h3 class="Accordion__heading">
      <button data-component-part="panel-toggle" class="Accordion__button" id="section-1-button" aria-controls="section-1-panel">
        Section 1\n
        <span class="Icon Accordion__icon">
          <!-- Icon code copied from src/tcds/icons/chevron-down.svg --\>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </span>
      </button>
    </h3>\n
    <div data-component-part="panel" class="Accordion__panel" id="section-1-panel" aria-labelledby="section-1-button">
      <div class="Accordion__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ...
      </div>
    </div>
  </section>\n
  <section class="Accordion__section">
    <h3 class="Accordion__heading">
      <button data-component-part="panel-toggle" class="Accordion__button" id="section-2-button" aria-controls="section-2-panel">
        Section 2\n
        <span class="Icon Accordion__icon">
          <!-- Icon code copied from src/tcds/icons/chevron-down.svg --\>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </span>
      </button>
    </h3>\n
    <div data-component-part="panel" class="Accordion__panel" id="section-2-panel" aria-labelledby="section-2-button">
      <div class="Accordion__content">
        Lorem ipsum is simply dummy text of the printing and typesetting industry ...
      </div>
    </div>
  </section>\n
  <section class="Accordion__section">
    <h3 class="Accordion__heading">
      <button data-component-part="panel-toggle" class="Accordion__button" id="section-3-button" aria-controls="section-3-panel">
        Section 3\n
        <span class="Icon Accordion__icon">
          <!-- Icon code copied from src/tcds/icons/chevron-down.svg --\>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </span>
      </button>
    </h3>\n
    <div data-component-part="panel" class="Accordion__panel" id="section-3-panel" aria-labelledby="section-3-button">
      <div class="Accordion__content">
        Contrary to popular belief, lorem ipsum is not simply random text. It has ...
      </div>
    </div>
  </section>
</div>',
  },
} %}
  {% block result %}
    {{ include("@tch/components/accordion/accordion.html.twig", {
      sections: [
        {
          heading: "Section 1",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          heading: "Section 2",
          content: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          heading: "Section 3",
          content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        },
      ],
    }) }}
  {% endblock %}
{% endembed %}
twig-->

### Multiselectable

To allow multiple panels to open at one time, use the [`multiselectable` modifier](#modifiers-property). This works best if a user may want to compare two or more panels at a time.

As a usability requirement, controls to expand or collapse all panels at once are automatically added.

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" with {
  transparent_background: true,
  examples: {
    "Twig": '{{ include("@tch/components/accordion/accordion.html.twig", {
  heading_level: "3",
  modifiers: ["multiselectable"],
  sections: [
    {
      heading: "Multiselectable section 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ...",
    },
    {
      heading: "Multiselectable section 2",
      content: "Lorem ipsum is simply dummy text of the printing and typesetting industry ...",
    },
    {
      heading: "Multiselectable section 3",
      content: "Contrary to popular belief, lorem ipsum is not simply random text. It has ...",
    },
  ],
}) }}',
    "HTML": '<div class="Accordion Accordion--multiselectable" data-component="Accordion">
  <ul class="Accordion__controls" aria-label="Accordion controls">
    <li><button data-component-part="expand-all" class="Accordion__control Button Button--small Button--ghost Button--round">expand all</button></li>
    <li><button data-component-part="collapse-all" class="Accordion__control Button Button--small Button--ghost Button--round">collapse all</button></li>
  </ul>\n
  <section class="Accordion__section">
    <h3 class="Accordion__heading">
      <button data-component-part="panel-toggle" class="Accordion__button" id="multiselectable-section-1-button" aria-controls="multiselectable-section-1-panel">
        Multiselectable section 1\n
        <span class="Icon Accordion__icon">
          <!-- Icon code copied from src/tcds/icons/chevron-down.svg --\>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </span>
      </button>
    </h3>\n
    <div data-component-part="panel" class="Accordion__panel" id="multiselectable-section-1-panel" aria-labelledby="multiselectable-section-1-button">
      <div class="Accordion__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ...
      </div>
    </div>
  </section>\n
  <section class="Accordion__section">
    <h3 class="Accordion__heading">
      <button data-component-part="panel-toggle" class="Accordion__button" id="multiselectable-section-2-button" aria-controls="multiselectable-section-2-panel">
        Multiselectable section 2\n
        <span class="Icon Accordion__icon">
          <!-- Icon code copied from src/tcds/icons/chevron-down.svg --\>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </span>
      </button>
    </h3>\n
    <div data-component-part="panel" class="Accordion__panel" id="multiselectable-section-2-panel" aria-labelledby="multiselectable-section-2-button">
      <div class="Accordion__content">
        Lorem ipsum is simply dummy text of the printing and typesetting industry ...
      </div>
    </div>
  </section>\n
  <section class="Accordion__section">
    <h3 class="Accordion__heading">
      <button data-component-part="panel-toggle" class="Accordion__button" id="multiselectable-section-3-button" aria-controls="multiselectable-section-3-panel">
        Multiselectable section 3\n
        <span class="Icon Accordion__icon">
          <!-- Icon code copied from src/tcds/icons/chevron-down.svg --\>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </span>
      </button>
    </h3>\n
    <div data-component-part="panel" class="Accordion__panel" id="multiselectable-section-3-panel" aria-labelledby="multiselectable-section-3-button">
      <div class="Accordion__content">
        Contrary to popular belief, lorem ipsum is not simply random text. It has ...
      </div>
    </div>
  </section>
</div>',
  },
} %}
  {% block result %}
    {{ include("@tch/components/accordion/accordion.html.twig", {
      modifiers: ["multiselectable"],
      sections: [
        {
          heading: "Multiselectable section 1",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          heading: "Multiselectable section 2",
          content: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          heading: "Multiselectable section 3",
          content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        },
      ],
    }) }}
  {% endblock %}
{% endembed %}
twig-->

### Slots

Normally, with the [`content` property](#sections-content-property), you are limited to a static string. With slots, you can insert fully custom code, such as HTML or additional Twig components. This requires that you `embed` the component rather than `include` it, define a new block, then reference that block in a section's object using the [`block` property](#sections-block-property).

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" with {
  transparent_background: true,
  examples: {
    "Twig": '{% embed "@tch/components/accordion/accordion.html.twig" with {
  heading_level: "3",
  sections: [
    {
      heading: "Slot example 1",
      block: "content_1",
    },
    {
      heading: "Slot example 2",
      content: "With the content property, you are restricted to a plain text string.",
    },
  ],
} %}
  {% block content_1 %}
    With slots, you can <strong>insert custom code</strong>. You can use additional components, or <em>plain HTML</em>.
  {% endblock %}
{% endembed %}',
    "HTML": '<div class="Accordion" data-component="Accordion">
  <section class="Accordion__section">
    <h3 class="Accordion__heading">
      <button data-component-part="panel-toggle" class="Accordion__button" id="slot-example-1-button" aria-controls="slot-example-1-panel">
        Slot example 1\n
        <span class="Icon Accordion__icon">
          <!-- Icon code copied from src/tcds/icons/chevron-down.svg --\>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </span>
      </button>
    </h3>\n
    <div data-component-part="panel" class="Accordion__panel" id="slot-example-1-panel" aria-labelledby="slot-example-1-button">
      <div class="Accordion__content">
        With slots, you can <strong>insert custom code</strong>. You can use additional components, or <em>plain HTML</em>.
      </div>
    </div>
  </section>\n
  <section class="Accordion__section">
    <h3 class="Accordion__heading">
      <button data-component-part="panel-toggle" class="Accordion__button" id="slot-example-2-button" aria-controls="slot-example-2-panel">
        Slot example 2\n
        <span class="Icon Accordion__icon">
          <!-- Icon code copied from src/tcds/icons/chevron-down.svg --\>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </span>
      </button>
    </h3>\n
    <div data-component-part="panel" class="Accordion__panel" id="slot-example-2-panel" aria-labelledby="slot-example-2-button">
      <div class="Accordion__content">
        With the content property, you are restricted to a plain text string.
      </div>
    </div>
  </section>
</div>',
  },
} %}
  {% block result %}
    {% embed "@tch/components/accordion/accordion.html.twig" with {
      sections: [
        {
          heading: "Slot example 1",
          block: "content_1",
        },
        {
          heading: "Slot example 2",
          content: "With the content property, you are restricted to a plain text string.",
        },
      ],
    } %}
      {% block content_1 %}
        With slots, you can <strong>insert custom code</strong>. You can use additional components, or <em>plain HTML</em>.
      {% endblock %}
    {% endembed %}
  {% endblock %}
{% endembed %}
twig-->

## API

<!--twig
{{ include("@tch/includes/api-table/api-table.html.twig", {
  properties: {
    specific: [
      {
        name: "heading_level",
        value: "2–6",
        type: "string",
        description: "The <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements' title='<h1>–<h6>: The HTML Section Heading elements'>HTML heading level</a> of the panel toggle buttons. Not strictly required, but recommended to preserve the accordion content's place in the overall document outline.",
        required: "no",
      },
      {
        name: "sections",
        value: "—",
        type: "array",
        description: "An array of objects containing information for an accordion section.",
        required: "yes",
      },
      {
        name: "sections[].heading",
        value: "—",
        type: "string",
        description: "The heading of the accordion section.",
        required: "yes",
      },
      {
        name: "sections[].content",
        value: "—",
        type: "string",
        description: "The plain text content of the accordion section. Only required if the <code>block</code> property is not used.",
        required: "no",
      },
      {
        name: "sections[].block",
        value: "—",
        type: "string",
        description: "The name of a custom block used as a content slot (must be used with an <code>embed</code>, see <a href='#slots'>&sect; Slots</a>). Only required if the <code>content</code> property is not used.",
        required: "no",
      },
    ],
    global: [
      {
        name: "modifiers",
        value: "<ul>
          <li><code>multiselectable</code></li>
        </ul>",
        type: "array",
        description: "Modifiers specific to the accordion component.",
        required: "no",
      },
      {
        name: "custom_classes",
        value: "—",
        type: "array",
        description: "Custom classes to add to the component's root element. This may be useful for adding global utilities or custom modifiers.",
        required: "no",
      },
      {
        name: "custom_attributes",
        value: "—",
        type: "array",
        description: "Custom attributes to add to the component's root element. This may be useful for adding custom JavaScript hooks.",
        required: "no",
      },
    ],
  }
}) }}
twig-->

## Citations
<!--twig {{ include("@tch/components/footnotes/footnotes.html.twig") }} twig-->

## Further reading

Additional research, techniques, and guidelines considered in the creation of this component.

* [WAI-ARIA Authoring Practices 1.2 &sect; 3.1 Accordion](https://www.w3.org/TR/wai-aria-practices-1.2/#accordion) — W3.org
* [Progressive Disclosure](https://www.nngroup.com/articles/progressive-disclosure/) — Nielsen Norman Group

<!--
* https://www.nngroup.com/articles/accordion-icons/ 
* https://www.nngroup.com/articles/accordions-complex-content/
* https://www.nngroup.com/articles/auto-forwarding/
* https://www.nngroup.com/articles/progressive-disclosure/
* https://www.nngroup.com/articles/timing-exposing-content/
* https://www.nngroup.com/articles/in-page-links/ &sect; Accordions vs in-page links
* https://www.nngroup.com/articles/mobile-accordions/
* https://inclusive-components.design/collapsible-sections/
* https://designsystem.digital.gov/components/accordion/
* https://design-system.service.gov.uk/components/accordion/
* https://www.sarasoueidan.com/blog/accordion-markup/
* https://www.scottohara.me/blog/2017/10/25/accordion-release.html
* https://www.hassellinclusion.com/blog/accessible-accordion-pattern/
* https://www.carbondesignsystem.com/components/accordion/usage/
* https://www.smashingmagazine.com/2017/06/designing-perfect-accordion-checklist/
-->

<!--
/**
 * @todo URL hash mechanism - https://inclusive-components.design/collapsible-sections/
 * @todo Test mobile experience. Possibly make open accordion heading sticky, and possibly scroll the accordion heading to the top of the viewport on activation?
 */
-->