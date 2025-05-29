import Splide from "@splidejs/splide";
import MicroModal from "micromodal";

const main = new Splide("#tour-slider-main", {
  type: "fade",
  pagination: false,
  arrows: false,
  cover: false,
  perPage: 1,
});

const thumbs = new Splide("#tour-slider-thumbnail", {
  autoWidth: true,
  autoHeight: true,
  isNavigation: true,
  gap: 18,
  focus: "center",
  pagination: false,
  arrows: false,
  cover: true,
});

main.on("mounted", () => {
  const wrapper = document.getElementById("modal-media-wrapper");

  main.Components.Elements.slides.forEach((slide) => {
    const img = slide.querySelector("img");

    if (!img) return;

    img.addEventListener("click", (e) => {
      e.stopPropagation();

      const type = slide.dataset.type;
      const src = slide.dataset.src;

      if (!type || !src) return;

      wrapper.innerHTML =
        type === "video"
          ? `<iframe src="${src}?autoplay=1" width="100%" height="400" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`
          : `<img src="${src}" alt="" style="max-width: 100%; height: auto;" />`;

      MicroModal.show("modal-media");
    });
  });
});

main.sync(thumbs);
main.mount();
thumbs.mount();

// Init modal
const closeBtn = document.querySelector("[data-micromodal-close]");
const wrapper = document.getElementById("modal-media-wrapper");

closeBtn.addEventListener("click", () => {
  MicroModal.close("modal-media");
  if (wrapper) wrapper.innerHTML = "";
});

document.addEventListener("keydown", (e) => {
  const modal = document.getElementById("modal-media");

  if (
    e.key === "Escape" &&
    modal &&
    modal.getAttribute("aria-hidden") === "false"
  ) {
    if (wrapper) wrapper.innerHTML = "";
  }
});
