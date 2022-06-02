<!--lead
  Tabs separate panels of content under a horizontal list of buttons (tabs), showing only one panel at a time. Tabs allow for quick comparison between different content of the same information type, without changing contexts.
lead-->

## Best practices

**Use specific but concise tab labels.** There is an inherent [interaction cost](https://www.nngroup.com/articles/interaction-cost-definition/ "Interaction Cost - Nielsen Norman Group") to tabs that may cause users to miss or ignore the content. Ensure your labels are concise enough to be read quickly, but descriptive enough to provide a strong [information scent](https://www.nngroup.com/articles/information-scent/).

**Use sentence case.** All-uppercase text is slower and more difficult to read for all users,<span data-footnote>[Accessibility Requirements for People with Low Vision § 3.3.4 Capitalization](https://www.w3.org/TR/low-vision-needs/#capitalization) — W3.org</span> but particularly for those with dyslexia.<span data-footnote>[Creating a dyslexia friendly workplace](https://www.bdadyslexia.org.uk/advice/employers/creating-a-dyslexia-friendly-workplace/dyslexia-friendly-style-guide#:~:text=Avoid%20text%20in%20uppercase/capital%20letters%20and%20small%20caps%2C%20which%20can%20be%20less%20familiar%20to%20the%20reader%20and%20harder%20to%20read.) — British Dyslexia Association</span> Furthermore, screen readers sometimes interpret certain uppercased words as common initialisms (such as ADD or US), and will spell out those words letter by letter.<span data-footnote>[Designing for Screen Reader Compatibility § How Screen Readers Read Content](https://webaim.org/techniques/screenreader/#:~:text=Screen%20readers%20try%20to%20pronounce%20acronyms%2C%20if%20there%20are%20sufficient%20vowels/consonants%20to%20be%20pronounceable.%20Otherwise%2C%20they%20spell%20out%20the%20letters.) — WebAIM</span>

### When to use

**Alternate between different content of comparable information type.** Because tabs switch views in-place and are listed on the same row, they are most useful for allowing comparison of content with parallel presentation and persistent context.

### When not to use

**All tab content is expected to be read by a page's general audience.** Because of the interaction cost, tabs past the first few may receive less engagement. Use tabs only to cater to a subset of the page's audience, who may be seeking a specific variation within a piece of content. For a wider audience, burying general purpose content in a tab can reduce discoverability.

**The use case fits a different pattern better.** Consider one of the following:

* [Accordion](/components/accordion), which works better for more sequential disclosure of content not necessarily interrelated.
* [Table of Contents](/components/table-of-contents), which works better for navigating content that is expected to be read in full and in sequence.<span data-footnote>["Anchors OK? Re-Assessing In-Page Links"](https://www.nngroup.com/articles/in-page-links/) — Nielsen Norman Group</span> They also provide a simpler overview to examine before scrolling.

## Examples
### Default tabs
<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" with {
  examples: {
    "Twig": '{{ include("@tcds/components/tabs/tabs.html.twig", {
  tabs: [
    {
      heading: "Example tab 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      heading: "Example tab 2",
      content: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      heading: "Example tab 3",
      content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
  ],
}) }}',
    "HTML": '<div class="Tabs" data-component="Tabs">
  <div role="tablist" aria-label="Tabs" class="Tabs__tablist">
    <button role="tab" id="example-tab-1-button" aria-controls="example-tab-1-content" class="Tabs__tab">Example tab 1</button>
    <button role="tab" id="example-tab-2-button" aria-controls="example-tab-2-content" class="Tabs__tab">Example tab 2</button>
    <button role="tab" id="example-tab-3-button" aria-controls="example-tab-3-content" class="Tabs__tab">Example tab 3</button>
  </div>
  <div data-component-part="tabpanels" class="Tabs__panels">
    <div role="tabpanel" id="example-tab-1-content" aria-labelledby="example-tab-1-button" class="Tabs__panel">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
    <div role="tabpanel" id="example-tab-2-content" aria-labelledby="example-tab-2-button" class="Tabs__panel">
      Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </div>
    <div role="tabpanel" id="example-tab-3-content" aria-labelledby="example-tab-3-button" class="Tabs__panel">
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
    </div>
  </div>
</div>',
  },
} %}
  {% block result %}
    {{ include("@tcds/components/tabs/tabs.html.twig", {
      tabs: [
        {
          heading: "Example tab 1",
          content: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
        },
        {
          heading: "Example tab 2",
          content: "<p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>",
        },
        {
          heading: "Example tab 3",
          content: "<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>",
        },
      ],
    }) }}
  {% endblock %}
{% endembed %}
twig-->

