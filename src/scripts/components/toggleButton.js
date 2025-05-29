import { safeInit } from "../utils/safeInit.js";

safeInit(".dropdown", (dropdown) => {
  const toggleBtn = dropdown.querySelector(".dropdown-toggle");
  const menuItems = dropdown.querySelectorAll(".dropdown-menu li");
  toggleBtn.addEventListener("click", () => {
    dropdown.classList.toggle("open");
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      toggleBtn.querySelector("span").textContent = item.textContent;
      dropdown.classList.remove("open");
    });
  });

  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("open");
    }
  });
});
