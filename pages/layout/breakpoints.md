---
category: Layout
title: Breakpoints
description: Breakpoints are used to apply styles and other settings based on the viewport size (window or screen). The Design System provides a set of standard breakpoints, custom media queries for them, as well as breakpoint-based utilities.
---

WORK IN PROGRESS

* in general go over responsive design guidance — maybe rename this page to responsive design? other pages are related to responsiveness (grid, size, etc.)
  * OR, create a layout overview page, go over responsive design there, covering info regarding breakpoints, grid, size, etc.
  * responsive approach — mobile-first, progressive enhancement, experience parity
* these breakpoints are just a starting point and a good way to coordinate broad changes between multiple different elements in a template or page — but we encourage the use of custom breakpoints that adapt to the specific needs of the component or other element being designed
* breakpoints only roughly correspond to general device type — exact device targeting is discouraged
* "in the future" section
  * custom media queries will get replaced with style queries
  * window-based breakpoints will get phased out in favor of container queries

<!--twig
{% set breakpoints = {
  "xs": 640,
  "s": 896,
  "m": 1280,
  "l": 1536,
  "xl": 1920,
} %}

{% set breakpoints = [
  {
    name: "Extra small",
    token: "xs",
    value: 640,
  },
  {
    name: "Small",
    token: "s",
    value: 896,
  },
  {
    name: "Medium",
    token: "m",
    value: 1280,
  },
  {
    name: "Large",
    token: "l",
    value: 1536,
  },
  {
    name: "Extra large",
    token: "xl",
    value: 1920,
  },
] %}

<table class="doc-table">
  {% for breakpoint in breakpoints %}
    <tr>
      <td>{{ breakpoint.name }}</td>
      <td><code>{{ breakpoint.token }}</code></td>
      <td><code>{{ breakpoint.value }}px</code></td>
    </tr>
  {% endfor %}
</table>
twig-->

* can access via custom props
* hide-above/below utility classes
* site studio settings?