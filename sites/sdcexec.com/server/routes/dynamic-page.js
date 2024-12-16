const { withDynamicPage } = require('@mindful-web/marko-web/middleware');
const page = require('@ac-business-media/refresh-theme/templates/dynamic-page');
const queryFragment = require('@ac-business-media/refresh-theme/graphql/fragments/dynamic-page');

module.exports = (app) => {
  app.get('/page/:alias(*)', withDynamicPage({
    template: page,
    queryFragment,
  }));
};
