<!--lede
  Buttons allow users to trigger an action with a single tap, click, or keypress. They are useful to call attention to some action or to provide controls for an interface or form.
lede-->

<!--twig
{% embed "@tch/includes/example.twig" %}
{% block content %}
<tcds-button>Example button</tcds-button>
{% endblock %}
{% endembed %}
twig-->

## Best practices
**Use concise, accurate, and specific labels.** Avoid vague and abstract language like "Get started" or "Learn more". Prefer explicit labels instead, like "Find doctor" or "Schedule appointment". Accurate and specific language improves user confidence and engagement ([1](https://www.nngroup.com/articles/information-scent/#:~:text=Perhaps%20the%20most,to%20click%20it. "Information Scent: How Users Decide Where to Go Next - Nielsen Norman Group")), while overly broad calls to action can mislead, confuse, and fail to interest users ([2](https://www.nngroup.com/articles/get-started/ "Get Started Stops Users - Nielsen Norman Group")).

**Use sentence case.** All-uppercase text is slower and more difficult to read for all users ([3](https://www.w3.org/TR/low-vision-needs/#capitalization)) but particularly for those with dyslexia ([4](https://www.bdadyslexia.org.uk/advice/employers/creating-a-dyslexia-friendly-workplace/dyslexia-friendly-style-guide#:~:text=Avoid%20text%20in%20uppercase/capital%20letters%20and%20small%20caps%2C%20which%20can%20be%20less%20familiar%20to%20the%20reader%20and%20harder%20to%20read.)). Furthermore, screen readers sometimes interpret certain uppercased words as common initialisms (such as ADD or US), and may erroneously spell out those words letter by letter ([5](https://webaim.org/techniques/screenreader/#:~:text=Screen%20readers%20try%20to%20pronounce%20acronyms%2C%20if%20there%20are%20sufficient%20vowels/consonants%20to%20be%20pronounceable.%20Otherwise%2C%20they%20spell%20out%20the%20letters.)).

## Usage
### Links
A button can point to a link using the [`link` attribute](#link-attribute).

Optionally, the link can be opened in a new tab with the [`new-tab` attribute](#new-tab-attribute).

<!--twig
{% embed "@tch/includes/example.twig" %}
{% block content %}
<tcds-button link="https://www.texaschildrens.org/" new-tab>Go to texaschildrens.org</tcds-button>
{% endblock %}
{% endembed %}
twig-->

### Icons
[Icons](/components/icon#library) can be added to a button with the [`icon` attribute](#icon-attribute).

<!--twig
{% embed "@tch/includes/example.twig" %}
{% block content %}
<tcds-button icon="info">Icon button</tcds-button>
{% endblock %}
{% endembed %}
twig-->

Icons can be right-aligned by including the word `right` in the `icon` attribute.

<!--twig
{% embed "@tch/includes/example.twig" %}
{% block content %}
<tcds-button icon="right chevron-right">Right icon</tcds-button>
{% endblock %}
{% endembed %}
twig-->

Button labels can be hidden when using an icon by including the word `only` in the `icon` attribute. However, a text label must still be provided for assistive technology (see [&sect; Icon-only buttons](#icon-only-buttons)).

<!--twig
{% embed "@tch/includes/example.twig" %}
{% block content %}
<tcds-button icon="only x">Close</tcds-button>
{% endblock %}
{% endembed %}
twig-->

### Variants
Secondary, ghost, and UI buttons can be created with the [`variant` attribute](#variant-attribute).

<!--twig
{% embed "@tch/includes/example.twig" %}
{% block content %}
<div class="row gap-loose">
  <tcds-button variant="secondary">Secondary button</tcds-button>
  <tcds-button variant="ghost" icon="right chevron-right">Ghost button</tcds-button>
  <tcds-button variant="ui" icon="only x">UI button</tcds-button>
</div>
{% endblock %}
{% block code %}
<tcds-button variant="secondary">Secondary button</tcds-button>
<tcds-button variant="ghost" icon="right chevron-right">Ghost button</tcds-button>
<tcds-button variant="ui" icon="only x">UI button</tcds-button>
{% endblock %}
{% endembed %}
twig-->

### Sizes
Small and large buttons can be created with the [`size` attribute](#size-attribute).

<!--twig
{% embed "@tch/includes/example.twig" %}
{% block content %}
<div class="column gap-normal">
  <tcds-button size="small">Small button</tcds-button>
  <tcds-button>Default button</tcds-button>
  <tcds-button size="large">Large button</tcds-button>
</div>
{% endblock %}
{% block code %}
<tcds-button size="small">Small button</tcds-button>
<tcds-button>Default button</tcds-button>
<tcds-button size="large">Large button</tcds-button>
{% endblock %}
{% endembed %}
twig-->

Full width buttons can be created, optionally in combination with any `size`:

<!--twig
{% embed "@tch/includes/example.twig" %}
{% block content %}
<tcds-button size="large full-width">Large full-width button</tcds-button>
{% endblock %}
{% endembed %}
twig-->

### Form types
The [`type` attribute](#type-attribute) allows you to set a valid [`type` HTML attribute](https://www.w3.org/TR/2011/WD-html5-20110525/the-button-element.html#attr-button-type) on the Button. For example, a submit button for a form:

<!--twig
{% embed "@tch/includes/example.twig" %}
{% block content %}
<tcds-button type="submit">Submit form</tcds-button>
{% endblock %}
{% endembed %}
twig-->

## Accessibility
### Touch target size
Research shows touch targets should be a minimum of 1cm &times; 1cm ([1](https://www.nngroup.com/articles/touch-target-size/ "Touch Targets on Touch Screens - Nielsen Norman Group")), which is enforced by this component's stylesheet. Having a sufficient touch target size increases general usability for all users, but most notably accomodates users with motor function and vision impairments.

### Icon-only buttons
Always provide a text label for buttons, even if you only want an icon to display. The `only` value of the `icon` attribute will visually hide the label, using it instead as the [`aria-label` attribute](https://www.w3.org/TR/WCAG20-TECHS/ARIA14.html) for screen readers, and the `title` tooltip for mouse users.

While icon-only buttons are possible, try to always keep the text label visible; what an icon is supposed to represent may not be universally clear or efficiently understood.

## API
<!--twig {{ include("@tch/includes/api.twig", {
  attributes: [
    {
      name: "label",
      type: ["prop", "string"],
      description: "The text label of the button.",
      required: "no",
    },
    {
      name: "controls",
      type: ["prop", "string"],
      description: "The ident of a controlled element, mapping to the <a href='https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls'><code>aria-controls</code> HTML attribute</a>.",
      required: "no",
    },
    {
      name: "expanded",
      type: ["prop", "string"],
      description: "One of <code>true</code> or <code>false</code>, mapping to the <a href='https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded'><code>aria-expanded</code> HTML attribute</a>.",
      required: "no",
    },
    {
      name: "type",
      type: ["prop", "string"],
      description: "Any valid <a href='https://www.w3.org/TR/2011/WD-html5-20110525/the-button-element.html#attr-button-type'>HTML button type</a>. Defaults to <code>button</code>.",
      required: "no",
    },
    {
      name: "link",
      type: ["prop", "string"],
      description: "The URL for the Button to link to. Turns the root into an <code>a</code> element, rather than the default <code>button</code>.",
      required: "no",
    },
    {
      name: "new-tab",
      type: ["prop", "boolean"],
      description: "Whether to open the link in a new tab. Adds a <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel'>relationship</a> of <code>noreferrer noopener</code>.",
      required: "no",
    },
    {
      name: "icon",
      type: ["prop", "array"],
      description: "Any <a href='/components/icon#library'>icon token</a>, optionally in addition to one of <code>only</code> or <code>right</code>.",
      required: "no",
    },
    {
      name: "variant",
      type: ["prop", "string"],
      description: "Any of <code>secondary</code>, <code>ghost</code>, or <code>ui</code>.",
      required: "no",
    },
    {
      name: "size",
      type: ["prop", "array"],
      description: "One of <code>small</code> or <code>large</code>, optionally in combination with <code>full-width</code>.",
      required: "no",
    },
  ],
  slots: [
    {
      name: "(default)",
      multiple: "no",
      description: "Content slot for button label.",
      required: "no",
    },
  ],
}) }} twig-->

## Resources
This component was architected in conformance with [ARIA Authoring Practices (APG) for button pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/).

[Source code on GitHub](https://github.com/jacecotton/tcds/blob/main/components/button/)