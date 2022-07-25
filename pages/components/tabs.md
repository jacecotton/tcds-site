<!--lead
  Tabs allow users to switch between panels of content from a horizontal list of tab buttons. They enable quick comparison between different pieces of content of the same context and information type.
lead-->

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" %}
{% block content %}
<tcds-tabs>
  <tcds-tab label="Example tab 1">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </p>
  </tcds-tab>
  <tcds-tab label="Example tab 2">
    <p>
      Lorem ipsum is simply dummy text of the printing and typesetting
      industry. Lorem ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of 
      type and scrambled it to make a type specimen book.
    </p>
  </tcds-tab>
  <tcds-tab label="Example tab 3">
    <p>
      Contrary to popular belief, Lorem Ipsum is not simply random text.
      It has roots in a piece of classical Latin literature from 45 BC,
      making it over two millennia old.
    </p>
  </tcds-tab>
</tcds-tabs>
{% endblock %}
{% endembed %}
twig-->

## Best practices

**Use specific but concise tab labels.** There is an inherent [interaction cost](https://www.nngroup.com/articles/interaction-cost-definition/ "Interaction Cost - Nielsen Norman Group") to tabs that may cause users to miss or ignore the content. Ensure your labels are concise enough to be read quickly, but descriptive enough to provide a strong [information scent](https://www.nngroup.com/articles/information-scent/).

**Use sentence case.** All-uppercase text is slower and more difficult to read for all users,<span data-footnote>[Accessibility Requirements for People with Low Vision § 3.3.4 Capitalization](https://www.w3.org/TR/low-vision-needs/#capitalization) — W3.org</span> but particularly for those with dyslexia.<span data-footnote>[Creating a dyslexia friendly workplace](https://www.bdadyslexia.org.uk/advice/employers/creating-a-dyslexia-friendly-workplace/dyslexia-friendly-style-guide#:~:text=Avoid%20text%20in%20uppercase/capital%20letters%20and%20small%20caps%2C%20which%20can%20be%20less%20familiar%20to%20the%20reader%20and%20harder%20to%20read.) — British Dyslexia Association</span> Furthermore, screen readers sometimes interpret certain uppercased words as common initialisms (such as ADD or US), and may erroneously spell out those words letter by letter.<span data-footnote>[Designing for Screen Reader Compatibility § How Screen Readers Read Content](https://webaim.org/techniques/screenreader/#:~:text=Screen%20readers%20try%20to%20pronounce%20acronyms%2C%20if%20there%20are%20sufficient%20vowels/consonants%20to%20be%20pronounceable.%20Otherwise%2C%20they%20spell%20out%20the%20letters.) — WebAIM</span>

### When to use

**Presenting different pieces of content of the same information category or type.** Tabs are most useful for quickly comparing alternative pieces of content belonging to the same category (e.g. switching between different campus locations, progressing through different steps in the same sequence, etc.) They allow users to select the version of a piece of content most relevant to them, rather than being presented with all available versions.

### When not to use

**All tab content is intended for a page's general audience.** Because of the interaction cost, tabs past the first few may receive less engagement. Use tabs to selectively disclose information relevant to a targeted subset of the page's audience. For a wider audience, burying general purpose content in a tab can hinder discovery.

**Comparing content with minor variations.** Each content panel should include <em>distinct</em> content belonging to the same information category as its peer panels, not the same information with certain differences.

**A different component better fits the use case.** For sequentially disclosing pieces of content that are not necessarily interrelated, the [Accordion](/components/accordion) may be a better choice. To allow for navigating content that is expected to be more-or-less read in full and in sequence, consider a [Table of Contents](/components/table-of-contents).<span data-footnote>["Anchors OK? Re-Assessing In-Page Links"](https://www.nngroup.com/articles/in-page-links/) — Nielsen Norman Group</span>

## Usage
Tabs are native web components usable through the `<tcds-tabs>` and `<tcds-tab>` custom elements. Each tab is labeled with an attribute in the tab element, e.g. `<tcds-tab label="My tab">`. 

### Small tabs
For fitting tabs into compact spaces (useful in interfaces as opposed to web pages), the `size` attribute may be set to `small`.

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" %}
{% block content %}
<tcds-tabs size="small">
  <tcds-tab label="Small tab 1">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </p>
  </tcds-tab>
  <tcds-tab label="Small tab 2">
    <p>
      Lorem ipsum is simply dummy text of the printing and typesetting
      industry. Lorem ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of 
      type and scrambled it to make a type specimen book.
    </p>
  </tcds-tab>
  <tcds-tab label="Small tab 3">
    <p>
      Contrary to popular belief, Lorem Ipsum is not simply random text.
      It has roots in a piece of classical Latin literature from 45 BC,
      making it over two millennia old.
    </p>
  </tcds-tab>
</tcds-tabs>
{% endblock %}
{% endembed %}
twig-->

### Large tabs
To make tabs more prominent (useful for landing page sections), the `size` attribute may be set to `large`. This also justifies the tablist across the available space.

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" %}
{% block content %}
<tcds-tabs size="large">
  <tcds-tab label="Large tab 1">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </p>
  </tcds-tab>
  <tcds-tab label="Large tab 2">
    <p>
      Lorem ipsum is simply dummy text of the printing and typesetting
      industry. Lorem ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of 
      type and scrambled it to make a type specimen book.
    </p>
  </tcds-tab>
  <tcds-tab label="Large tab 3">
    <p>
      Contrary to popular belief, Lorem Ipsum is not simply random text.
      It has roots in a piece of classical Latin literature from 45 BC,
      making it over two millennia old.
    </p>
  </tcds-tab>
</tcds-tabs>
{% endblock %}
{% endembed %}
twig-->

## Implementation
### Responsive behavior
Where the screen is too small to accomodate all the tab buttons, the tab list scrolls horizontally. Users on smaller devices can access all the tabs by swiping within the tab list and tapping on the desired tab.

The responsive behavior of each tab panel's content is not handled by the Tabs component itself, but instead by whatever content or components may be nested inside.

### Progressive enhancement
If the JavaScript fails to execute and register the custom elements that create the tabs, the tab content and labels will still be accessible as plain sections with headings. This will be the result in browsers that do not support the JavaScript techniques used to program the component, as well as clients that fail to load the required assets.

### Accessibility
The Tabs component was designed and implemented according to the [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/). The `<tcds-tab>` custom element takes care of all the required implementation details, which are included here only for documentation purposes.

When a tab (a `button` with a [`tab` ARIA role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role)) is activated, it is the only button in the tab list (a container with a [`tablist` ARIA role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tablist_role)) that can be focused using the "tab" key. Next in the tabbing order is the active tab's associated panel (a `section` element with a [`tabpanel` ARIA role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tabpanel_role), associated with its tab with corresponding `id` and `aria-controls` attribute values), so as to not require that keyboard users navigate through the tablist just to get to the content.

To activate the next tab, keyboard users press the right and left arrow keys while focusing on a tab, which will focus on and automatically activate the appropriate tab. If selecting the "next" tab when focusing on the last tab, the first tab will activate. Vice versa, selecting the "previous" tab when focusing on the first tab will activate the last tab.

Tab activation is handled by setting the `aria-expanded` attribute to `true` on the selected `tab`, and to `false` on the others. All tabpanels except the currently selected one receive a `hidden` attribute.

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
      <th colspan="4">Tabs</th>
    </tr>
    <tr>
      <td><code>size</code></td>
      <td>string</td>
      <td>One of <code>small</code> or <code>large</code> to affect the size of the tabs.</td>
      <td>no</td>
    </tr>
    <tr>
      <th colspan="4">Tab</th>
    </tr>
    <tr>
      <td><code>label</code></td>
      <td>string</td>
      <td>The label of the tab button.</td>
      <td>yes</td>
    </tr>
  </tbody>
</table>

Source code: [Tabs.js](https://github.com/jacecotton/tcds/blob/main/assets/scripts/components/Tabs.js), [tabs.scss](https://github.com/jacecotton/tcds/blob/main/assets/styles/%40tcds/components/tabs.scss)

## Citations
<!--twig {{ include("@tch/components/footnotes/footnotes.html.twig") }} twig-->

<!--
Other design system/pattern library implementations:
https://ant.design/components/tabs/
https://www.lightningdesignsystem.com/components/tabs/
https://a11y-101.com/development/carousels
https://material.io/components/tabs
https://polaris.shopify.com/components/navigation/tabs#navigation
https://www.carbondesignsystem.com/components/tabs/usage/
https://atlassian.design/components/tabs/examples
https://baseweb.design/components/tabs/
https://ux.mailchimp.com/patterns/navigation#tabs
https://design.gitlab.com/components/tabs
http://react.etrade.design/?selectedKind=Tabs&selectedStory=Tabs%20documentation&full=0&addons=1&stories=1&panelRight=1&addonPanel=storybooks%2Fstorybook-addon-knobs
https://design.wonderflow.ai/components/navigation/tab
https://garden.zendesk.com/components/tabs
-->