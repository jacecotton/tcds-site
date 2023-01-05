<!--lede
  Accordions collapse sections of content under associated headings. Users can then click the headings to disclose the content.
lede-->

<!--twig
{% embed "@tch/includes/example.twig" %}
{% block code %}
<tcds-accordion>
  <tcds-accordion-section label="Example section 1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
  </tcds-accordion-section>
  <tcds-accordion-section label="Example section 2">
    Lorem ipsum is simply dummy text of the printing and typesetting
    industry. Lorem ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of 
    type and scrambled it to make a type specimen book.
  </tcds-accordion-section>
  <tcds-accordion-section label="Example section 3">
    Contrary to popular belief, Lorem Ipsum is not simply random text.
    It has roots in a piece of classical Latin literature from 45 BC,
    making it over two millennia old.
  </tcds-accordion-section>
</tcds-accordion>
{% endblock %}
{% block content %}
<tcds-accordion heading-level="2">
  <tcds-accordion-section label="Example section 1">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.</p>
  </tcds-accordion-section>
  <tcds-accordion-section label="Example section 2">
    <p>Lorem ipsum is simply dummy text of the printing and typesetting
    industry. Lorem ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of 
    type and scrambled it to make a type specimen book.</p>
  </tcds-accordion-section>
  <tcds-accordion-section label="Example section 3">
    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
    It has roots in a piece of classical Latin literature from 45 BC,
    making it over two millennia old.</p>
  </tcds-accordion-section>
</tcds-accordion>
{% endblock %}
{% endembed %}
twig-->