### Size variants
For fitting tabs into compact spaces (more useful in interfaces as opposed to web pages), the `small` modifier may be used.

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" with {
  examples: {
    "Twig": '{{ include("@tcds/components/tabs/tabs.html.twig", {
  tabs: [
    {
      heading: "Small tab 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      heading: "Small tab 2",
      content: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      heading: "Small tab 3",
      content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
  ],
  modifiers: ["small"],
}) }}',
    "HTML": '<div class="Tabs Tabs--small" data-component="Tabs">
  <div role="tablist" aria-label="Tabs" class="Tabs__tablist">
    <button role="tab" id="small-tab-1-button" aria-controls="small-tab-1-content" class="Tabs__tab">Small tab 1</button>
    <button role="tab" id="small-tab-2-button" aria-controls="small-tab-2-content" class="Tabs__tab">Small tab 2</button>
    <button role="tab" id="small-tab-3-button" aria-controls="small-tab-3-content" class="Tabs__tab">Small tab 3</button>
  </div>
  <div data-component-part="tabpanels" class="Tabs__panels">
    <div role="tabpanel" id="small-tab-1-content" aria-labelledby="small-tab-1-button" class="Tabs__panel">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
    <div role="tabpanel" id="small-tab-2-content" aria-labelledby="small-tab-2-button" class="Tabs__panel">
      Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </div>
    <div role="tabpanel" id="small-tab-3-content" aria-labelledby="small-tab-3-button" class="Tabs__panel">
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
    </div>
  </div>
</div>',
  },
} %}
  {% block result %}
    {{ include("@tcds/components/tabs/tabs.html.twig", {
      tabs: [
        {
          heading: "Small tab 1",
          content: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
        },
        {
          heading: "Small tab 2",
          content: "<p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>",
        },
        {
          heading: "Small tab 3",
          content: "<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>",
        },
      ],
      modifiers: ["small"],
    }) }}
  {% endblock %}
{% endembed %}
twig-->

To make tabs more prominent (useful for landing page sections), the `large` modifier may be used. This also justifies the tablist across the available space.

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" with {
  examples: {
    "Twig": '{{ include("@tcds/components/tabs/tabs.html.twig", {
  tabs: [
    {
      heading: "Large tab 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      heading: "Large tab 2",
      content: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      heading: "Large tab 3",
      content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
  ],
  modifiers: ["large"],
}) }}',
    "HTML": '<div class="Tabs Tabs--large" data-component="Tabs">
  <div role="tablist" aria-label="Tabs" class="Tabs__tablist">
    <button role="tab" id="large-tab-1-button" aria-controls="large-tab-1-content" class="Tabs__tab">Large tab 1</button>
    <button role="tab" id="large-tab-2-button" aria-controls="large-tab-2-content" class="Tabs__tab">Large tab 2</button>
    <button role="tab" id="large-tab-3-button" aria-controls="large-tab-3-content" class="Tabs__tab">Large tab 3</button>
  </div>
  <div data-component-part="tabpanels" class="Tabs__panels">
    <div role="tabpanel" id="large-tab-1-content" aria-labelledby="large-tab-1-button" class="Tabs__panel">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
    <div role="tabpanel" id="large-tab-2-content" aria-labelledby="large-tab-2-button" class="Tabs__panel">
      Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </div>
    <div role="tabpanel" id="large-tab-3-content" aria-labelledby="large-tab-3-button" class="Tabs__panel">
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
    </div>
  </div>
