class Footnotes {
  constructor(element) {
    this.element = element;

    if(this.element) {
      this.fnList = document.createDocumentFragment();

      document.querySelectorAll("[data-footnote]").forEach((fn) => {
        const fnid = fn.textContent.substring(0, 20).slugify();

        this.addFootnoteToList(fn, fnid);
        this.transformReference(fn, fnid);
      });

      this.element.appendChild(this.fnList);
    }
  }

  addFootnoteToList(fn, fnid) {
    const fnItem = `
      <li class="Footnotes__item" role="doc-footnote">
        <span id="fn-${fnid}">
          ${fn.innerHTML}

          <a href="#ref-${fnid}" title="Return to reference">
            <span class="visually-hidden">Return to reference</span>
            <span aria-hidden="true">⤴️</span>
          </a>
        </span>
      </li>
    `;

    this.fnList.appendChild(document.createRange().createContextualFragment(fnItem));
  }

  transformReference(fn, fnid) {
    const transformedReference = `<a href="#fn-${fnid}" class="Footnote-ref" id="ref-${fnid}" aria-describedby="fn-${fnid}" role="doc-noteref" title="Go to footnote"><span class="visually-hidden">reference to footnote</span></a>`;

    fn.parentNode.replaceChild(document.createRange().createContextualFragment(transformedReference), fn);
  }
}

new Footnotes(document.querySelector("[data-component=Footnotes]"));