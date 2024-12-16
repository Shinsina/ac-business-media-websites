const defaults = {
  name: 'Stay in the Know',
  description: 'Get industry news updates and product information to help you stay up to date.',
  defaultNewsletter: {
    deploymentTypeId: 0,
    name: 'TBD',
    eventCategory: 'TBD',
  },
  privacyPolicy: {
    href: '/page/privacy-policy',
    label: 'Privacy Policy',
    target: '_blank',
  },
};

module.exports = {
  // uses inline omeda form
  signupBanner: {
    ...defaults,
    // imagePath: 'files/base/acbm/fcp/image/static/newsletter-pushdown/fg-full.png',
  },
  // pushdown: {
  //   ...defaults,
  //   imagePath: 'files/base/wattglobalmedia/all/image/static/newsletter-pushdown/fg-half.png',
  //   description: '',
  // },
  signupFooter: {
    ...defaults,
  },
};
