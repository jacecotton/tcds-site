<!--lead
  Color can be used to create pleasing designs, convey meaning and tone, establish brand identity, influence focus and emotion, and more. However, if used inconsistently or improperly, color can negatively impact a user's experience.
lead-->

Texas Children's Design System comes with a standardized, brand-compliant color palette. Its semantic naming system and numbered grading aims to help in the selection of colors that are thematically consistent, contextually meaningful, and accessible to those with low color perception.

<style>
  .palette {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .swatch {
    padding: 1rem;
    border-radius: 8px;
  }
</style>

<!--twig
  {% set colors = ["red", "blue", "green", "yellow", "gray"] %}
  {% set grades = ["0", "100", "200", "300", "400", "500"] %}
twig-->

<div class="palette">
  <!--twig
    {% for color in colors %}
      {% for grade in grades %}
        <div class="swatch bg-{{ color }}-{{ grade }}">{{ color }}-{{ grade }} <a href="#">a link</a></div>
      {% endfor %}
    {% endfor %}
  twig-->
</div>