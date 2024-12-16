const { withWebsiteSection } = require('@mindful-web/marko-web/middleware');
const queryFragment = require('@ac-business-media/refresh-theme/graphql/fragments/website-section-page');
const home = require('../templates/index');

module.exports = (app) => {
  app.get('/', withWebsiteSection({
    aliasResolver: () => 'home',
    template: home,
    queryFragment,
  }));
};
