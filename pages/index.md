<!--lead
  Texas Children's Design System is a centralized library of resources and guides for creating digital experiences.
lead-->

<!--twig
  {% set contents = [
    {
      title: "Design",
      subtitle: "Typography, color, layout, and more",
      link: "/design",
      icon: "eye",
    },
    {
      title: "Components",
      subtitle: "Standardized, reusable building blocks",
      link: "/components",
      icon: "grid",
    },
    {
      title: "Accessibility",
      subtitle: "Creating inclusive experiences for users with disabilities",
      link: "/accessibility",
      icon: "wheelchair",
    },
    {
      title: "Developers",
      subtitle: "Documentation, code reference, and style guides",
      link: "/developers/style-guide",
      icon: "code",
    },
  ] %}
  <ul class="grid gap-tight" style="--grid-columns: auto-fill; --grid-column-min-width: 356px; margin: 64px 0">
    {% for item in contents %}
      <li>
        {{ include("@tch/components/tile/tile.html.twig", {
          title: item.title,
          subtitle: item.subtitle,
          link: item.link,
          icon: item.icon,
          modifiers: ["fill"],
        }) }}
      </li>
    {% endfor %}
  </ul>
twig-->

## Goals

Goals are accomplished by following our [principles](#principles).

**Create pleasant and inclusive experiences.** Our digital products should be intuitive to use and accessible to all, with a strong sense of cohesion and familiarity.

**Increase productivity.** By documenting and demonstrating established solutions to precedented challenges, we take the guesswork and duplication out of prototyping, iterating, deploying, and scaling.

## Principles

Principles are the means to our [goals](#goals).

**Human-centered design.**

* Intuitive — familiar, consistent
* Focused — no extraneous elements; knows its audience
* Inclusive — accessible, fault tolerant, avoids assumptions on our end but considerate of user assumptions
* Performant

**Standardized.**

* Consistent — coding style, design choices, how things work
* Semantic
* Adaptable
    * Easy to iterate, update, and percolate

## Questions and feedback

Please see [Contributing](/contributing).

* Create a Slack space for TCDS?

## Further reading

* https://www.nngroup.com/articles/front-end-style-guides/
* https://www.nngroup.com/articles/improving-usability-guideline-compliance/
* https://designsystem.digital.gov/design-principles/
* Make analytics part of the DS? https://designsystem.digital.gov/about/research/
* Security? https://designsystem.digital.gov/about/security/