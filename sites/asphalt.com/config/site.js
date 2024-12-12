const corporate = require('@ac-business-media/package-global/config/corporate');
const specGuides = require('@ac-business-media/package-global/config/spec-guides');
const roller = require('@ac-business-media/package-global/config/spec-guides/roller');

specGuides.guides = { roller };
specGuides.title = 'Asphat.com Spec Guides';
specGuides.description = '<em>Asphalt.com</em> Spec Guides are essential industry tools to help you make the right choices when purchasing or renting aphalt equipment. Use the industry’s first and only completely interactive component specifiers custom built <strong>for construction equipment owners and end users.</strong>';

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

const sectionSearchIds = [
  88709, // Application
  88717, // Production
  88721, // Business
];

const notificationBG = '#9acb3c';

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
  magazines: {
    publicationIds: ['53ca94211784f8066eb2c983'],
    description: '',
  },
  wufoo: {
    userName: 'acbm',
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
    cookieDomain: process.env.NODE_ENV === 'production' ? 'www.asphalt.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/asphalt_bw_logo.png?h=45&auto=format,compress',
      srcset: [
        'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/asphalt_bw_logo.png?h=90&auto=format,compress 2x',
      ],
      // src: 'https://s3.amazonaws.com/media.base.parameter1.com/files/base/acbm/fcp/image/static/logo/FCP-logo-high-res.png?h=45&auto=format,compress',
      // srcset: [
      //   'https://s3.amazonaws.com/media.base.parameter1.com/files/base/acbm/fcp/image/static/logo/FCP-logo-high-res.png?h=90&auto=format,compress 2x',
      // ],
    },
    footer: {
      src: 'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/asphalt_bw_logo.png?h=45&auto=format,compress',
      srcset: [
        'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/asphalt_bw_logo.png?h=90&auto=format,compress 2x',
      ],
    },
    corporate: corporate.logo,
  },
  useSectionLogos: true,
  tagline: ' ',
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/Asphalt.Contractor', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/AsphaltContrctr', target: '_blank' },
    { provider: 'instagram', href: 'https://www.instagram.com/asphaltcontractor', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/asphalt-contractor-magazine', target: '_blank' },
  ],
  podcastLinks: [],
  gtm: {
    containerId: 'GTM-TZ3X9R99',
  },
  contactUs: {
    notificationDefaults: {
      branding: {
        bgColor: notificationBG,
        logo: 'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/asphalt_bw_logo.png?h=45&auto=format,compress',
      },
      to: 'support@asphalt.com',
      from: 'Asphalt Contractor <noreply@asphalt.com>',
    },
    branding: {
      bgColor: notificationBG,
      logo: 'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/asphalt_bw_logo.png?h=45&auto=format,compress',
    },
    to: 'support@asphalt.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'requestmoreinfo@acbusinessmedia.com',
    sendFrom: 'Asphalt.com <noreply@parameter1.com>',
    logo: 'https://img.forconstructionpros.com/files/base/acbm/fcp/image/static/logo/asphalt_bw_logo.png?h=45&auto=format,compress&bg=000000&pad=5',
    bgColor: notificationBG,
  },
  pageDetails,
  showCompanySectionFilters: true,
  sectionSearchIds,
  search: {
    assignedToWebsiteSectionIds: sectionSearchIds,
  },
  specGuides,
  mindful: {
    namespace: 'acbm/default',
  },
};
