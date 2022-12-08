<!--lede
  Writing HTML for Texas Children's products.
lede-->

The following style guide applies to hand-authored, source HTML. This includes any HTML written within Twig and JavaScript templates, for which there are also separate guidelines:
* [Twig coding standards – Drupal.org](https://www.drupal.org/docs/develop/coding-standards/twig-coding-standards)
* [JavaScript style guide](/style-guide/javascript)

## Boilerplate
The following elements are the bare minimum for every HTML template:
* HTML5 doctype
* Document language
* UTF-8 charset
* Responsive viewport
* Title

<details>
  <summary>HTML boilerplate</summary>

```html
<!doctype html>
<html lang="en-us">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Title</title>
</head>
</html>
```
</details>

Everything else is technically optional.

## Formatting
* Always enclose attribute values in double quotes (`"`), not single quotes or unquoted.
* Omit values in boolean attributes (e.g. `<script async>`, not `<script async="">` or `<script async="async">`).
* Always include optional closing tags (e.g. `<li></li>`).
* Omit the forward slash in self-closing tags (e.g. `<br>`, not `<br />`).
* Omit optional attributes (e.g. `[type]` in stylesheet and script links).
* Use exactly one return for every block-level element. Omit new lines for inline-level elements, unless the length would make wrapping and indentation more appropriate.

```html
<p>
  Paragraph elements are block-level, so new lines are used. <span>Span
  elements</span> are inline-level, <a href="#">and so are links</a>, so line
  breaks are not used.
</p>
```

* Do not use excessive whitespace in markup (e.g. `<p class="text">`, not `<p class = "text">`).

## Case
* Use `kebab-case` for all naming (custom elements, custom attributes, classes, idents, etc.)
* Use lowercase for all syntax (tags, attributes, etc.; e.g. `<a href="#">` not `<A HREF="#">`).

## Semantics
* Choose elements appropriate to their semantic meaning and functional purpose.

```html
<!-- Incorrect: Links are not buttons -->
<a class="button" href="javascript:someAction()">Click me</a>

<!-- Incorrect: Buttons are not links -->
<button onclick="window.location.href = '/some-page'">Click me</button>
```

* When available, use semantic HTML elements over primitives with `[role]` and other ARIA attributes added.

```html
<!-- Incorrect: There is no reason to use a primitive here -->
<div role="region">...</div>

<!-- Correct: Section has an implicit region role -->
<section>...</section>

<!-- Correct: There is no available semantic element, and the appropriate
     functional element is used in addition to the role -->
<button role="tab">...</button>
```

* Only use style-imparting semantic elements (such as `<strong>`) if the semantic meaning is appropriate for the content:

```html
<!-- Incorrect: The enclosed text is not meant to be strongly stated,
     only visually emphasized -->
<strong>Notice:</strong> Lorem ipsum dolor sit amet ...

<!-- Better: The enclosed text arguably is meant to have attention
     "b"rought to it -->
<b>Notice:</b> Lorem ipsum dolor sit amet ...

<!-- Best: The enclosed text is purely visually emphasized -->
<span class="font-weight-bold">Notice:</span> Lorem ipsum dolor sit amet ...

<!-- Correct: The enclosed text is meant to be strongly stated -->
We will be <strong>closed on Monday</strong> for maintenance.
```

## Naming
* For unscoped and unencapsulated styles, use the BEM convention for class naming of block-level elements and their children.
* With the exception of Design System-provided utility classes, use <em>semantic</em> class naming over <em>functional</em> or <em>contextual</em> class naming.

```html
<!-- Functional: Mixes concerns, verbose, non-DRY, decentralized -->
<div class="bg-white padding-10 box-shadow border-radius-10 flex-row">
  <img ... class="flex-1 border-radius-100 align-center margin-5">
  <div class="flex-column gap-2 padding-10">
    ...
  </div>
</div>

<!-- Contextual: Insufficiently generic (non-reusable, non-scalable),
     tends to bloat -->
<div class="doctor-info">
  <img ... class="doctor-info__portrait">
  <div class="doctor-info__name-and-contact">
    ...
  </div>
</div>

<!-- Semantic: Reusable, pattern-based, content-agnostic, concise,
     separates concerns, DRY, centralized -->
<div class="card">
  <img ... class="card__image">
  <div class="card__content">
    ...
  </div>
</div>
```