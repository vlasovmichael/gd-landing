let articlesData = [];
let currentIndex = 3;

const featuredContainer = document.getElementById("featured-article");
const articlesContainer = document.getElementById("articles-list");
const loadMoreBtn = document.getElementById("load-more");
const loader = document.getElementById("articles-loader");
const TIME_TO_LOAD = 1200;

function renderFeatured(article) {
  const temp = document.createElement("div");
  temp.className = "featured";
  temp.innerHTML = `
    <div class="articles__image">
      <img src="${article.image}" alt="${article.title}" class="articles__img" />
    </div>
    <div class="articles__content">
      <address class="author">
        <img src="${article.authorAvatar}" alt="Avatar" class="author__photo" />
        <h6 class="author__name">${article.authorName}</h6>
      </address>
      <h3 class="articles__title">${article.title}</h3>
      <p class="articles__description">${article.content}</p>
      <footer class="articles__footer">
        <svg><use href="#icon-time"></use></svg>
        <span class="articles__meta">${article.timeToRead} min read | ${article.date}</span>
      </footer>
    </div>
  `;
  featuredContainer.innerHTML = "";
  featuredContainer.appendChild(temp);

  requestAnimationFrame(() => {
    temp.classList.add("is-visible");
  });

  featuredContainer.scrollIntoView({ behavior: "smooth", block: "start" });
}

function attachClickEvent(el) {
  el.addEventListener("click", () => {
    const title = el.querySelector(".articles__title")?.textContent;
    const author = el.querySelector(".author__name")?.textContent;
    const content = el.querySelector(".articles__description")?.textContent;
    const img = el.querySelector(".articles__img")?.getAttribute("src");
    const avatar = el.querySelector(".author__photo")?.getAttribute("src");
    const [readText, date] =
      el.querySelector(".articles__meta")?.textContent.split("|") || [];
    const timeToRead = readText?.replace("min read", "").trim();

    renderFeatured({
      title,
      authorName: author,
      content,
      image: img,
      authorAvatar: avatar,
      timeToRead,
      date: date?.trim(),
    });
  });
}

function initStaticArticles() {
  document.querySelectorAll(".articles__item").forEach(attachClickEvent);
}

async function fetchArticles() {
  const res = await fetch("/data/articles.json");
  articlesData = await res.json();
}

function renderArticle(article) {
  const el = document.createElement("li");
  el.className = "articles__item";
  el.innerHTML = `
    <div class="articles__image">
      <img src="${article.image}" alt="${article.title}" class="articles__img" />
    </div>
    <div class="articles__content">
      <address class="author">
        <img src="${article.authorAvatar}" alt="Avatar" class="author__photo" />
        <h6 class="author__name">${article.authorName}</h6>
      </address>
      <h5 class="articles__title">${article.title}</h5>
      <p class="articles__description" style="display:none">${article.content}</p>
      <footer class="articles__footer">
        <svg><use href="#icon-time"></use></svg>
        <span class="articles__meta">${article.timeToRead} min read | ${article.date}</span>
      </footer>
    </div>
  `;
  attachClickEvent(el);
  articlesContainer.appendChild(el);
}

function loadNextArticles(count = 3) {
  loader.classList.add("is-visible");
  loadMoreBtn.disabled = false;

  setTimeout(() => {
    const next = articlesData.slice(currentIndex, currentIndex + count);
    next.forEach(renderArticle);
    currentIndex += next.length;

    if (currentIndex >= articlesData.length) {
      loadMoreBtn.disabled = true;
    }

    loader.classList.remove("is-visible");
  }, TIME_TO_LOAD);
}

loadMoreBtn?.addEventListener("click", () => loadNextArticles());

fetchArticles().then(initStaticArticles);
