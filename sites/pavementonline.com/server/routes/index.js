// const directory = require('@ac-business-media/package-global/routes/directory');
const dynamicPages = require('@ac-business-media/package-global/routes/dynamic-page');
const nativeX = require('@ac-business-media/package-global/routes/native-x');

const home = require('./home');
const content = require('./content');
const websiteSections = require('./website-section');

module.exports = (app) => {
  // Homepage
  home(app);

  // Dynamic Pages
  dynamicPages(app);

  // Content Pages
  content(app);

  // Native-X story rendering
  nativeX(app);

  // Website Sections
  websiteSections(app);
};
