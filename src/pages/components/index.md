---
category: Components
title: Components
menu_title: Overview
description: Components are reusable building blocks for creating pages and interfaces. They are intended to be configurable, content-agnostic, and context-aware, while also being consistent and predictable. Using a component-based approach to building pages and interfaces, you can more quickly and easily deliver consistent, quality-controlled experiences to end users.
route: /components
template: components/index
---

This section contains usage examples and guidance, best practices, and technical documentation for all components in the Design System.

Be careful not to misuse or try to hack components. We also strongly advise that you try to find an appropriate Design System component for all content and interface needs. Always feel free to [reach out to the Design System team](#contact) to discuss new components and features.

Components are regularly updated to fix issues and add new features. So long as you use them as documented here, you can rest assured future updates will not break your pages.

## For site builders
As a site builder or content author, you may need to enter or update content inside of components, or choose the appropriate component for displaying content or facilitating a user goal. Most applicable to you in the documentation in this section will be best practices, such as when and whether to use a component.

In most cases, and eventually all cases, Texas Children's websites are built with Drupal. Components are used through page building solutions, like Site Studio. The documentation will provide step-by-step or visual instructions for how to use components as a page builder or content author. We will try our best to keep this up to date, but if you notice any disparity between the documentation in this section and production websites, please [let us know](#contact).

## For developers
As a site developer, you may be tasked with implementing the Design System on a downstream website. The documentation in this section contains usage examples with code snippets, as well as an API table and links to source code.

Most components are [custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements), using the [Web Components API](https://developer.mozilla.org/en-US/docs/Web/API/Web_components). The API table will contain details for a custom element's available attributes and slots, and if applicable, JavaScript methods and properties.

Further technical documentation is housed on the wiki for the Design System's GitHub repository:

* [**A primer on Web Components**](https://github.com/jacecotton/tcds/wiki/A-primer-on-Web-Components)
* [**How to read component API tables**](https://github.com/jacecotton/tcds/wiki/How-to-read-component-API-tables)

## For maintainers
This documentation site serves a dual purpose: living documentation and a testing suite. It consumes a fresh install of the Design System, and displays each component in all pertinent configurations on dedicated pages.

This site can be cloned locally and pointed to a local development copy of the Design System to test any updates. Test both for intended functionality as well as for spec documentation parity. If updates are needed to the documentation, make sure to submit a corresponding PR alongside the update to the Design System.

## Contact
If you need help using the components or wish to report an issue, the Design System's lead maintainer can be contacted at [jxcotton@texaschildrens.org](mailto:jxcotton@texaschildrens.org).

Issues can also be submitted at the [Design System repository on GitHub](https://github.com/jacecotton/tcds/issues).