(function() {
  const breakpoint = window.matchMedia("(max-width: 1024px)");
  const siteHeader = document.getElementById("local-site-header");
  const siteHeaderToggle = document.querySelector("[controls=local-site-header]");

  handleSiteHeader(breakpoint);
  breakpoint.addListener(handleSiteHeader);

  function handleSiteHeader(breakpoint) {
    if(breakpoint.matches) {
      close();
      siteHeaderToggle.addEventListener("click", toggle);
    } else {
      open();
      siteHeaderToggle.removeEventListener("click", toggle);
    }
  }

  function close() {
    siteHeaderToggle.setAttribute("expanded", "false");
    document.body.classList.remove("site-header-open");

    siteHeader.ontransitionend = () => {
      siteHeader.hidden = true;
      siteHeader.ontransitionend = null;
    };
  }

  function open() {
    siteHeaderToggle.setAttribute("expanded", "true");
    siteHeader.ontransitionend = null;
    siteHeader.hidden = false;

    requestAnimationFrame(() => {
      document.body.classList.add("site-header-open");
    });
  }

  function toggle() {
    if(siteHeaderToggle.getAttribute("expanded") === "true") {
      close();
    } else {
      open();
    }
  }
}());