const htmlMinifier = require('@minify-html/node');

const isProd = process.env.ELEVENTY_ENV === 'prod';

module.exports = {
  minifyHtml: (content, outputPath) => {
    if (
      isProd && outputPath && outputPath.endsWith('.html')
    ) {
      try {
        content = htmlMinifier
          .minify(Buffer.from(content, 'utf8'), {
            do_not_minify_doctype: true,
            ensure_spec_compliant_unquoted_attribute_values: true,
            keep_spaces_between_attributes: true,
          }).toString('utf-8');
      } catch (error) {
        console.warn(error, 'while minifying', outputPath);
      }
    };

    return content;
  }
};
