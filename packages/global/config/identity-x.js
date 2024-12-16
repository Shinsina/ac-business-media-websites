const IdentityXConfiguration = require('@mindful-web/marko-web-identity-x/config');
const newrelic = require('newrelic');

module.exports = ({
  appId,
  hiddenFields = [
    'organizationTitle',
  ],
  requiredServerFields = [
    'givenName',
    'familyName',
    'organization',
    'countryCode',
  ],
  requiredClientFields = [
    'regionCode',
    'countryCode',
    'postalCode',
  ],
  gtmUserFields,
  defaultFieldLabels = {
    mobileNumber: 'Mobile Phone',
    organization: 'Company Name',
  },
  consentPolicy = '<p class="mb-2">I accept that the data provided on this form will be processed, stored, and used in accordance with the terms set out in IRONMARKETS’ <a href="/page/privacy-policy" target="_blank">Privacy Policy</a>.</p>',
  ...rest
} = {}) => {
  const config = new IdentityXConfiguration({
    appId,
    apiToken: process.env.IDENTITYX_API_TOKEN,
    hiddenFields,
    requiredServerFields,
    requiredClientFields,
    gtmUserFields,
    defaultFieldLabels,
    onHookError: newrelic.noticeError.bind(newrelic),
    consentPolicy,
    ...rest,
  });
  return config;
};
