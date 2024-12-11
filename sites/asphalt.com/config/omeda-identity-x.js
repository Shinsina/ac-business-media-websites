const config = require('@ac-business-media/package-global/config/omeda-identity-x');
const omedaConfig = require('./omeda');
const idxConfig = require('./identity-x');

module.exports = config({
  omedaConfig,
  idxConfig,
  // @todo: rapidIdentProductId & siteId
  rapidIdentProductId: 15375,
  websiteBehaviorAttributeId: 524706,
});
