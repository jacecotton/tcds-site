---
category: Components
title: Footnotes
tags:
  - tcds-fn-ref
  - tcds-fn-list
parent: Content
description: Footnotes display supplementary information—such as citations, disclaimers, or asides—typically at the bottom of the main content. They are pointed to in the main content via references—inline, superscript, incrementally numbered jump links—in order to not disrupt the flow of a given passage. Each reference typically covers the immediately preceding sentence or clause.
---

<tcds-icon icon="error" style="--tcds-icon-size: 5rem; color: var(--tcds-color-red)"></tcds-icon>

## Under construction
Please check back later.

<!--twig
{% embed "@tc/includes/example.twig" %}
{% block content %}
<p>
  Today, TB remains the leading infectious cause of death globally.
  Each year, 10.6 million people develop TB. Of this group, 1.3 million
  people on average die annually. Furthermore,
  <tcds-fn-ref aria-details="who pediatrics">about 1 million children develop TB
  and 225,000 die on average each year – that’s one child every four
  seconds.</tcds-fn-ref> Of the children who die from TB,
  <tcds-fn-ref aria-details="pediatrics">96% were never diagnosed or
  had the opportunity to receive treatment.</tcds-fn-ref>
</p>

<p>
  Not everyone who is infected with TB develops the disease, though.
  <tcds-fn-ref aria-details="emerg-infect-dis">Approximately 25% of
  the world’s population have at some time in their lives been infected
  with TB,</tcds-fn-ref> but they don’t develop the disease or present
  outward symptoms. People with latent, asymptomatic TB can, however,
  spread the bacteria to others.
</p>

<tcds-fn-list>
  <ol>
    <li id="who">
      World Health Organization. (2024, October 29). Tuberculosis. WHO.int.
      <a href="https://www.who.int/news-room/fact-sheets/detail/tuberculosis">
      https://www.who.int/news-room/fact-sheets/detail/tuberculosis</a>
    </li>
    <li id="pediatrics">
      Bonnet, Maryline, et al. (2023). Mortality and Cause of Death in Children
      With Presumptive Disseminated Tuberculosis. Pediatrics, 151(4),
      e2022057912. <a href="https://doi.org/10.1542/peds.2022-057912">
      doi: 10.1542/peds.2022-057912</a>.
    </li>
    <li id="emerg-infect-dis">
      Haddad MB, Raz KM, Lash TL, Hill AN, Kammerer JS, Winston CA, Castro KG,
      Gandhi NR, Navin TR. Simple Estimates for Local Prevalence of Latent
      Tuberculosis Infection, United States, 2011-2015. Emerg Infect Dis. 2018
      Oct;24(10):1930-1933. <a href="https://doi.org/10.3201/eid2410.180716">
      doi: 10.3201/eid2410.180716</a>. PMID: 30226174; PMCID: PMC6154166.
    </li>
  </ol>
</tcds-fn-list>
{% endblock %}
{% block code %}
<p>
  Today, TB remains the leading infectious cause of death globally.
  Each year, 10.6 million people develop TB. Of this group, 1.3 million
  people on average die annually. Furthermore,
  <tcds-fn-ref aria-details="who">about 1 million children develop TB
  and 225,000 die on average each year – that’s one child every four
  seconds.</tcds-fn-ref> Of the children who die from TB,
  <tcds-fn-ref aria-details="pediatrics">96% were never diagnosed or
  had the opportunity to receive treatment.</tcds-fn-ref>
</p>

<p>
  Not everyone who is infected with TB develops the disease, though.
  <tcds-fn-ref aria-details="emerg-infect-dis">Approximately 25% of
  the world’s population have at some time in their lives been infected
  with TB,</tcds-fn-ref> but they don’t develop the disease or present
  outward symptoms. People with latent, asymptomatic TB can, however,
  spread the bacteria to others.
</p>

<tcds-fn-list>
  <ol>
    <li id="who">World Health Organization. (2024, October 29). Tube...</li>
    <li id="pediatrics">Bonnet, Maryline, et al. (2023). Mortality a...</li>
    <li id="emerg-infect-dis">Haddad MB, Raz KM, Lash TL, Hill AN, K...</li>
  </ol>
</tcds-fn-list>
{% endblock %}
{% endembed %}
twig-->

## Guidance
### Best practices
**Use footnotes sparingly.** Too many footnotes may interfere with reading and distract users.

