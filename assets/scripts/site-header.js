import Toggleable from "@tcds/components/Toggleable.js";

class SiteHeader {
  constructor(element) {
    this.element = element;

    this.toggleableHeader = new Toggleable(this.element, {
      animation: {
        open: "slide-in-right",
        close: "slide-out-left",
      },
      closeOnClickOutside: false,
      openOnload: true,
    });

    const breakpoint = window.matchMedia("(max-width: 1024px)");

    this.handleHeaderMenu(breakpoint);
    breakpoint.addListener(this.handleHeaderMenu.bind(this));
  }

  handleHeaderMenu(breakpoint) {
    if(breakpoint.matches) {
      this.element.hidden = true;
      this.toggleableHeader.close();
    } else {
      this.toggleableHeader.open();
    }
  }
}

(function() {
  const instance = document.getElementById("site-header");
  instance && new SiteHeader(instance);
}());