</div>',
  },
} %}
  {% block result %}
    {{ include("@tcds/components/tabs/tabs.html.twig", {
      tabs: [
        {
          heading: "Large tab 1",
          content: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
        },
        {
          heading: "Large tab 2",
          content: "<p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>",
        },
        {
          heading: "Large tab 3",
          content: "<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>",
        },
      ],
      modifiers: ["large"],
    }) }}
  {% endblock %}
{% endembed %}
twig-->

## Accessibility
### ARIA pattern
For assistive technology and richer semantic meaning, the Tabs component is made up of buttons with the [`tab` ARIA role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role), belonging to a container with the [`tablist` ARIA role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tablist_role). Each `tab` element has an `aria-controls` attribute matching the `id` of its associated content panel. The content panels have the [`tabpanel` ARIA role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tabpanel_role) and an `aria-labelledby` attribute matching the `id` of its associated `tab` element.

Tab activation is handled by setting the `aria-expanded` attribute to `true` on the selected `tab`, and to `false` on the others. All tabpanels except the currently selected one receive a `hidden` attribute.

### Keyboard control
When a tab is activated, it is the only button in the tablist that can be focused using the Tab key. Next in the tabbing order is the active tab's associated panel, so as to not require that users navigate through the tablist just to get to the content.

To activate the next tab, users press the right and left arrow keys while focusing on a tab, which will focus on and automatically activate the appropriate tab. If selecting the "next" tab when focusing on the last tab, the first tab will activate. Vice versa, selecting the "previous" tab when focusing on the first tab will activate the last tab.

