window.addEventListener("load", () => {
  requestAnimationFrame(() => {
    document.body.classList.remove("preload");
  });

  setTimeout(() => {
    if(document.body.classList.contains("preload")) {
      document.body.classList.remove("preload");
    }
  }, 1000);
});