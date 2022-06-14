<!--lead
  Texas Children's is committed to providing intuitive and pleasant digital experiences to users of all abilities and backgrounds.
lead-->

Compliance with [Section 508 of the Rehabilitation Act](https://www.section508.gov/) is a foundational requirement for all Texas Children's websites. The guiding principles are laid out in the [Web Content Accessibility Guidelines 2.1](https://www.w3.org/TR/WCAG21/) (W3C Web Accessibility Initiative), and the Design System ensures a minimum AA-level conformance to that guideline.

However, accessibility is also contextual, so further guidance beyond what can be guaranteed out of the box is laid out in this section. Furthermore, as accessibility is implicated across *every* aspect of the Design System, there is such guidance on nearly every documentation page. Content included there is not repeated here. For example, accessibility for users with low color sensitivity is covered in [Design &rarr; Color](/design/color), those with vestibular disorders in [Design &rarr; Animation](/design/animation), and so on.

## Accessibility for whom?

While accessibility is primarily targeted towards those with chronic medical conditions, usability and accessibility are inextricably linked, meaning accessibility compliance improves usability across the board. Because of this, both chronic medical conditions and temporary or non-medical obstacles are considered in tandem.

Some of the most common medical conditions impacting the design and development of a website include but are not limited to the following:

* **Visual impairment** such as low vision, color blindness, etc. Users with these conditions often use assistive technology such as screen readers, dictation software, or braille displays. They may set certain system or browser preferences, such as increasing font size, zoom level, or contrast.
* **Audiological conditions** such as hearing loss, audio processing disorders, etc. Users with these conditions often require captions or text transcriptions for video and audio.
* **Cognitive and learning disabilities**. Users with these conditions are best served with designs that are simple, consistent, and clear, with multi-modal functionality and fault-tolerant design.
* **Photosensitive conditions** such as vestibular disorders, epilepsy, migraine disorders, etc. Symptoms of these conditions can have photosensory triggers, especially from digital displays. Users with these conditions are best served with designs that limit on-screen motion and avoid rapid changes in light.
* **Motor function** such as cerebral palsy, muscular dystrophy, Parkinson's disease, etc. Users with these conditions may use input methods and navigation tools that are different from—or a subset of—the traditional keyboard, mouse, trackpad, or touch screen. Examples include joysticks, mouth sticks, head wands, eye trackers, and dictation software.

Temporary or non-medical obstacles include but are not limited to the following:

* **Environmental factors** such as poor internet connection, bright sunlight, etc. Users in this category benefit from pages that are lightweight, performant, and make good use of contrast to withstand changes in environmental light.
* **Device capability** such as limited screen size, processing power, bandwidth, etc. Users in this category also benefit from pages that are lightweight and performant, as well as responsive and fault-tolerant.
* **Focus capacity** such as multitasking, time constraints, etc. Users in this category benefit from designs that are simple and streamlined, with language that is concise and efficient.
* **Background** such as age, culture, etc. Differences in background can impact understanding of abstract conventions in web design, such as [iconographic symbolism](/components/icon), as well as metaphorical terms like "[accordion](/components/accordion)". Use caution when employing conceptual abstractions, as they may not be universally well-understood.

## Your responsibility
While every element of the Design System has been built with accessibility in mind, a considerable portion of accessible design is up to the *context* in which something is used. The [Button component](/components/button) may be accessible *per se*, but the color used, the language of the label, and the action associated with it may not be.

The Design System always seeks to provide relevant accessibility guidance just as much as technical documentation in these cases. Ultimately, however, creating accessible and inclusive experiences is an interdepartmental, multidisciplinary commitment.

## Further reading
* [Section 508 of the Rehabilitation Act — FCC.gov](https://www.fcc.gov/general/section-508-rehabilitation-act)
* [Practical Reasons for Digital Accessibility — Section508.gov](https://www.section508.gov/manage/benefits-of-accessibility/)
* [Web Content Accessibility Guidelines (WCAG) 2.1 — W3C.org](https://www.w3.org/TR/WCAG21/)
* [WebAIM: Web Accessibility in Mind](https://webaim.org/)

<!--
metnion visually hidden mixin/utility
* https://www.carbondesignsystem.com/guidelines/accessibility/overview/
* https://alistapart.com/article/accessibility-for-vestibular/
* https://uxplanet.org/web-accessibility-for-vestibular-disabilities-919a78d7b0b1
-->