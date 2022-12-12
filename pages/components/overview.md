<!--
/**
 * @todo Document best practice conformance, progressive enhancement, etc.
 */
-->
<!--lede
  Components are reusable UI elements that serve as building blocks for implementing interactive experiences, design patterns, layouts, and more.
lede-->
## How they work
<tcds-dialog open id="components-wip">
  <h1>Notice</h1>

  <p>
    <strong>This page is a work in progress.</strong> Please check back later for updates.
  </p>

  <tcds-button variant="secondary" controls="components-wip">Okay</tcds-button>
</tcds-dialog>

Components typically take the form of [custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements). These are special HTML tags, defined by the Design System, with their own attributes and markup structures that allow for easier use, as well as other benefits such as encapsulation.

A simple example is the [button component](/components/button). Normally, a button is marked up with the [`button` HTML element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button):

<!--twig
{% embed "@tch/includes/example.twig" %}
{% block content %}
<button>Example default button</button>
{% endblock %}
{% endembed %}
twig-->

The Design System provides basic [default styles for buttons](/content/forms). However, we require additional features for our buttons that might be complicated to code from scratch, which can lead to inconsistencies and maintainability issues. Also, we do not want the CSS for our button styles to clash with the CSS of whatever page or website the button may be used on.

So, we've [*componentized* our buttons](/components/button) by providing the `tcds-button` element, which encapsulates and scopes its styles, and provides convenient options for setting icons, alignment, sizing, etc. Styling and behavior is handled by the button component's source code, so that users of the component do not have to worry about how it works "under the hood".

<!--twig
{% embed "@tch/includes/example.twig" %}
{% block content %}
<tcds-button size="small" icon="info">Small styled button with an icon</button>
{% endblock %}
{% endembed %}
twig-->

The `size` and `icon` attributes are specific to the `tcds-button` element, and are documented on the [button component](/components/button)'s page.

In Drupal, we use Site Studio to place components onto pages. Each component documented on this site has a corresponding Site Studio implementation. The options for these Site Studio components generally map 1-to-1 with the provided API (so each attribute will be configurable from the Site Studio UI, custom element "slots" correspond to Site Studio "dropzones", etc.)

## How to read the API
Each component's documentation page features an API section, which provides a table detailing the component's attributes, slots, and methods.

The API is generally self-explanatory if you're familiar with [custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) and terminology common to UI frameworks like [React](https://reactjs.org/) and [Vue](https://vuejs.org/). If not, the basics are as follows.

### Attributes
Custom element attributes allow component users to specify the look and behavior of a component. Besides standard attributes (like `class`, `id`, `data-` attributes, etc.), there are two types of attributes:

* **Props** — these are static configuration options that component users specify and are not changed by the component code, such as the `size` of a button or the `label` of a [Tab](/components/tabs).
* **State** — a component's internal state is sometimes reflected as an attribute on the component's node, such as whether a [Dialog](/components/dialog) is currently `open`. In these cases, the initial state of a component can be specified by its user by setting the corresponding attribute. The component's state can also be programmatically manipulated by changing the attribute.

The "Attributes" section of a component's API table (usually found at the bottom of the documentation page) will specify whether an attribute is a prop or state. It will also specify the [value type](#attribute-types) expected, permitted values, and whether the attribute is required.

#### Attribute types
Technically, all HTML attribute values are either [strings](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings) or [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null).

Sometimes, a component's API will specify that an attribute needs to be of the type `number`, `boolean`, or `array`. In these cases, the attribute value itself will still be added as a string, but the value will need to be such that it can be converted to or parsed as the specified type by the component code.

