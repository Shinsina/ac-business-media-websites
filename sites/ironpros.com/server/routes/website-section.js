const { withWebsiteSection } = require('@mindful-web/marko-web/middleware');
const queryFragment = require('@ac-business-media/package-global/graphql/fragments/website-section-with-cover-image-page');
const publishedVideos = require('@ac-business-media/package-global/templates/website-section/feed-without-ads');
const contactUs = require('../templates/website-section/contact-us');
const webinars = require('../templates/website-section/webinars');
const section = require('../templates/website-section');

module.exports = (app) => {
  app.get('/:alias(contact-us)', withWebsiteSection({
    template: contactUs,
    queryFragment,
  }));
  app.get('/:alias(webinars)', withWebsiteSection({
    template: webinars,
    queryFragment,
  }));
  app.get('/:alias(ironpros-tv)', withWebsiteSection({
    template: publishedVideos,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
