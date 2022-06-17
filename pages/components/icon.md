<!--lead
  Icons are useful illustrative aids that can enhance understanding, supplement meaning, and reinforce brand tone and style. However, if used improperly, icons can be distracting, confusing, and potentially misleading.
lead-->

## Best practices

**Avoid using icons by themselves.** Icons cannot be guaranteed to have universally (well) understood meaning.<span data-footnote>[Icon Usability](https://www.nngroup.com/articles/icon-usability/) — Nielsen Norman Group</span> Icons are best used as illustrative aids to *enhance* meaning (in addition to text), *not* to be the sole indicator of it.

**Ensure icons are meaningful and relevant.** An icon should, to the extent possible, independently and accurately reflect the sense of the accompanying text. Deduce the context-dependent [icon classification](https://www.nngroup.com/articles/classifying-icons/) (resemblance, symbolic, or conventional), and consider whether an icon of a different classification may be more effective.

**Prefer simplicity and clarity over visual interest.** Icons that communicate an idea clearly and efficiently will benefit the user experience over icons that are busy or attention-drawing. Furthermore, avoid icons that are overly esoteric; users shouldn't need to solve a puzzle to understand an icon.<span data-footnote>[Bad Icons: How to Identify and Improve Them](https://www.nngroup.com/articles/bad-icons/) — Nielsen Norman Group</span>

## Example

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" with {
  examples: {
    "Twig": '{{ include("@tcds/components/icon/icon.html.twig", {
  icon: "info",
}) }}',
    "HTML": '<span class="Icon" data-component="Icon" aria-hidden="true" role="presentation">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4m0-4h0"></path></svg>
</span>',
  },
} %}
  {% block result %}
    {{ include("@tcds/components/icon/icon.html.twig", {
      icon: "info",
    }) }}
  {% endblock %}
{% endembed %}
twig-->

<details>
  <summary>Technical details</summary>
  <div>

The Icon component works by directly [`include`-ing](https://twig.symfony.com/doc/3.x/functions/include.html) an icon's SVG file as a Twig template, which outputs the code in the HTML. This is to avoid extra [HTTP requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) and to allow for the direct styling of the icon with CSS.

The default styling of an icon is based on its parent element. It inherits the text `color` for its `stroke` or `fill` (`currentColor`), and the `height` is set to `1em`, i.e. 100% of the parent's `font-size`.

Alternatively, for no styling or HTML wrapping at all, bare icons can be directly included in Twig. All icons are placed in the `icons/` folder of the theme's `template/` directory (accessible from any directory via the configured [template namespace](https://www.drupal.org/docs/8/theming-drupal-8/including-part-template#s-the-recommended-method), e.g. `@tch`), with the extension `.svg.twig`.

<!--twig
{% embed "@tch/includes/example-box/example-box.html.twig" with {
  examples: {
    "Twig": '{{ include("@tcds/icons/info.svg.twig") }}',
    "HTML": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4m0-4h0"></path></svg>',
  },
} %}
  {% block result %}
    {{ include("@tcds/components/icon/icon.html.twig", {
      icon: "info",
    }) }}
  {% endblock %}
{% endembed %}
twig-->

Use caution when doing this—styling and [accessibility considerations](#accessibility) will have to be handled manually.
</div>
</details>


## Icon library

Many of the current icons in this set are adapted from [ICONSVG](https://iconsvg.xyz) by Gaddafi Rusli.

<!--twig
  {% set icons = [
    "arrow-down",
    "arrow-left",
    "arrow-right",
    "arrow-up",
    "check",
    "chevron-down",
    "chevron-left",
    "chevron-right",
    "chevron-up",
    "code",
    "edit",
    "eye",
    "facebook",
    "grid",
    "hamburger",
    "info",
    "instagram",
    "list",
    "marker-filled",
    "marker",
    "mychart",
    "pause",
    "play",
    "search",
    "smartphone",
    "type",
    "wheelchair",
    "x",
    "youtube",
  ] %}
  <ul class="icon-grid" data-in-viewport="false">
    {% for index, icon in icons %}
      <li data-svg-snippet='{% autoescape %}{{ include("@tcds/icons/#{icon}.svg.twig") }}{% endautoescape %}' class="icon-grid__item" style="animation-delay: {{ (index + 1) * 50 }}ms" title="Click to copy SVG code">
        {{ include("@tcds/components/icon/icon.html.twig", {
          icon: icon,
        }) }}
        <span class="icon-grid__label">{{ icon }}</span>
      </li>
    {% endfor %}
  </ul>
twig-->

## Accessibility
The Icon component hides the icon itself from assistive technology with `aria-hidden=true` and `role=presentation`. This is because icons should only be used to supplement text,<span data-footnote>[Yes, Icons Need Text Labels](https://www.nngroup.com/videos/icon-text-labels/) (Video) — Nielsen Norman Group</span> in which case the text should serve as the icon's accessible label.

The only allowed exception is when an icon is used in a button without text, such as with the [Button](/components/button) component's [<code>icon-only</code> modifier](/components/button#icon-button). In this case, the Button's `label` property is still required, but serves as the `aria-label` and `title` attributes rather than as a visible label.

## Citations
<!--twig {{ include("@tch/components/footnotes/footnotes.html.twig") }} twig-->