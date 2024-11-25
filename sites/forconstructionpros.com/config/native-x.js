const configureNativeX = require('@ac-business-media/package-global/config/native-x');

const config = configureNativeX();

config.enabled = true;
config.domainName = 'www.forconstructionpros.com';

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5b55e1352360050001b77341' },
    { name: 'premium-content', id: '5b55e1352360050001b77341' },
    { name: 'related-content', id: '5b55e1352360050001b77341' },
  ])
  .setAliasPlacements('asphalt', [
    { name: 'default', id: '5b55e26b2360050001b7734a' },
    { name: 'premium-content', id: '5b55e26b2360050001b7734a' },
    { name: 'related-content', id: '5b55e26b2360050001b7734a' },
  ])
  .setAliasPlacements('business', [
    { name: 'default', id: '5b55e2f6dfcd9c00010676ba' },
    { name: 'premium-content', id: '5b55e2f6dfcd9c00010676ba' },
    { name: 'related-content', id: '5b55e2f6dfcd9c00010676ba' },
  ])
  .setAliasPlacements('concrete', [
    { name: 'default', id: '5b55e239dfcd9c00010676b4' },
    { name: 'premium-content', id: '5b55e239dfcd9c00010676b4' },
    { name: 'related-content', id: '5b55e239dfcd9c00010676b4' },
  ])
  .setAliasPlacements('equipment', [
    { name: 'default', id: '5b55e16cdfcd9c00010676ae' },
    { name: 'premium-content', id: '5b55e16cdfcd9c00010676ae' },
    { name: 'related-content', id: '5b55e16cdfcd9c00010676ae' },
  ])
  .setAliasPlacements('equipment-management', [
    { name: 'default', id: '5b55e2d42360050001b7734f' },
    { name: 'premium-content', id: '5b55e2d42360050001b7734f' },
    { name: 'related-content', id: '5b55e2d42360050001b7734f' },
  ])
  .setAliasPlacements('pavement-maintenance', [
    { name: 'default', id: '5b55e253dfcd9c00010676b5' },
    { name: 'premium-content', id: '5b55e253dfcd9c00010676b5' },
    { name: 'related-content', id: '5b55e253dfcd9c00010676b5' },
  ])
  .setAliasPlacements('rental', [
    { name: 'default', id: '5b55e29d2360050001b7734c' },
    { name: 'premium-content', id: '5b55e29d2360050001b7734c' },
    { name: 'related-content', id: '5b55e29d2360050001b7734c' },
  ])
  .setAliasPlacements('construction-technology', [
    { name: 'default', id: '5b55e3162360050001b77351' },
    { name: 'premium-content', id: '5b55e3162360050001b77351' },
    { name: 'related-content', id: '5b55e3162360050001b77351' },
  ])
  .setAliasPlacements('trucks', [
    { name: 'default', id: '5b55e1a52360050001b77343' },
    { name: 'premium-content', id: '5b55e1a52360050001b77343' },
    { name: 'related-content', id: '5b55e1a52360050001b77343' },
  ])
  .setAliasPlacements('ironpros', [
    { name: 'default', id: '63863e54fc370c00019b2027' },
    { name: 'premium-content', id: '63863e54fc370c00019b2027' },
    { name: 'related-content', id: '63863e54fc370c00019b2027' },
  ]);

module.exports = config;
