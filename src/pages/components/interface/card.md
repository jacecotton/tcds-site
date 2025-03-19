---
title: Card
category: Components
parent: Interface
description: Cards display snippets of content, typically including the metadata of a linked page, such as its image, title, and text blurb. As such they often function as teasers or calls to action.
---

<tcds-icon icon="error" style="--tcds-icon-size: 5rem; color: var(--tcds-color-red)"></tcds-icon>

## Under construction
Please check back later.

<!--twig
{% embed "@tc/includes/example.twig" %}
{% block content %}
<div class="width-constrainer">
  <tcds-card>
    <img slot="image" src="https://voiceofnursing.org/wp-content/uploads/2023/05/051923VONNakeishaA640-550x314.jpg" alt="" width="550" height="314">
    <a slot="title" href="#card-example-basic">Voice of Nursing: Nakeisha Archer named AORN National President-elect</a>
    <p slot="description">
      Dr. Nakeisha Archer, RN, Director of Perioperative Services at Texas Children’s Pavilion for Women, was recently named President-elect of the Association of periOperative Registered Nurses (AORN). 
    </p>
  </tcds-card>
</div>
{% endblock %}
{% block code %}
<tcds-card>
  <img slot="image" src="...">
  <a slot="title" href="...">
    Voice of Nursing: Nakeisha Archer named AORN National President-elect
  </a>
  <p slot="description">
    Dr. Nakeisha Archer, RN, Director of Perioperative Services at Texas
    Children’s Pavilion for Women, was recently named President-elect of
    the Association of periOperative Registered Nurses (AORN). 
  </p>
</tcds-card>
{% endblock %}
{% endembed %}
twig-->

## Guidance
### Best practices
**Avoid overloading cards with content.** Cards are meant to display snippets and serve as teasers, not as layout containers for full content. If even the teaser content is lengthy, consider rewriting it to be shorter. Avoid truncating content with ellipses.

