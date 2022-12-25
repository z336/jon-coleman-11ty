const { html } = require('code-tag');
const PostsList = require('../components/PostsList.11ty.js');

exports.data = {
  title: 'Writing',
  layout: 'page.html',
  permalink: '/writing/',
};

exports.render = function (data) {
  return html`${PostsList(data)}`;
};
