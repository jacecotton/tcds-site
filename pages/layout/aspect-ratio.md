---
title: Aspect ratio
category: Layout
description: The Design System provides a set of standard aspect ratios, based on industry standards. Using standard ratios can help with responsive designs by ensuring elements, such as images, videos, containers, and other components, can scale to the window or their container while preserving their intended proportions.
published: false
---

* Used in image styles. We crop images not only for predetermined sizes (see [breakpoints](/layout/breakpoints)), but also for each aspect ratio.
* Thumbnail images
* Hero component
* Card component

<!--twig
{% set aspect_ratios = [
  {
    ratio: "1 / 1",
    name: "square",
    description: "Most useful for illustrations and profile pictures, which are often fully rounded.",
  },
  {
    ratio: "4 / 3",
    name: "landscape",
    description: "Best for regular photography.",
  },
  {
    ratio: "3 / 4",
    name: "portrait",
    description: "",
  },
  {
    ratio: "16 / 9",
    name: "widescreen",
    description: "",
  },
  {
    ratio: "21 / 9",
    name: "ultrawide",
    description: "",
  },
] %}

<table>
  {% for aspect_ratio in aspect_ratios %}
    <tr>
      <td>{{ aspect_ratio.ratio }}</td>
      <td><code>{{ aspect_ratio.name }}</code></td>
      <td>{{ aspect_ratio.description }}</td>
    </tr>
  {% endfor %}
</table>
twig-->

The Design System's CSS provides access to aspect ratio values through custom properties named `--tcds-aspect-ratio-x` where `x` is one of the above names in the table above.