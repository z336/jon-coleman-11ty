const { load } = require('js-yaml');
const { posts, tagList } = require('./config/collections/index');
const {
  readableDate,
  htmlDateString,
  getFullYear,
  filterTagList,
} = require('./config/filters/index');
const markdown = require('./config/plugins/markdown');

module.exports = function (eleventyConfig) {
  // Watch sass so it can be compiled to the build directory
  eleventyConfig.addWatchTarget('src/assets/styles/');

  // Passthroughs
  eleventyConfig.addPassthroughCopy('src/assets/images/favicon.svg');

  // Data
  eleventyConfig.addDataExtension('yaml', load);

  // Collections
  eleventyConfig.addCollection('posts', posts);
  eleventyConfig.addCollection('tagList', tagList);

  // Filters
  eleventyConfig.addFilter('readableDate', readableDate);
  eleventyConfig.addFilter('htmlDateString', htmlDateString);
  eleventyConfig.addFilter('getFullYear', getFullYear);
  eleventyConfig.addFilter('filterTagList', filterTagList);

  // Plugins
  eleventyConfig.setLibrary('md', markdown);

  return {
    dir: {
      data: 'data',
      layouts: 'layouts',
      includes: 'includes',
      input: 'src',
    },
    templateFormats: ['md', '11ty.js'],
  };
};
