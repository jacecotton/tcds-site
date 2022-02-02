<!--lead Buttons allow users to trigger an action with a single tap, click, or keypress. They are useful to call attention to some action, or to prompt users to make an affirmative choice. lead-->

## Best practices

**Use concise, accurate, and specific labels.** Avoid vague and abstract language like "Get started" or "Learn more". Prefer explicit labels instead, like "Confirm choice" or "Continue reading". Accurate and specific language improves user confidence and engagement,<span data-footnote>[Information Scent: How Users Decide Where to Go Next](https://www.nngroup.com/articles/information-scent/#:~:text=Perhaps%20the%20most,to%20click%20it.) — Nielsen Norman Group</span> while overly broad calls to action can mislead, disinterest, or confuse users.<span data-footnote>[Get Started Stops Users](https://www.nngroup.com/articles/get-started/) — Nielsen Norman Group</span>

**Use sentence case.** All-uppercase text is slower and more difficult to read for all users,<span data-footnote>[Accessibility Requirements for People with Low Vision § 3.3.4 Capitalization](https://www.w3.org/TR/low-vision-needs/#capitalization) — W3.org</span> but particularly for those with dyslexia.<span data-footnote>[Creating a dyslexia friendly workplace](https://www.bdadyslexia.org.uk/advice/employers/creating-a-dyslexia-friendly-workplace/dyslexia-friendly-style-guide#:~:text=Avoid%20text%20in%20uppercase/capital%20letters%20and%20small%20caps%2C%20which%20can%20be%20less%20familiar%20to%20the%20reader%20and%20harder%20to%20read.) — British Dyslexia Association</span> Furthermore, screen readers sometimes interpret certain uppercased words as common initialisms (such as ADD or US), and will spell out those words letter by letter.<span data-footnote>[Designing for Screen Reader Compatibility § How Screen Readers Read Content](https://webaim.org/techniques/screenreader/#:~:text=Screen%20readers%20try%20to%20pronounce%20acronyms%2C%20if%20there%20are%20sufficient%20vowels/consonants%20to%20be%20pronounceable.%20Otherwise%2C%20they%20spell%20out%20the%20letters.) — WebAIM</span>

### When to use

**Interface control.** Use buttons to allow for triggering actions and events, such as opening or closing a [dialog](/components/dialog), or submitting a [form](/components/forms).

### When not to use

**Page navigation.** While this is possible and supported by the component (see [example](#default-button)), you should generally avoid using buttons to take users to a different page. Prefer links instead (see [&sect; Buttons vs. links](#buttons-vs-links)).

## Examples
### Default button
Buttons usually have some JavaScript event associated with them. This can be done in an external script, or inline with the [`onclick` property](#onclick).

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" with {
  examples: {
    "Twig": '{{ include("@tch/components/button/button.html.twig", {
  label: "Default button",
  onclick: "alert(\'Default button clicked.\')",
}) }}',
    "HTML": '<button class="Button" type="button" onclick="alert(\'Default button clicked.\')">
  Default button
</button>',
  },
} %}
  {% block result %}
    {{ include("@tch/components/button/button.html.twig", {
      label: "Default button",
      onclick: "alert('Default button clicked.')",
    }) }}
  {% endblock %}
{% endembed %}
twig-->

The [`type` property](#type) exists to specify any valid value of the [`type` HTML attribute](https://www.w3.org/TR/2011/WD-html5-20110525/the-button-element.html#attr-button-type). For example, a submit button for a form:

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" with {
  examples: {
    "Twig": '{{ include("@tch/components/button/button.html.twig", {
  label: "Submit button",
  type: "submit",
}) }}',
    "HTML": '<button class="Button" type="submit">
  Submit button
</button>',
  },
} %}
  {% block result %}
    {{ include("@tch/components/button/button.html.twig", {
      label: "Submit button",
      onclick: "alert('Form submitted!\n(Demonstration purposes only).')",
    }) }}
  {% endblock %}
{% endembed %}
twig-->

Alternatively, a button can point to a link using the [`link` property](#link-property). While this is possible, it should generally be avoided (see [&sect; Buttons vs. links](#buttons-vs-links)).

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" with {
  examples: {
    "Twig": '{{ include("@tch/components/button/button.html.twig", {
  label: "Link button",
  link: "https://texaschildrens.org/"
}) }}',
    "HTML": '<a class="Button" href="https://texaschildrens.org/">
  Link button
</a>',
  },
} %}
  {% block result %}
    {{ include("@tch/components/button/button.html.twig", {
      label: "Link button",
      link: "https://texaschildrens.org/",
    }) }}
  {% endblock %}
{% endembed %}
twig-->

