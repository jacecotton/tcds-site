new Collapsible(document.getElementById("side-nav"), {
  threshold: 1000,
  clickOutsideToClose: false,
});

new TOC(document.querySelector(".side-nav__item--active"), {
  renderThreshold: 4,
  depthLimit: 3,
});