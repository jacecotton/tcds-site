<!--lead
  Accordions collapse content under associated headings. Users can then click the headings to disclose the content.
lead-->

<!--twig
{% embed "@tch/includes/example.html.twig" %}
{% block content %}
<tcds-accordion>
  <tcds-accordion-section label="Example section 1">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </p>
  </tcds-accordion-section>
  <tcds-accordion-section label="Example section 2">
    <p>
      Lorem ipsum is simply dummy text of the printing and typesetting
      industry. Lorem ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of 
      type and scrambled it to make a type specimen book.
    </p>
  </tcds-accordion-section>
  <tcds-accordion-section label="Example section 3">
    <p>
      Contrary to popular belief, Lorem Ipsum is not simply random text.
      It has roots in a piece of classical Latin literature from 45 BC,
      making it over two millennia old.
    </p>
  </tcds-accordion-section>
</tcds-accordion>
{% endblock %}
{% endembed %}
twig-->

## Best practices
**Use specific but concise section labels.** There is an inherent [interaction cost](https://www.nngroup.com/articles/interaction-cost-definition/ "Interaction Cost - Nielsen Norman Group") to Accordions that may cause users to miss or ignore the content. Ensure your labels are concise enough to be read quickly, but descriptive enough to provide a strong [information scent](https://www.nngroup.com/articles/information-scent/).

### When to use
**Progressive disclosure.** When it would be more helpful to present a user with a choice before revealing content within a page. Sometimes, only certain sections of content on a page are likely to be relevant to a user, even if all the sections do belong on the page due to the nature of the topic (like with a "Frequently Asked Questions" page).

**Navigation assistance.** Sometimes, a page may become too long to be comfortably navigated. If it cannot be simplified or split into multiple pages, an accordion can help condense content to make it less cumbersome to navigate.

### When not to use
**Low engagement or low discoverability.** If there is evidence to suggest users cannot or are not accessing the content they're looking for, show it by default.

**The use case fits a different pattern better.** Consider one of the following:

* [Tabs](/components/tabs), which are more useful for quick comparison between different content of the same information type. Tabs do not move position when selected, making navigation between them faster and easier.
* [Table of Contents](/components/table-of-contents), which works better for navigating content that is expected to more-or-less be read in full and in sequence.<span data-footnote>["Anchors OK? Re-Assessing In-Page Links"](https://www.nngroup.com/articles/in-page-links/) — Nielsen Norman Group</span>
* [Details](/primitives/details), which work better for collapsing a single, independent section.

## Usage
### Multiselectable
To allow multiple panels to open at one time, set the [`mode` property](#mode-property) to `multiselectable`.

As a usability requirement, controls to expand or collapse all panels at once are automatically added.

<!--twig
{% embed "@tch/includes/example.html.twig" %}
{% block content %}
<tcds-accordion mode="multiselectable">
  <tcds-accordion-section label="Multiselectable section 1">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </p>
  </tcds-accordion-section>
  <tcds-accordion-section label="Multiselectable section 2">
    <p>
      Lorem ipsum is simply dummy text of the printing and typesetting
      industry. Lorem ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of 
      type and scrambled it to make a type specimen book.
    </p>
  </tcds-accordion-section>
  <tcds-accordion-section label="Multiselectable section 3">
    <p>
      Contrary to popular belief, Lorem Ipsum is not simply random text.
      It has roots in a piece of classical Latin literature from 45 BC,
      making it over two millennia old.
    </p>
  </tcds-accordion-section>
</tcds-accordion>
{% endblock %}
{% endembed %}
twig-->

## Implementation
### Progressive enhancement
The Accordion is by default
* vertically-stacked sections of plain content with headings

to which the component will be limited when
* the browser does not support the techniques required for the additional features, or
* the client fails to load the required assets (poor network connection, etc.)

### Accessibility
The Accordion component was implemented according to the [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/).

## API
### Accordion
<!--twig {{ include("@tch/includes/api.html.twig", {
  properties: [
    {
      name: "mode",
      type: "string",
      description: "Available option is <code>multiselectable</code>.",
      required: "no",
    },
  ],
}) }} twig-->

### Accordion section
<!--twig {{ include("@tch/includes/api.html.twig", {
  properties: [
    {
      name: "label",
      type: "string",
      description: "The label of the section.",
      required: "yes",
    },
    {
      name: "heading-level",
      type: "integer",
      description: "The heading level, 1 through 6, of the section headings. Default is 3.",
      required: "no",
    },
  ],
}) }} twig-->

## Citations
<!--twig {{ include("@tch/components/footnotes/footnotes.html.twig") }} twig-->

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