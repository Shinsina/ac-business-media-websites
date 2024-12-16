const { asyncRoute } = require('@mindful-web/utils');
const directory = require('@ac-business-media/package-global/routes/directory');
const nativeX = require('@ac-business-media/package-global/routes/native-x');
const home = require('./home');
const content = require('./content');
const dynamicPages = require('./dynamic-page');
const websiteSections = require('./website-section');
const specs = require('./specs');
const directoryTemplate = require('../templates/directory/index');

module.exports = (app) => {
  app.use(asyncRoute(async (req, res, next) => {
    const { path: p } = req;
    /**
   * Redirect the Balluun long path to the short path
   * short path should be redirected to the correct new URL
   */
    if (p.match(/^\/(en-us|company)/) && p.match(/\/company\/[a-z0-9]{32}\/.+?\/[a-z0-9]{32}$/)) {
      res.redirect(301, p.replace(/\/[a-z0-9]{32}$/, ''));
    }
    /**
     * Redirect urls with /showroom/ to the respective company page
     */
    if (p.match(/^\/(en-us|company)/) && p.match(/\/showroom\//)) {
      res.redirect(301, p.replace(/\/showroom\//, '/'));
    }
    return next();
  }));
  // Homepage
  home(app);

  // Dynamic Pages
  dynamicPages(app);

  // Content Pages
  content(app);

  // Directory Pages have to happen after content or they wont match
  directory(app, {
    rootAlias: 'product-categories',
    contentTypes: ['Product', 'Company'],
    assignedToWebsiteSectionIds: [
      87730,
      87731,
      87733,
      87732,
      87734,
      87735,
      87736,
      87737,
      87739,
      87738,
      87740,
      87742,
      87741,
      87743,
      87744,
      87745,
    ],
    template: directoryTemplate,
  });

  // Native-X story rendering
  nativeX(app);

  // Website Sections
  websiteSections(app);

  specs(app);
};
