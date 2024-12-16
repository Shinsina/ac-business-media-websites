const GAMConfiguration = require('@mindful-web/marko-web-gam/config');

module.exports = ({
  accountId = '21772951814',
  basePath,
  enabled = true,
} = {}) => {
  const config = new GAMConfiguration(accountId, { basePath });
  config.enabled = enabled;
  config.showLabel = false;
  config.lazyLoad = {
    enabled: false, // set to true to enable lazy loading
    fetchMarginPercent: 200, // fetch ad when one viewport away
    renderMarginPercent: 100, // render ad when half viewport away
    mobileScaling: 2, // double these on mobile
  };

  config
    .setTemplate('LEADERBOARD', {
      size: [
        [970, 250],
        [970, 90],
        [970, 66],
        [728, 90],
        [320, 50],
        [300, 50],
        [300, 100],
      ],
      sizeMapping: [
        {
          viewport: [980, 0],
          size: [
            [970, 250],
            [970, 90],
            [970, 66],
            [728, 90],
          ],
        },
        {
          viewport: [300, 0],
          size: [
            [320, 50],
            [300, 50],
            [300, 100],
          ],
        },
      ],
    })
    .setTemplate('LB-STICKY-BOTTOM', {
      size: [
        [970, 90],
        [970, 66],
        [728, 90],
        [320, 50],
        [300, 50],
      ],
      sizeMapping: [
        { viewport: [980, 0], size: [[970, 90], [970, 66], [728, 90]] },
        { viewport: [750, 0], size: [728, 90] },
        { viewport: [320, 0], size: [[300, 50], [320, 50]] },
      ],
    })
    .setTemplate('ROTATION-RAIL', {
      size: [300, 250],
      sizeMapping: [
        { viewport: [300, 0], size: [300, 250] },
      ],
    })
    .setTemplate('ROTATION', {
      size: [[300, 600]],
      sizeMapping: [
        { viewport: [300, 0], size: [[300, 600]] },
      ],
    })
    .setTemplate('TOP-ROTATION', {
      size: [[300, 250], [300, 600]],
      sizeMapping: [
        { viewport: [300, 0], size: [[300, 250], [300, 600]] },
      ],
    })
    .setTemplate('TOP-ROTATION-MOBILE', {
      size: [300, 250],
      sizeMapping: [
        { viewport: [980, 0], size: [] },
        { viewport: [300, 0], size: [300, 250] },
      ],
    })
    .setTemplate('TOP-ROTATION-DESKTOP', {
      size: [[300, 250], [300, 600]],
      sizeMapping: [
        { viewport: [980, 0], size: [[300, 250], [300, 600]] },
        { viewport: [0, 0], size: [] },
      ],
    })
    .setTemplate('INLINE-CONTENT-MOBILE', {
      size: [[300, 50], [300, 250]],
      sizeMapping: [
        { viewport: [980, 0], size: [] },
        { viewport: [300, 0], size: [[300, 50], [300, 250], [300, 240]] },
      ],
    })
    .setTemplate('INLINE-CONTENT-DESKTOP', {
      size: [[728, 90], [600, 200], [300, 250]],
      sizeMapping: [
        { viewport: [980, 0], size: [[728, 90], [600, 200], [300, 250]] },
        { viewport: [0, 0], size: [] },
      ],
    })
    .setTemplate('NATIVE', {
      size: ['fluid'],
      sizeMapping: [
        { viewport: [300, 0], size: ['fluid'] },
      ],
    });

  return config;
};
