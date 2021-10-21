/**
 * Main navigation.
 *
 * Adds functionality to expand/collapse the main nav on toggle button click, as
 * well as close the nav upon clicking outside of it. Only applies to smaller
 * screens (as specified by `props.threshold`); the functionality is disabled if
 * the screen is above the threshold.
 *
 * @param props.threshold {number} - The maximum screen size (in pixels) at
 * which the collapse/expand functionality should apply.
 */

class MainNav extends Component {
  constructor(element, props) {
    super(element, props);

    // Get relevant DOM elements.
    this.toggleButtons = document.querySelectorAll(`[aria-controls=${this.element.id}]`);

    // Initial checking for whether the screen size is under the provided
    // threshold. If the screen is small (mobile), we want to collapse the
    // navigation and add toggle functionality. Otherwise, we want to expand the
    // navigation and disable toggle functionality.
    if(window.innerWidth <= this.props.threshold) {
      this.state.expanded = false;
    } else {
      this.state.disable = true;
    }

    // Do the same check as above on every screen resize.
    const shouldCollapseNav = new ResizeObserver(entries => {
      for(let entry of entries) {
        if(entry.contentRect.width <= this.props.threshold) {
          this.state.expanded = false;
          this.state.disable = false;
        } else {
          this.state.disable = true;
        }
      }
    });
    
    // Attach resize observer to body element.
    shouldCollapseNav.observe(document.body);

    // Toggle expanded state on toggle button click.
    this.toggleButtons.forEach((toggleButton) => {
      toggleButton.addEventListener("click", (event) => {
        event.stopPropagation();
        this.state.expanded = !this.state.expanded;
      });
    });

    // Close the navigation on click outside of it.
    document.body.addEventListener("click", () => {
      this.state.expanded = false;
    });

    // Prevent closure if the click is inside the navigation element.
    this.element.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  }

  // Update DOM on state change.
  sync() {
    // Only toggle expanded state if the functionality has not been disabled.
    if(this.state.disable !== true) {
      // Set ARIA state on toggle buttons.
      this.toggleButtons.forEach((toggleButton) => {
        toggleButton.setAttribute("aria-expanded", this.state.expanded);
      });
      
      // Set hidden state on navigation element.
      this.element.hidden = !this.state.expanded;
    } else {
      // Remove ARIA attributes from button.
      this.toggleButtons.forEach((toggleButton) => {
        toggleButton.removeAttribute("aria-controls");
        toggleButton.removeAttribute("aria-expanded");
      });

      // Unhide the navigation.
      this.element.hidden = false;
    }
  }
}

new MainNav(document.getElementById("main-nav"), {
  threshold: 640,
});