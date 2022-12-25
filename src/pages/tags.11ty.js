const { html } = require('code-tag');

exports.data = {
  title: 'Tags',
  layout: 'page.html',
  permalink: '/tags/',
};

exports.render = function (data) {
  return html` <ul>
    ${data.collections.tagList
      .map((tag) => {
        return html`<li>${tag}</li>`;
      })
      .sort()
      .join('\n')}
  </ul>`;
};