### Size variants
Use smaller or larger buttons to establish visual hierarchy, draw attention, or simplify the interface.

Note that small buttons only decrease in height on devices with "fine" primary pointers, such as mice or styluses. For devices with "coarse" primary pointers, such as touch screens, the tappable area remains the same as a normal button (see [&sect; Touch target size](#touch-target-size)).

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" with {
  examples: {
    "Twig": '{{ include("@tch/components/button/button.html.twig", {
  label: "Small button",
  modifiers: ["small"],
}) }}',
    "HTML": '<button class="Button Button--small">
  Small button
</button>',
  },
} %}
  {% block result %}
    {{ include("@tch/components/button/button.html.twig", {
      label: "Small button",
      modifiers: ["small"],
    }) }}
  {% endblock %}
{% endembed %}
twig-->

Large buttons can add emphasis, attract attention, and increase efficiency (see [Fitts's law](https://www.nngroup.com/videos/fittss-law-links-buttons/ "Using Fitts's Law to Make Links and Buttons Easier to Click (video) - Nielsen Norman Group")).

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" with {
  examples: {
    "Twig": '{{ include("@tch/components/button/button.html.twig", {
  label: "Large button",
  modifiers: ["large"],
}) }}',
    "HTML": '<button class="Button Button--large">
  Large button
</button>',
  },
} %}
  {% block result %}
    {{ include("@tch/components/button/button.html.twig", {
      label: "Large button",
      modifiers: ["large"],
    }) }}
  {% endblock %}
{% endembed %}
twig-->

Full-width buttons automatically fill the available space of their parent container. These should be used sparingly, as their size could potentially lead to more errant clicks.

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" with {
  examples: {
    "Twig": '{{ include("@tch/components/button/button.html.twig", {
  label: "Full-width button",
  modifiers: ["full-width"],
}) }}',
    "HTML": '<button class="Button Button--full-width">
  Full-width button
</button>',
  },
} %}
  {% block result %}
    {{ include("@tch/components/button/button.html.twig", {
      label: "Full-width button",
      modifiers: ["full-width"],
    }) }}
  {% endblock %}
{% endembed %}
twig-->

### Color variants
Use color to differentiate action types, such as primary vs. secondary, or progressive vs. destructive. You can do this by adding [color utility classes](/design/color) to the [`custom_classes` property](#custom-classes-property).

Additionally, the [`ghost` modifier](#modifiers-property) can be used to visually de-emphasize a button.

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" with {
  examples: {
    "Twig": '{{ include("@tch/components/button/button.html.twig", {
  label: "Secondary action",
  custom_classes: ["bg-secondary"],
}) }}\n
{{ include("@tch/components/button/button.html.twig", {
  label: "Tertiary action",
  modifiers: ["ghost"],
}) }}',
    "HTML": '<button class="Button bg-secondary">
  Secondary action
</button>\n
<button class="Button Button--ghost">
  Tertiary action
</button>',
  },
} %}
  {% block result %}
    <div class="row gap-tight">
      {{ include("@tch/components/button/button.html.twig", {
        label: "Secondary action",
        custom_classes: ["bg-secondary"],
      }) }}
      {{ include("@tch/components/button/button.html.twig", {
        label: "Tertiary action",
        modifiers: ["ghost"],
      }) }}
    </div>
  {% endblock %}
{% endembed %}
twig-->

### Icon buttons
Use [icons](/design/icons) as complementary visual aids.

Button icons should be left-aligned (default) when:

* Used purely as a decorative aid (e.g. <!--twig {{ include("@tch/components/icon/icon.html.twig", { icon: "info", label: "i inside circle" }) }} twig-->&nbsp;for info, <!--twig {{ include("@tch/components/icon/icon.html.twig", { icon: "check", label: "Checkmark" }) }} twig-->&nbsp;for success).
* Used to indicate a regressive or destructive action (e.g. <!--twig {{ include("@tch/components/icon/icon.html.twig", { icon: "chevron-left", label: "Left" }) }} twig-->&nbsp;for back, <!--twig {{ include("@tch/components/icon/icon.html.twig", { icon: "x", label: "X" }) }} twig-->&nbsp;for cancel).

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" with {
  examples: {
    "Twig": '{{ include("@tch/components/button/button.html.twig", {
  label: "Open information",
  icon: "info",
}) }}',
    "HTML": '<button class="Button">
  <!-- Icon code copied from src/tcds/icons/info.svg --\>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 16v-4m0-4h0"/>
  </svg>\n
  Open information
