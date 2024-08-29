---
title: Aspect ratio
category: Layout
description: The Design System provides a set of standard aspect ratios, based on industry standards. Using standard ratios can help with responsive designs by ensuring elements, such as images, videos, containers, and other components, can scale to the window or their container while preserving their intended proportions.
---

WORK IN PROGRESS

* Used for thumbnail images, hero component, card component?
* Start using for image styles
  * Replace all the ones we have currently with ones based on a combination between [macro sizes](/layout/space-and-size) and the following aspect ratios (or maybe just square, landscape, and portrait?)

<!--twig
{% set aspect_ratios = [
  {
    token: "square",
    value: "1 / 1",
    description: "Most useful for illustrations and profile pictures, which are often fully rounded. Also best for Hero images and video backgrounds at <a href=\"/layout/breakpoints\">extra small breakpoints</a> and below.",
  },
  {
    token: "landscape",
    value: "4 / 3",
    description: "Best for regular photography.",
  },
  {
    token: "portrait",
    value: "3 / 4",
    description: "Best for regular photography.",
  },
  {
    token: "widescreen",
    value: "16 / 9",
    description: "Best for Hero images and video backgrounds at medium breakpoints and below.",
  },
  {
    token: "ultrawide",
    value: "21 / 9",
    description: "Best for Hero images and video backgrounds at breakpoints above medium.",
  },
] %}

<table class="doc-table">
  {% for aspect_ratio in aspect_ratios %}
    <tr>
      <td><code>{{ aspect_ratio.token }}</code></td>
      <td style="white-space: nowrap"><code>{{ aspect_ratio.value }}</code></td>
      <td>{{ aspect_ratio.description|raw }}</td>
    </tr>
  {% endfor %}
</table>
twig-->

* can access via custom props