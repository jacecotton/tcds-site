<!--lead
  Accessibility is the ability of, and ease with which, people with disabilities access a digital service, regardless of the type or degree. Whether a chronic medical condition or a temporary situational obstacle, Texas Children's websites and interfaces should be accessible and pleasant to use for all.
lead-->

<!--twig
  {{ include("@tcds/components/message/message.html.twig", {
    content: '<strong>This document is not comprehensive.</strong> As accessibility is implicated across <em>every</em> aspect of the Design System, there is such guidance on nearly every documentation page. Content included there is not repeated here. For example, guidance on accessibility for users with low color sensitivity is covered in <a href="/design/color">Design &rarr; Color</a>, those with vestibular disorders in <a href="/design/animation">Design &rarr; Animation</a>, and so on.',
    modifiers: ["attention"],
  }) }}
twig-->

<!--
Maybe bring back when we can come up with less rough language. First point is good, last two need work.

## Principles

**Inclusive**. Inclusive design goes a step beyond accessibility, recognizing its applicability to more than just users with disabilities, and its definition as involving more than simple access. It is a committment to bringing efficient and pleasant experiences to users of all abilities and backgrounds.

**Empathetic**. User needs and experiences drive design decisions. Testing and accomodation is driven by empathy—[not sympathy](https://www.nngroup.com/articles/sympathy-vs-empathy-ux/ "Sympathy vs. Empathy in UX — Nielsen Norman Group")—???

**Human-centered**. ??? In essence, accessibility isn't treated as a burden or problem, but as a minimum, fundamental aspect of building for production. Similarly, users affected by accessibility are not placed in a "disabled" or "normal" dichotomy, but are considered alongside any other user group. ??? You get the point.
-->

## Accessibility for whom?

While "accessibility" is commonly associated with accomodating users with disabilities, it in fact affects all users. It involves consideration for chronic medical conditions, as well as situational obstacles and temporary disabilities. **Usability and accessibility are inextricably linked:** research demonstrates that improving usability for users with disabilities increases usability for non-disabled users as well.<span data-footnote>[Lower-Literacy Users: Writing for a Broad Consumer Audience](https://www.nngroup.com/articles/writing-for-lower-literacy-users/) — Nielsen Norman Group</span> For example:

* Ensuring proper color contrast for color blind users also improves the experience for perfectly sighted users who may be using their phone out in the sun, and therefore less able to perceive contrast.
* Providing text transcriptions as alternatives to audio or video ensures accessibility to hard-of-hearing users, as well as to users on unstable internet connections who cannot or do not wish to download large media. Users in a crowded environment without access to headphones may also prefer to read instead of listen.

### Chronic conditions
The following list is non-exhaustive, and is intended to give a general overview of the types of conditions and accommodations that are considered.

* **Visual impairments** — low vision, blindness, color insensitivity, low contrast perception — Some cognitive conditions may affect vision, such as dyslexia (for which the umbrella term "print disability" is sometimes used). Users with these conditions often use assistive technology such as screen readers, dictation software, or braille displays. They may also set certain preferences, such as increasing font size, zoom level, or contrast.
* **Audiological conditions** — hearing loss, auditory processing disorders, sound sensitivities — Users with these conditions may require captions or text transcriptions for video and audio, and visual feedback in addition to audio feedback.
* **Cognitive conditions** — attention deficit disorders, dyslexia, autism, intellectual disability, dementia — Users with these conditions are best served with designs that are consistent and predictable, using clear and concise language, and patterns that are familiar and intuitive. They may prefer to consume certain content in different formats, such as video or audio over text, and as such may use screen readers.
* **Photosensitive conditions** — vestibular disorders, epilepsy, migraine disorders — Symptoms of these conditions, such as vertigo, nausea, headaches, and seizures, can have photosensory triggers, including from digital displays. Users with these conditions are best served with designs that limit on-screen motion and avoid rapid changes in light. They may set certain preferences, such as reducing motion, which should be respected by designers by limiting or disabling animation.
* **Motor impairments** — cerebral palsy, muscular dystrophy, and Parkinson's disease — Users with these conditions typically use input interfaces and navigation tools that are different from—or a limited subset of—a keyboard, mouse, trackpad, or touch screen. Some examples include joysticks, mouth sticks, head wands, eye trackers, and dictation software.

### Temporary or non-medical obstacles
Categories of temporary or non-medical obstacles include, but are not limited to:

* **Environmental** — unstable internet connection, overpowering sunlight — Users in this category benefit from pages that are lightweight, perform fast, and make good use of contrast to withstand changes in environmental light.
* **Device capability** — limited screen size, processing power, bandwidth — Users in this category also benefit from pages that are lightweight and perform fast, as well as responsive and fault tolerant.
* **Focus** — multitasking, time constraints — Users in this category benefit from designs that are simple and streamlined, with language that is concise and efficient.
* **Background** — differences in things like age or culture could impact understanding of abstract conventions in web design, such as [iconographic symbolism](/components/icon).

## Your responsibility
While every element of the Design System has been built with accessibility in mind, a considerable portion of accessible design is up to the *context* in which something is used. The [Button component](/components/button) may be accessible *per se*, but the color used, the language of the label, and the action associated with it may not be.

The Design System always seeks to provide relevant accessibility guidance just as much as technical documentation in these cases. Ultimately, however, creating accessible and inclusive experiences is an interdepartmental, multidisciplinary commitment.

## Citations
<!--twig {{ include("@tch/components/footnotes/footnotes.html.twig") }} twig-->

## Further reading
* [Beyond Accessibility: Treating Users with Disabilities as People](https://www.nngroup.com/articles/beyond-accessibility-treating-users-with-disabilities-as-people/) — Nielsen Norman Group
* [Lower-Literacy Users: Writing for a Broad Consumer Audience](https://www.nngroup.com/articles/writing-for-lower-literacy-users/) — Nielsen Norman Group
* [Accessibility Requirements for People with Low Vision](https://www.w3.org/TR/low-vision-needs/) — W3.org
* [Evaluating Cognitive Web Accessibility](https://webaim.org/articles/evaluatingcognitive/) — WebAIM
* [Sympathy vs. Empathy in UX](https://www.nngroup.com/articles/sympathy-vs-empathy-ux/) — Nielsen Norman Group
* [Inclusive design](https://www.nngroup.com/articles/inclusive-design/) — Nielsen Norman Group

<!--
metnion visually hidden mixin/utility
* https://www.carbondesignsystem.com/guidelines/accessibility/overview/
* https://alistapart.com/article/accessibility-for-vestibular/
* https://uxplanet.org/web-accessibility-for-vestibular-disabilities-919a78d7b0b1
-->