</button>',
  },
} %}
  {% block result %}
    {{ include("@tch/components/button/button.html.twig", {
      label: "Open information",
      icon: "info",
    }) }}
  {% endblock %}
{% endembed %}
twig-->

Button icons should be right-aligned when:

* Used to indicate a progressive action (e.g. <!--twig {{ include("@tch/components/icon/icon.html.twig", { icon: "chevron-right", label: "Right" }) }} twig-->&nbsp;for proceed, <!--twig {{ include("@tch/components/icon/icon.html.twig", { icon: "chevron-down", label: "Down" }) }} twig-->&nbsp;for dropdown).

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" with {
  examples: {
    "Twig": '{{ include("@tch/components/button/button.html.twig", {
  label: "Next",
  icon: "chevron-right",
  modifiers: ["icon-right"],
}) }}',
    "HTML": '<button class="Button Button--icon-right">
  <!-- Icon code copied from src/tcds/icons/chevron-right.svg --\>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square">
    <path d="M9 18l6-6-6-6"/>
  </svg>\n
  Next
</button>',
  },
} %}
  {% block result %}
    {{ include("@tch/components/button/button.html.twig", {
      label: "Next",
      icon: "chevron-right",
      modifiers: ["icon-right"],
    }) }}
  {% endblock %}
{% endembed %}
twig-->

To conserve space, button labels can be hidden when using an icon using the [`icon-only` modifier](#modifiers-property). However, the [`label` property](#label-property) should still be specified for assistive technology (see [&sect; Icon-only buttons](#icon-only-buttons)).

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" with {
  examples: {
    "Twig": '{{ include("@tch/components/button/button.html.twig", {
  label: "Close",
  icon: "x",
  modifiers: ["icon-only"],
}) }}',
    "HTML": '<button class="Button Button--icon-only" aria-label="Close" title="Close">
  <!-- Icon code copied from src/tcds/icons/x.svg --\>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
</button>',
  },
} %}
  {% block result %}
    {{ include("@tch/components/button/button.html.twig", {
      label: "Close (demonstration only)",
      icon: "x",
      modifiers: ["icon-only"],
    }) }}
  {% endblock %}
{% endembed %}
twig-->

## Accessibility
### Interactive state

If you're using a button to control the visibility of another element, like to toggle a navigation menu, ensure that the current state is properly communicated to assistive technology. First, specify the ID of the element being manipulated in the button's [`controls` property](#controls-property) (which corresponds to the [`aria-controls` attribute](https://www.w3.org/TR/wai-aria-1.1/#aria-controls) in HTML).

Then, specify the current state of the controlled element in, for example, the button's [`aria-expanded` attribute](https://www.w3.org/TR/wai-aria-1.1/#aria-expanded), using JavaScript to keep the value of this attribute and the controlled element's `hidden` attribute in sync (`true` if not `hidden`, and `false` if `hidden`).

Without JavaScript, the initial state of the button should be expanded, therefore the button should have no initial `aria-expanded` attribute. Instead, JavaScript should set the attribute with `button.setAttribute("aria-expanded", condition)`. As a basic example:

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" with {
  examples: {
    "Twig": '<!-- No initial [aria-expanded] state without JavaScript --\>
{{ include("@tch/components/button/button.html.twig", {
  label: "Toggle content",
  controls: "example-content",
}) }}\n
<!-- Not [hidden] without JavaScript --\>
<div id="example-content">Example content</div>',
    "JavaScript": '// Make initial state hidden...
button.setAttribute("aria-expanded", "false");
content.hidden = true;\n
// Toggle state on click...
button.addEventListener("click", () => {
  button.setAttribute("aria-expanded", content.hidden);
  content.hidden = !content.hidden;
});',
  },
} %}
  {% block result %}
{{ include("@tch/components/button/button.html.twig", {
  label: "Toggle content",
  controls: "example-content",
  custom_attributes: { "id": "example-toggle-button" },
}) }}

<div id="example-content">Example content</div>

<script>
  (function() {
    const button = document.getElementById("example-toggle-button");
    const content = document.getElementById("example-content");

    button.setAttribute("aria-expanded", "false");
    content.hidden = true;

    button.addEventListener("click", () => {
      button.setAttribute("aria-expanded", content.hidden);
      content.hidden = !content.hidden;
    });
  }());
</script>
  {% endblock %}
{% endembed %}
twig-->

### Buttons vs. links

*Buttons*, marked up with the `<button>` tag, are used to trigger on-page actions and submit forms. *Links*, marked up with the `<a>` tag, are used to navigate a user to a new page (or elsewhere on the current page).

