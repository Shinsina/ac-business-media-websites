const GAMConfiguration = require('@mindful-web/marko-web-gam/config');
const { asArray } = require('@mindful-web/utils');
const { get, getAsObject } = require('@mindful-web/object-path');

module.exports = ({
  accountId = '21772951814',
  basePath,
  pathMaps = [],
  lazyload = {
    enabled: true, // set to true to enable lazy loading
    fetchMarginPercent: 100, // fetch ad when one viewport away
    renderMarginPercent: 50, // render ad when half viewport away
    mobileScaling: 2, // double these on mobile
  },

  stickyBottomTemplate = {
    size: [[970, 90], [970, 66], [728, 90], [320, 50], [300, 50]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 90], [970, 66], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [[300, 50], [320, 50]] },
    ],
  },
} = {}) => {
  const config = new GAMConfiguration(accountId, { basePath });
  config.lazyload = lazyload;
  config
    .setTemplate('LB', {
      size: [[970, 250], [970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
      sizeMapping: [
        { viewport: [980, 0], size: [[970, 250], [970, 90], [970, 66], [728, 90]] },
        { viewport: [750, 0], size: [728, 90] },
        { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
      ],
    })
    .setTemplate('LB-STICKY-BOTTOM', stickyBottomTemplate)
    .setTemplate('RAIL1', { size: [[300, 250]] })
    .setTemplate('RAIL2', { size: [[300, 600]] })
    .setTemplate('IN-CONTENT', {
      size: [[300, 250], [300, 600]],
      sizeMapping: [
        { viewport: [992, 0], size: [] },
        { viewport: [576, 0], size: [[300, 250], [300, 600]] },
        { viewport: [300, 0], size: [[300, 250]] },
      ],
    })
    .setTemplate('INFINITE-RAIL', {
      size: [[300, 250], [300, 600]],
      sizeMapping: [
        { viewport: [992, 0], size: [[300, 250], [300, 600]] },
        { viewport: [0, 0], size: [] },
      ],
    })
    .setTemplate('INFINITE-INTERSTITIAL', {
      size: [[300, 250], [300, 600]],
      sizeMapping: [
        { viewport: [992, 0], size: [] },
        { viewport: [300, 0], size: [[300, 250], [300, 600]] },
      ],
    });

  const templates = {
    lb1: 'LB',
    'lb-sticky-bottom': 'LB-STICKY-BOTTOM',
    rail1: 'RAIL1',
    rail2: 'RAIL2',
    'infinite-rail': 'INFINITE-RAIL',
    'infinite-interstitial': 'INFINITE-INTERSTITIAL',
    'in-content': 'IN-CONTENT',
    reskin: undefined,
    wa: undefined,
  };
  const adunitNames = Object.keys(templates);

  asArray(pathMaps).forEach((obj) => {
    const alias = get(obj, 'alias');
    const map = getAsObject(obj, 'map');
    const definitions = adunitNames.reduce((arr, name) => {
      const templateName = templates[name];
      const path = map[name];
      if (path) arr.push({ name, templateName, path });
      return arr;
    }, []);
    if (alias && definitions.length) {
      config.setAliasAdUnits(alias, definitions);
    }
  });
  return config;
};
