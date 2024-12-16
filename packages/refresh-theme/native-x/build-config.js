const NativeXConfiguration = require('@mindful-web/marko-web-native-x/config');
const { asObject } = require('@mindful-web/utils');

module.exports = ({
  uri = process.env.NATIVEX_SERVE_URI || 'https://delivery.mindfulcms.com/acbm/default/compat/native-website',
  enabled = true,
  placements,
} = {}) => {
  const aliases = Object.keys(asObject(placements));
  const config = new NativeXConfiguration(uri, {
    enabled: aliases.length ? enabled : false,
    tenantKey: 'acbm',
  });
  aliases.forEach((alias) => {
    const id = placements[alias];
    config.setAliasPlacements(alias, [
      { name: 'default', id },
    ]);
  });
  return config;
};
