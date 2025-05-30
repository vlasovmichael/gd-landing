# GD Landing Page

A landing page project built with modern front-end tools including Vite, Nunjucks, SCSS, and several lightweight UI libraries.

## Demo

[View Live Demo](https://bright-blini-1b96b7.netlify.app/)

## Features

- Fast development with [Vite](https://vitejs.dev/)
- HTML templating using [Nunjucks](https://mozilla.github.io/nunjucks/)
- Modular and maintainable SCSS styling
- Data-driven templates with JSON
- Image sliders powered by [Splide.js](https://splidejs.com/)
- Enhanced select inputs via [Choices.js](https://github.com/Choices-js/Choices)
- Lightweight modals using [Micromodal](https://micromodal.vercel.app/)
- Automatic rebuilding of HTML templates on changes using chokidar

## Installation

Make sure you have [Node.js](https://nodejs.org/) installed.

```bash
npm install
```

## Development

```bash
npm run dev
```

- Accessible at http://localhost:5173
- Watches .njk and .json files for changes and rebuilds HTML automatically
- SCSS and JS changes are handled by Vite

## Building for Production

```bash
npm run build
```

## Project Structure

```bash
gd-landing-page/
├── src/
│ ├── templates/ # Nunjucks templates (.njk)
│ ├── data/ # JSON data for dynamic content
│ ├── styles/ # SCSS stylesheets
│ └── main.js # JavaScript entry point
├── public/ # Static assets (e.g., images)
├── scripts/
│ └── build-html.js # HTML rendering script
├── dist/ # Production build output
├── index.html # Main HTML file
└── package.json
```

## License

This project is private and not intended for public distribution or publishing
