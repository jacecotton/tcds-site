---
title: Tabs
category: Components
parent: Interface
description: Tabs allow users to switch between panels of content from a horizontal list of labels. They enable quick comparison between different pieces of content within the same context and of the same information type.
---

<tcds-icon icon="error" style="--tcds-icon-size: 5rem; color: var(--tcds-color-red)"></tcds-icon>

## Under construction
Please check back later.

<!--twig
{% embed "@tc/includes/example.twig" %}
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
**Use specific but concise tab labels.** There is an inherent [interaction cost](https://www.nngroup.com/articles/interaction-cost-definition/ "Interaction Cost - Nielsen Norman Group") to tabs that may cause users to miss or ignore the content. Aim for labels that are concise enough to be read quickly, but descriptive enough to provide a strong [information scent](https://www.nngroup.com/articles/information-scent/).

**Use sentence case.** All-uppercase text is slower and more difficult to read ([1](https://www.w3.org/TR/low-vision-needs/#capitalization)). Furthermore, screen readers sometimes interpret certain uppercased words as common initialisms (such as ADD or US), and may erroneously spell out those words letter by letter ([3](https://webaim.org/techniques/screenreader/#:~:text=Screen%20readers%20try%20to%20pronounce%20acronyms%2C%20if%20there%20are%20sufficient%20vowels/consonants%20to%20be%20pronounceable.%20Otherwise%2C%20they%20spell%20out%20the%20letters.)).

### When to use
**Presenting different pieces of content of the same information category or type.** Tabs are most useful for quickly comparing alternative pieces of content belonging to the same category (e.g. switching between different campus locations, progressing through different steps in the same sequence, etc.) They allow users to select the version of a piece of content most relevant to them, rather than being presented with all available versions.

### When not to use
**All tab content is intended for a page's general audience.** Because of the interaction cost, tabs past the first few may receive less engagement. Use tabs to selectively disclose information relevant to a targeted subset of the page's audience. For a wider audience, burying general purpose content behind a tab can hinder discovery.

**Comparing content with minor variations.** Each content panel should include <em>distinct</em> content belonging to the same information category as its peer panels, not the same information with certain differences.

**A different component better fits the use case.** For sequentially disclosing pieces of content that are not necessarily interrelated, the [Accordion component](/components/accordion) may be a better choice.

## Usage
### Variants
Tabs can be horizontally centered using the [`variant` attribute](#variant-attribute).

They can also be raised to add depth using the `variant` attribute. This works best with preceding sections that have a little extra bottom padding.

<!--twig
{% embed "@tc/includes/example.twig" with {line_highlight: "3"} %}
{% block content %}
<section class="tcds-section bg-secondary"></section>

<tcds-tabs variant="centered raised">
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

### Default selected
also collapsed