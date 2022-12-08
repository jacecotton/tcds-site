<!--lede
  The Design System provides styling for <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul">unordered</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol">ordered</a>, and <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl">description lists</a>.
lede-->

<!--twig
{% embed "@tch/includes/example.twig" %}
{% block content %}
<p>Services:</p>
<ul>
  <li>West Campus</li>
  <li>The Woodlands</li>
  <li>Cancer &amp; Hematology Center</li>
</ul>

<p>Steps:</p>
<ol>
  <li>Stay safe while traveling</li>
  <li>Mask indoors or when you cannot socially distance</li>
  <li>Practice hand hygiene</li>
</ol>

<p>Urgent care vs. emergency center:</p>
<dl>
  <div>
    <dt>Urgent care clinic</dt>
    <dd>
      Flu/COVID test, allergic reaction, asthma, cough,
      cold, or congestion, ear pain, ...
    </dd>
  </div>
  <div>
    <dt>Emergency center</dt>
    <dd>
      Bleeding that won't stop, extensive or complicated cuts
      or lacerations, fainting or head injury ...
    </dd>
  </div>
</dl>
{% endblock %}
{% endembed %}
twig-->

## Styling
Design System styling will be stripped on any `ul` or `ol` element with a `class` attribute. This is to prevent unwanted styles that would need to be overridden any time a list element is used only for semantic purposes, rather than visual (such as in a navigation menu).

If you need to add a class and still want the Design System's default styling, you can add the `.ul` or `.ol` utility classes.

<!--twig
{% embed "@tch/includes/example.twig" with { line_highlight: "2,9" } %}
{% block content %}
<p>Class added, styling stripped:</p>
<ul class="some-class">
  <li>West Campus</li>
  <li>The Woodlands</li>
  <li>Cancer &amp; Hematology Center</li>
</ul>

<p style="margin-top: var(--tcds-space-normal)">Class added with utility, styling maintained:</p>
<ul class="some-class ul">
  <li>West Campus</li>
  <li>The Woodlands</li>
  <li>Cancer &amp; Hematology Center</li>
</ul>
{% endblock %}
{% block code %}
<p>Class added, styling stripped:</p>
<ul class="some-class">
  <li>West Campus</li>
  <li>The Woodlands</li>
  <li>Cancer &amp; Hematology Center</li>
</ul>

<p>Class added with utility, styling maintained:</p>
<ul class="some-class ul">
  <li>West Campus</li>
  <li>The Woodlands</li>
  <li>Cancer &amp; Hematology Center</li>
</ul>
{% endblock %}
{% endembed %}
twig-->

Note that for scope control reasons, the `.ul` and `.ol` classes do not *add* styles themselves, but rather prevent the styles from being reset.

## Resources
[Source code on GitHub](https://github.com/jacecotton/tcds/blob/main/styles/content/lists.scss)