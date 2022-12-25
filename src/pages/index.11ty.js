const { html } = require('code-tag');
const Card = require('../components/Card.11ty');
const PostsList = require('../components/PostsList.11ty');

exports.data = {
  title: 'Hello',
  layout: 'page.html',
  permalink: '/',
};

const content = html`<p>
    <strong><mark>My name is Jon</mark></strong> and I write for the web as a
    <strong><mark>technical and UX writer</mark></strong
    >. I am also interested in <strong><mark>web development</mark></strong
    >, <strong><mark>web design</mark></strong
    >, and <strong><mark>accessibility</mark></strong
    >.
  </p>
  <p>
    This site is not tracking you, but you can subscribe to the RSS feed if
    would like to track it.
  </p>`;

exports.render = function (data) {
  return html`
    ${Card({
      content: `${content}`,
    })}
    ${PostsList(data)}
  `;
};
