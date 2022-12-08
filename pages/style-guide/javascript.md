<!--lede
  Writing JavaScript for Texas Children's products.
lede-->

The following style guide applies to hand-authored, source JavaScript.

## Formatting
Download and use the [.eslintrc](https://github.com/jacecotton/tcds/blob/main/.eslintrc) file to take care of the more basic formatting rules automatically.

* Always include optional semicolons (at the end of expressions) and commas (after the last item in an object).
* Always include optional braces for conditional statements.
* White space and returns:
  * Use exactly one return after an opening brace and before a closing brace.
  * Use no space before an opening parenthesis, and exactly one space and no return between a closing parenthesis and an opening brace.
  * Use no space after an opening parenthesis or before a closing parenthesis. Use returns within parentheses only if the line becomes excessively long.
  * Use exactly one space on each side of an operator and after any commas.
```js
// Correct
function name(param) {
  if(condition === true) {
    return param + 1;
  }
}

// Incorrect
function name( param )
{
  if (condition===true) return param+2
}
```

* In arrow functions:
  * Use optional parentheses for a single parameter if braces are used to delimit the function body.
  * Only omit the braces if the function body is its return value.
  * If braces are used, use one return after the opening brace, and before the closing brace.

```js
// Correct
const myFunction = (param1, param2) => {
  return result;
};

const myFunction = param => result;

// Incorrect
const myFunction = (param1, param2) => { return result };

const myFunction = param => {
  return result;
};
```

## Case
* Use `camelCase` for variables, property keys, and methods.
* Use `PascalCase` for constructors (classes) and objects.

## Scoping and variables
* To declare variables:
  * Do not use `var` or globally-scoped variables unless absolutely needed for a clear and documented reason.
  * Default to `const`, which is safest by default, as it does not allow mutation or redefinition, and is block-scoped. This promises to other developers that the variable is not mutated at any other point in the code.
  * While it should be avoided if possible, if there is a need to allow the variable to be mutated, use `let`, which is block-scoped. This implies to other developers that the variable is to be mutated at some other point in the code.

## Naming
* For boolean variables and functions that return a boolean, prefer prefixing the names with yes/no question verbs (`is`, `has`, `was`, etc.)

```js
// Acceptable
const onlyOne = parent.children.length === 1;
const lastChild = parent.children.indexOf(element) === parent.children.length - 1;

// Better
const hasOnlyOne = parent.children.length === 1;
const isLastChild = parent.children.indexOf(element) === parent.children.length - 1;
```

* Use clear and self-documenting names. Do not use single letters or abstracted names that don't actually provide self-documentation.

```js
// Acceptable
let index = 0;
const nextElement = parent.children[parent.children.indexOf(element) + 1];

// Unacceptable
let i = 0; // Not clear
const getElementIncrementedByOneFromCurrentIndex =
  parent.children[parent.children.indexOf(element) + 1]; // Not helpful
```

* Use concise names, but do not use uncommon abbreviations or needless truncations. Prioritize readability and self-documentation over concision and typability. All names are reduced during minification anyway.

```js
// Acceptable
const previousButton;
const prevButton; // Common abbreviation; not required, but acceptable
const getItemByRouteName;

// Unacceptable
const prevBtn; // Uncommon abbreviation; "button" is sufficiently short
const getItem; // Vague; get item of what? By what?
```

## Programming style
* Where appropriate, prefer declarative programming over imperative.

```js
// Acceptable
let result;

if(condition) {
  result = "foo";
} else {
  result = "bar";
}

// Better
const result = condition ? "foo" : "bar";
```

* Where appropriate, prefer pure functions over impure.

```js
// Acceptable: Impure function creates mutation, causing side-effect.
let x = 2;
increment();

function increment() {
  x = x + 1;
}

// Better: Pure function does not create mutation, no side-effects.
let x = 2;
x = increment(x);

function increment(n) {
  return n + 1;
}
```