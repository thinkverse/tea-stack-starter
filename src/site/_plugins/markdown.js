const md = require('markdown-it');

const markdown = md({
  html: true
})
  .use(require('markdown-it-attrs'), {
    leftDelimiter: '{:',
    rightDelimiter: '}',
    allowedAttributes: ['id', 'class', /^data-.*$/],
  })
  .disable('code');

module.exports = markdown;
