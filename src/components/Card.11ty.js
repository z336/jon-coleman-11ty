const { html } = require('code-tag');

function Card({ headingElement, heading, date, content, tags }) {
  const showHeading =
    headingElement && heading
      ? `<${headingElement}>${heading}</${headingElement}>`
      : '';
  const showDate = date ? `${date}` : '';
  const showTags = tags ? `${tags}` : '';

  return html`<article>
    ${showHeading} ${showDate} ${content} ${showTags}
  </article>`;
}

module.exports = Card;
