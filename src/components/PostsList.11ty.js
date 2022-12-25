const { html } = require('code-tag');
const { htmlDateString, readableDate } = require('../../config/filters');

function PostsList(data) {
  return html`<ul>
    ${data.collections.posts
      .map(
        (post) =>
          html`<li>
            <a href="${post.url}">${post.data.title}</a>
            <time datetime="${htmlDateString(post.data.date)}"
              >${readableDate(post.data.date)}</time
            >
          </li>`
      )
      .join('\n')}
  </ul>`;
}

module.exports = PostsList;
