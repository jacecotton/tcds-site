<!--lede
  The Design System provides styling for <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form">form elements</a>, which allow users to input and submit data.
lede-->

## Best practices
**Always provide labels for inputs.** Use the `label` element with a `[for]` attribute matching the `[id]` of the associated `input`.

**Avoid using placeholder text.** Placeholder text has poor usability and accessibility ([1](https://www.w3.org/WAI/GL/low-vision-a11y-tf/wiki/Placeholder_Research "Placeholder Research, Low Vision Accessibility Task Force - W3.org")), and should never be used as a substitute for label. To provide examples, instructional, or other supplemental information in addition to a label, see [&sect; Supplemental information](#supplemental-information).

## Usage
### Buttons
It is not recommended to use the `button` or `input` elements to create buttons. Instead, use the [button component](/components/button).

The Design System does provide simpler default styles for native button elements, in cases where custom elements cannot be used.

<!--twig
{% embed "@tch/includes/example.twig" %}
{% block content %}
<button>Default button</button>
{% endblock %}
{% endembed %}
twig-->

### Text inputs
The Design System provides styling for all text inputs, including the `text`, `password`, `search`, `email`, `tel`, and `number` types.

<!--twig
{% embed "@tch/includes/example.twig" %}
{% block content %}
<input type="text">
{% endblock %}
{% endembed %}
twig-->

Choose the correct input type in order to trigger the appropriate virtual keyboard layout, if applicable (such as on mobile devices and assistive technology).

For inputting a large amount of text, such as a message or comment, use a `textarea`.

<!--twig
{% embed "@tch/includes/example.twig" %}
{% block content %}
<textarea></textarea>
{% endblock %}
{% endembed %}
twig-->

### Date pickers
Use the `date`, `month`, and `week` input types to allow users to pick dates from a UI widget or special input method.

<!--twig
{% embed "@tch/includes/example.twig" %}
{% block content %}
<div class="column gap-normal">
  <div class="column">
    <label for="date">Date</label>
    <input type="date" id="date">
  </div>

  <div class="column">
    <label for="month">Month</label>
    <input type="month" id="month">
  </div>

  <div class="column">
    <label for="week">Week</label>
    <input type="week" id="week">
  </div>
</div>
{% endblock %}
{% block code %}
<label for="date">Date</label>
<input type="date" id="date">

<label for="month">Month</label>
<input type="month" id="month">

<label for="week">Week</label>
<input type="week" id="week">
{% endblock %}
{% endembed %}
twig-->

### Selection inputs
Use checkboxes to allow multiple selections from a group of options:
<!--twig
{% embed "@tch/includes/example.twig" %}
{% block content %}
<div>
  <input type="checkbox" name="department" id="west-campus" value="west-campus">
  <label for="west-campus">West Campus</label>
</div>

<div>
  <input type="checkbox" name="department" id="woodlands" value="woodlands">
  <label for="woodlands">Woodlands</label>
</div>

<div>
  <input type="checkbox" name="department" id="cancer" value="cancer">
  <label for="cancer">Cancer &amp; Hematology Center</label>
</div>
{% endblock %}
{% block code %}
<input type="checkbox" name="department" id="west-campus" value="west-campus">
<label for="west-campus">West Campus</label>

<input type="checkbox" name="department" id="woodlands" value="woodlands">
<label for="woodlands">The Woodlands</label>

<input type="checkbox" name="department" id="cancer" value="cancer">
<label for="cancer">Cancer &amp; Hematology Center</label>
{% endblock %}
{% endembed %}
twig-->

Use radios to allow only one selection from a group of options:
<!--twig
{% embed "@tch/includes/example.twig" %}
{% block code %}
<input type="radio" name="department" id="ent" value="ent">
<label for="ent">Ear Nose &amp; Throat</label>

<input type="radio" name="department" id="fetal" value="fetal">
<label for="fetal">Fetal Center</label>

<input type="radio" name="department" id="gastroenterology" value="gastroenterology">
<label for="gastroenterology">Gastroenterology</label>
{% endblock %}
{% block content %}
<div>
  <input type="radio" name="department" id="ent" value="ent">
  <label for="ent">Ear Nose &amp; Throat</label>
</div>

<div>
  <input type="radio" name="department" id="fetal" value="fetal">
  <label for="fetal">Fetal Center</label>
</div>

<div>
  <input type="radio" name="department" id="gastroenterology" value="gastroenterology">
  <label for="gastroenterology">Gastroenterology</label>
</div>
{% endblock %}
{% endembed %}
twig-->

If you need to allow for only one selection from a group of options that becomes too lengthy (more than around 7), use a select dropdown:
<!--twig
{% embed "@tch/includes/example.twig" %}
{% block content %}
<label for="department">Department:</label>
<select name="department" id="department">
  <option selected disabled>Choose department</option>
  <option value="west-campus">West Campus</option>
  <option value="woodlands">The Woodlands</option>
  <option value="cancer">Cancer &amp; Hematology Center</option>
  <option value="ent">Ear Nose &amp; Throat</option>
  <option value="fetal">Fetal Center</option>
  <option value="gastroenterology">Gastroenterology</option>
  <option value="heart">Heart Center</option>
  <option value="neuroscience">Neuroscience Center</option>
  <option value="orthopedics">Orthopedics</option>
  <option value="plastic-surgery">Plastic Surgery</option>
  <option value="urgent-care">Urgent Care</option>
  <option value="neurology">Neurology</option>
</select>
{% endblock %}
{% endembed %}
twig-->

## Layout
Because form elements might be used in any context, no default margins are applied. Instead, it is recommended to handle the layout of a form on a container element, using [layout utilities](/design/layout#layout-utilities) provided in the layout module.

For example, the following flow and vertical spacing is accomplished with the `.column` and `.gap-[space]` utility classes.

<!--twig
{% embed "@tch/includes/example.twig" %}
{% block content %}
<form class="column gap-normal">
  <div class="column gap-tight">
    <div class="column">
      <label for="name">Name</label>
      <span class="font-size-small" id="name-instructions">Type your full name.</span>
    </div>
    <input type="text" id="name" name="name" aria-describedby="name-instructions">
  </div>
  <div class="column gap-tight">
    <div class="column">
      <label for="email">Email address</label>
      <span class="font-size-small" id="email-instructions">Provide an email address for us to contact you.</span>
    </div>
    <input type="text" id="email" name="email" aria-describedby="name-instructions">
  </div>
</form>
{% endblock %}
{% endembed %}
twig-->

## Supplemental information
For accessibility and usability, supplemental information (instructions, examples, etc.) should remain visible at all times ([1](https://www.nngroup.com/articles/form-design-placeholders/ "Placeholders in Form Fields Are Harmful - Nielsen Norman Group")). Therefore, it is recommended to place it just below the label, above the input. To ensure it is accessible, give an `id` to the element that contains the instructional text, and set the `aria-describedby` attribute of the `input` equal to the `id`. Example:

<!--twig
{% embed "@tch/includes/example.twig" %}
{% block content %}
<form class="column gap-tight">
  <div class="column">
    <label for="date">Date</label>
    <span class="font-size-x-small" id="date-instructions">MM/DD/YYY</span>
  </div>
  <input type="date" id="date" name="date" aria-describedby="date-instructions">
</form>
{% endblock %}
{% endembed %}
twig-->

Error messages have similar requirements, except they should be placed beneath or to the right of the input.

<!--twig
{% embed "@tch/includes/example.twig" %}
{% block content %}
<form class="column gap-tight">
  <label for="email">Email address</label>
  <input type="text" id="email" name="email" aria-describedby="email-error" value="not-an-email.com">
  <span class="form-error" id="email-error">Please provide a valid email address.</span>
</form>
{% endblock %}
{% endembed %}
twig-->

## Resources
[Source code on GitHub](https://github.com/jacecotton/tcds/blob/main/styles/content/forms/)