## Best practices
**Use specific but concise section labels.** There is an inherent [interaction cost](https://www.nngroup.com/articles/interaction-cost-definition/ "Interaction Cost - Nielsen Norman Group") to accordions that may cause users to miss or ignore the content. Aim for labels that are concise enough to be read quickly, but descriptive enough to provide a strong [information scent](https://www.nngroup.com/articles/information-scent/ "Information Scent - Nielsen Norman Group").

**Use sentence case.** All-uppercase text is slower and more difficult to read for all users ([1](https://www.w3.org/TR/low-vision-needs/#capitalization)) but particularly for those with dyslexia ([2](https://www.bdadyslexia.org.uk/advice/employers/creating-a-dyslexia-friendly-workplace/dyslexia-friendly-style-guide#:~:text=Avoid%20text%20in%20uppercase/capital%20letters%20and%20small%20caps%2C%20which%20can%20be%20less%20familiar%20to%20the%20reader%20and%20harder%20to%20read.)). Furthermore, screen readers sometimes interpret certain uppercased words as common initialisms (such as ADD or US), and may erroneously spell out those words letter by letter ([3](https://webaim.org/techniques/screenreader/#:~:text=Screen%20readers%20try%20to%20pronounce%20acronyms%2C%20if%20there%20are%20sufficient%20vowels/consonants%20to%20be%20pronounceable.%20Otherwise%2C%20they%20spell%20out%20the%20letters.)).

**Do not use the word "accordion" to refer to contained content.** The term "accordion" is a common web design convention, but is not part of the common English vernacular. To direct users to content inside an accordion, use more generic descriptors, like "collapsible sections".

### When to use
**Progressive disclosure.** In cases where only certain sections of content might be relevant to given audience segments, despite all sections being relevant to the topic of a page (e.g. a "Frequently Asked Questions" page), it is helpful to present a user with a choice before revealing content.

**Navigation assistance.** Sometimes, a page may become too long to be comfortably navigated. If it cannot be simplified or split into multiple pages, an accordion can help condense content to make it less cumbersome to navigate.

### When not to use
**Low engagement or low discoverability.** If there is evidence to suggest users cannot or are not accessing the content they're looking for, show it by default.

**A different component better fits the use case.** For quickly comparing different pieces of content of the same information type, consider the [tabs component](/components/tabs). For collapsing only a single, independent section, consider [details](/content/details).

## Usage
### Allow multiple sections
To allow multiple sections to be opened at one time, add the [`multiple` attribute](#multiple-attribute).

<!--twig
{% embed "@tch/includes/example.twig" with {
  line_highlight: "1",
} %}
{% block code %}
<tcds-accordion multiple>
  <tcds-accordion-section label="Multiselectable example 1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
  </tcds-accordion-section>
  <tcds-accordion-section label="Multiselectable example 2">
    Lorem ipsum is simply dummy text of the printing and typesetting
    industry. Lorem ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of 
    type and scrambled it to make a type specimen book.
  </tcds-accordion-section>
  <tcds-accordion-section label="Multiselectable example 3">
    Contrary to popular belief, Lorem Ipsum is not simply random text.
    It has roots in a piece of classical Latin literature from 45 BC,
    making it over two millennia old.
  </tcds-accordion-section>
</tcds-accordion>
{% endblock %}
{% block content %}
<tcds-accordion multiple heading-level="4">
  <tcds-accordion-section label="Multiselectable example 1">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.</p>
  </tcds-accordion-section>
  <tcds-accordion-section label="Multiselectable example 2">
    <p>Lorem ipsum is simply dummy text of the printing and typesetting
    industry. Lorem ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of 
    type and scrambled it to make a type specimen book.</p>
  </tcds-accordion-section>
  <tcds-accordion-section label="Multiselectable example 3">
    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
    It has roots in a piece of classical Latin literature from 45 BC,
    making it over two millennia old.</p>
  </tcds-accordion-section>
</tcds-accordion>
{% endblock %}
{% endembed %}
twig-->

### Default open
To open a section by default, add the [`open` attribute](#open-attribute).

<!--twig
{% embed "@tch/includes/example.twig" with {
  line_highlight: "2",
} %}
{% block code %}
<tcds-accordion>
  <tcds-accordion-section label="Default open example 1" open>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
  </tcds-accordion-section>
  <tcds-accordion-section label="Default open example 2">
    Lorem ipsum is simply dummy text of the printing and typesetting
    industry. Lorem ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of 
    type and scrambled it to make a type specimen book.
  </tcds-accordion-section>
  <tcds-accordion-section label="Default open example 3">
    Contrary to popular belief, Lorem Ipsum is not simply random text.
    It has roots in a piece of classical Latin literature from 45 BC,
    making it over two millennia old.
  </tcds-accordion-section>
</tcds-accordion>
{% endblock %}
{% block content %}
<tcds-accordion heading-level="4">
  <tcds-accordion-section open label="Default open example 1">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.</p>
  </tcds-accordion-section>
  <tcds-accordion-section label="Default open example 2">
    <p>Lorem ipsum is simply dummy text of the printing and typesetting
    industry. Lorem ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of 
    type and scrambled it to make a type specimen book.</p>
  </tcds-accordion-section>
  <tcds-accordion-section label="Default open example 3">
    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
    It has roots in a piece of classical Latin literature from 45 BC,
    making it over two millennia old.</p>
  </tcds-accordion-section>
</tcds-accordion>
{% endblock %}
{% endembed %}
twig-->

If `multiple` is not added to the parent but multiple sections have `open`, only the first will be opened and the attribute will be removed from the others.

## Accessibility
### Heading level
By default, the label for each accordion section is an H3. When using an accordion, consider the document outline, and change the heading level appropriately using the [`heading-level` attribute](#heading-level-attribute).

## API
### tcds-accordion
<!--twig {{ include("@tch/includes/api.twig", {
  attributes: [
    {
      name: "multiple",
      type: ["prop", "boolean"],
      description: "Allows multiple sections to be open at one time, and renders controls for opening or closing all sections at once.",
      required: "no",
    },
    {
      name: "heading-level",
      type: ["prop", "string"],
      description: "A number 2 through 6, default 3.",
      required: "no",
    },
  ],
  slots: [
    {
      name: "(default)",
      multiple: "no",
      description: "<code>tcds-accordion-section</code> elements.",
      required: "no",
    },
  ],
  methods: [
    {
      name: "openAll",
      description: "Opens all content sections.",
    },
    {
      name: "closeAll",
      description: "Closes all content sections.",
    },
  ],
}) }} twig-->

### tcds-accordion-section
<!--twig {{ include("@tch/includes/api.twig", {
  attributes: [
    {
      name: "label",
      type: ["prop", "string"],
      description: "The section heading of the content panel.",
      required: "yes",
    },
    {
      name: "open",
      type: ["state", "boolean"],
      description: "Content panel is open.",
      required: "no",
    },
  ],
  slots: [
    {
      name: "(default)",
      multiple: "no",
      description: "Content slot for panel.",
      required: "no",
    },
  ],
  methods: [
    {
      name: "open",
      description: "Opens the content section.",
    },
    {
      name: "close",
      description: "Closes the content section.",
    },
    {
      name: "toggle",
      description: "Opens if closed, closes if open.",
    },
  ],
}) }} twig-->

## Resources
This component was architected in conformance with [ARIA Authoring Practices (APG) for accordion pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/).

Source code on GitHub ([accordion](https://github.com/jacecotton/tcds/blob/main/components/accordion/), [accordion-section](https://github.com/jacecotton/tcds/blob/main/components/accordion-section/))