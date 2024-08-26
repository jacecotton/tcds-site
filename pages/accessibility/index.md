---
category: Accessibility
title: Accessibility
menu_title: Overview
description: Texas Children's is committed to providing intuitive and pleasant digital experiences to users of diverse abilities and backgrounds.
route: /accessibility
template: accessibility/index
---

Compliance with [Section 508 of the Rehabilitation Act](https://www.section508.gov/) is a foundational requirement for all Texas Children's websites. The guiding principles are laid out in the [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/), and the Design System ensures a minimum AA-level conformance to that guideline.

However, accessibility is also contextual, so further guidance beyond what can be guaranteed out of the box is laid out in this section. Furthermore, as accessibility is implicated across *every* aspect of the Design System, there is such guidance on nearly every documentation page. Content included there is not repeated here. For example, accessibility for users with low color sensitivity is covered in [Design &rarr; Color](/design/color), those with vestibular disorders in [Design &rarr; Animation](/design/animation), and so on.

## Who accessibility is for
While accessibility efforts are often focused on accommodating individuals with chronic medical conditions, quality accessibility and general usability are inextricably linked. Therefore, we aim beyond minimally required accessibility and instead for comprehensive inclusivity.

This requires consideration both for chronic medical conditions and temporary or non-medical obstacles. Some of the most common medical conditions impacting the design and development of a website include but are not limited to the following:

<tcds-accordion>
  <tcds-accordion-section label="Visual impairment">
    <p>
      Users with visual impairment—such as low vision, color blindness, etc.—often use assistive technology such as screen readers, dictation software, or braille displays. They may set certain system or browser preferences, such as increasing font size, zoom level, or contrast.
    </p>
  </tcds-accordion-section>
  <tcds-accordion-section label="Audiological conditions">
    <p>Users with audiological conditions—such as hearing loss, audio processing disorders, etc.—often require captions or text transcriptions for video and audio.</p>
  </tcds-accordion-section>
  <tcds-accordion-section label="Cognitive and learning disabilities">
    <p>Users with cognitive and learning disabilities are best served with designs that are consistent and well-organized, with multi-modal functionality and fault-tolerant design.</p>
  </tcds-accordion-section>
  <tcds-accordion-section label="Photosensitive conditions">
    <p>Users with photosensitive conditions—such as vestibular disorders, epilepsy, migraine disorders, etc.—can have visual triggers, especially from digital displays. Users with these conditions are best served with designs that limit on-screen motion and avoid rapid changes in light.</p>
  </tcds-accordion-section>
  <tcds-accordion-section label="Motor function impairments">
    <p>Users with motor function impairments—such as cerebral palsy, muscular dystrophy, Parkinson's disease, etc.—may use input methods and navigation tools that are different from—or a subset of—the traditional keyboard, mouse, or touch screen. Examples include joysticks, eye trackers, and dictation software.</p>
  </tcds-accordion-section>
</tcds-accordion>

Beyond these, temporary or non-medical obstacles include but are not limited to the following:

<tcds-accordion>
  <tcds-accordion-section label="Environmental factors">
    <p>Environmental factors such as poor internet connection, bright sunlight, etc. can impact accessibility. Users in this category benefit from pages that are lightweight, performant, and make good use of contrast to withstand changes in environmental light.</p>
  </tcds-accordion-section>
  <tcds-accordion-section label="Device capability">
    <p>Device features such as limited screen size, processing power, bandwidth, etc. can impact accessibility. Users in this category also benefit from pages that are lightweight and performant, as well as responsive and fault-tolerant.</p>
  </tcds-accordion-section>
  <tcds-accordion-section label="Focus capacity">
    <p>Users who are multitasking or have time constrants can benefit from designs that are simple and streamlined, with language that is concise and efficient.</p>
  </tcds-accordion-section>
  <tcds-accordion-section label="Background">
    <p>Background, such as age, culture, etc. can impact understanding of abstract conventions in web design, such as <a href="/brand/icons">iconographic symbolism</a>, as well as metaphorical terms like "<a href="/components/accordion">accordion</a>". Use caution when employing conceptual abstractions, as they may not be universally well-understood.</p>
  </tcds-accordion-section>
</tcds-accordion>

## Your responsibility
While every element of the Design System has been built with accessibility in mind, a considerable portion of accessible design is up to the *context* in which something is used. The [button component](/components/button) may be accessible *per se*, but the language of the label and the action associated with clicking it may not be.

The Design System always seeks to provide relevant accessibility guidance just as much as technical documentation in these cases. Ultimately, however, creating accessible and inclusive experiences is an interdepartmental, multidisciplinary task, which requires constant, proactive diligence.

## Further reading
* [Section 508 of the Rehabilitation Act — FCC.gov](https://www.fcc.gov/general/section-508-rehabilitation-act)
* [Practical Reasons for Digital Accessibility — Section508.gov](https://www.section508.gov/manage/benefits-of-accessibility/)
* [Web Content Accessibility Guidelines (WCAG) 2.1 — W3C.org](https://www.w3.org/TR/WCAG21/)
* [WebAIM: Web Accessibility in Mind](https://webaim.org/)