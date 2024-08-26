---
title: Typography
category: Brand
description: Typography establishes brand identity and tone, as well as visual hierarchy and rhythm in a design. Good typography helps communicate ideas more clearly and effectively.
---

## Typeface
Texas Children's typefaces include the serif [Calluna](https://fonts.adobe.com/fonts/calluna) and the sans-serif [Mont](https://www.fontfabric.com/fonts/mont/).

<style>
.typeface-box {
  background: var(--tcds-color-baby-blue);
  padding: 4rem 3rem;
  margin-bottom: 1.5rem;
  display: grid;
  align-items: center;
}

@media (min-width: 720px) {
  .typeface-box {
    grid-template-columns: repeat(2, 1fr);
  }
}

.typeface-box p {
  font-size: var(--tcds-font-size-3xl);
  line-height: .5;
  margin: 0;
}

.typeface-box small {
  font-size: var(--tcds-font-size-m);
}

.typeface-box ul {
  font-family: var(--tcds-font-ui);
  font-weight: var(--tcds-font-weight-semibold);
  font-size: var(--tcds-font-size-s);
  letter-spacing: .3px;
  margin: 2rem 0 0 2rem;
}

@media (min-width: 720px) {
  .typeface-box ul {
    margin: 0;
  }
}

.typeface-box ::marker {
  color: var(--tcds-color-primary);
  font-size: 1.5rem;
  line-height: 0;
}

@media (min-width: 720px) {
  .typeface-box li {
    padding-left: 1rem;
  }
}
</style>

<div class="typeface-box">
  <p class="font-serif">
    <span style="display: block">Calluna</span>
    <small style="font-weight: var(--tcds-font-weight-semibold)">Calluna Semibold</small>
    <small style="font-weight: var(--tcds-font-weight-bold)">Calluna Bold</small>
    <span class="visually-hidden">is used for</span>
  </p>
  <ul>
    <li>Display text (slogans, taglines)</li>
    <li>Heading elements (H1 and H2)</li>
    <li>Body copy (paragraphs, lists)</li>
  </ul>
</div>

<div class="typeface-box">
  <p class="font-sans-serif">
    <span style="display: block">Mont</span>
    <small style="font-weight: var(--tcds-font-weight-semibold)">Mont Semibold</small>
    <small style="font-weight: var(--tcds-font-weight-bold)">Mont Bold</small>
    <span class="visually-hidden">is used for</span>
  </p>
  <ul>
    <li>Complementary lockup text</li>
    <li>Subheadings (H3 through H6) and captions</li>
    <li>Interface elements (buttons, tables, labels)</li>
  </ul>
</div>

**Calluna and Mont are meant to be complementary.** Use them together to create striking lockups and introduce variety.

**Place visual weight on Calluna over Mont.** Calluna is our primary typeface, while Mont is secondary. Maintain a sufficient difference in font sizes between the two to avoid overcrowding and competition in the visual hierarchy.

**Stick to semibold weight (600) at large text sizes.** Medium weight (400) should be reserved for copy and small text, while bold weight (700) should be reserved for emphasis. Semibold can also be used for very small text to boost readability.

<style>
.typeface-demo {
  background: var(--tcds-color-baby-blue);
  position: relative;
  z-index: 1;
  padding: 3rem;
  line-height: 1;
  border-radius: var(--tcds-border-radius-l);
}

.typeface-demo::before {
  content: "";
  background: var(--tcds-color-baby-blue-2);
  width: max(100%, var(--tcds-macro-xl));
  height: 100%;
  position: absolute;
  top: 0;
  right: -25%;
  z-index: -1;
  mask: var(--tcds-icon-brand-texas-childrens) 50% 37% no-repeat;
  mask-size: cover;
  opacity: .2;
}

.typeface-demo span:nth-of-type(1) {
  display: block;
  font-family: var(--tcds-font-sans-serif);
  font-size: var(--tcds-font-size-xl);
  color: var(--tcds-color-navy);
  font-weight: var(--tcds-font-weight-semibold);
}

.typeface-demo span:nth-of-type(2) {
  font-size: var(--tcds-font-size-3xl);
  font-weight: var(--tcds-font-weight-semibold);
  color: var(--tcds-color-red);
  position: relative;
}

.typeface-demo span small {
  font-size: var(--tcds-font-size-l);
  position: absolute;
  top: 2rem;
}
</style>

<div class="typeface-demo">
  <span>The difference is</span>
  <span>life changing<small>&trade;</small></span>
  <p>At <b>Texas Children's Hospital</b>, we're proud to be recognized as one of the nation's best children's hospitals.</p>
  <p class="font-size-xs font-weight-semibold font-sans-serif">Button or small text</p>
</div>