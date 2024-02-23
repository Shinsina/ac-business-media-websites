const directory = require('@ac-business-media/package-global/routes/directory');
const nativeX = require('@ac-business-media/package-global/routes/native-x');
const home = require('./home');
const content = require('./content');
const dynamicPages = require('./dynamic-page');
const websiteSections = require('./website-section');

module.exports = (app) => {
  // Homepage
  home(app);

  // Dynamic Pages
  dynamicPages(app);

  // Content Pages
  content(app);

  // Directory Pages have to happen after content or they wont match
  directory(app, {
    assignedToWebsiteSectionIds: [],
  });

  // Native-X story rendering
  nativeX(app);

  // Website Sections
  websiteSections(app);
};
