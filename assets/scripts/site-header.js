import Component from "@tcds/Component.js";

class SiteHeader extends Component {
  constructor(element, props) {
    super(element, props);

    this.toggle = document.querySelector(`[aria-controls=${this.element.id}]`);

    this.state.expanded = window.innerWidth >= this.props.threshold;

    // Toggle the header on toggle button click.
    this.toggle.addEventListener("click", () => {
      this.state.expanded = !this.state.expanded;
      this.state.useAnimation = true;
    });
  }

  sync(newState, prevState) {
    if("expanded" in newState) {
      this.toggle.setAttribute("aria-expanded", this.state.expanded);

      if(this.state.useAnimation === true) {
        this.element.setAttribute("data-use-animation", true);
        
        if(this.state.expanded === true) {
          this.element.onanimationend = null;
          this.element.hidden = false;
        } else {
          this.element.setAttribute("data-transition", "closing");

          this.element.onanimationend = () => {
            this.element.removeAttribute("data-transition");
            this.element.hidden = true;
          };
        }
      } else {
        this.element.hidden = !this.state.expanded;
      }
    }
  }
}

window.addEventListener("load", () => {
  new SiteHeader(document.getElementById("site-header"), {
    threshold: 1000,
  });
});