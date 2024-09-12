---
category: Layout
title: Layout design
description: Layouts are designed with grids, flexible distribution, and responsive positioning and sizing.
---

## Grid layout
A grid layout defines columns, rows, and regions within which elements can reside and be [positioned](#positioning).

Typically, layouts should use a 12-column grid, with regions that span columns and rows as needed.

<style>
.grid-demo {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: .5rem;
  max-width: 650px;
  margin: 1rem auto;
  aspect-ratio: var(--tcds-aspect-ratio-widescreen);
  background: rgb(0 0 0 / 2.5%);
  padding: 1rem;
  border-radius: var(--tcds-border-radius-m);
}

.grid-demo__column-fill {
  grid-column: span 1;
  border: 1px dashed var(--tcds-color-navy);
  background: var(--tcds-color-baby-blue);
  border-top: 0;
  border-bottom: 0;
  opacity: .2;
  grid-row: 1 / 6;
  z-index: 1;
}

.grid-demo__region {
  background: rgb(255 0 15 / 12%);
  border-radius: var(--tcds-border-radius-m);
  display: grid;
  place-items: center;
  text-align: center;
  font-family: var(--tcds-font-ui);
  font-weight: var(--tcds-font-weight-semibold);
  font-size: var(--tcds-font-size-s);
  z-index: 2;
  color: var(--tcds-color-gray-3);
}

.responsive-demo {
  width: 100%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 1fr 2rem 1fr;
  gap: 1rem;
  place-items: center;
  aspect-ratio: var(--tcds-aspect-ratio-ultrawide);
}

.responsive-demo .grid-demo {
  margin: 0;
}

.grid-demo--desktop {
  height: 50%;
  width: 100%;
}

.grid-demo--mobile {
  width: 50%;
  height: 100%;
}
</style>

<div class="grid-demo">
  <!--twig
    {% for i in 1..12 %}
      <div class="grid-demo__column-fill" style="grid-column: {{ i }} / {{ i + 1 }}"></div>
    {% endfor %}
  twig-->
  <div class="grid-demo__region" style="grid-column: 1 / 9; grid-row: 1 / 4"></div>
  <div class="grid-demo__region" style="grid-column: 9 / -1; grid-row: 1 / 2"></div>
  <div class="grid-demo__region" style="grid-column: 9 / -1; grid-row: 2 / 3"></div>
  <div class="grid-demo__region" style="grid-column: 9 / -1; grid-row: 3 / 4"></div>
  <div class="grid-demo__region" style="grid-column: 1 / 7; grid-row: 4 / 6"></div>
  <div class="grid-demo__region" style="grid-column: 7 / -1; grid-row: 4 / 6"></div>
</div>

For creating responsive layouts, each column should be an even 12th of the container's available width, which may be flexible. Therefore, do not define column widths as a fixed number (like with a pixel value).

From there, regions can be set to span a different number of columns and rows as the viewport shrinks and grows.

<div class="responsive-demo">
  <div class="grid-demo grid-demo--desktop">
    <!--twig
      {% for i in 1..12 %}
        <div class="grid-demo__column-fill" style="grid-column: {{ i }} / {{ i + 1 }}"></div>
      {% endfor %}
    twig-->
    <div class="grid-demo__region" style="grid-column: 1 / 9; grid-row: 1 / 4">
      <span>8 cols / 3 rows</span>
    </div>
    <div class="grid-demo__region" style="grid-column: 9 / -1; grid-row: 1 / 2">
      <span>4 cols / 1 row</span>
    </div>
    <div class="grid-demo__region" style="grid-column: 9 / -1; grid-row: 2 / 3">
      <span>4 cols / 1 row</span>
    </div>
    <div class="grid-demo__region" style="grid-column: 9 / -1; grid-row: 3 / 4">
      <span>4 cols / 1 row</span>
    </div>
    <div class="grid-demo__region" style="grid-column: 1 / 7; grid-row: 4 / 6">
      <span>6 cols / 2 rows</span>
    </div>
    <div class="grid-demo__region" style="grid-column: 7 / -1; grid-row: 4 / 6">
      <span>6 cols / 2 rows</span>
    </div>
  </div>
  <tcds-icon icon="arrow-right"></tcds-icon>
  <div class="grid-demo grid-demo--mobile">
    <!--twig
      {% for i in 1..12 %}
        <div class="grid-demo__column-fill" style="grid-column: {{ i }} / {{ i + 1 }}"></div>
      {% endfor %}
    twig-->
    <div class="grid-demo__region" style="grid-column: 1 / -1; grid-row: 1 / 4">
      <span>12 cols / 3 rows</span>
    </div>
    <div class="grid-demo__region" style="grid-column: 1 / 5; grid-row: 4 / 5">
      <span>4 cols / 1 row</span>
    </div>
    <div class="grid-demo__region" style="grid-column: 5 / 9; grid-row: 4 / 5">
      <span>4 cols / 1 row</span>
    </div>
    <div class="grid-demo__region" style="grid-column: 9 / -1; grid-row: 4 / 5">
      <span>4 cols / 1 row</span>
    </div>
    <div class="grid-demo__region" style="grid-column: 1 / 7; grid-row: 5 / 6">
      <span>6 cols / 1 row</span>
    </div>
    <div class="grid-demo__region" style="grid-column: 7 / -1; grid-row: 5 / 6">
      <span>6 cols / 1 row</span>
    </div>
  </div>
</div>

<small style="display: block" class="text-center">INSERT ILLUSTRATION</small>

Grid layouts can also be used to create a smaller number of columns of equal size to evenly distribute elements, like a list of cards:

<small style="display: block" class="text-center">INSERT ILLUSTRATION</small>

Note that if the number of items exceeds the number of available columns, rows are automatically created (implicit rows):

<small style="display: block" class="text-center">INSERT ILLUSTRATION</small>

To create new rows as the available space shrinks, reduce the number of columns defined in the grid:

<small style="display: block" class="text-center">INSERT ILLUSTRATION</small>

## Flex layout

## Positioning
In web layout nomenclature, **positioning** has to do with the *alignment* and *justification* of an element.

The **alignment** of an element is its position along the *cross axis*, or in the *block direction*.

The **justification** of an element is its position along the *main axis*, or in the *inline direction*.

In other words, by default and in most cases:
* "alignment" in web terms equals "vertical alignment" in plain English
* "justification" in web terms equals "horizontal alignment" in plain English

There are two primary cases where the above are swapped:
* When the `flex-direction` of a flex container is set to `column`
* In vertically-written languages (not generally applicable)

### Floating
Floating is neither positioning nor alignment, but rather describes how surrounding content should flow around an element.

## References
* https://fluent2.microsoft.design/layout