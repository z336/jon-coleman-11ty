const { html } = require('code-tag');

exports.data = {
  title: 'Bookmarks',
  layout: 'page.html',
  permalink: '/bookmarks/',
};

exports.render = function (data) {
  return html`
    <ul>
      ${data.bookmarks
        .map((bookmark) => {
          return html`<li>
            <a href="${bookmark.url}">${bookmark.title}</a>
            <ul>
              ${bookmark.tags
                .map((tag) => {
                  return html`<li>${tag}</li>`;
                })
                .join('\n')}
            </ul>
          </li>`;
        })
        .join('\n')}
    </ul>
  `;
};
