/**
 * Collapsible element.
 *
 * Adds functionality to expand/collapse an element on toggle button click. Only
 * applies to smaller screens (as specified by `props.threshold`); the
 * functionality is disabled if the screen is above the threshold.
 *
 * @param {Object} props
 * @param {number} props.threshold - The maximum screen size (in pixels) at
 * which the collapse/expand functionality should apply.
 * @param {boolean} [props.clickOutsideToClose=false] - Whether the element
 * should collapse when clicking outside on the body.
 */

class Collapsible extends Component {
  constructor(element, props) {
    super(element, props);

    // Get relevant DOM elements.
    this.toggleButtons = document.querySelectorAll(`[aria-controls=${this.element.id}]`);

    this.state.expanded = false;

    if(this.props.threshold !== null) {
      if(window.innerWidth > this.props.threshold) {
        this.state.disable = true;
      }

      // Do the same check as above on every screen resize.
      const shouldCollapseElement = new ResizeObserver(entries => {
        for(let entry of entries) {
          if(entry.contentRect.width <= this.props.threshold) {
            this.state.disable = false;
          } else {
            this.state.disable = true;
          }
        }
      });

      // Attach resize observer to body element.
      shouldCollapseElement.observe(document.body);
    }

    // Toggle expanded state on toggle button click.
    this.toggleButtons.forEach((toggleButton) => {
      toggleButton.addEventListener("click", (event) => {
        event.stopPropagation();
        this.state.expanded = !this.state.expanded;
      });
    });

    if(this.props.clickOutsideToClose === true) {
      // Close the navigation on click outside of it.
      document.body.addEventListener("click", () => {
        this.state.expanded = false;
      });

      // Prevent closure if the click is inside the navigation element.
      this.element.addEventListener("click", (event) => {
        event.stopPropagation();
      });
    }
  }

  // Update DOM on state change.
  sync(newState, prevState) {
    // Only toggle expanded state if the functionality has not been disabled.
    if(this.state.disable !== true) {
      // Set ARIA state on toggle buttons.
      this.toggleButtons.forEach((toggleButton) => {
        toggleButton.setAttribute("aria-expanded", this.state.expanded);

        if(!toggleButton.getAttribute("aria-controls")) {
          toggleButton.setAttribute("aria-controls", toggleButton.getAttribute("data-aria-controls"));
        }
      });

      // Set hidden state on element.
      this.element.hidden = !this.state.expanded;
    } else {
      // Remove ARIA attributes from button.
      this.toggleButtons.forEach((toggleButton) => {
        // But store the controls value in a data- attribute for later
        // reference.
        toggleButton.setAttribute("data-aria-controls", toggleButton.getAttribute("aria-controls"));
        toggleButton.removeAttribute("aria-controls");
        toggleButton.removeAttribute("aria-expanded");
      });

      // Unhide the element.
      this.element.hidden = false;
    }
  }
}