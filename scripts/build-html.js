const nunjucks = require("nunjucks");
const fs = require("fs");
const path = require("path");

const articles = require("../src/data/articles.json");
const socials = require("../src/data/socials.json");
const partners = require("../src/data/partners.json");
const recomendations = require("../src/data/recomendations.json");
const details = require("../src/data/details.json");

nunjucks.configure("src/templates", { autoescape: true });

const context = {
  articles,
  socials,
  partners,
  recomendations,
  details,
};

const pages = [
  { template: "index.njk", output: "index.html" },
  { template: "components.njk", output: "components.html" },
];

pages.forEach(({ template, output }) => {
  const html = nunjucks.render(template, context);
  fs.writeFileSync(path.resolve(output), html);
  console.log(`✅ Generated: ${output}`);
});
