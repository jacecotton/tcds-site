---
title: Button
category: Components
parent: Interface
description: Buttons allow users to trigger an action with a single tap, click, or keypress. They are useful to call attention to some action or to provide controls for an interface or form. Links navigate users to another page, and can be styled to look like buttons.
---

<!--twig
{% embed "@tc/includes/example.twig" %}
{% block content %}
<button is="tcds-ui-button">Example button</button>
{% endblock %}
{% endembed %}
twig-->

## Best practices
**Use concise, accurate, and specific labels.** Avoid vague and abstract language like "Get started" or "Learn more". Prefer explicit labels instead, like "Find doctor" or "Schedule appointment". Accurate and specific language improves user confidence and engagement ([1](https://www.nngroup.com/articles/information-scent/#:~:text=Perhaps%20the%20most,to%20click%20it. "Information Scent: How Users Decide Where to Go Next - Nielsen Norman Group")), while overly broad calls to action can mislead, confuse, and fail to interest users ([2](https://www.nngroup.com/articles/get-started/ "Get Started Stops Users - Nielsen Norman Group")).

**Use sentence case.** All-uppercase text is slower and more difficult to read ([3](https://www.w3.org/TR/low-vision-needs/#capitalization)). Furthermore, screen readers sometimes interpret certain uppercased words as common initialisms (such as ADD or US), and may erroneously spell out those words letter by letter ([4](https://webaim.org/techniques/screenreader/#:~:text=Screen%20readers%20try%20to%20pronounce%20acronyms%2C%20if%20there%20are%20sufficient%20vowels/consonants%20to%20be%20pronounceable.%20Otherwise%2C%20they%20spell%20out%20the%20letters.)).

## Usage
### Secondary buttons
De-emphasized buttons pair well with primary buttons or in interfaces that need to be decluttered. They can be created with the [`variant` attribute](#variant-attribute).

<!--twig
{% embed "@tc/includes/example.twig" %}
{% block content %}
<button is="tcds-ui-button" variant="secondary">Secondary button</button>
{% endblock %}
{% endembed %}
twig-->

**Note:** Because secondary buttons automatically have a right-facing caret button, avoid using additional icons with this variant.

### Link buttons
Links can be styled to look like buttons with the `tcds-link-button` extension for the [`a` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a).

<!--twig
{% embed "@tc/includes/example.twig" %}
{% block content %}
<a is="tcds-link-button" href="https://www.texaschildrens.org/">Go to texaschildrens.org</a>
{% endblock %}
{% endembed %}
twig-->

### Icons
[Icons](/brand/icons) can be added to a button by nesting the [icon component](/components/icon). Use them sparingly, as too many icons can create too much visual noise. Never use more than one icon per button.

<!--twig
{% embed "@tc/includes/example.twig" %}
{% block content %}
<button is="tcds-ui-button">
  <tcds-icon icon="download"></tcds-icon> Download
</button>
{% endblock %}
{% endembed %}
twig-->

Descendant order determines the icon's alignment.

<!--twig
{% embed "@tc/includes/example.twig" %}
{% block content %}
<button is="tcds-ui-button">
  Next <tcds-icon icon="arrow-right"></tcds-icon>
</button>
{% endblock %}
{% endembed %}
twig-->

## Sizes
Small and large buttons can be created with the [`size` attribute](#size-attribute).

<!--twig
{% embed "@tc/includes/example.twig" %}
{% block content %}
<button is="tcds-ui-button" size="small">Small button</button>
{% endblock %}
{% endembed %}
twig-->

<!--twig
{% embed "@tc/includes/example.twig" %}
{% block content %}
<button is="tcds-ui-button" size="large">Large button</button>
{% endblock %}
{% endembed %}
twig-->