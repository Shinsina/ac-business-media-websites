const corporate = require('@ac-business-media/package-global/config/corporate');
const specGuides = require('@ac-business-media/package-global/config/spec-guides');

const contentMeter = require('./content-meter');
const gam = require('./gam');
const identityX = require('./identity-x');
const nativeX = require('./native-x');
const navigation = require('./navigation');
const newsletter = require('./newsletter');
const omeda = require('./omeda');
const omedaIdentityX = require('./omeda-identity-x');
const identityXOptInHooks = require('./identity-x-opt-in-hooks');
const pageDetails = require('./page-details');

module.exports = {
  // Module configs
  useLinkInjectedBody: process.env.USE_LINK_INJECTED_BODY || true,
  contentMeter,
  sectionFeed: {
    imageOptions: { w: 240, h: 135, ar: '16:9' },
    mobileImageOptions: { w: 240, h: 135, ar: '16:9' },
    modifiers: ['section-feed-mobile-cards'],
  },
  gam,
  identityX,
  nativeX,
  navigation,
  newsletter,
  omeda,
  omedaIdentityX,
  identityXOptInHooks,
  wufoo: {
    userName: 'acbm',
  },
  magazines: {
    publicationIds: ['53ca8f361784f8066eb2c96f'],
    description: '',
  },
  gcse: {
    id: '003355913687346718228:la4zrhjf2r9',
  },
  // Site configs
  useRecommendedSectionAlias: true,
  idxNavItems: {
    enable: process.env.IDX_NAV_ENABLE || false,
  },
  company: corporate.name,
  p1events: {
    tenant: 'acbm',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'www.pavementonline.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/pavement_header_logo.png?h=45&auto=format,compress',
      srcset: [
        'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/pavement_header_logo.png?h=90&auto=format,compress 2x',
      ],
      // src: 'https://s3.amazonaws.com/media.base.parameter1.com/files/base/acbm/fcp/image/static/logo/FCP-logo-high-res.png?h=45&auto=format,compress',
      // srcset: [
      //   'https://s3.amazonaws.com/media.base.parameter1.com/files/base/acbm/fcp/image/static/logo/FCP-logo-high-res.png?h=90&auto=format,compress 2x',
      // ],
    },
    footer: {
      src: 'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/pavement_header_logo.png?h=45&auto=format,compress',
      srcset: [
        'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/pavement_header_logo.png?h=90&auto=format,compress 2x',
      ],
    },
    corporate: corporate.logo,
  },
  useSectionLogos: true,
  tagline: ' ',
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/PavementMagazine', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/PavementMag', target: '_blank' },
    { provider: 'instagram', href: 'https://www.instagram.com/pavementmagazine', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/pavement-maintenance-reconstruction-magazine', target: '_blank' },
  ],
  podcastLinks: [],
  gtm: {
    containerId: 'GTM-M3X5FQS5',
  },
  contactUs: {
    notificationDefaults: {
      branding: {
        bgColor: '#000',
        logo: 'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/pavement_header_logo.png?h=45&auto=format,compress',
      },
      to: 'support@pavementonline.com',
      from: 'Pavement Maintenance & Reconstruction <noreply@pavementonline.com>',
    },
    branding: {
      bgColor: '#000',
      logo: 'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/pavement_header_logo.png?h=45&auto=format,compress',
    },
    to: 'support@pavementonline.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'requestmoreinfo@pavementonline.com',
    sendFrom: 'Pavementonline.com <noreply@parameter1.com>',
    logo: 'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/pavement_header_logo.png?h=45&auto=format,compress&bg=000000&pad=5',
    bgColor: '#000',
  },
  pageDetails,
  showCompanySectionFilters: true,
  sectionSearchIds: [
    88732, // Blacktop
    88738, // Maintenance
    88743, // Business
  ],
  specGuides,
  mindful: {
    namespace: 'acbm/default',
  },
};
