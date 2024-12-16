const omeda = require('@ac-business-media/refresh-theme/config/omeda');
const dragonForms = require('./dragon-forms');
const events = require('./events');
const gam = require('./gam');
const identityX = require('./identity-x');
const nativeX = require('./native-x');
const navigation = require('./navigation');
const omedaIdentityX = require('./omeda-identity-x');

module.exports = {
  // module configs
  dragonForms,
  events,
  gam,
  nativeX,
  navigation,
  omeda: omeda({}),
  identityX,
  omedaIdentityX,
  idxNavItems: {
    enable: true,
  },
  // theme configs
  company: 'IRONMARKETS, LLC',
  p1events: {
    tenant: 'acbm',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'sdcexec.com' : '',
  },
  forceContentGate: process.env.FORCE_CONTENT_GATE === 'true' || false,
  logos: {
    navbar: {
      src: 'https://img.sdcexec.com/files/base/acbm/sdce/image/static/logo/site_logo_og.png?h=45&auto=format,compress',
      srcset: [
        'https://img.sdcexec.com/files/base/acbm/sdce/image/static/logo/site_logo_og.png?h=90&auto=format,compress 2x',
      ],
    },
    footer: {
      src: 'https://img.sdcexec.com/files/base/acbm/sdce/image/static/logo/site_logo_og.png?h=60&auto=format,compress',
      srcset: [
        'https://img.sdcexec.com/files/base/acbm/sdce/image/static/logo/site_logo_og.png?h=120&auto=format,compress 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'http://www.facebook.com/sdcexec', target: '_blank' },
    { provider: 'twitter', href: 'http://www.twitter.com/sdcexec', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/supply-demand-chain-executive/', target: '_blank' },
    { provider: 'flipboard', href: 'https://flipboard.com/@SDCExec', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UCr_15DiCMiM_HkL-ujXzuvw', target: '_blank' },
  ],
  radix: {
    enabled: true,
    url: 'https://radix.mindful-web.parameter1.com',
    appId: '8d348e1f-b6d0-4065-8260-e1ffd63c7ab9',
    submissionFieldIds: [
      { name: 'comments', id: '5a0dccab3bab46eb316cd352' },
    ],
  },
  gtm: {
    containerId: 'GTM-KK6K97N',
  },
  mediaFuse: {
    id: 6064,
  },
  gcse: {
    id: '017383739850048358259:xbexltkrwbk',
  },
  wufoo: {
    userName: 'acbm',
  },
  magazines: {
    publicationIds: ['53c9604b1784f8066eb2c8b9'],
    description: '',
  },
  contactUs: {
    notificationDefaults: {
      branding: {
        bgColor: '#ec131c',
        logo: 'https://img.sdcexec.com/files/base/acbm/sdce/image/static/logo/site_logo_og.png?h=60&auto=format,compress',
      },
      to: 'jsmith@iron.markets',
      from: 'Supply and Demand Chain Executive <noreply@foodlogistics.com>',
    },
    branding: {
      bgColor: '#ec131c',
      logo: 'https://img.sdcexec.com/files/base/acbm/sdce/image/static/logo/site_logo_og.png?h=60&auto=format,compress',
    },
    to: 'jsmith@iron.markets',
  },
  inquiry: {
    enabled: true,
    directSend: false,
    sendTo: 'requestmoreinfo@acbusinessmedia.com',
    sendFrom: 'Supply & Demand Chain Executive <noreply@parameter1.com>',
    logo: 'https://img.sdcexec.com/files/base/acbm/sdce/image/static/logo/site_logo_og.png?h=60&auto=format,compress',
    bgColor: '#ec131c',
  },
  leaders: {
    enabled: false,
    title: 'Supply Chain Leaders',
    alias: 'leaders/2020',
    calloutValue: 'Leading Companies',
    header: {
      imgSrc: 'https://img.sdcexec.com/files/base/acbm/sdce/image/static/sdc-leaders.png?h=85&auto=format,compress',
    },
  },
};
