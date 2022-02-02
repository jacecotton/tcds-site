<!--lead
  Forms allow users to input and submit data. The Design System provides styling for form elements, as well as some best practice considerations for usability and accessibility.
lead-->

## Best practices

**Always provide a label for an input.** Use the `label` element with a `for` attribute matching the `id` of the associated `input`.

**Avoid using placeholder text.** Placeholder text has poor usability and accessibility,<span data-footnote>[Placeholder Research, Low Vision Accessibility Task Force](https://www.w3.org/WAI/GL/low-vision-a11y-tf/wiki/Placeholder_Research) — W3.org</span> and it should never be used as a substitute for a label. To provide supplemental information to the user in addition to a label, see [&sect; Instructions and errors](#instructions-and-errors).

## Text inputs

There are many types of possible text inputs.

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" with {
  examples: {
    "HTML": '<input type="text">
<input type="password">
<input type="date">
<input type="month">
<input type="week">
<input type="search">
<input type="email">
<input type="tel">
<input type="number">',
  },
} %}
  {% block result %}
    <div class="grid gap-normal" style="grid-template-columns: auto 1fr">
      <span><code>text</code> input:</span> <input type="text">
      <span><code>search</code> input:</span> <input type="search">
      <span><code>email</code> input:</span> <input type="email">
      <span><code>password</code> input:</span> <input type="password">
      <span><code>date</code> input:</span> <input type="date">
      <span><code>month</code> input:</span> <input type="month">
      <span><code>week</code> input:</span> <input type="week">
      <span><code>tel</code> input:</span> <input type="tel">
      <span><code>number</code> input:</span> <input type="number">
    </div>
  {% endblock %}
{% endembed %}
twig-->

It is important to use the correct input type in order to trigger the most useful virtual keyboard layout, if used (mobile devices, assistive technology, etc.)

For inputting a large amount of text, such as a message or comment, use a `textarea` instead of an `input`.

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" with {
  examples: {
    "HTML": '<textarea></textarea>',
  },
} %}
  {% block result %}
    <textarea></textarea>
  {% endblock %}
{% endembed %}
twig-->

## Selection inputs

There are many types of selection inputs, but all effectively allow for the selection of one or more options from a list.

Select dropdowns are useful for allowing the selection of only one option from a very long list.

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" with {
  examples: {
    "HTML": '<select>
  <option selected disabled>Select a country</option>
  <option value="Afganistan">Afghanistan</option>
  <option value="Albania">Albania</option>
  <option value="Algeria">Algeria</option>
  <option value="American Samoa">American Samoa</option>
  <option value="Andorra">Andorra</option>
  <option value="Angola">Angola</option>
  <option value="Anguilla">Anguilla</option>
  <option value="Antigua & Barbuda">Antigua & Barbuda</option>
  <option value="Argentina">Argentina</option>
  <option value="Armenia">Armenia</option>
  <option value="Aruba">Aruba</option>
  <option value="Australia">Australia</option>
  <option value="Austria">Austria</option>
  <option value="Azerbaijan">Azerbaijan</option>
  <option value="Bahamas">Bahamas</option>
  <option value="Bahrain">Bahrain</option>
  <option value="Bangladesh">Bangladesh</option>
  ...
</select>',
  },
} %}
  {% block result %}
    <select>
      <option selected disabled>Select a country</option>
      <option value="Afganistan">Afghanistan</option>
      <option value="Albania">Albania</option>
      <option value="Algeria">Algeria</option>
      <option value="American Samoa">American Samoa</option>
      <option value="Andorra">Andorra</option>
      <option value="Angola">Angola</option>
      <option value="Anguilla">Anguilla</option>
      <option value="Antigua & Barbuda">Antigua & Barbuda</option>
      <option value="Argentina">Argentina</option>
      <option value="Armenia">Armenia</option>
      <option value="Aruba">Aruba</option>
      <option value="Australia">Australia</option>
      <option value="Austria">Austria</option>
      <option value="Azerbaijan">Azerbaijan</option>
      <option value="Bahamas">Bahamas</option>
      <option value="Bahrain">Bahrain</option>
      <option value="Bangladesh">Bangladesh</option>
      <option disabled>...</option>
    </select>
  {% endblock %}
{% endembed %}
twig-->

Radio inputs are useful for allowing the selection of only one option from a shorter list.

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" with {
  examples: {
    "HTML": '<input type="radio" name="location" id="main" value="main"> <label for="main">Main Campus</label>
<input type="radio" name="location" id="west" value="west"> <label for="west">West Campus</label>
<input type="radio" name="location" id="woodlands" value="woodlands"> <label for="woodlands">The Woodlands</label>',
  },
} %}
  {% block result %}
    <div>
      <input type="radio" name="location" id="main" value="main"> <label for="main">Main Campus</label>
    </div>
    <div>
      <input type="radio" name="location" id="west" value="west"> <label for="west">West Campus</label>
    </div>
    <div>
      <input type="radio" name="location" id="woodlands" value="woodlands"> <label for="woodlands">The Woodlands</label>
    </div>
  {% endblock %}
{% endembed %}
twig-->

