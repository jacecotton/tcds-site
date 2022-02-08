document.body.addEventListener("toc:render", () => {
  const mainContent = document.querySelector("main");
  const sectionHeadings = mainContent.querySelectorAll(":is(h2, h3, h4, h5, h6):not([class])");

  sectionHeadings.forEach((heading) => {
    const anchorLink = `<a href="#${heading.id}" class="heading-anchor" title="Anchor to this section">&sect;</a>`;
    heading.prepend(document.createRange().createContextualFragment(anchorLink));
    heading.setAttribute("data-anchored", true);
  });
});

setTimeout(() => {
  document.body.dispatchEvent(new CustomEvent("toc:render"));
}, 1000);