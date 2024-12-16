const olyticsCookie = require('@mindful-web/marko-web-omeda/olytics/customer-cookie');

module.exports = ({ content, req }) => {
  const incomingEncId = olyticsCookie.clean(req.query.oly_enc_id);

  if (incomingEncId) return false;

  // Do not gate if gating surveyId is set
  if (content.gating && content.gating.surveyId) return false;

  // Do not gate if bypass flag is enabled
  if (content.userRegistration.bypassGating) return false;

  // Gate the following content types only.
  const typesToGate = [
    'article',
    'blog',
    'document',
    'whitepaper',
  ];
  if (typesToGate.includes(content.type)) return true;

  return false;
};