Checkbox inputs are useful for allowing the selection of multiple options from a list.

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" with {
  examples: {
    "HTML": '<input type="checkbox" name="department" id="heart" value="heart"> <label for="heart">Heart Center</label>
<input type="checkbox" name="department" id="cancer-hematology" value="cancer-hematology"> <label for="cancer-hematology">Cancer &amp Hematology Center</label>
<input type="checkbox" name="department" id="fetal" value="fetal"> <label for="fetal">Fetal Center</label>',
  },
} %}
  {% block result %}
    <div>
      <input type="checkbox" name="department" id="heart" value="heart"> <label for="heart">Heart Center</label>
    </div>
    <div>
      <input type="checkbox" name="department" id="cancer-hematology" value="cancer-hematology"> <label for="cancer-hematology">Cancer &amp Hematology Center</label>
    </div>
    <div>
      <input type="checkbox" name="department" id="fetal" value="fetal"> <label for="fetal">Fetal Center</label>
    </div>
  {% endblock %}
{% endembed %}
twig-->

## Buttons

Buttons are often used to submit a form. Native HTML buttons may be used for minimal styling.

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" with {
  examples: {
    "HTML": '<button type="submit">Submit form</button>',
  },
} %}
  {% block result %}
    <button type="submit">Submit form</button>
  {% endblock %}
{% endembed %}
twig-->

Alternatively, the [Button](/components/button) component can be used for extra features, including styling options and icons.

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" with {
  examples: {
    "Twig": '{{ include("@tch/components/button/button.html.twig", {
  label: "Submit form",
  type: "submit",
  icon: "chevron-right",
  modifiers: ["icon-right"],
}) }}',
    "HTML": '<button class="Button Button--icon-right" type="submit">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square"><path d="m9 18 6-6-6-6"></path></svg>
  Submit form
</button>',
  },
} %}
  {% block result %}
    {{ include("@tch/components/button/button.html.twig", {
      label: "Submit form",
      type: "submit",
      icon: "chevron-right",
      modifiers: ["icon-right"],
    }) }}
  {% endblock %}
{% endembed %}
twig-->

## Instructions and errors

It is best for accessibility and usability for instructions (and other supplemental text) to remain visible at all times.<span data-footnote>[Placeholders in Form Fields Are Harmful](https://www.nngroup.com/articles/form-design-placeholders/) — Nielsen Norman Group</span> Therefore, it is recommended to place it just below the label, above the input. To ensure it is accessible, give an `id` to the element that contains the instructional text, and set the `aria-describedby` attribute of the `input` equal to the `id`. Example:

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" with {
  examples: {
    "HTML": '<label for="date">Date</label>
<span class="text-x-small" id="date-instructions">MM/DD/YYY</span>
<input type="text" id="date" name="date" aria-describedby="date-instructions">',
  },
} %}
  {% block result %}
    <div class="column gap-tight">
      <div class="column">
        <label for="date">Date</label>
        <span class="text-x-small" id="date-instructions">MM/DD/YYY</span>
      </div>
      <input type="text" id="date" name="date" aria-describedby="date-instructions">
    </div>
  {% endblock %}
{% endembed %}
twig-->

Error messages have similar requirements, except they should be placed beneath or to the right of the input.

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" with {
  examples: {
    "HTML": '<label for="email">Email address</label>
<input type="text" id="email" name="email" aria-describedby="email-error">
<span class="form-error" id="email-error">Please provide a valid email address.</span>',
  },
} %}
  {% block result %}
    <div class="column gap-tight">
      <label for="email">Email address</label>
      <input type="text" id="email" name="email" aria-describedby="email-error" value="not&email.com">
      <span class="form-error" id="email-error">Please provide a valid email address.</span>
    </div>
  {% endblock %}
{% endembed %}
twig-->

## Layout

Because form elements might be used in any context, no default margins are applied. Instead, it is recommended to handle the layout of a form on a container element, using [layout utilities](/design/layout#layout-utilities) provided in the layout module.

For example, the following flow and vertical spacing is accomplished with the `.column` and `.gap-[space]` utility classes.

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" with {
  examples: {
    "HTML": '<form class="column gap-normal">
  <div class="column gap-tight">
    <div class="column">
      <label for="name">Name</label>
      <span class="text-small" id="name-instructions">Type your full name.</span>
    </div>
    <input type="text" id="name" name="name" aria-describedby="name-instructions">
  </div>
  <div class="column gap-tight">
    <div class="column">
      <label for="email">Email address</label>
      <span class="text-small" id="email-instructions">Provide an email address for us to contact you.</span>
    </div>
    <input type="text" id="email" name="email" aria-describedby="name-instructions">
  </div>
</form>',
  },
} %}
  {% block result %}
    <form class="column gap-normal">
      <div class="column gap-tight">
        <div class="column">
          <label for="name">Name</label>
          <span class="text-small" id="name-instructions">Type your full name.</span>
        </div>
        <input type="text" id="name" name="name" aria-describedby="name-instructions">
      </div>
      <div class="column gap-tight">
        <div class="column">
          <label for="email">Email address</label>
          <span class="text-small" id="email-instructions">Provide an email address for us to contact you.</span>
        </div>
        <input type="text" id="email" name="email" aria-describedby="name-instructions">
      </div>
    </form>
  {% endblock %}
{% endembed %}
twig-->

## Further reading

* [Website Forms Usability: Top 10 Recommendations](https://www.nngroup.com/articles/web-form-design/) — Nielsen Norman Group

## Footnotes
<!--twig {{ include("@tch/components/footnotes/footnotes.html.twig") }} twig-->

<!--
Show something like this https://polaris.shopify.com/design/interaction-states#navigation
https://atlassian.design/patterns/forms/
-->