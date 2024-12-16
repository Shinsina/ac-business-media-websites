const { withDynamicPage } = require('@mindful-web/marko-web/middleware');
const queryFragment = require('@mindful-web/marko-web-theme-monorail/graphql/fragments/dynamic-page');
const page = require('../templates/dynamic-page');

module.exports = (app) => {
  app.get('/page/:alias(*)', withDynamicPage({
    template: page,
    queryFragment,
  }));
};
