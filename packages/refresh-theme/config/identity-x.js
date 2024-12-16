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
  activeCustomFieldIds = [],
  defaultFieldLabels = {
    mobileNumber: 'Mobile Phone *',
  },
} = {}) => {
  const config = new IdentityXConfiguration({
    appId,
    apiToken: process.env.IDENTITYX_API_TOKEN,
    hiddenFields,
    requiredServerFields,
    activeCustomFieldIds,
    requiredClientFields,
    gtmUserFields,
    defaultFieldLabels,
    onHookError: newrelic.noticeError.bind(newrelic),
  });
  return config;
};
