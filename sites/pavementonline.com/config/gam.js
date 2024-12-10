const configureGAM = require('@ac-business-media/package-global/config/gam');

const basePath = 'forconstructionpros';

const config = configureGAM({ basePath });

config.setAliasAdUnits('default', [
  { name: 'top-leaderboard', templateName: 'LEADERBOARD', path: '/pavement-maintenance/lb1' },
  { name: 'leaderboard', templateName: 'LEADERBOARD', path: '/pavement-maintenance/lb1' },
  { name: 'lb-sticky-bottom', templateName: 'LB-STICKY-BOTTOM', path: '/pavement-maintenance/lb1' },
  { name: 'rotation', templateName: 'ROTATION', path: '/pavement-maintenance/rail1' },
  { name: 'rotation-rail', templateName: 'ROTATION-RAIL', path: '/pavement-maintenance/rail1' },
  { name: 'top-rotation', templateName: 'TOP-ROTATION', path: '/pavement-maintenance/rail1' },
  { name: 'top-rotation-mobile', templateName: 'TOP-ROTATION-MOBILE', path: '/pavement-maintenance/rail1' },
  { name: 'top-rotation-desktop', templateName: 'TOP-ROTATION-DESKTOP', path: '/pavement-maintenance/rail1' },
  { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: '/pavement-maintenance/rail1' },
  { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: '/pavement-maintenance/rail1' },
  { name: 'reskin', path: '/pavement-maintenance/reskin' },
]);

const aliases = [
  // { alias: 'application', prefix: 'application' },
  // { alias: 'production', prefix: 'production' },
  // { alias: 'business', prefix: 'business' },
];

aliases.forEach(({ alias, prefix = alias }) => config.setAliasAdUnits(alias, [
  { name: 'top-leaderboard', templateName: 'LEADERBOARD', path: `/${prefix}/lb1` },
  { name: 'leaderboard', templateName: 'LEADERBOARD', path: `/${prefix}/lb1` },
  { name: 'footer-leaderboard', templateName: 'FOOTER-LEADERBOARD', path: `/${prefix}/lb1` },
  { name: 'rotation', templateName: 'ROTATION', path: `/${prefix}/rail1` },
  { name: 'rotation-rail', templateName: 'ROTATION-RAIL', path: `/${prefix}/rail1` },
  { name: 'top-rotation', templateName: 'TOP-ROTATION', path: `/${prefix}/rail1` },
  { name: 'top-rotation-mobile', templateName: 'TOP-ROTATION-MOBILE', path: `/${prefix}/rail1` },
  { name: 'top-rotation-desktop', templateName: 'TOP-ROTATION-DESKTOP', path: `/${prefix}/rail1` },
  { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: `/${prefix}/rail1` },
  { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: `/${prefix}/rail1` },
  { name: 'reskin', path: `/${prefix}/reskin` },
]));

module.exports = config;
