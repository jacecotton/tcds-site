---
category: Layout
title: Layout design
description: Layouts are designed with grids, flexible distribution, and responsive positioning and sizing.
published: false
---

## Grid vs. flex layouts
The Design System offers both a grid layout component and a flex layout component, based on [CSS Grid]() and [CSS Flex]() respectively. Each have their own distinct benefits and should be chosen based on the particular use case.

<details>
  <summary>Sketch</summary>

Highly visual, very simple illustrations and animations about the fundamental differences between grids and flex layouts.

* Grids define rows and columns, and children generally fall within the "tracks" defined by the grid container. They can span multiple rows and columns, but otherwise must abide by the layout defined by the parent. (Animation idea: lines drawn for columns and rows; items fill in one at a time, uniform size/spans; some items start to span multiple columns, forcing items over into new rows, abiding by the track definitions.)
* Flex layouts attempt to force items onto rows; define how items are positioned within a row (space-between, space-around, etc.); can kick off into new rows, but those rows aren't defined; items can center within their rows without respect to other rows, in other words there are no column tracks.
  * Animation idea 1: blocks that stack vertically - they then are forced onto one row, but extend past their container at first, before being squeezed to confine to the width of the flex parent as part of the animation; each block starts with `flex: 1 0`, but then adapt to a `fit-content` width, then the animation cycles through `space-between`, `space-around`, etc.
</details>

Grid layouts are defined by a **grid container**, which specifies a strict 2-dimensional layout (using rows and columns), which each child element, **grid items**, must abide by (and fall into automatically).

Rows and columns create layout-wide **grid tracks** (illustrated by the dashed lines below) that determine placement and relative alignment. A grid item can span multiple rows and columns.

> INSERT GRID ANIMATION

A grid container can specify multi-column and/or multi-row **grid areas** for a grid item to fill.

> INSERT GRID ILLUSTRATION
(demoing grid areas/holy grail)

Grid layouts are best for complicated or macro-level layouts, where strict adherence to a centrally specified layout is desired.

----

Flex layouts are controlled by a parent **flexbox**, which attempts to fit and align any child elements, **flex items**, along 1 dimension only (either row or column), according to a number of <abbr title="Simple rules to inform complicated decisions.">heuristics</abbr> available to and specified by the author or designer.

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

## Max width containers
The utility class `.max-width` defines a centered container with a `max-width` of `--tcds-max-width`, set by default to `--tcds-site-container-max-width`, which is 1000px.

The `.max-width` container can be used with different widths to create a centered, constrained width, responsive container, by redefining `--tcds-max-width` to whatever you want.

This is why the class is named `.max-width` and not `.site-max-width`.

## References
* https://fluent2.microsoft.design/layout