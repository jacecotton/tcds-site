document.body.addEventListener("toc:render", () => {
  const mainContent = document.querySelector("main");
  const sectionHeadings = mainContent.querySelectorAll("h2, h3, h4, h5, h6");

  sectionHeadings.forEach((heading) => {
    const anchorLink = `<a href="#${heading.id}" class="heading-anchor" title="Anchor to this section">&sect;</a>`;
    heading.prepend(document.createRange().createContextualFragment(anchorLink));
    heading.setAttribute("data-anchored", true);
  });
});