**Choose the right variant for the context.** For example, if default cards clutter an interface, consider a [lite card](#lite-variant); to optimize vertical space, consider a [horizontal card](#orientation); if using cards to enumerate more than a few subtopics, consider [icon cards](#icon-variant).

**Use heading elements for card titles if appropriate.** If cards help to outline a page's overall content, use the semantically appropriate heading element. The component stylesheet will ensure the title's style remains consistent no matter the element used.

## Documentation
### Usage
#### Orientation
Cards have two available orientations: vertical (image above content) and horizontal (image left of content).

* By default, cards are vertical. On small screens, cards become horizontal, but will switch back to vertical if the card's container (such as a sidebar or carousel slide) is too small.
* Cards try to fill the full width of their containers, though vertical cards have a maximum width of 640px. Vertical cards also have a larger padding above 325px.

You can lock a card's orientation by setting the [`orientation` attribute](#orientation-attribute) to either `vertical` or `horizontal`.

<!--twig
{% embed "@tc/includes/example.twig" with {line_highlight: "1"} %}
{% block content %}
<tcds-card orientation="horizontal">
  <img slot="image" src="https://voiceofnursing.org/wp-content/uploads/2023/05/051923VONNakeishaA640-550x314.jpg" alt="" width="550" height="314">
  <a slot="title" href="#card-example-orientation">Voice of Nursing: Nakeisha Archer named AORN National President-elect</a>
  <p slot="description">
    Dr. Nakeisha Archer, RN, Director of Perioperative Services at Texas Children’s Pavilion for Women, was recently named President-elect of the Association of periOperative Registered Nurses (AORN). 
  </p>
</tcds-card>
{% endblock %}
{% block code %}
<tcds-card orientation="horizontal">
  <img slot="image" src="...">
  <a slot="title" href="...">
    Voice of Nursing: Nakeisha Archer named AORN National President-elect
  </a>
  <p slot="description">
    Dr. Nakeisha Archer, RN, Director of Perioperative Services at Texas
    Children’s Pavilion for Women, was recently named President-elect of
    the Association of periOperative Registered Nurses (AORN). 
  </p>
</tcds-card>
{% endblock %}
{% endembed %}
twig-->

#### Lite variant
The lite variant provides a simplified card design. It can help reduce visual noise if needed, and may work better on darker backgrounds. In HTML, you can use it by adding `lite` to the [`variant` attribute](#variant-attribute).

<!--twig
{% embed "@tc/includes/example.twig" with {line_highlight: "1"} %}
{% block content %}
<div class="width-constrainer">
  <tcds-card variant="lite">
    <img slot="image" src="https://voiceofnursing.org/wp-content/uploads/2023/05/051923VONNakeishaA640-550x314.jpg" alt="" width="550" height="314">
    <a slot="title" href="#card-example-lite">Voice of Nursing: Nakeisha Archer named AORN National President-elect</a>
    <p slot="description">
      Dr. Nakeisha Archer, RN, Director of Perioperative Services at Texas Children’s Pavilion for Women, was recently named President-elect of the Association of periOperative Registered Nurses (AORN). 
    </p>
  </tcds-card>
</div>
{% endblock %}
{% block code %}
<tcds-card variant="lite">
  <img slot="image" src="...">
  <a slot="title" href="...">
    Voice of Nursing: Nakeisha Archer named AORN National President-elect
  </a>
  <p slot="description">
    Dr. Nakeisha Archer, RN, Director of Perioperative Services at Texas
    Children’s Pavilion for Women, was recently named President-elect of
    the Association of periOperative Registered Nurses (AORN). 
  </p>
</tcds-card>
{% endblock %}
{% endembed %}
twig-->

#### Centered variant
The centered variant works best for cards with more sparse content, such as those used for enumerating services, subtopics, etc. rather than longer content snippets. In HTML, you can use it by adding `centered` to the `variant` attribute.

This variant is not available for horizontal cards.

<!--twig
{% embed "@tc/includes/example.twig" with {line_highlight: "1"} %}
{% block content %}
<div class="width-constrainer">
  <tcds-card variant="centered">
    <img slot="image" src="https://www.texaschildrens.org/sites/tc/files/styles/coh_small_landscape_webp/public/2025-01/Research-topic2-Ependymoma.jpg.webp" alt="" width="600" height="336">
    <a slot="title" href="#card-example-centered">Ependymoma</a>
    <p slot="description">
      New therapies are improving outcomes for children with ependymoma. Our goal is to develop effective treatments that can significantly enhance the quality of life and survival rates for these young patients.
    </p>
  </tcds-card>
</div>
{% endblock %}
{% block code %}
<tcds-card variant="centered">
  <img slot="image" src="...">
  <a slot="title" href="...">Ependymoma</a>
  <p slot="description">
    New therapies are improving outcomes for children with ependymoma. Our
    goal is to develop effective treatments that can significantly enhance
    the quality of life and survival rates for these young patients.
  </p>
</tcds-card>
{% endblock %}
{% endembed %}
twig-->

#### Custom footer
By default, a card's footer has a "Learn more" call-to-action (CTA) label. In HTML, the label can be changed by setting the [`cta` attribute](#cta-attribute). You can omit the CTA label by setting the attribute to an empty string.

<!--twig
{% embed "@tc/includes/example.twig" with {line_highlight: "1"} %}
{% block content %}
<div class="width-constrainer">
  <tcds-card cta="">
    <img slot="image" src="https://voiceofnursing.org/wp-content/uploads/2023/05/051923VONNakeishaA640-550x314.jpg" alt="" width="550" height="314">
    <a slot="title" href="#card-example-basic">Voice of Nursing: Nakeisha Archer named AORN National President-elect</a>
    <p slot="description">
      Dr. Nakeisha Archer, RN, Director of Perioperative Services at Texas Children’s Pavilion for Women, was recently named President-elect of the Association of periOperative Registered Nurses (AORN).
    </p>
  </tcds-card>
</div>
{% endblock %}
{% block code %}
<tcds-card cta="">
  <img slot="image" src="...">
  <a slot="title" href="...">
    Voice of Nursing: Nakeisha Archer named AORN National President-elect
  </a>
  <p slot="description">
    Dr. Nakeisha Archer, RN, Director of Perioperative Services at Texas
    Children’s Pavilion for Women, was recently named President-elect of
    the Association of periOperative Registered Nurses (AORN).
  </p>
</tcds-card>
{% endblock %}
{% endembed %}
twig-->

You can also insert arbitrary content, such as multiple links, into the footer. In HTML, you can do this with the [`footer` slot](#footer-slot) (which will override the `cta` attribute).

<!--twig
{% embed "@tc/includes/example.twig" with {line_highlight: "11-12"} %}
{% block content %}
<div class="width-constrainer">
  <tcds-card>
    <img slot="image" src="https://voiceofnursing.org/wp-content/uploads/2023/05/051923VONNakeishaA640-550x314.jpg" alt="" width="550" height="314">
    <a slot="title" href="#card-example-basic">Voice of Nursing: Nakeisha Archer named AORN National President-elect</a>
    <p slot="description">
      Dr. Nakeisha Archer, RN, Director of Perioperative Services at Texas Children’s Pavilion for Women, was recently named President-elect of the Association of periOperative Registered Nurses (AORN). 
    </p>
    <a slot="footer" is="tcds-link-button" href="#custom-footer-example-primary">Link 1</a>
    <a slot="footer" is="tcds-link-button" variant="secondary" href="#custom-footer-example-secondary">Link 2</a>
  </tcds-card>
</div>
{% endblock %}
{% block code %}
<tcds-card>
  <img slot="image" src="...">
  <a slot="title" href="...">
    Voice of Nursing: Nakeisha Archer named AORN National President-elect
  </a>
  <p slot="description">
    Dr. Nakeisha Archer, RN, Director of Perioperative Services at Texas
    Children’s Pavilion for Women, was recently named President-elect of
    the Association of periOperative Registered Nurses (AORN). 
  </p>
  <a slot="footer" is="tcds-link-button" href="...">Link 1</a>
  <a slot="footer" is="tcds-link-button" variant="secondary" href="...">Link 2</a>
</tcds-card>
{% endblock %}
{% endembed %}
twig-->

VARIANTS:
- CTA: Center title, no description slot, no footer slot, "Learn more" secondary button auto-add. Responsively, image goes to left, title left-justified, "Learn more" button disappears but arrow stays. CURRENTLY CALLED: Business Entity Landing Page variant
- Profile: Image is circled, 1/3 width of the card, centered, and straddled over the top; title is sans-serif bold and centered, also smaller; "View profile" secondary link is auto-added, centered. Description slot optional; length should be no more than a single line, text is centered.
  - +lite: like the profile "cards" used for the Taylor Lab and Data Science Hub
- Spotlight: content area is translucent navy background, overlaid at the bottom of the image area which expands to the full dimensions of the card; on mobile, content area is put beneath the image and is made solid navy
- Icon card: default CTA becomes primary button

SPECS:
- If the link is an external link, instead of a secondary button, there is an "[external icon] [hostname of external website]" badge added to the footer to indicate an external jump.
- Should work well with quick links added to footer (as in location map card).
  - In horizontal cards, quick links should be beneath both the image and text, spanning the full width of the card.
- Meta slot for dates
- Tags in top right corner of image area (placed over angled gradient) for classifications
- Eyebrow inside of heading element (like "Texas Children's" in location cards)
  - This is done by adding a span inside a heading element. Note that heading elements are not required. To add them, put the `slot="title"` on a heading element, and the `a` element inside the heading element.
    - Styling should look for whatever has `slot=title`, and handle the link surfacing and de-visualization of the link irrespective of whether a heading is used in combination.