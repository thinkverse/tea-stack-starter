const cacheBust = require('./src/site/_filters/cache-bust');
const concat = require('./src/site/_filters/concat');
const markdown = require('./src/site/_plugins/markdown');
const { minifyHtml } = require('./src/site/_transforms/minify-html');

module.exports = function (config) {
  const isProd = process.env.ELEVENTY_ENV === 'prod';

  config.setLibrary('md', markdown);

  config.addShortcode('version', () => String(Date.now()));

  config.addNunjucksFilter('cacheBust', cacheBust);
  config.addNunjucksFilter('concat', concat);

  config.addPassthroughCopy({
    public: '/assets'
  });

  if (isProd) {
    config.addTransform('minifyHtml', minifyHtml);
  };

  return {
    templateFormats: ['njk', 'md'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'src/site/content/',
      data: '../_data/',
      includes: '../_includes/',
      layouts: '../_layouts/'
    },
  };
};
