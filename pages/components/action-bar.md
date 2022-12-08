<!--lede
  The action bar presents a list of prominent call-to-action links to efficiently triage visitors into more specific sections of a site.
lede-->

<style>
:is(#x, .tcds-action-bar) {
  position: relative;
  transform: none;
  left: 0;
  width: 100%;
  max-width: none;
}
</style>

<!--twig
{% embed "@tch/includes/example.twig" with {
  full_screen: true,
} %}
{% block content %}
<ul class="tcds-action-bar">
  <li>
    <a href="#find-a-doctor">
      <tcds-icon icon="marker"></tcds-icon>
      Find a doctor
      <tcds-icon icon="chevron-right"></tcds-icon>
    </a>
  </li>
  <li>
    <a href="#schedule-appointment">
      <tcds-icon icon="mychart"></tcds-icon>
      Schedule appointment
      <tcds-icon icon="chevron-right"></tcds-icon>
    </a>
  </li>
  <li>
    <a href="#get-a-vaccine">
      <tcds-icon icon="plus"></tcds-icon>
      Get a vaccine
      <tcds-icon icon="chevron-right"></tcds-icon>
    </a>
  </li>
</ul>
{% endblock %}
{% endembed %}
twig-->

## Best practices
**Include only relevant, useful links.** The pages linked to from an action bar should be broad enough to apply to a general audience, but specific enough to be useful. Prefer links to pages that are actionable, rather than purely informational (e.g. "Find a doctor", "Schedule an appointment", etc.)

### When to use
**On landing pages.** Action bars are useful to help direct visitors to specific and more useful sections of the site from a general landing or home page.

### When not to use
**On interior content pages.** Opt for sidebars and breadcrumbs for internal navigation.

## Resources
[Source code on GitHub](https://github.com/jacecotton/tcds/blob/main/styles/components/action-bar.scss)