<!--lead Buttons allow users to trigger an action with a single tap, click, or keypress. They are useful to call attention to some action, or to prompt users to make an affirmative choice. lead-->

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" %}
{% block content %}
<tcds-button>Example button</tcds-button>
{% endblock %}
{% endembed %}
twig-->

## Best practices

**Use concise, accurate, and specific labels.** Avoid vague and abstract language like "Get started" or "Learn more". Prefer explicit labels instead, like "Find doctor" or "Schedule appointment". Accurate and specific language improves user confidence and engagement,<span data-footnote>[Information Scent: How Users Decide Where to Go Next](https://www.nngroup.com/articles/information-scent/#:~:text=Perhaps%20the%20most,to%20click%20it.) — Nielsen Norman Group</span> while overly broad calls to action can mislead, disinterest, or confuse users.<span data-footnote>[Get Started Stops Users](https://www.nngroup.com/articles/get-started/) — Nielsen Norman Group</span>

**Use sentence case.** All-uppercase text is slower and more difficult to read for all users,<span data-footnote>[Accessibility Requirements for People with Low Vision § 3.3.4 Capitalization](https://www.w3.org/TR/low-vision-needs/#capitalization) — W3.org</span> but particularly for those with dyslexia.<span data-footnote>[Creating a dyslexia friendly workplace](https://www.bdadyslexia.org.uk/advice/employers/creating-a-dyslexia-friendly-workplace/dyslexia-friendly-style-guide#:~:text=Avoid%20text%20in%20uppercase/capital%20letters%20and%20small%20caps%2C%20which%20can%20be%20less%20familiar%20to%20the%20reader%20and%20harder%20to%20read.) — British Dyslexia Association</span> Furthermore, screen readers sometimes interpret certain uppercased words as common initialisms (such as ADD or US), and will spell out those words letter by letter.<span data-footnote>[Designing for Screen Reader Compatibility § How Screen Readers Read Content](https://webaim.org/techniques/screenreader/#:~:text=Screen%20readers%20try%20to%20pronounce%20acronyms%2C%20if%20there%20are%20sufficient%20vowels/consonants%20to%20be%20pronounceable.%20Otherwise%2C%20they%20spell%20out%20the%20letters.) — WebAIM</span>

## Usage
### Form types
The [`type` property](#type) exists to specify any valid value of the [`type` HTML attribute](https://www.w3.org/TR/2011/WD-html5-20110525/the-button-element.html#attr-button-type). For example, a submit button for a form:

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" %}
{% block content %}
<tcds-button type="submit">Submit form</tcds-button>
{% endblock %}
{% endembed %}
twig-->

### Link buttons
A button can point to a link using the [`link` property](#link-property).

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" %}
{% block content %}
<tcds-button link="https://www.texaschildrens.org/">Go to texaschildrens.org</tcds-button>
{% endblock %}
{% endembed %}
twig-->

### Size variants
The `size` property can be set to `small` or `large` to establish visual hierarchy, clean up an interface, and influence attention.

Note that small buttons only decrease in height on devices with "fine" primary pointers, such as mice or styluses. For devices with "coarse" primary pointers, such as touch screens, the tappable area remains the same as a normal button (see [&sect; Touch target size](#touch-target-size)).

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" %}
{% block content %}
<tcds-button size="small">Small button</tcds-button>
{% endblock %}
{% endembed %}
twig-->

Large buttons increase efficiency by creating a larger touch target (see [Fitts's law](https://www.nngroup.com/videos/fittss-law-links-buttons/ "Using Fitts's Law to Make Links and Buttons Easier to Click (video) - Nielsen Norman Group")).

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" %}
{% block content %}
<tcds-button size="large">Large button</tcds-button>
{% endblock %}
{% endembed %}
twig-->

The `size` property can also include `full-width` (in addition to or without the other size values), making the button fill the entire available space of its container. These should be used sparingly, as their size could potentially lead to more errant clicks.

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" %}
{% block content %}
<tcds-button size="full-width">Full-width button</tcds-button>
{% endblock %}
{% endembed %}
twig-->

### Color variants
The `color` property allows you to set different background colors on the Button. Using different colors can help establish visual hierarchy, as well as differentiate action types (primary vs. secondary).

Available values are:
* One of any [theme alias](/design/color#by-theme-alias), `primary` (default), `secondary`, or `tertiary`.
* `reverse` inverts the primary button color, creating a white background with red text.
* `ghost` makes the button transparent, and translucent black when hovered. The text color is inherited from the parent.

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" %}
{% block result %}
<div class="row gap-normal">
  <tcds-button>Primary button</tcds-button>
  <tcds-button color="reverse">Reversed color</tcds-button>
  <tcds-button color="ghost">Ghost button</tcds-button>
</div>
{% endblock %}
{% block code %}
<tcds-button>Primary button</tcds-button>
<tcds-button color="reverse">Reversed color</tcds-button>
<tcds-button color="ghost">Ghost button</tcds-button>
{% endblock %}
{% endembed %}
twig-->

Note that all colors darken on-hover.

### Shape variants
The `round` attribute makes the Button into a pill shape by rounding off the corners.

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" %}
{% block content %}
<tcds-button round>Pill button</tcds-button>
{% endblock %}
{% endembed %}
twig-->

### Icon buttons
The `icon` property lets you set an [icon](/components/icon) on a button, along with details about how that icon is used. Icons are useful as complementary visual aids.

Button icons should be left-aligned (default) when:

* Used purely as a decorative aid (e.g. <!--twig {{ include("@tcds/components/icon/icon.html.twig", { icon: "info", label: "i inside circle" }) }} twig-->&nbsp;for info, <!--twig {{ include("@tcds/components/icon/icon.html.twig", { icon: "check", label: "Checkmark" }) }} twig-->&nbsp;for success).
* Used to indicate a regressive or destructive action (e.g. <!--twig {{ include("@tcds/components/icon/icon.html.twig", { icon: "chevron-left", label: "Left" }) }} twig-->&nbsp;for back, <!--twig {{ include("@tcds/components/icon/icon.html.twig", { icon: "x", label: "X" }) }} twig-->&nbsp;for cancel).

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" %}
{% block content %}
<tcds-button icon="info">Open information</tcds-button>
{% endblock %}
{% endembed %}
twig-->

Button icons can be right-aligned by including the word `right` in the `icon` attribute. Icons should be right-aligned when:

* Used to indicate a progressive action (e.g. <!--twig {{ include("@tcds/components/icon/icon.html.twig", { icon: "chevron-right", label: "Right" }) }} twig-->&nbsp;for proceed, <!--twig {{ include("@tcds/components/icon/icon.html.twig", { icon: "chevron-down", label: "Down" }) }} twig-->&nbsp;for dropdown).

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" %}
{% block content %}
<tcds-button icon="right arrow-right">Next</tcds-button>
{% endblock %}
{% endembed %}
twig-->

Icons can be inlined next to the text label by including the word `inline` in the `icon` attribute.

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" %}
{% block content %}
<tcds-button icon="inline arrow-down">Download button</tcds-button>
{% endblock %}
{% endembed %}
twig-->

To conserve space, button labels can be hidden when using an icon by including the word `only` in the `icon` attribute. However, a label must still be provided for assistive technology (see [&sect; Icon-only buttons](#icon-only-buttons)).

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" %}
{% block content %}
<tcds-button icon="only x">Close</tcds-button>
{% endblock %}
{% endembed %}
twig-->

## Accessibility
### Control button association
If you're using a button to control the visibility of another element, like to toggle a navigation menu, ensure that the relationship is properly communicated to assistive technology. Specify the ID of the element being manipulated in the button's [`controls` property](#controls-property) (which corresponds to the [`aria-controls` attribute](https://www.w3.org/TR/wai-aria-1.1/#aria-controls) in HTML).

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" %}
{% block result %}
<div class="column gap-normal">
  <tcds-button controls="nav-menu">Toggle navigation</tcds-button>
  <nav id="nav-menu">toggleable navigation here...</nav>
</div>
{% endblock %}
{% block code %}
<tcds-button controls="nav-menu">Toggle navigation</tcds-button>
<nav id="nav-menu">...</nav>
{% endblock %}
{% endembed %}
twig-->

### Touch target size

Research shows touch targets should be a minimum of 1cm &times; 1cm,<span data-footnote>[Touch Targets on Touch Screens](https://www.nngroup.com/articles/touch-target-size/) — Nielsen Norman Group</span> which is enforced by this component's stylesheet. Having a sufficient touch target size increases general usability for all users, but most notably accomodates users with motor function and vision impairments.

### Icon-only buttons

Always provide a text label for buttons, even if you only want an icon to display. The `only` value of the `icon` attribute will visually hide the label, using it instead as the [ARIA label](https://www.w3.org/TR/WCAG20-TECHS/ARIA14.html) for screen readers, and the `title` tooltip for mouse users.

While icon-only buttons are possible, try to always keep the text label visible; what an icon is supposed to represent may not be clear to users of different backgrounds and abilities.

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
      <td id="type-property"><code>type</code></td>
      <td>string</td>
      <td>Any valid <a href="https://www.w3.org/TR/2011/WD-html5-20110525/the-button-element.html#attr-button-type">HTML button type</a>. Defaults to <code>button</code>.</td>
      <td>no</td>
    </tr>
    <tr>
      <td id="link-property"><code>link</code></td>
      <td>string</td>
      <td>A link for the button to point to. Turns the root element into an <code>a</code>, rather than the default <code>button</code>.</td>
      <td>no</td>
    </tr>
    <tr>
      <td id="size-property"><code>size</code></td>
      <td>string</td>
      <td>Either of <code>small</code> or <code>large</code>, optionally in addition to <code>full-width</code>.</td>
      <td>no</td>
    </tr>
    <tr>
      <td id="color-property"><code>color</code></td>
      <td>string</td>
      <td>Either of <code>primary</code> (default), <code>secondary</code>, <code>tertiary</code>, <code>reverse</code>, or <code>ghost</code>.</td>
      <td>no</td>
    </tr>
    <tr>
      <td id="round-property"><code>round</code></td>
      <td>boolean</td>
      <td>Rounds the button's corners. To enable, set the attribute with no value. To disable, omit the attribute.</td>
      <td>no</td>
    </tr>
    <tr>
      <td id="icon-property"><code>icon</code></td>
      <td>string</td>
      <td>Any <a href="/components/icon#icon-library">icon token</a>, optionally in addition to any of <code>only</code>, <code>right</code>, and <code>inline</code>.</td>
      <td>no</td>
    </tr>
    <tr>
      <td id="controls-property"><code>controls</code></td>
      <td>string</td>
      <td>The ID of an element that the button programmatically controls.</td>
      <td>no</td>
    </tr>
  </tbody>
</table>

Source code: [Button.js](https://github.com/jacecotton/tcds/blob/main/assets/scripts/components/Button.js), [button.scss](https://github.com/jacecotton/tcds/blob/main/assets/styles/%40tcds/components/button.scss)

## Citations
<!--twig {{ include("@tch/components/footnotes/footnotes.html.twig") }} twig-->