const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');

module.exports = {
  gam,
  nativeX,
  navigation,
  company: 'AC Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.dmnews.com/files/base/acbm/static/DMNLogoWhite.png?h=45',
      srcset: [
        'https://img.dmnews.com/files/base/acbm/static/DMNLogoWhite.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://img.dmnews.com/files/base/acbm/static/DMNLogoWhite.png?h=60',
      srcset: [
        'https://img.dmnews.com/files/base/acbm/static/DMNLogoWhite.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/OEMOffHighway', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/OEMOffHighway', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/1831755/profile', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UCuAwQzKyZOqJolRTNYa0ZyA', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-KFFMFV4',
  },
  gcse: {
    id: '017383739850048358259:aj4j1qbs7ai',
  },
  wufoo: {
    userName: 'acbm',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#28ace2',
      logo: 'https://img.dmnews.com/files/base/acbm/static/DMNLogoWhite.png?h=60',
    },
    to: 'jsage@acbusinessmedia.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'jsage@acbusinessmedia.com',
    sendFrom: 'OEM Off-Highway <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.dmnews.com/files/base/acbm/static/DMNLogoWhite.png?h=60',
    bgColor: '#28ace2',
  },
};