**Links should look like links, and buttons should look like buttons.** Links that look like buttons should be avoided as much as possible. Beyond general usability problems,<span data-footnote>[The Anchor Button: Bad for Accessibility, Bad for Usability](http://itstiredinhere.blogspot.com/2014/08/the-anchor-button-bad-for-accessibility.html) — It's Tired in Here</span><span data-footnote>[But sometimes links look like buttons (and buttons look like links)](https://medium.com/simple-human/but-sometimes-links-look-like-buttons-and-buttons-look-like-links-9b371c57b3d2) — Adam Silver</span> they can create confusion for users of assistive technology that depends on the correspondance between semantics, functionality, and appearance. This is especially the case with [dictation software](https://www.w3.org/WAI/perspective-videos/voice/).

If a design simply calls for a link that looks like a button, this can technically be accomplished with the [`link` property](#link-property). In these instances, to limit confusion, use language that unambiguously communicates what the link button will do when clicked.

### Touch target size

Research shows touch targets should be a minimum of 1cm &times; 1cm,<span data-footnote>[Touch Targets on Touch Screens](https://www.nngroup.com/articles/touch-target-size/) — Nielsen Norman Group</span> which is enforced by this component's stylesheet. Having a sufficient touch target size increases general usability for all users, but most notably accomodates users with motor function and vision impairments.

### Icon-only buttons

Always provide a text label for buttons, even if you only want an icon to display. The [`icon-only` modifier](#modifiers-property) will visually hide the label, using it instead as the [ARIA label](https://www.w3.org/TR/WCAG20-TECHS/ARIA14.html) for screen readers, and the tooltip for mouse users.

While icon-only buttons are possible, try to always keep the text label visible; what an icon is supposed to represent may not be clear to users of different ages, cultural backgrounds, and cognitive abilities.

## API

<!--twig
{{ include("@tch/includes/api-table/api-table.html.twig", {
  properties: {
    specific: [
      {
        name: "label",
        value: "—",
        type: "string",
        description: "The text label of the button. If <code>icon-only</code>, this is used as the button's accessible <code>aria-label</code> and tooltip.",
        required: "yes",
      },
      {
        name: "type",
        value: "<ul>
          <li><code>button</code> (default)</li>
          <li><code>submit</code></li>
          <li><code>reset</code></li>
          <li><code>file</code></li>
        </ul>",
        type: "string",
        description: "The <a href='https://www.w3.org/TR/2011/WD-html5-20110525/the-button-element.html#attr-button-type' title='4.10.8 The button element — W3.org'>HTML button type</a>.",
        required: "no",
      },
      {
        name: "onclick",
        value: "—",
        type: "string",
        description: "Inline JavaScript to execute when the button is clicked.",
        required: "no",
      },
      {
        name: "controls",
        value: "—",
        type: "string (id list)",
        description: "A list of IDs referring to HTML elements that the button controls. Only use if required for ARIA purposes (see <a href='https://www.w3.org/TR/wai-aria-1.1/#aria-controls'>WAI-ARIA 1.1 &sect; aria-controls</a>).",
        required: "no",
      },
      {
        name: "link",
        value: "—",
        type: "string",
        description: "The URL or path the button should point to. Note that this will convert the button from a <code>&lt;button&gt;</code> element to an <code>&lt;a&gt;</code> element.",
        required: "no",
      },
      {
        name: "icon",
        value: "See <a href='/design/icons'>icons</a>",
        type: "string",
        description: "The icon slug (e.g. <code>check</code>, <code>arrow-right</code>) to add to the left side of the button (or, combine with a <a href='#modifiers'>modifier</a> of <code>icon-right</code> to add the icon to the right).",
        required: "no",
      },
    ],
    global: [
      {
        name: "modifiers",
        value: "<ul>
          <li><code>small</code></li>
          <li><code>large</code></li>
          <li><code>full-width</code></li>
          <li><code>round</code></li>
          <li><code>ghost</code></li>
          <li><code>icon-right</code></li>
          <li><code>icon-only</code></li>
        </ul>",
        type: "array",
        description: "Modifiers specific to the button component.",
        required: "no",
      },
      {
        name: "custom_classes",
        value: "—",
        type: "array",
        description: "Custom classes to add to the component's root element. This may be useful for adding global utilities or custom modifiers.",
        required: "no",
      },
      {
        name: "custom_attributes",
        value: "—",
        type: "array",
        description: "Custom attributes to add to the component's root element. This may be useful for adding custom JavaScript hooks.",
        required: "no",
      },
    ],
  }
}) }}
twig-->

## Citations
<!--twig {{ include("@tch/components/footnotes/footnotes.html.twig") }} twig-->