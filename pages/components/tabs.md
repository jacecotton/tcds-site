<!--lede
  Tabs allow users to switch between panels of content from a horizontal list of labels. They enable quick comparison between different pieces of content within the same context and of the same information type.
lede-->

<!--twig
{% embed "@tch/includes/example.twig" %}
{% block code %}
<tcds-tabs>
  <tcds-tab label="Example tab 1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
  </tcds-tab>
  <tcds-tab label="Example tab 2">
    Lorem ipsum is simply dummy text of the printing and typesetting
    industry. Lorem ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of 
    type and scrambled it to make a type specimen book.
  </tcds-tab>
  <tcds-tab label="Example tab 3">
    Contrary to popular belief, Lorem Ipsum is not simply random text.
    It has roots in a piece of classical Latin literature from 45 BC,
    making it over two millennia old.
  </tcds-tab>
</tcds-tabs>
{% endblock %}
{% block content %}
<tcds-tabs>
  <tcds-tab label="Example tab 1">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.</p>
  </tcds-tab>
  <tcds-tab label="Example tab 2">
    <p>Lorem ipsum is simply dummy text of the printing and typesetting
    industry. Lorem ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of 
    type and scrambled it to make a type specimen book.</p>
  </tcds-tab>
  <tcds-tab label="Example tab 3">
    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
    It has roots in a piece of classical Latin literature from 45 BC,
    making it over two millennia old.</p>
  </tcds-tab>
</tcds-tabs>
{% endblock %}
{% endembed %}
twig-->

