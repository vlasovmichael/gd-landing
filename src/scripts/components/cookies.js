import { safeInit } from "../utils/safeInit.js";

safeInit(".cookies__button", (closeButton) => {
  const container = document.querySelector(".cookies");

  setTimeout(() => {
    container.classList.add("is-visible");
  }, 3000);

  closeButton.addEventListener("click", () => {
    container.classList.add("is-hidden");
    container.classList.remove("is-visible");
  });
});