If `number` is specified, provide only a whole integer inside the string. For instance, the `timing` attribute of the [Carousel](/components/carousel) component will be used as the auto-forwarding interval by parsing the value with [`parseInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt), transforming `timing="5"` into the number `5`.

If `boolean` is specified, that means the attribute is a [boolean attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes#boolean_attributes) like in normal HTML. The presence of the attribute, while technically an empty string, implies `true`. The absence of the attribute, while technically `null`, implies `false`.

If `array` is specified, that means that the attribute expects a space-separated list within the string value. So for example, the button component's `icon="right check"` will be converted to the array `["right", "check"]`.

### Slots
Each custom element takes care of its own internal markup structure so that you don't have to. All you have to provide is the data, in the form of attributes and [slotted content](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots).

The "Slots" section of each component's API table will specify what available slots there are, and how to mark them up. For instance, you provide the image, title, and description of a [Card](/components/card) with the following slot names and elements:

```html
<tcds-card>
  <img slot="image" ...>
  <a slot="title" ...>...</a>
  <p slot="description">
    ...
  </p>
</tcds-card>
```

The component code will look for elements with those slot names, and automatically insert them into its internal markup structure (the [shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) in most cases).

In many cases, slots are unnamed, and the component simply reflects whatever is between its opening and closing tags. For instance, the Dialog component:

```html
<tcds-dialog>
  <p>This unnamed element is going to be inserted into the default slot.</p>
</tcds-dialog>
```

The paragraph in that case will simply be reflected inside the Dialog's content area.

In other cases, the default slot doesn't expect specific names, but specific child elements. For instance, the [Accordion](/components/accordion) component's `tcds-accordion` element expects only `tcds-accordion-section` child elements, and will only render those.

```html
<tcds-accordion>
  <p>This is ignored.</p>

  <tcds-accordion-section>
    <p>This is rendered.</p>
  </tcds-accordion-section>
</tcds-accordion>
```

### Methods
Every instance of a custom element is a DOM object, and this object can be accessed in JavaScript. Some components will have public methods which allow you to programmatically control the component.

For example, the Dialog component has public `open` and `close` methods, which can be accessed directly from the node. The following example accesses a particular Dialog, opens it, and then closes it after 3 seconds:

```html
<tcds-dialog id="some-dialog">...</tcds-dialog>
```

```js
const dialog = document.getElementById("some-dialog");

dialog.open();

setTimeout(function() {
  dialog.close();
}, 3000);
```

Each API table will specify what methods are available and how to use them.

### Styling
Most components use the shadow DOM to encapsulate styling, significantly limiting the component user's ability to customize a component's styling from the "outside". This is intentional, as it ensures all components look and function the same no matter the site or page they're used on.

In instances where component styles *should* be customizable by the component user, predetermined [custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) will be exposed, which allow component users to make sanctioned style adjustments.

These custom properties will be documented on each component's page above the API table. They should be set inline via the `style` attribute on the component element. For instance, to set the top and bottom padding of the [Section](/components/section) component:

```html
<tcds-section style="--tcds-section-vertical-padding: 9rem">
  ...
</tcds-section>
```

Some styles are set by props, like the button's `size` prop. However, in these cases it is often multiple properties and sometimes multiple elements that are affected. For instance, the `size` prop, depending on its value, changes the `height`, `font-size`, `width`, and `padding` of the button.

## Component authoring
The Design System provides the [`WebComponent`](https://github.com/jacecotton/tcds/blob/main/scripts/WebComponent/WebComponent.js) base class to make authoring your own custom elements easier. You can read more about how to use it on a technical level at its [documentation page](https://github.com/jacecotton/tcds/tree/main/scripts/WebComponent) in the Design System repository on GitHub. The following is a very basic example of its usage:

<!--twig
{% embed "@tch/includes/example.twig" %}
{% block content %}
<click-counter></click-counter>
{% endblock %}
{% block code %}
<click-counter></click-counter>

<script>
import { WebComponent } from "@txch/tcds";

class ClickCounter extends WebComponent(HTMLElement) {
  connected() {
    this.state.count = 0;
  }

  render() {
    return `
      <button>Clicked ${this.state.count} times</button>
    `;
  }

  mounted() {
    this.shadowRoot.querySelector("button").addEventListener("click", () => {
      this.state.count++;
    });
  }
}

customElements.define("click-counter", ClickCounter);
</script>
{% endblock %}
{% endembed %}
twig-->

Best practices and tips for authoring your own components are as follows.

### Best practice conformance
* W3C WAI-ARIA APG

### Progressive enhancement
* Fallbacks, etc.