(function() {
  const iconItems = document.querySelectorAll(".icon-grid__item");

  iconItems.forEach((item) => {
    const label = item.querySelector(".icon-grid__label");
    const labelText = label.textContent;

    item.onmouseenter = () => {
      label.textContent = labelText;
    };

    item.addEventListener("click", () => {
      item.onmouseleave = null;

      navigator.clipboard.writeText(`<tcds-icon>${labelText}</tcds-icon>`).then(() => {
        label.textContent = "Copied";

        requestAnimationFrame(() => {
          item.onmouseleave = () => {
            setTimeout(() => {
              label.textContent = labelText;
            }, 500);
          };
        });
      });
    });
  });
}());