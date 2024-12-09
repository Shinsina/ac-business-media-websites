const configureNativeX = require('@ac-business-media/package-global/config/native-x');

const config = configureNativeX();

config.enabled = true;
config.domainName = 'www.forconstructionpros.com';

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5b55e26b2360050001b7734a' },
    { name: 'premium-content', id: '5b55e26b2360050001b7734a' },
    { name: 'related-content', id: '5b55e26b2360050001b7734a' },
  ]);
module.exports = config;
