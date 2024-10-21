const { contentAccessState } = require('@parameter1/base-cms-marko-web-identity-x/middleware/content-access-state');
const { contentDownloadState } = require('@parameter1/base-cms-marko-web-identity-x/middleware/content-download-state');

const formatContentResponse = ({ res, content }) => {
  contentAccessState({ res, content });
  // for now call on every content route, could look at type based for below????
  contentDownloadState({ res, content });
};

module.exports = {
  formatContentResponse,
};
