---
category: Accessibility
title: Writing accessible content
description: The way text content is written and rendered has significant accessibility implications. It can determine whether users with disabilities have an inclusive and seamless experience or face frustration, exclusion, and usability issues.
---

<strong>This document is not comprehensive.</strong> It focuses specifically on the technical aspects of authoring accessible text and does not address prose or general editorial guidelines.

## Headings
Headings, H1 through H6, help break up and organize sections of content. It is important to include them to allow:

* Sighted users to more efficiently scan a page
* Users of screen readers to skip to relevant content and understand the outline of a page
* Search engine algorithms to more deeply understand a page's content

Heading elements help <i>outline</i> a page's landmark regions (navigation, main content, etc.) They should not be thought of as simply a way to change text size.

**Look at the overall document and its existing headings.** Pick a level that best fits given the context of the existing outline. Order headings in sequence, and _do not skip descending heading levels_; i.e., do not jump from an H1 to an H3—it must be H1, then H2, then H3. (However, you can skip ascending heading levels, such as following an H4 with an H2.)

**Do not use heading elements purely to change the text size.** If you need large text that doesn't strictly relate to a web page's outline, use CSS or a corresponding utility class (see [Typography &sect; Type scale](/design/typography#type-scale)) on the semantically appropriate element (e.g. `p`).

Inversely, you may sometimes need to use a heading element for its semantic meaning, but reduce its size to fit better within the page's design. Heading elements may even be visually hidden, and strictly used to convey semantic meaning to screen readers and search engines.

### Using H1
There should only ever be one H1 on a page. It should contain the page's name or topic (even if it has to be visually hidden for the design, like on a home page). It should not be used to contain the website name, and it should not be used to simply make the biggest text possible.

Page builders and content authors should rarely need to use an H1 directly, as this will typically be used to render the page's title automatically.

### Using H5 and H6
H5 and H6 headings should usually not be used. Before reaching for them, consider splitting up your content between multiple pages or simplifying it.

Using them can make a page's outline too deep, which can be cumbersome for users of assistive technology. When in doubt, the best course of action is always to actually [test the content with a screen reader](/accessibility/testing) and judge the experience for yourself.

## Links
The text of a link should describe or fully label the page it points to. Some assistive technology, such as screen readers, provide their users with a list of links on a page to navigate. As such, these links need to be sensible without their surrounding context.

Do not use vague or context-dependent words or sentences:

> To get more information about vaccines, click [here](#example).

Instead, be explicit so the link makes sense without context:

> Get more [information about vaccines](#example).

This provides two other benefits aside from accessibility. It helps search engines better understand the purpose, intent, and content of a page's links, and improves usability for sighted users, providing a stronger [information scent](https://www.nngroup.com/articles/information-scent/ "Information Scent: How Users Decide Where to Go Next — Nielsen Norman Group") and, in most cases, a larger [touch target](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html "Understanding Success Criterion 2.5.5: Target Size — W3.org").

## Alternative image text
The `alt` attribute contains **alternative text** to images. It is used by:

* Screen readers to communicate the meaning of an image to a visually impaired user.
* Search engine algorithms to more deeply understand a page's content.
* The browser to visually display to users when an image fails to load, which affords accessibility to situationally disabled users (e.g. poor internet connection).

**All images must have an `alt` attribute.** All images that are not purely decorative must have text in this `alt` attribute. This is not only an accessibility mandate, but an SEO one.

### How to write alt text
Alternative text should be a literal description of the image. While not overly sterilizing the tone of the text, the goal should be to convey the same *visual* information to a visually impaired user as a sighted user would receive by looking at the image. In effect, the text should function as a suitable substitute to the image.

Avoid narrative information:

> Dr. Smith giving a patient an annual checkup.

This description leaves all visual details up to the user's imagination.

Instead, prefer visually descriptive information:

> Doctor applying stethoscope to patient's chest in her office.

Note that there is a place for narrative descriptions like the former example: [thumbnail captions](/primitives/images#thumbnail-captions). These are marked up with `figcaption` elements, and are visibly displayed (usually beneath the image). Their purpose is to provide deeper meaning to the image that places it in context. It should be information given to all users, sighted and visually impaired alike.

## Further reading
* [Designing for Screen Reader Compatibility &sect; How Screen Readers Read Content](https://webaim.org/techniques/screenreader/#how) — WebAIM
* [Alternative text](https://webaim.org/techniques/alttext/) — WebAIM