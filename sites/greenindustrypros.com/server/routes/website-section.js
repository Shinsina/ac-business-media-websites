const { withWebsiteSection } = require('@mindful-web/marko-web/middleware');
const section = require('@ac-business-media/refresh-theme/templates/website-section');
const publishedVideos = require('@ac-business-media/refresh-theme/templates/website-section/published-videos');
const contactUs = require('@ac-business-media/refresh-theme/templates/website-section/contact-us');
const queryFragment = require('@ac-business-media/refresh-theme/graphql/fragments/website-section-page');
const leadersFragment = require('@ac-business-media/refresh-theme/graphql/fragments/leaders-section');
const leaders = require('@ac-business-media/refresh-theme/templates/website-section/leaders');
const media = require('@ac-business-media/refresh-theme/templates/website-section/media');
const feed = require('@ac-business-media/refresh-theme/templates/website-section/feed');
const awards = require('@ac-business-media/refresh-theme/templates/website-section/awards');
const webinars = require('@ac-business-media/refresh-theme/templates/website-section/webinars');
const events = require('@ac-business-media/refresh-theme/templates/website-section/events');

const directory = require('../templates/website-section/directory');

module.exports = (app) => {
  app.get('/:alias(leaders)', withWebsiteSection({
    template: leaders,
    queryFragment: leadersFragment,
  }));
  app.get('/:alias(directory)', withWebsiteSection({
    template: directory,
    queryFragment,
  }));
  app.get('/:alias(contact-us)', withWebsiteSection({
    template: contactUs,
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
  app.get('/:alias(podcasts)', withWebsiteSection({
    template: media,
    queryFragment,
  }));
  app.get('/:alias(podcasts/*)', withWebsiteSection({
    template: feed,
    queryFragment,
  }));
  app.get('/:alias(videos)', withWebsiteSection({
    template: publishedVideos,
    queryFragment,
  }));
  app.get('/:alias(expert-columns)', withWebsiteSection({
    template: feed,
    queryFragment,
    context: ({ section: s }) => ({
      query: {
        name: 'website-optioned-content',
        params: { sectionId: s.id, optionName: 'Pinned', limit: 12 },
      },
    }),
  }));
  app.get('/:alias(premium-content)', withWebsiteSection({
    template: feed,
    queryFragment,
  }));
  app.get('/:alias(webinars)', withWebsiteSection({
    template: webinars,
    queryFragment,
  }));
  app.get('/:alias(events)', withWebsiteSection({
    template: events,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
