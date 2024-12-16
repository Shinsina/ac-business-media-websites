const omeda = require('@ac-business-media/refresh-theme/config/omeda');
const dragonForms = require('./dragon-forms');
const events = require('./events');
const gam = require('./gam');
const nativeX = require('./native-x');
const navigation = require('./navigation');
const identityX = require('./identity-x');
const omedaIdentityX = require('./omeda-identity-x');

module.exports = {
  // module configs
  dragonForms,
  events,
  gam,
  nativeX,
  navigation,
  identityX,
  omeda: omeda({}),
  idxNavItems: {
    enable: false,
  },
  omedaIdentityX,
  // theme configs
  company: 'IRONMARKETS, LLC',
  showCompanySectionFilters: true,
  p1events: {
    tenant: 'acbm',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'forconstructionpros.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/Rental_logo.png?h=45&auto=format,compress',
      srcset: [
        'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/Rental_logo.png?h=90&auto=format,compress 2x',
      ],
    },
    footer: {
      src: 'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/Rental_logo.png?h=45&auto=format,compress',
      srcset: [
        'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/Rental_logo.png?h=90&auto=format,compress 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/RentalMagazine', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/RentalPNI', target: '_blank' },
    { provider: 'instagram', href: 'https://www.instagram.com/rentalpni', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/rental-magazine', target: '_blank' },
  ],
  radix: {
    enabled: true,
    url: 'https://radix.mindful-web.parameter1.com',
    appId: '4448cfcb-e2da-40ff-8be6-671110964914',
    submissionFieldIds: [
      { name: 'comments', id: '580f6d056cdeea4730ddbb2c' },
    ],
  },
  gtm: {
    containerId: 'GTM-PNBSZL4',
  },
  mediaFuse: {
    id: 6060,
  },
  gcse: {
    id: '003355913687346718228:la4zrhjf2r9',
  },
  wufoo: {
    userName: 'acbm',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    notificationDefaults: {
      branding: {
        bgColor: '#000',
        logo: 'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/site_logo.png?h=45&auto=format,compress',
      },
      to: 'support@forconstructionpros.com',
      from: 'Rental Product News <noreply@forconstructionpros.com>',
    },
    branding: {
      bgColor: '#000',
      logo: 'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/site_logo.png?h=45&auto=format,compress',
    },
    to: 'support@forconstructionpros.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'requestmoreinfo@acbusinessmedia.com',
    sendFrom: 'ForConstructionPros.com <noreply@parameter1.com>',
    logo: 'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/site_logo.png?h=45&auto=format,compress&bg=000000&pad=5',
    bgColor: '#000',
  },
  leaders: {
    enabled: false,
  },
  publishedContentMultisite: false,
  useSectionLogos: true,
};
