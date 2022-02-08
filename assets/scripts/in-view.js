(function() {
  const elements = document.querySelectorAll("[data-in-viewport]");

  const inView = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.setAttribute("data-in-viewport", "true");
      }
    });
  }, {
    threshold: .7,
  });

  elements && elements.forEach((element) => {
    inView.observe(element);
  });
}());