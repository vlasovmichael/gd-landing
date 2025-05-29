import { safeInit } from "../utils/safeInit.js";

safeInit("#form-message", (textarea) => {
  const counter = document.getElementById("charCount");
  textarea.addEventListener("input", () => {
    counter.textContent = textarea.value.length;
  });
});
