---
category: Components
title: Accordion
parent: Content
description: Accordions collapse content under headings, allowing users to more quickly scan a page and choose whether to see the content by clicking the heading.
---

<!--twig
{% embed "@tc/includes/example.twig" %}
{% block content %}
<tcds-accordion>
  <tcds-accordion-section>
    <h2 slot="title">Example section 1</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </p>
  </tcds-accordion-section>
  <tcds-accordion-section>
    <h2 slot="title">Example section 2</h2>
    <p>
      Lorem ipsum is simply dummy text of the printing and typesetting
      industry. Lorem ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of 
      type and scrambled it to make a type specimen book.
    </p>
  </tcds-accordion-section>
  <tcds-accordion-section>
    <h2 slot="title">Example section 3</h2>
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

## Guidance
### Best practices
**Use sentence case for accordion labels.** <tcds-fn-ref aria-details="w3">All-uppercase text is more difficult to read.</tcds-fn-ref> Furthermore, <tcds-fn-ref aria-details="webaim">screen readers sometimes interpret uppercase words as common initialisms (such as ADD or US), erroneously spelling them out letter by letter.</tcds-fn-ref>

**Avoid nesting accordions or other disclosure patterns.** While possible (see [&sect; Nested accordions](#nested-accordions)), needing to do so may indicate that your content is too complex and needs to be simplified.

#### When to use
**For audience tailoring or progressive disclosure.** When content may be relevant only to a particular audience, or only in a certain sequence, accordions allow users to focus on the information they need by scanning section headings to skip over less relevant sections. For example, "Frequently Asked Questions" sections.

**For navigation comfort or decluttering.** If a page becomes too long to comfortably navigate, and cannot be simplified or split into multiple pages, accordions can help better organize and condense content.

#### When not to use
**When most content is generally relevant.** If most users may find the information useful, at any time or in any sequence, avoid hiding it by default.

**When there is little content to collapse.** The inherent [interaction cost](https://www.nngroup.com/articles/interaction-cost-definition/) to accordions should be weighed against the space actually saved. Avoid using accordions simply to break up content or target specific audiences if the content is sparse or the distinctions minor.

**Low engagement or discoverability.** If there is evidence to suggest users are missing relevant content, show it by default.

**When a different component is a better fit.** For quickly comparing different pieces of content of the same information type, consider the [Tabs](/components/interface/tabs) component. For collapsing only a single, independent section, consider [Details](/components/content/details).

<tcds-fn-list>
  <ol>
    <li id="w3"><a href="https://www.w3.org/TR/low-vision-needs/#capitalization">Accessibility Requirements for People with Low Vision &sect; Capitalization</a> - W3C WAI (2016)</li>
    <li id="webaim"><a href="https://webaim.org/techniques/screenreader/#:~:text=Screen%20readers%20try%20to%20pronounce%20acronyms">Designing for Screen Reader Compatibility</a> - WebAIM (2017)</li>
  </ol>
</tcds-fn-list>

### Usage
#### Multiple open sections
To allow multiple sections to be opened at one time, add the [`multiple` attribute](#multiple-attribute).

<!--twig
{% embed "@tc/includes/example.twig" with {
  line_highlight: "1",
} %}
{% block content %}
<tcds-accordion multiple>
  <tcds-accordion-section>
    <h4 slot="title">Multiselectable example 1</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </p>
  </tcds-accordion-section>
  <tcds-accordion-section>
    <h4 slot="title">Multiselectable example 2</h4>
    <p>
      Lorem ipsum is simply dummy text of the printing and typesetting
      industry. Lorem ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of 
      type and scrambled it to make a type specimen book.
    </p>
  </tcds-accordion-section>
  <tcds-accordion-section>
    <h4 slot="title">Multiselectable example 3</h4>
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

#### Default open
To open a section by default, add the [`open` attribute](#open-attribute).

<!--twig
{% embed "@tc/includes/example.twig" with {
  line_highlight: "2",
} %}
{% block content %}
<tcds-accordion>
  <tcds-accordion-section open>
    <h4 slot="title">Default open example 1</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </p>
  </tcds-accordion-section>
  <tcds-accordion-section>
    <h4 slot="title">Default open example 2</h4>
    <p>
      Lorem ipsum is simply dummy text of the printing and typesetting
      industry. Lorem ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of 
      type and scrambled it to make a type specimen book.
    </p>
  </tcds-accordion-section>
  <tcds-accordion-section>
    <h4 slot="title">Default open example 3</h4>
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

Alternatively, you can "deep link" to open an accordion section by default. Each accordion section automatically derives an ID from its title, which you can append to the URL to scroll to and open the section. For example, click [`#deep-link-example`](#deep-link-example) to open the section below.

<!--twig
{% embed "@tc/includes/example.twig" with {
  line_highlight: "1",
} %}
{% block content %}
<tcds-accordion>
  <tcds-accordion-section>
    <h4 slot="title">Deep link example</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </p>
  </tcds-accordion-section>
</tcds-accordion>
{% endblock %}
{% block code %}
<a href="#deep-link-example">#deep-link-example</a>

<tcds-accordion>
  <tcds-accordion-section>
    <h4 slot="title">Deep link example</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </p>
  </tcds-accordion-section>
</tcds-accordion>
{% endblock %}
{% endembed %}
twig-->

Also note that collapsed accordion content is persistently findable via browser controls (<kbd>⌘</kbd>/<kbd>Ctrl</kbd> + <kbd>F</kbd>). Found matches will cause the containing section to open.

#### Nested accordions
You can nest accordions inside other accordions (though we [recommend against it](#best-practices)). Nested accordions will be indented relative to their containing section.

<!--twig
{% embed "@tc/includes/example.twig" with {
  line_highlight: "11",
} %}
{% block content %}
<tcds-accordion>
  <tcds-accordion-section open>
    <h4 slot="title">Parent section example 1</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </p>

    <tcds-accordion>
      <tcds-accordion-section>
        <h4 slot="title">Nested section example 1.1</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </tcds-accordion-section>
      <tcds-accordion-section>
        <h4 slot="title">Nested section example 1.2</h4>
        <p>
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of 
          type and scrambled it to make a type specimen book.
        </p>
      </tcds-accordion-section>
      <tcds-accordion-section>
        <h4 slot="title">Nested section example 1.3</h4>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text.
          It has roots in a piece of classical Latin literature from 45 BC,
          making it over two millennia old.
        </p>
      </tcds-accordion-section>
    </tcds-accordion>
  </tcds-accordion-section>
  <tcds-accordion-section>
    <h4 slot="title">Parent section example 2</h4>
    <p>
      Lorem ipsum is simply dummy text of the printing and typesetting
      industry. Lorem ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of 
      type and scrambled it to make a type specimen book.
    </p>
  </tcds-accordion-section>
  <tcds-accordion-section>
    <h4 slot="title">Parent section example 3</h4>
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

## Documentation
### API
#### `tcds-accordion`
<!--twig
{{ include("@tc/includes/api.twig", {
  attributes: [
    {
      name: "multiple",
      type: ["prop", "boolean"],
      description: "Whether to allow multiple sections to be opened at once.",
      required: "no",
    },
  ],
  slots: [
    {
      name: "(default)",
      multiple: "yes",
      required: "yes",
      description: "Use to insert <code>tcds-accordion-section</code> elements.",
    },
  ],
  methods: [
    {
      name: "showAll",
      description: "Open all accordion sections. Parameters:<br><br><code>filter</code> (<code>Boolean</code>): Callback function iterating over each <code>tcds-accordion-section</code> and returning a <code>Boolean</code> value for which sections to exclude from opening (see <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter'>Array.filter</a>).",
    },
    {
      name: "closeAll",
      description: "Close all accordion sections. Parameters:<br><br><code>filter</code> (<code>Boolean</code>): Callback function iterating over each <code>tcds-accordion-section</code> and returning a <code>Boolean</code> value for which sections to exclude from closing.",
    },
  ],
}) }}
twig-->

#### `tcds-accordion-section`
<!--twig
{{ include("@tc/includes/api.twig", {
  attributes: [
    {
      name: "open",
      type: ["state", "boolean"],
      description: "Whether the section is currently open.",
      required: "no",
    },
  ],
  slots: [
    {
      name: "(default)",
      multiple: "yes",
      required: "yes",
      description: "Use to insert accordion section content.",
    },
    {
      name: "title",
      multiple: "no",
      required: "yes",
      description: "Use a heading element (<code>h1</code>–<code>h6</code>) to define the accordion section's title and heading level.",
    },
  ],
  methods: [
    {
      name: "show",
      description: "Open this accordion section. Named <code>show</code> to avoid collision with <code>open</code> property.",
    },
    {
      name: "close",
      description: "Close this accordion section.",
    },
    {
      name: "toggle",
      description: "Open or close this accordion section if closed or opened, respectively.<br><br><code>test</code>: Alternatively, pass a value evaluating to a <code>Boolean</code> as an argument to determine whether to open or close the section (<code>true</code> = open, <code>false</code> = close).",
    },
  ],
}) }}
twig-->

### Resources
* Baseline conformance document: [ARIA Authoring Practices (APG) for accordion pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
* Source code on GitHub ([accordion](https://github.com/jacecotton/tcds/blob/main/src/02-components/accordion/), [accordion-section](https://github.com/jacecotton/tcds/blob/main/src/02-components/accordion/section/))