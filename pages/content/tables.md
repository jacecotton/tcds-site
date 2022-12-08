<!--lede
  The Design System provides styling for <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table">tables</a>, which is used for rendering tabular data.
lede-->

<!--twig
{% embed "@tch/includes/example.twig" %}
{% block content %}
<table>
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
      <th>Column 3</th>
      <th>Column 4</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1, 1</td>
      <td>Data 1, 2</td>
      <td>Data 1, 3</td>
      <td>Data 1, 4</td>
    </tr>
    <tr>
      <td>Data 2, 1</td>
      <td>Data 2, 2</td>
      <td>Data 2, 3</td>
      <td>Data 2, 4</td>
    </tr>
    <tr>
      <td>Data 3, 1</td>
      <td>Data 3, 2</td>
      <td>Data 3, 3</td>
      <td>Data 3, 4</td>
    </tr>
  </tbody>
</table>
{% endblock %}
{% endembed %}
twig-->

## Best practices
### When to use
**To present tabular data.** Tabular data consists of rows and columns that are interrelated in a 2-dimensional matrix. Cell data should be associated with its column header, but also have an implicit relationship with the other data in its row. Avoid using tables simply for listing independent, unrelated columns side-by-side.

### When not to use
**To create layouts.** Assistive technology handles tables unlike normal content, under the assumption that the content is tabular data. This makes them unsuitable for general layouts, in addition to performance issues. To create table-like layouts, use CSS (we recommend grid, for which the Design System provides [grid utilities](/design/layout#grid)).

**To list key–value pairs.** 1-dimensional tabular data, defining one value for every column, is better presented as rows of key–value pairs. The [description list](/content/lists) fulfills this purpose better than tables.

## Usage
### Alternating row backgrounds
By default, rows will have a darkened background on-hover, allowing readers to more easily keep track of what row they're looking at (which is most helpful with large tables).

Another technique for improving readability is alternating background colors for each row, which you can use the `.table--bg-alternate` modifier class.

<!--twig
{% embed "@tch/includes/example.twig" with { line_highlight: "1" } %}
{% block content %}
<table class="table--bg-alternate">
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
      <th>Column 3</th>
      <th>Column 4</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1, 1</td>
      <td>Data 1, 2</td>
      <td>Data 1, 3</td>
      <td>Data 1, 4</td>
    </tr>
    <tr>
      <td>Data 2, 1</td>
      <td>Data 2, 2</td>
      <td>Data 2, 3</td>
      <td>Data 2, 4</td>
    </tr>
    <tr>
      <td>Data 3, 1</td>
      <td>Data 3, 2</td>
      <td>Data 3, 3</td>
      <td>Data 3, 4</td>
    </tr>
  </tbody>
</table>
{% endblock %}
{% endembed %}
twig-->

Because this style adds higher visual density, it is recommended to not use this style for small or simple tables. It is most useful for lengthy or complex tables.

## Resources
[Source code on GitHub](https://github.com/jacecotton/tcds/blob/main/styles/content/tables.scss)