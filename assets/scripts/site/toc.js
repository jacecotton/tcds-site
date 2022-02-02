/**
 * Generates a table of contents (TOC) from headings in a document.
 *
 * This script assumes two important things:
 * 1. The headings already have unique IDs.
 * 2. The headings follow a proper order, not skipping any heading levels.
 *
 * @param {object} options Configuration options for the TOC.
 * @param {number} [options.renderThreshold=4] The minimum amount of headings
 * there must be in the document for the TOC to render.
 * @param {number} [options.depthLimit=4] The maximum heading level to display
 * in the TOC.
 */

class TOC {
  constructor(element, props) {
    this.element = element;
    this.props = props;

    this.headings = Array.from(document.querySelectorAll("h2, h3, h4, h5, h6"));

    this.headingsOfDepthLimit = this.headings.filter((heading) => {
      return parseInt(heading.tagName.substring(1)) <= this.props.depthLimit;
    });
    
    if(this.headingsOfDepthLimit.length >= this.props.renderThreshold) {
      this.headingTree = this.generateTree();
      this.renderTOC();
      this.trackHash();
    }
  }

  generateTree() {
    const headingTree = [];
    const lastHeadingOfLevel = {};

    this.headings.forEach((heading) => {
      const level = parseInt(heading.tagName.substring(1));

      const headingData = {
        level: level,
        id: heading.id,
        text: heading.textContent,
        children: [],
      };

      const parent = (level > 2) ? lastHeadingOfLevel[level - 1].children : headingTree;

      lastHeadingOfLevel[level] = headingData;

      parent.push(headingData);
    });

    return headingTree;
  }

  renderTOC() {
    const addTOCList = (branch, parent) => {
      const tocList = document.createElement("ol");
      tocList.classList.add("TOC__list");

      branch.forEach((headingObject) => {
        const tocItem = document.createElement("li");
        tocItem.classList.add("TOC__item");

        const tocLink = document.createElement("a");
        tocLink.classList.add("TOC__link");
        tocLink.href = `#${headingObject.id}`;
        tocLink.textContent = headingObject.text;

        tocItem.appendChild(tocLink);
        tocList.appendChild(tocItem);

        if(headingObject.children.length > 0 && headingObject.level < this.props.depthLimit) {
          addTOCList(headingObject.children, tocItem);
        }
      });

      parent.appendChild(tocList);
    };

    addTOCList(this.headingTree, this.element);

    document.body.dispatchEvent(new CustomEvent("toc:render", {}));
  }

  trackHash() {
    const hashChangeHandler = () => {
      const prevCurrentLink = this.element.querySelector("[aria-current=true]");
      const currentLink = this.element.querySelector(`a[href="${window.location.hash}"]`);

      if(prevCurrentLink) {
        prevCurrentLink.removeAttribute("aria-current");
      }

      if(currentLink) {
        currentLink.setAttribute("aria-current", "true");
      }
    };

    hashChangeHandler();
    window.addEventListener("hashchange", hashChangeHandler);
  }
}