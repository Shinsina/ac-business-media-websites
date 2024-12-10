const defaultConfig = require('@ac-business-media/package-global/config/content-meter');

module.exports = {
  ...defaultConfig,
  enabled: false, // process.env.ENABLE_CONTENT_METER === 'true',
};
