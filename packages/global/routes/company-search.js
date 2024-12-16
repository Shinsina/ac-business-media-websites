const loader = require('@mindful-web/marko-web-search/loaders/search');
const jsonErrorHandler = require('@mindful-web/marko-web/express/json-error-handler');
const { asyncRoute } = require('@mindful-web/utils');

const queryFragment = require('../graphql/fragments/company-search');

module.exports = (app) => {
  app.get('/__company-search', asyncRoute(async (req, res) => {
    const { searchQuery } = req.query;
    const { apollo, $baseBrowse } = res.locals;

    const response = await loader(
      {
        apolloBaseCMS: apollo,
        apolloBaseBrowse: $baseBrowse,
      },
      {
        status: 1,
        contentTypes: ['COMPANY'],
        searchQuery,
        queryFragment,
      },
    );
    res.json(response);
  }), jsonErrorHandler());
};
