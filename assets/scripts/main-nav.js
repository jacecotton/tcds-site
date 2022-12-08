/**
 * Global nav functionality.
 *
 * First goal is to detect the last scroll position of the nav, store that as a
 * cookie, then when navigating to a new page, scroll to that position.
 *
 * Additionally, if the current page isn't within the global nav's scroll
 * window, smooth scroll to it.
 */
 (function() {
  // Get global nav.
  const siteHeader = document.getElementById("local-site-header");
  // Initialize scroll position variable (will be populated from cookie on
  // repeat views).
  let scrollPosition = null;
  let timer = null;

  // When the user scrolls, store the position as a cookie.
  siteHeader.addEventListener("scroll", () => {
    if(timer !== null) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      localStorage.setItem("site_header_scroll", siteHeader.scrollTop);
    }, 150);
  }, false);
  
  // If the cookie exists on page load...
  if(localStorage.getItem("site_header_scroll")) {
    // Get the position.
    scrollPosition = localStorage.getItem("site_header_scroll");
  }

  // If we have a position, scroll to it.
  if(scrollPosition) {
    siteHeader.scrollTo(0, scrollPosition);
  }

  // If the active link is not within the scroll viewport (above or below),
  // scroll to it regardless of the previously stored position.
  const scrollToActiveLink = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(!entry.isIntersecting) {
        setTimeout(() => {
          // Smooth scroll to active link (with offset to account for logo
          // height).
          siteHeader.scrollTo({
            top: entry.target.getBoundingClientRect().top - 175,
            behavior: "smooth",
          });

          // Unobserve the link once it's been scrolled to, so that it doesn't
          // scroll back to it after the user starts scrolling.
          scrollToActiveLink.unobserve(entry.target);
        }, 300);
      } else {
        // Also unobserve the link if it was visible/intersecting to start with.
        scrollToActiveLink.unobserve(entry.target);
      }
    });
  }, {
    // Observe relative to the site header.
    root: siteHeader,
    // Lower the threshold a bit because of the scroll gradient at the bottom
    // covering elements that would otherwise be visible at a 1.0 threshold.
    threshold: .5,
  });

  // Observe the active link only.
  scrollToActiveLink.observe(document.querySelector("#local-site-header [aria-current]"));
}());