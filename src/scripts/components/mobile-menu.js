import { safeInit } from "../utils/safeInit.js";

safeInit(".burger", (burger) => {
  const header = document.querySelector(".header");

  burger.addEventListener("click", () => {
    header.classList.toggle("menu-is-open");
  });
});
