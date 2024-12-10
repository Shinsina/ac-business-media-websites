const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@ac-business-media/package-global/graphql/fragments/website-section-page');
const blogs = require('@ac-business-media/package-global/templates/website-section/blogs');
const webinars = require('@ac-business-media/package-global/templates/website-section/webinars');
const upcomingEvents = require('@ac-business-media/package-global/templates/website-section/upcoming-events');
const section = require('@ac-business-media/package-global/templates/website-section');
const promoCards = require('@ac-business-media/package-global/templates/website-section/promo-cards');
const sectionWithoutNativeX = require('@ac-business-media/package-global/templates/website-section/without-native-x');
const sectionWithoutAds = require('@ac-business-media/package-global/templates/website-section/feed-without-ads');
const contactUs = require('@ac-business-media/package-global/templates/website-section/contact-us');
const staticDirectory = require('../templates/website-section/static-directory');

const withoutNativeXAlias = [
];

const withoutAdsAliases = [
  'premium-content',
  'whitepapers',
];

module.exports = (app) => {
  app.get('/:alias(podcasts|videos|awards)', withWebsiteSection({
    template: promoCards,
    queryFragment,
  }));
  app.get('/:alias(webinars)', withWebsiteSection({
    template: webinars,
    queryFragment,
  }));
  app.get('/:alias(contact-us)', withWebsiteSection({
    template: contactUs,
    queryFragment,
  }));
  withoutNativeXAlias.forEach((alias) => {
    app.get(`/:alias(${alias})`, withWebsiteSection({
      template: sectionWithoutNativeX,
      queryFragment,
    }));
  });
  withoutAdsAliases.forEach((alias) => {
    app.get(`/:alias(${alias})`, withWebsiteSection({
      template: sectionWithoutAds,
      queryFragment,
    }));
  });
  app.get('/:alias(events)', withWebsiteSection({
    template: upcomingEvents,
    queryFragment,
  }));
  app.get('/:alias(blogs)', withWebsiteSection({
    template: blogs,
    queryFragment,
  }));
  app.get('/:alias(directory)', withWebsiteSection({
    template: staticDirectory,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
