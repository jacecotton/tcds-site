---
title: Aspect ratio
category: Layout
description: The Design System provides a set of standard aspect ratios, based on industry standards. Using standard ratios can help with responsive designs by ensuring elements, such as images, videos, containers, and other components, can scale to the window or their container while preserving their intended proportions.
published: false
---

<!--twig
{% set aspect_ratios = [
  {
    token: "square",
    value: "1 : 1",
    description: "Most useful for illustrations and profile pictures, which are often fully rounded. Also best for Hero images and video backgrounds at <a href=\"/layout/breakpoints\">extra small breakpoints</a> and below.",
  },
  {
    token: "landscape",
    value: "4 : 3",
    description: "Best for regular photography.",
  },
  {
    token: "portrait",
    value: "3 : 4",
    description: "Best for regular photography.",
  },
  {
    token: "widescreen",
    value: "16 : 9",
    description: "Best for Hero images and video backgrounds at medium breakpoints and below.",
  },
  {
    token: "ultrawide",
    value: "21 : 9",
    description: "Best for Hero images and video backgrounds at breakpoints above medium.",
  },
] %}

<dl class="aspect-ratio-chart font-variant-tabular-nums dl--semantic">
  {% for aspect_ratio in aspect_ratios %}
    <div>
      <dt><code>{{ aspect_ratio.token }}</code></dt>
      <dd style="aspect-ratio: var(--tcds-aspect-ratio-{{ aspect_ratio.token }})">
        {{ aspect_ratio.value }}
      </dd>
    </div>
  {% endfor %}
</dl>
twig-->

* Used for thumbnail images, hero component, card component?
* Start using for image styles
  * Replace all the ones we have currently with ones based on a combination between [macro sizes](/layout/space-and-size) and the following aspect ratios (or maybe just square, landscape, and portrait?)