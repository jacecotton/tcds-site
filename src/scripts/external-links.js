// Open all external links in a new tab.
(function() {
  const ext_links = Array.from(document.querySelectorAll(`a[href]:not(:where(
    [is], [href^="#"], [href^="javascript:" i], [href^="/"]:not([href^="//"])))`));
  
  ext_links.forEach(link => link.target = "_blank");
}());