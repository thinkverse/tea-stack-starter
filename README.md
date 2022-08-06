# TEA Stack Starter

This repo contains a 11ty starter for Tailwind CSS, Eleventy and Alpine.js, built for GitHub Pages.

## Requirements

- [Node](https://nodejs.org/) `>= LTS`.
- [NPM](https://www.npmjs.com/)

## Usage

Click [Use this template](https://github.com/thinkverse/tea-stack-starter/generate) to create your own repository based 
on this starter template. Clone your version locally using your perferred method, I recommend [GitHub CLI](https://cli.github.com/).

## NPM commands

- `start` - alias for `watch`.
- `watch` - start local development server.
- `dev` - build development version.
- `build` - build production version.

## Structure

- `src` - contains **all** files used to build your site.
- `src/assets` - contains CSS and JavaScript files bundled by webpack.
- `src/site` - contains files used by Eleventy to generate site.
- `src/site/content` - Eleventy's entry folder, where your pages exists.
- `src/site/_*` - contains your data, filters, includes, layouts, plugins and transforms files.

View the [.eleventy.js](./.eleventy.js) and [webpack.config.js](./webpack.config.js) file for a better understanding.

## Tools

- [Tailwind CSS](https://tailwindcss.com/)
- [Eleventy](https://www.11ty.dev/)
- [Alpine.js](https://alpinejs.dev/)
- [Webpack](https://webpack.js.org/)
