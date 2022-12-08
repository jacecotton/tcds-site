<!--lede
  Writing CSS for Texas Children's products.
lede-->

The following style guide applies to hand-authored, source (S)CSS.

## Formatting
Download and use the [.stylelintrc](https://github.com/jacecotton/tcds/blob/main/.stylelintrc) file to take care of the more basic formatting rules automatically.

* Never use the Sass syntax (`.sass`); only SCSS (`.scss`).
* White space and returns: 
  * Use exactly one empty line (two returns) between rulesets.
  * Use exactly one return after each selector except the last in a selector list.
  * Use exactly one space and no return between the last or only selector and an opening brace.
  * Use exactly one return after an opening brace and before a closing brace.
  * Use exactly one return after each declaration.
  * Use no space between a property and a colon, nor a value and a semicolon.
  * Use exactly one space between a colon and a value.

```css
/* Correct */
.selector-1,
.selector-2 {
  property-a: value-a;
  property-b: value-b;
}

.selector-3 {
  property-c: value-c;
}

/* Incorrect */
.selector-1, .selector-2
{
  property-a : value-a;
}

.selector-3{property-b:value-b}
```

* Ordering
  * Group declarations roughly according to concern (layout and spacing, then typography, then color, etc.) The ordering of one group over another doesn't matter.
  * Order declarations first according to precedence or dependency (e.g. `display` before `align-items`, `box-sizing` before `padding`, `position` before `top`, etc.), then alphabetically.
  * Include any mixins at the top of the ruleset, above all other declarations.
  * Define any custom properties above all other declarations but below mixin inclusions.
* Always use a semicolon after the last declaration in a ruleset.
* Avoid nesting rulesets more than three levels deep.

## Case
* Use `kebab-case` for all naming (custom properties, variables, classes, idents, mixins, etc.)
* Use lowercase for all syntax (properties, values, custom properties, functions, etc.)

## Naming
See [HTML style guide &sect; Naming](/style-guide/html#naming)