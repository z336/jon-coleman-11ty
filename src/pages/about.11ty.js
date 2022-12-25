const { html } = require('code-tag');
const Card = require('../components/Card.11ty.js');

exports.data = {
  title: 'About',
  layout: 'page.html',
  permalink: '/about/',
};

const content = html` <p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita harum
  repellat nulla alias cum sint impedit, cumque, voluptate, provident corrupti
  sequi assumenda ea et! Nesciunt maiores dignissimos sed voluptas error?
</p>`;

exports.render = function () {
  return html`
    ${Card({
      headingElement: `h2`,
      heading: `It's me`,
      content: `${content}`,
    })}
  `;
};