**Stick to citations and disclaimers, avoid asides and parentheticals.**  Footnotes are best for content that is obligatory to mention, but strictly optional to read. Due to the [interaction cost](https://www.nngroup.com/articles/interaction-cost-definition/) associated with footnotes (clicking, jumping, extra reading, and then scrolling back), asides and explanatory notes are best either worked into the main prose, presented in a [Callout](/components/content/callout), or omitted.

**Place footnote references outside of all punctuation.** You can ensure this by placing the closing reference tag in HTML after punctuation (see [&sect; Usage](#usage)).

**Footnotes must be referenced in related content.** Footnotes do not stand on their own; they are directly connected to sentences or sentence fragments via references.

### Usage
In HTML, footnotes themselves are marked up as `li` elements inside an ordered list (`ol`) placed inside a `tcds-fn-list` element. Each `li` should have a unique `id`.

Footnote references are added to copy by wrapping the relevant text in `tcds-fn-ref` tags, which should then have an `aria-details` attribute set to the `id` of the associated footnote `li`.

<!--twig
{% embed "@tc/includes/example.twig" %}
{% block content %}
<p>
  <tcds-fn-ref aria-details="example">This is a sentence which has a
  footnote associated with it.</tcds-fn-ref>
</p>

<tcds-fn-list>
  <ol>
    <li id="example">This is a footnote associated with the above sentence.</li>
  </ol>
</tcds-fn-list>
{% endblock %}
{% endembed %}
twig-->

The `tcds-fn-ref` and `ol` elements keep track of the numbering for you, in order to avoid manual re-indexing in the event a footnote is added, removed, or rearranged.

#### Multiple references per footnote
You may reference the same footnote multiple times by using the same `aria-details` attribute across each `tcds-fn-ref` instance.

<!--twig
{% embed "@tc/includes/example.twig" %}
{% block content %}
<p>
  <tcds-fn-ref aria-details="multi-example">This is a sentence which
  has a footnote associated with it.</tcds-fn-ref> And <tcds-fn-ref
  aria-details="another">this is a sentence with another
  footnote.</tcds-fn-ref> And now <tcds-fn-ref aria-details="multi-example">
  this is another with a reference to the same footnote as the first.</tcds-fn-ref>
</p>

<tcds-fn-list>
  <ol>
    <li id="multi-example">
      This is a footnote associated with the first and third above sentences.
    </li>
    <li id="another">
      This is a footnote associated with the second sentence.
    </li>
  </ol>
</tcds-fn-list>
{% endblock %}
{% endembed %}
twig-->

The return link inside the footnote (↵) will always link back to the first reference only.

## Documentation
### Accessibility
Each reference has an `aria-details` attribute pointing to an `li` inside an ordered list. Without JavaScript, there will be no superscript numbered jump link, but the footnote itself will still be accessible inside the `ol`, and screen reader software will announce when a piece of text is "further detailed" by that footnote.

When the custom elements are upgraded via JavaScript, the following occurs:
* An `id` is added to the `tcds-fn-ref` element, generated from the `id` of the associated `li` and appended with `-ref`. This allows the reference to be linked back to from the footnote.
* An anchor (`a`) element is added to create a jump link to the reference, with an ARIA `role` of `doc-noteref` and a visually hidden text fragment indicating to screen readers that it is a footnote.
* In the `tcds-fn-list`, an `aside` sectioning element is generated with an ARIA `role` of `doc-endnotes` and labeled by a visually hidden heading element. The heading level of this element is determined by incrementing from the immediately previous heading level to preserve a logical and valid content outline.
* Inside each footnote `li`, a link is appended to jump back to the reference to allow users to easily return to the main content. This link (↵) has an ARIA `role` of `doc-backlink` and an `aria-label` of `"Return to associated passage"`.

### Known issues
<details>
  <summary>To-do</summary>

* It should be possible to associate multiple references with a single sentence or clause, e.g.<sup>1, 2</sup> This should be made possible in the event `aria-details` contains a space-separated list of idents.
* Explore the possibility of pinpoint citations (perhaps a `pincite` attribute), appended to the reference number and separated by a colon.
* Further testing with screen readers must be done, particularly with respect to the use of `aria-details` to associate references with footnotes ([latest available public data for user agent implementation](https://a11ysupport.io/tech/aria/aria-details_attribute) is 2 years old, see [tests](https://a11ysupport.io/tests/tech__aria__aria-details)).
</details>