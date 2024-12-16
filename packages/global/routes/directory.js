const { get } = require('@mindful-web/object-path');
const { withWebsiteSection } = require('@mindful-web/marko-web/middleware');
const MarkoWebSearchConfig = require('@mindful-web/marko-web-search/config');
const MarkoWebSearch = require('@mindful-web/marko-web-search');
const queryFragment = require('../graphql/fragments/website-directory-section-page');
const directory = require('../templates/directory/index');

module.exports = (
  app,
  {
    rootAlias = 'directory',
    contentTypes = ['Company', 'Product'],
    assignedToWebsiteSectionIds = [],
    template = directory,
  },
) => {
  const config = new MarkoWebSearchConfig({
    resultsPerPage: { default: 18 },
    contentTypes,
    assignedToWebsiteSectionIds,
    defaultSortField: 'NAME',
    rootAlias,
  });

  const searchMiddleware = (req, res, next) => {
    res.locals.$markoWebSearch = new MarkoWebSearch({
      config,
      query: {
        ...req.query,
      },
    });
    if (!get(req, 'query.searchQuery') && get(req, 'query.sortField') === 'SCORE') {
      const params = new URLSearchParams(get(req, 'query'));
      params.delete('sortField');
      params.delete('searchQuery');
      if (`${params}`) res.redirect(301, `/${get(req, 'params.alias')}?${params}`);
      else res.redirect(301, `/${get(req, 'params.alias')}`);
    }
    next();
  };

  app.get(`/:alias(${rootAlias})`, searchMiddleware, withWebsiteSection({
    template,
    queryFragment,
  }));
  app.get(`/:alias(${rootAlias}/[a-z0-9-/]+)`, searchMiddleware, withWebsiteSection({
    template,
    queryFragment,
  }));
};
