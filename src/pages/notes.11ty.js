const { html } = require('code-tag');
const { htmlDateString, readableDate } = require('../../config/filters');
const Card = require('../components/Card.11ty');

exports.data = {
  title: 'Notes',
  layout: 'page.html',
  permalink: '/notes/',
};

exports.render = function (data) {
  return html`
    ${data.notes
      .map((note) => {
        return html`
          ${Card({
            headingElement: `h2`,
            heading: `<a href="${note.url}">${note.title}</a>`,
            date: `<time datetime="${htmlDateString(note.date)}">${readableDate(
              note.date
            )}</time>`,
            content: `<p>${note.description}</p>`,
            tags: `<ul>${note.tags
              .map((tag) => {
                return html`<li>${tag}</li>`;
              })
              .join('\n')}</ul>`,
          })}
        `;
      })
      .join('\n')}
  `;
};
