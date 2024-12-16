const { withWebsiteSection } = require('@mindful-web/marko-web/middleware');
const section = require('@ac-business-media/refresh-theme/templates/website-section');
const events = require('@ac-business-media/refresh-theme/templates/website-section/events');
const feed = require('@ac-business-media/refresh-theme/templates/website-section/feed');
const publishedVideos = require('@ac-business-media/refresh-theme/templates/website-section/published-videos');
const media = require('@ac-business-media/refresh-theme/templates/website-section/media');
const webinars = require('@ac-business-media/refresh-theme/templates/website-section/webinars');
const queryFragment = require('@ac-business-media/refresh-theme/graphql/fragments/website-section-page');
const awards = require('@ac-business-media/refresh-theme/templates/website-section/awards');

module.exports = (app) => {
  app.get('/:alias(events)', withWebsiteSection({
    template: events,
    queryFragment,
  }));
  app.get('/:alias(podcasts|videos)', withWebsiteSection({
    template: media,
    queryFragment,
  }));
  app.get('/:alias(videos/library)', withWebsiteSection({
    template: publishedVideos,
    queryFragment,
  }));
  app.get('/:alias(podcasts/*|videos/*)', withWebsiteSection({
    template: feed,
    queryFragment,
  }));
  app.get('/:alias(webinars)', withWebsiteSection({
    template: webinars,
    queryFragment,
  }));
  app.get('/:alias(premium-content)', withWebsiteSection({
    template: feed,
    queryFragment,
  }));
  app.get('/:alias(awards/*)', withWebsiteSection({
    template: feed,
    queryFragment,
  }));
  app.get('/:alias(awards)', withWebsiteSection({
    template: awards,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
