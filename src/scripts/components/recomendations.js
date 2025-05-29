import Splide from "@splidejs/splide";

const tabsContainer = document.querySelector(".recomendations__tab-container");
const tabs = document.querySelectorAll(".recomendations__tab");
const contents = document.querySelectorAll(".recomendations__content");

const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

const splides = {};
let currentSplide = null;

// Initialize Splide for a specific tab
function initSplide(tabId) {
  const container = document.querySelector(
    `.recomendations__content--${tabId} .splide`,
  );

  if (!container) return;

  const splide = new Splide(container, {
    type: "slide",
    perPage: 3,
    autoWidth: true,
    // perMove: 1,
    // gap: "2rem",
    padding: {
      right: "1rem",
    },
    arrows: false,
    pagination: false,
  });

  splide.mount();
  splides[tabId] = splide;
  return splide;
}

// Activate the tab and its content
function activateTab(tabId) {
  tabs.forEach((tab) => tab.classList.remove("recomendations__tab--active"));
  document
    .querySelector(`.recomendations__tab--${tabId}`)
    .classList.add("recomendations__tab--active");

  contents.forEach((content) =>
    content.classList.remove("recomendations__content--active"),
  );
  const targetContent = document.querySelector(
    `.recomendations__content--${tabId}`,
  );
  targetContent.classList.add("recomendations__content--active");

  setTimeout(() => {
    if (!splides[tabId]) {
      currentSplide = initSplide(tabId);
    } else {
      splides[tabId].refresh();
      currentSplide = splides[tabId];
    }
  }, 50);
}

// Handle tab clicks
if (tabsContainer) {
  tabsContainer.addEventListener("click", (e) => {
    const clicked = e.target.closest(".recomendations__tab");
    if (!clicked) return;
    const tabId = clicked.dataset.tab;
    activateTab(tabId);
  });
}

// Arrow buttons
btnLeft?.addEventListener("click", () => {
  currentSplide?.go("<");
});

btnRight?.addEventListener("click", () => {
  currentSplide?.go(">");
});

// Initial activation
window.addEventListener("DOMContentLoaded", () => {
  activateTab("1");
});
