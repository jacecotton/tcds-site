/**
 * @todo Get intersection observer working (commented out).
 * @todo Get swiping + slide animation working (will need to be on Tabs' end).
 * @todo Get expand/collapse working.
 * @todo Flesh out play/pause button (icon's + aria-label + title instead of textContent).
 * @todo Final carousel styling.
 */

class Carousel extends Tabs {
  constructor(element, props) {
    super(element, props);

    this.controls = {
      next: this.element.querySelector("[data-action=next]"),
      previous: this.element.querySelector("[data-action=previous]"),
      playpause: this.element.querySelector("[data-action=play-pause]"),
    };

    // Set initial play state based on autoplay prop.
    this.state.playing = this.props.autoplay === "true";

    // Go to next tab and pause on next button click.
    this.controls.next.addEventListener("click", () => {
      this.state.activeTab = this.getNextTab();
      this.state.playing = false;
    });
    
    // Go to previous tab and pause on previous button click.
    this.controls.previous.addEventListener("click", () => {
      this.state.activeTab = this.getPreviousTab();
      this.state.playing = false;
    });

    // Toggle play state on play/pause button click.
    this.controls.playpause.addEventListener("click", () => {
      this.state.playing = !this.state.playing;
    });

    this.tabs.forEach((tab) => {
      // Pause on tab button click.
      tab.addEventListener("click", () => {
        this.state.playing = false;
      });

      // Pause on tab button key press.
      tab.addEventListener("keydown", () => {
        this.state.playing = false;
      });
    });

    // If playing, temporarily pause on hover over a slide.
    this.panelsContainer.addEventListener("mouseover", () => {
      if(this.state.playing === true) {
        this.state.playing = false;
        this.temporaryPause = true;
      }
    });

    // Resume playing on leaving hover if pause was temporary.
    this.panelsContainer.addEventListener("mouseout", () => {
      if(this.temporaryPause === true) {
        this.state.playing = true;
        // Reset temporary flag.
        this.temporaryPause = null;
      }
    });

    // If playing, temporarily pause on keyboard focus inside a slide.
    this.panelsContainer.addEventListener("focusin", () => {
      if(this.state.playing === true) {
        this.state.playing = false;
        this.temporaryPause = true;
      }
    });

    // Resume playing on leaving focus if pause was temporary.
    this.panelsContainer.addEventListener("focusout", () => {
      if(this.temporaryPause === true) {
        this.state.playing = true;
        // Reset temporary flag.
        this.temporaryPause = null;
      }
    });

    // Set up an intersection observer to pause the carousel when it's out of
    // view.
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Resume playing when the carousel comes back into view (but only if
        // the current paused state is temporary).
        if(entry.isIntersecting) {
          if(this.temporaryPause === true) {
            this.state.playing = true;
            // Reset temporary flag.
            this.temporaryPause = null;
          }
        } else if(this.state.playing === true) {
          // Since the current playing state is true and the carousel is no
          // longer in view, pause the carousel but flag it as temporary. That
          // way when the user scrolls the carousel back into view, it will
          // resume.
          this.state.playing = false;
          this.temporaryPause = true;
        }
      });
    }).observe(this.element);
  }

  sync(newState, prevState) {
    super.sync(newState, prevState);

    if("playing" in newState) {
      this.controls.playpause.textContent = this.state.playing ? "Pause" : "Play";

      if(this.state.playing === true) {
        this.cycle = setInterval(() => {
          this.state.activeTab = this.getNextTab();
        }, parseInt(this.props.timing));
      } else {
        clearInterval(this.cycle);
      }
    }
  }
}

document.querySelectorAll("[data-component=Carousel]").forEach((instance) => {
  new Carousel(instance, {
    timing: instance.getAttribute("data-timing"),
    autoplay: instance.getAttribute("data-autoplay"),
  });
});