// const nunjucks = require("nunjucks");
// const fs = require("fs");
// const path = require("path");

// const articles = require("../src/data/articles.json");
// const socials = require("../src/data/socials.json");
// const partners = require("../src/data/partners.json");
// const recomendations = require("../src/data/recomendations.json");
// const details = require("../src/data/details.json");

// nunjucks.configure("src/templates", { autoescape: true });

// const html = nunjucks.render("index.njk", {
//   articles,
//   socials,
//   partners,
//   recomendations,
//   details,
// });

// // Сохраняем в корень проекта
// fs.writeFileSync(path.resolve("index.html"), html);
// console.log("✅ Сгенерировано: index.html");
