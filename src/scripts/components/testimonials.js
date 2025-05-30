import { safeInit } from "../utils/safeInit.js";
import Splide from "@splidejs/splide";

safeInit("#testimonial-slider", (carousel) => {
  new Splide(carousel, {
    type: "slide",
    perPage: 1,
    focus: "center",
    padding: "24%",
    gap: "1.8rem",
    arrows: false,
    breakpoints: {
      640: {
        padding: "1.25rem",
      },
    },
  }).mount();
});
