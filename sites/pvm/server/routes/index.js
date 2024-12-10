// const directory = require('@ac-business-media/package-global/routes/directory');
const dynamicPages = require('@ac-business-media/package-global/routes/dynamic-page');
const nativeX = require('@ac-business-media/package-global/routes/native-x');

const home = require('./home');
const content = require('./content');
const websiteSections = require('./website-section');
const specguide = require('./spec-guide');

module.exports = (app) => {
  // Homepage
  home(app);

  // Dynamic Pages
  dynamicPages(app);

  // Content Pages
  content(app);

  specguide(app);

  // // Directory Pages have to happen after content or they wont match
  // directory(app, {
  //   assignedToWebsiteSectionIds: [
  //     54289, // Asphalt
  //     54300, // Business
  //     54436, // Concrete
  //     54319, // Construction Technology
  //     54330, // Equipment
  //     54468, // Pavement Maintenance
  //   ],
  // });

  // Native-X story rendering
  nativeX(app);

  // Website Sections
  websiteSections(app);
};
