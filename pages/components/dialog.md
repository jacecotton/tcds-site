<!--lede
  Dialogs are overlays that restrict focus and interactivity to a popup window in order to prompt some user engagement.
lede-->

<!--twig
{% embed "@tch/includes/example.twig" %}
{% block content %}
<tcds-dialog id="my-dialog">
  <p>Hello world!</p>
</tcds-dialog>

<tcds-button controls="my-dialog">Open dialog</tcds-button>
{% endblock %}
{% endembed %}
twig-->

## Best practices
**Avoid opening on page load.** Dialogs that open on page load can be disruptive and intrusive, causing annoyance and increasing bounce rate. Prefer using dialogs only in connection with some user action, like clicking a button. If you open a dialog on page load, close it after 5 to 10 seconds with the [`autoclose` prop](#autoclose-attribute).

**Keep the content short.** Do not use dialogs to present complex content or lengthy forms. Dialog content should be short and to the point, allowing the user to take decisive action within a short amount of time.

### When to use
**Prompt user engagement.** Dialogs are helpful to acquire information from users, like picking between two options ("OK" or "Cancel", "Accept" or "Reject", etc.), or getting some prerequisite information via a small form.

**Offer warnings before proceeding.** Dialogs can be used to help a user understand the consequences of proceeding with an action, such as clicking on an outbound link, consent to tracking cookies, etc.

### When not to use
**Spotlight targeted content.** Dialogs are not good options for promotions, campaigns, or ads. These have low click-through and high bounce rates.

**Persistent UI.** Dialog visibility is temporary, and does not "float" on a page like a normal window. Do not use dialogs to place content that should remain persistent through continuous user interactions.

**Simple notifications.** Do not use dialogs to provide simple notifications, like success or error messages. Use the [notification](/components/notification) component instead, or simple inline text.

## Usage
Always provide a unique ID to every dialog with the `id` attribute. This helps correspond the close button and other controls with the dialog.

### Opening
To open a dialog on page load, add the [`open` attribute](#open-attribute).

```html
<tcds-dialog open>
  ...
</tcds-dialog>
```

If the user dismisses the dialog, it will not open again on repeated page loads. The dialog will remain closed unless it is opened through one of the following methods, its ID changes, or the user clears their local storage for the site.

To control the dialog programmatically, you can add or remove the `open` attribute, or call the [`open`](#open-method) or [`close` methods](#close-method).

```html
<tcds-dialog id="my-dialog">
  ...
</tcds-dialog>

<script>
  // Open on page load.
  window["my-dialog"].open();

  // Close after 5 seconds.
  setTimeout(() => {
    window["my-dialog"].close();
  }, 5000);
</script>
```

To open a dialog on button click, set a button's `aria-controls` attribute (or the [button component](/components/button)'s `controls` prop) to the `id` of the dialog.

```html
<button aria-controls="my-dialog">Open dialog</button>

<tcds-dialog id="my-dialog">
  ...
</tcds-dialog>
```

## Styling
The dialog's basic styles can be changed with the following custom properties.

<table>
  <tr>
    <th>Custom property</th>
    <th>Description</th>
    <th>Default value</th>
  </tr>
  <tr>
    <td><code style="white-space: nowrap">--tcds-dialog-background</code></td>
    <td>The background color of the inner dialog box.</td>
    <td><code>#fff</code></td>
  </tr>
  <tr>
    <td><code style="white-space: nowrap">--tcds-dialog-padding</code></td>
    <td>The padding of the inner dialog box.</td>
    <td><code>var(--tcds-space-x-loose)</code></td>
  </tr>
  <tr>
    <td><code style="white-space: nowrap">--tcds-dialog-base-width</code></td>
    <td>The starting width of the dialog (above the <a href="/design/layout#breakpoints"><code>large</code> breakpoint</a>).</td>
    <td><code>fit-content</code></td>
  </tr>
  <tr>
    <td><code style="white-space: nowrap">--tcds-dialog-min-width</code></td>
    <td>The minimum width of the dialog (above the <code>large</code> breakpoint).</td>
    <td><code>500px</code></td>
  </tr>
  <tr>
    <td><code style="white-space: nowrap">--tcds-dialog-max-width</code></td>
    <td>The maximum width of the dialog (above the <code>large</code> breakpoint).</td>
    <td><code>30vw</code></td>
  </tr>
</table>

## API
<!--twig {{ include("@tch/includes/api.twig", {
  attributes: [
    {
      name: "open",
      type: ["state", "boolean"],
      description: "The dialog is open. Useful for opening a dialog on page load.",
      required: "no",
    },
    {
      name: "autoclose",
      type: ["prop", "number"],
      description: "The time (in seconds) before closing the dialog after opening.",
      required: "no",
    },
  ],
  slots: [
    {
      name: "(default)",
      multiple: "no",
      description: "Default content slot.",
      required: "no",
    },
  ],
  methods: [
    {
      name: "open",
      description: "Opens the dialog.",
    },
    {
      name: "close",
      description: "Closes the dialog.",
    },
  ],
}) }} twig-->

<!--
https://polaris.shopify.com/components/modal
https://nordhealth.design/components/modal/
https://opensource.adobe.com/spectrum-web-components/components/dialog-base/
https://ant.design/components/modal/
https://carbondesignsystem.com/components/modal/usage/
https://designsystem.digital.gov/components/modal/
https://atlassian.design/components/modal-dialog/examples
https://developer.microsoft.com/en-us/fluentui#/controls/web/dialog
https://baseweb.design/components/modal/
https://protocol.mozilla.org/components/detail/modal.html
-->

## Resources
This component was architected in conformance with [ARIA Authoring Practices (APG) for dialog pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/).

[Source code on GitHub](https://github.com/jacecotton/tcds/blob/main/components/dialog/)