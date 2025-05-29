import { safeInit } from "../utils/safeInit.js";

safeInit(".form", (form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  });
});