## Best practices
**Use specific but concise tab labels.** There is an inherent [interaction cost](https://www.nngroup.com/articles/interaction-cost-definition/ "Interaction Cost - Nielsen Norman Group") to tabs that may cause users to miss or ignore the content. Aim for labels that are concise enough to be read quickly, but descriptive enough to provide a strong [information scent](https://www.nngroup.com/articles/information-scent/).

**Use sentence case.** All-uppercase text is slower and more difficult to read for all users ([1](https://www.w3.org/TR/low-vision-needs/#capitalization)) but particularly for those with dyslexia ([2](https://www.bdadyslexia.org.uk/advice/employers/creating-a-dyslexia-friendly-workplace/dyslexia-friendly-style-guide#:~:text=Avoid%20using%20all%20capital%20letters%20and%20uppercase%20letters%20for%20continuous%20text.%20Lower%20case%20letters%20are%20easier%20to%20read.)). Furthermore, screen readers sometimes interpret certain uppercased words as common initialisms (such as ADD or US), and may erroneously spell out those words letter by letter ([3](https://webaim.org/techniques/screenreader/#:~:text=Screen%20readers%20try%20to%20pronounce%20acronyms%2C%20if%20there%20are%20sufficient%20vowels/consonants%20to%20be%20pronounceable.%20Otherwise%2C%20they%20spell%20out%20the%20letters.)).

### When to use
**Presenting different pieces of content of the same information category or type.** Tabs are most useful for quickly comparing alternative pieces of content belonging to the same category (e.g. switching between different campus locations, progressing through different steps in the same sequence, etc.) They allow users to select the version of a piece of content most relevant to them, rather than being presented with all available versions.

### When not to use
**All tab content is intended for a page's general audience.** Because of the interaction cost, tabs past the first few may receive less engagement. Use tabs to selectively disclose information relevant to a targeted subset of the page's audience. For a wider audience, burying general purpose content behind a tab can hinder discovery.

**Comparing content with minor variations.** Each content panel should include <em>distinct</em> content belonging to the same information category as its peer panels, not the same information with certain differences.

**A different component better fits the use case.** For sequentially disclosing pieces of content that are not necessarily interrelated, the [accordion component](/components/accordion) may be a better choice.

## Usage
### Small tabs
Small tabs can be created by setting the [`size` attribute](#size-attribute) to `small`. They may be most useful in interfaces as opposed to web pages.

<!--twig
{% embed "@tch/includes/example.twig" with {
  line_highlight: "1",
} %}
{% block code %}
<tcds-tabs size="small">
  <tcds-tab label="Small tab 1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
  </tcds-tab>
  <tcds-tab label="Small tab 2">
    Lorem ipsum is simply dummy text of the printing and typesetting
    industry. Lorem ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of 
    type and scrambled it to make a type specimen book.
  </tcds-tab>
  <tcds-tab label="Small tab 3">
    Contrary to popular belief, Lorem Ipsum is not simply random text.
    It has roots in a piece of classical Latin literature from 45 BC,
    making it over two millennia old.
  </tcds-tab>
</tcds-tabs>
{% endblock %}
{% block content %}
<tcds-tabs size="small">
  <tcds-tab label="Small tab 1">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.</p>
  </tcds-tab>
  <tcds-tab label="Small tab 2">
    <p>Lorem ipsum is simply dummy text of the printing and typesetting
    industry. Lorem ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of 
    type and scrambled it to make a type specimen book.</p>
  </tcds-tab>
  <tcds-tab label="Small tab 3">
    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
    It has roots in a piece of classical Latin literature from 45 BC,
    making it over two millennia old.</p>
  </tcds-tab>
</tcds-tabs>
{% endblock %}
{% endembed %}
twig-->

### Large tabs
Large tabs can be created by setting the [`size` attribute](#size-attribute) to `large`. They may be most useful in landing page sections, justifying the tablist across the available space.

<!--twig
{% embed "@tch/includes/example.twig" with {
  line_highlight: "1",
} %}
{% block code %}
<tcds-tabs size="large">
  <tcds-tab label="Large tab 1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
  </tcds-tab>
  <tcds-tab label="Large tab 2">
    Lorem ipsum is simply dummy text of the printing and typesetting
    industry. Lorem ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of 
    type and scrambled it to make a type specimen book.
  </tcds-tab>
  <tcds-tab label="Large tab 3">
    Contrary to popular belief, Lorem Ipsum is not simply random text.
    It has roots in a piece of classical Latin literature from 45 BC,
    making it over two millennia old.
  </tcds-tab>
</tcds-tabs>
{% endblock %}
{% block content %}
<tcds-tabs size="large">
  <tcds-tab label="Large tab 1">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.</p>
  </tcds-tab>
  <tcds-tab label="Large tab 2">
    <p>Lorem ipsum is simply dummy text of the printing and typesetting
    industry. Lorem ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of 
    type and scrambled it to make a type specimen book.</p>
  </tcds-tab>
  <tcds-tab label="Large tab 3">
    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
    It has roots in a piece of classical Latin literature from 45 BC,
    making it over two millennia old.</p>
  </tcds-tab>
</tcds-tabs>
{% endblock %}
{% endembed %}
twig-->

### Initial active
To set an initial active tab different from the default first tab, set the [`active` attribute](#active-attribute) on the desired tab.

<!--twig
{% embed "@tch/includes/example.twig" with {
  line_highlight: "8",
} %}
{% block code %}
<tcds-tabs>
  <tcds-tab label="Tab 1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
  </tcds-tab>
  <tcds-tab active label="Tab 2">
    Lorem ipsum is simply dummy text of the printing and typesetting
    industry. Lorem ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of 
    type and scrambled it to make a type specimen book.
  </tcds-tab>
  <tcds-tab label="Tab 3">
    Contrary to popular belief, Lorem Ipsum is not simply random text.
    It has roots in a piece of classical Latin literature from 45 BC,
    making it over two millennia old.
  </tcds-tab>
</tcds-tabs>
{% endblock %}
{% block content %}
<tcds-tabs>
  <tcds-tab label="Tab 1">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.</p>
  </tcds-tab>
  <tcds-tab active label="Tab 2">
    <p>Lorem ipsum is simply dummy text of the printing and typesetting
    industry. Lorem ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of 
    type and scrambled it to make a type specimen book.</p>
  </tcds-tab>
  <tcds-tab label="Tab 3">
    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
    It has roots in a piece of classical Latin literature from 45 BC,
    making it over two millennia old.</p>
  </tcds-tab>
</tcds-tabs>
{% endblock %}
{% endembed %}
twig-->

If multiple tabs have `active`, only the first will be active and the attribute will be removed from the others.

To make no tab active by default, set the [`inactive` attribute](#inactive-attribute).

<!--twig
{% embed "@tch/includes/example.twig" with {
  line_highlight: "1",
} %}
{% block code %}
<tcds-tabs inactive>
  <tcds-tab label="Tab 1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
  </tcds-tab>
  <tcds-tab label="Tab 2">
    Lorem ipsum is simply dummy text of the printing and typesetting
    industry. Lorem ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of 
    type and scrambled it to make a type specimen book.
  </tcds-tab>
  <tcds-tab label="Tab 3">
    Contrary to popular belief, Lorem Ipsum is not simply random text.
    It has roots in a piece of classical Latin literature from 45 BC,
    making it over two millennia old.
  </tcds-tab>
</tcds-tabs>
{% endblock %}
{% block content %}
<tcds-tabs inactive>
  <tcds-tab label="Tab 1">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.</p>
  </tcds-tab>
  <tcds-tab label="Tab 2">
    <p>Lorem ipsum is simply dummy text of the printing and typesetting
    industry. Lorem ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of 
    type and scrambled it to make a type specimen book.</p>
  </tcds-tab>
  <tcds-tab label="Tab 3">
    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
    It has roots in a piece of classical Latin literature from 45 BC,
    making it over two millennia old.</p>
  </tcds-tab>
</tcds-tabs>
{% endblock %}
{% endembed %}
twig-->

## Styling
### tcds-tab
<table>
  <tr>
    <th>Custom property</th>
    <th>Description</th>
    <th>Default value</th>
  </tr>
  <tr>
    <td><code style="white-space: nowrap">--tcds-tab-padding-top</code></td>
    <td><code>padding-top</code> of the tab panel.</td>
    <td><code>var(--tcds-space-normal)</code></td>
  </tr>
</table>

## API
### tcds-tabs
<!--twig {{ include("@tch/includes/api.twig", {
  attributes: [
    {
      name: "size",
      type: ["prop", "string"],
      description: "One of <code>small</code> or <code>large</code>.",
      required: "no",
    },
    {
      name: "inactive",
      type: ["prop", "boolean"],
      description: "No tab is active by default.",
      required: "no",
    },
  ],
  slots: [
    {
      name: "(default)",
      multiple: "no",
      description: "<code>tcds-tab</code> elements.",
      required: "no",
    },
  ],
}) }} twig-->

### tcds-tab
<!--twig {{ include("@tch/includes/api.twig", {
  attributes: [
    {
      name: "label",
      type: ["prop", "string"],
      description: "The label of the content panel.",
      required: "yes",
    },
    {
      name: "active",
      type: ["state", "boolean"],
      description: "Content panel is active.",
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
}) }} twig-->

## Resources
This component was architected in conformance with [ARIA Authoring Practices (APG) for tabs pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/).

Source code on GitHub ([tabs](https://github.com/jacecotton/tcds/blob/main/components/tabs/), [tab](https://github.com/jacecotton/tcds/blob/main/components/tab/))