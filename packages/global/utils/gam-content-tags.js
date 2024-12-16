const { getAsArray } = require('@mindful-web/object-path');

const gamifyTagName = (name) => name
  .replace(/[^/" ".&a-zA-Z0-9_-]/g, '')
  .toLowerCase();

module.exports = (content) => getAsArray(content, 'tags.edges')
  .map(({ node }) => gamifyTagName(node.name));