This interaction pattern adheres to the [WAI-ARIA Authoring Practices 1.2 &sect; 3.24 Tabs](https://www.w3.org/TR/wai-aria-practices-1.2/#tabpanel) guidelines.

## API

<!--twig
{% embed "@tcds/components/accordion/accordion.html.twig" with {
  heading_level: "3",
  sections: [
    {
      heading: "Twig",
      block: "twig_api",
    },
    {
      heading: "JavaScript",
      block: "js_api",
    },
  ],
} %}
  {% block twig_api %}
    {{ include("@tch/includes/api-table/api-table.html.twig", {
      properties: {
        specific: [
          {
            name: "heading",
            type: "string",
            description: "A short but descriptive name for the tab set. This is not visually displayed, but is instead used as the tabs' <code>aria-label</code>. Defaults to simply \"Tabs\".",
            required: "no",
          },
          {
            name: "heading_level",
            type: "number",
            description: "If used, this wraps each tab button in an <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements'>HTML heading</a> (of level 2–6), useful for preserving the tab set's place in the document outline.",
            required: "no",
          },
          {
            name: "tabs",
            type: "array",
            description: "An array of objects containing data for each tab set.",
            required: "yes",
          },
          {
            name: "tabs[].heading",
            type: "string",
            description: "The label of the tab button.",
            required: "yes",
          },
          {
            name: "tabs[].content",
            type: "string",
            description: "The plain text content of the tab panel. Renders HTML with the <a href='https://twig.symfony.com/doc/2.x/filters/raw.html'><code>raw</code> filter</a>, but otherwise limited to string data. Only required in the absence of <code>tabs[].block</code>.",
            required: "no",
          },
          {
            name: "tabs[].block",
            type: "string",
            description: "The name of a custom block used as a content slot for rendering Twig code (must be used with an <code>embed</code>). Only required in the absence of <code>tabs[].content</code>.",
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
  {% endblock %}
  {% block js_api %}
    <table>
      <tr>
        <th>Parameter</th>
        <th>Type</th>
        <th>Description</th>
      </tr>
      <tr>
        <td><code>element</code></td>
        <td><code>HTMLElement</code></td>
        <td>The root-most HTML element of the component instance (<code>data-component=Tabs</code>).</td>
      </tr>
      <tr>
        <td><code>props</code></td>
        <td><code>object</code></td>
        <td>Static properties used as configuration options at time of component instantiation.</td>
      </tr>
      <tr>
        <td><code>props.hideAll</code></td>
        <td><code>boolean</code></td>
        <td>Whether to initially hide all tabs (rather than showing the first). Defaults to <code>false</code>.</td>
      </tr>
      <tr>
        <td><code>props.keepPanelVisibility</code></td>
        <td><code>boolean</code></td>
        <td>Do not add <code>hidden</code> to non-selected panels (useful for manually deciding how to accessibly hide panels in component extensions). Defaults to <code>false</code>.</td>
      </tr>
      <tr>
        <th>Property</th>
        <th>Type</th>
        <th>Description</th>
      </tr>
      <tr>
        <td><code>element</code></td>
        <td><code>HTMLElement</code></td>
        <td>The <code>element</code> argument passed in the <code>element</code> parameter.</td>
      </tr>
      <tr>
        <td><code>props</code></td>
        <td><code>object</code></td>
        <td>The <code>props</code> argument passed in the <code>props</code> parameter.</td>
      </tr>
      <tr>
        <td><code>tabs</code></td>
        <td><code>array</code></td>
        <td>An array (from <code>NodeList</code>) containing all <code>tab</code> elements.</td>
      </tr>
      <tr>
        <td><code>tablist</code></td>
        <td><code>HTMLElement</code></td>
        <td>The <code>tablist</code> element containing all <code>tab</code> elements.</td>
      </tr>
      <tr>
        <td><code>panels</code></td>
        <td><code>array</code></td>
        <td>An array (from <code>NodeList</code>) containing all <code>tabpanel</code> elements.</td>
      </tr>
      <tr>
        <td><code>panelsContainer</code></td>
        <td><code>HTMLElement</code></td>
        <td>The element containing all <code>tabpanel</code> elements.</td>
      </tr>
      <tr>
        <td><code>state.activeTab</code></td>
        <td><code>HTMLElement</code> or <code>null</code></td>
        <td>The currently selected <code>tab</code> element. When mutated, fires <code>sync</code> method to update component DOM.</td>
      </tr>
      <tr>
        <th>Method</th>
        <th>Return type</th>
        <th>Description</th>
      </tr>
      <tr>
        <td><code>sync</code></td>
        <td>—</td>
        <td>Updates the component, reconciling the DOM with the current <code>state</code>.</td>
      </tr>
      <tr>
        <td><code>getNextTab</code></td>
        <td><code>HTMLElement</code></td>
        <td>Get the next tab after the given one (<code>relativeTab</code>, defaults to <code>activeTab</code>).</td>
      </tr>
      <tr>
        <td><code>getPreviousTab</code></td>
        <td><code>HTMLElement</code></td>
        <td>Get the previous tab before the given one (<code>relativeTab</code>, defaults to <code>activeTab</code>).</td>
      </tr>
      <tr>
        <td><code>getPanelByTab</code></td>
        <td><code>HTMLElement</code> or <code>null</code></td>
        <td>Get the <code>tabpanel</code> element associated with the given <code>tab</code> element (<code>tab</code>). Returns <code>null</code> if the given <code>tab</code> is <code>undefined</code> or not a tab.</td>
      </tr>
    </table>
  {% endblock %}
{% endembed %}
twig-->

## Citations
<!--twig {{ include("@tch/components/footnotes/footnotes.html.twig") }} twig-->

## Further reading

Additional research, techniques, and guidelines considered in the creation of this component.

* [WAI-ARIA Authoring Practices 1.2 &sect; 3.24 Tabs](https://www.w3.org/TR/wai-aria-practices-1.2/#tabpanel) — W3.org
* [Tabs, Used Right](https://www.nngroup.com/articles/tabs-used-right/) — Nielsen Norman Group

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