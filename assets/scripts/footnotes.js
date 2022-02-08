import slugify from "./slugify.js";

class Footnotes {
  constructor(element) {
    // The spot in the DOM to generate and add an ordered list of footnotes.
    this.element = element;

    if(this.element) {
      // Create an empty fragment to start.
      this.footnotes = document.createDocumentFragment();

      // Get all footnote refs in the document.
      document.querySelectorAll("[data-footnote]").forEach((footnote) => {
        // Generate a unique ID for the footnote by truncating the content to
        // 20 characters and then transforming it into a slug (lowercase, spaces
        // replaced with hyphens, special characters removed).
        const id = slugify(footnote.textContent.substring(0, 20));

        // Add the footnote to the `footnotes` list fragment.
        this.addFootnoteToList(footnote, id);
        // Replace the initial inline footnote with a bracketed number
        // referencing the footnote now in the list.
        this.transformReference(footnote, id);
      });

      // Add the generated list to the specified spot in the DOM.
      this.element.appendChild(this.footnotes);
    }
  }

  // Generate a list item from inline footnote, then add it to the `footnotes`
  // list fragment.
  addFootnoteToList(footnote, id) {
    const item = `
      <li class="Footnotes__item" role="doc-footnote">
        <span id="fn-${id}">
          ${footnote.innerHTML}

          <a href="#ref-${id}" title="Return to reference">
            <span class="visually-hidden">Return to reference</span>
            <span aria-hidden="true">⤴️</span>
          </a>
        </span>
      </li>
    `;

    this.footnotes.appendChild(document.createRange().createContextualFragment(item));
  }

  // Transform the original inline footnote into a linked reference (bracketed
  // number). This number is incremented via CSS `counter`, so we don't need to
  // generate it here.
  transformReference(footnote, id) {
    const transformedReference = `<a href="#fn-${id}" class="Footnote-ref" id="ref-${id}" aria-describedby="fn-${id}" role="doc-noteref" title="Go to footnote"><span class="visually-hidden">reference to footnote</span></a>`;

    footnote.parentNode.replaceChild(document.createRange().createContextualFragment(transformedReference), footnote);
  }
}

new Footnotes(document.querySelector("[data-component=Footnotes]"));