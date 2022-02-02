<!--lead
  Texas Children's Design System is a centralized library of resources for creating websites at scale. It aims to bring consistency, standardization, and efficiency to Texas Children's digital products, by providing reusable patterns, documentation, and standards.
lead-->

## Get started

First, read the [Getting Started](/getting-started) page, then select a category below to begin using the Design System.

<!--twig
  {% set contents = [
    {
      heading: "Design",
      subheading: "Typography, color, layout, and more",
      link: "/design/animation",
      icon: "eye",
    },
    {
      heading: "Components",
      subheading: "Reusable building blocks and interface elements",
      link: "/components/accordion",
      icon: "grid",
    },
    {
      heading: "Primitives",
      subheading: "Basic HTML elements. Forms, lists, images, and more",
      link: "/primitives/forms",
      icon: "type",
    },
    {
      heading: "Accessibility",
      subheading: "Creating inclusive experiences for users with disabilities",
      link: "/accessibility",
      icon: "wheelchair",
    },
  ] %}
  <ul class="column" style="margin: 24px 0">
    {% for item in contents %}
      <li>
        {{ include("@tch/components/tile/tile.html.twig", {
          heading: item.heading,
          subheading: item.subheading,
          link: item.link,
          icon: item.icon,
          modifiers: ["no-hover", "small", "filled-icon"],
        }) }}
      </li>
    {% endfor %}
  </ul>
twig-->

## Goals

Goals are accomplished by following our [Principles](#principles).

**Create pleasant and inclusive experiences.** Our web products should be intuitive to use and accessible to all, with a strong sense of cohesion and credibility.

**Increase efficiency and focus.** By documenting and demonstrating established solutions to precedented challenges, we reduce guesswork and redundancies, and streamline the process of prototyping, iterating, and maintaining on the web.

. . .

## Principles

Principles are the means to our [Goals](#goals).

**Human-centered design.**

* Intuitive: Experiences should be familiar and consistent to maximize user engagement and [limit cognitive load](https://www.nngroup.com/articles/minimize-cognitive-load/ "Minimize Cognitive Load to Maximize Usability — Nielsen Norman Group") from inconsistent or esoteric design.
* Focused: Experiences should be as simple and streamlined as possible to achieve the required user goal. Design patterns should consider the target audience, define optimal use cases, and when they should not be used.
* Inclusive: Going a step beyond [accessibility](/accessibility), inclusive design is a committment to bringing efficient and pleasant experiences to users of all abilities and backgrounds.
* Performant: Views should be fast to load, and interaction should feel smooth and efficient. Requests transfer minimal data to users, and leverage the most efficient rendering strategies for the task at hand.

**Standardized.**

* Modern: Newly stable technologies and APIs are leveraged to provide users with the most performant, effective, and feature-rich interfaces possible.
* Consistent: Everything from interaction design, pattern design, coding style, API integration, to aesthetic style should be consistent with a single source of truth.
* Semantic: Content and interface elements are enriched with semantic meaning, enhancing the accessibility of assistive technology, integration with social media, and understanding by search engine algorithms.
* Adaptable: Every element is made with iteration and logistics for updating and maintaining in mind.

. . .
<!--
- Open — transparent development, open source, open to contribution and feedback from all across the organization
- Interoperable — platform-agnostic, paradigm-agnostic: should work with any content management system, rendering strategy, etc.
- Rigorous
-->

## Questions and feedback

Please see [Contributing](/contributing).

* To do: Investigate creating a Slack space or more informal channel for help and feedback.

<!--
https://style.helpscout.com/product/#help-scout-design-system - really good language here for introducing the design system as a concept

https://designsystem.digital.gov/design-principles/ - same for principles

Make analytics part of the DS? https://designsystem.digital.gov/about/research/

Security? https://designsystem.digital.gov/about/security/
-->