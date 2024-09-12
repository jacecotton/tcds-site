---
category: Components
title: Accordion
parent: Content
description: Accordions collapse content under headings, allowing users to selectively toggle the content according to their interest.
---

<!--twig
{% embed "@tc/includes/example.twig" %}
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
**Write section labels in sentence case.** All-uppercase text is slower and more difficult to read ([1](https://www.w3.org/TR/low-vision-needs/#capitalization)). Furthermore, screen readers sometimes interpret certain uppercased words as common initialisms (such as ADD or US), and may erroneously spell out those words letter by letter ([2](https://webaim.org/techniques/screenreader/#:~:text=Screen%20readers%20try%20to%20pronounce%20acronyms%2C%20if%20there%20are%20sufficient%20vowels/consonants%20to%20be%20pronounceable.%20Otherwise%2C%20they%20spell%20out%20the%20letters.)).

**Do not use the word "accordion" to refer end users to contained content.** The term "accordion" is a common web design convention, but is not part of the common English vernacular. To direct users to content inside an accordion, use more generic descriptors, like "collapsible sections".

### When to use
**Progressive disclosure.** In cases where only certain sections of content might be relevant to given audience segments, despite all sections being relevant to the topic of a page (e.g. a "Frequently Asked Questions" page), it is helpful to present a user with a choice before revealing content.

**Navigation assistance.** Sometimes, a page may become too long to be comfortably navigated. If it cannot be simplified or split into multiple pages, an accordion can help condense content to make it less cumbersome to navigate.

### When not to use
**Low engagement or low discoverability.** If there is evidence to suggest users cannot or are not accessing the content they're looking for, show it by default.

**A different component better fits the use case.** For quickly comparing different pieces of content of the same information type, consider the [tabs component](/components/tabs). For collapsing only a single, independent section, consider [details](/components/details).

## Usage
### Allow multiple sections
To allow multiple sections to be opened at one time, add the [`multiple` attribute](#multiple-attribute).

<!--twig
{% embed "@tc/includes/example.twig" with {
  line_highlight: "1",
} %}
{% block code %}
<tcds-accordion multiple>
  <tcds-accordion-section label="Multiselectable example 1">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </p>
  </tcds-accordion-section>
  <tcds-accordion-section label="Multiselectable example 2">
    <p>
      Lorem ipsum is simply dummy text of the printing and typesetting
      industry. Lorem ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of 
      type and scrambled it to make a type specimen book.
    </p>
  </tcds-accordion-section>
  <tcds-accordion-section label="Multiselectable example 3">
    <p>
      Contrary to popular belief, Lorem Ipsum is not simply random text.
      It has roots in a piece of classical Latin literature from 45 BC,
      making it over two millennia old.
    </p>
  </tcds-accordion-section>
</tcds-accordion>
{% endblock %}
{% block content %}
<tcds-accordion multiple heading-level="4">
  <tcds-accordion-section label="Multiselectable example 1">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </p>
  </tcds-accordion-section>
  <tcds-accordion-section label="Multiselectable example 2">
    <p>
      Lorem ipsum is simply dummy text of the printing and typesetting
      industry. Lorem ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of 
      type and scrambled it to make a type specimen book.
    </p>
  </tcds-accordion-section>
  <tcds-accordion-section label="Multiselectable example 3">
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

### Default open
To open a section by default, add the [`open` attribute](#open-attribute).

<!--twig
{% embed "@tc/includes/example.twig" with {
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