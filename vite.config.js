import { defineConfig } from "vite";
import nunjucks from "vite-plugin-nunjucks";
import articles from "./src/data/articles.json" with { type: "json" };
import socials from "./src/data/socials.json" with { type: "json" };
import partners from "./src/data/partners.json" with { type: "json" };
import recomendations from "./src/data/recomendations.json" with { type: "json" };
import details from "./src/data/details.json" with { type: "json" };

export default defineConfig({
  base: "./",
  plugins: [
    nunjucks({
      templatesDir: "./src/templates",
      pages: [
        {
          input: "index.njk",
          output: "index.html",
          context: {
            articles,
            socials,
            partners,
            recomendations,
            details,
          },
        },
        {
          input: "components.njk",
          output: "components.html",
        },
      ],
    }),
  ],
});
