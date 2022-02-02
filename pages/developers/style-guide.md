## CSS

### Specificity management

* "Globals" are default styles applied to primitive elements (headings, paragraphs, links, lists, etc.) They should have extremely low specificity (imported first, low-specificity selectors), as primitives are often used for semantics inside components but require different styles. Therefore they should be very easy to override.
* "Utilities" are functional classes that can be applied to any element. They should have higher specificity (imported last), because they should act analogously to "pure functions" (always the same output for the same input). Plus, utilities are meant to be composable, which means that adding them on top of a component class, for instance, should modify that component's appearance, not be overruled by the component's base styles.