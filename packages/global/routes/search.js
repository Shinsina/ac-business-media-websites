const { get, getAsObject } = require('@mindful-web/object-path');
const MarkoWebSearchConfig = require('@mindful-web/marko-web-search/config');
const middleware = require('@mindful-web/marko-web-search/middleware');
const template = require('../templates/search');

module.exports = (app, siteConfig) => {
  const {
    contentTypes = ['Article', 'Blog', 'Company', 'Podcast', 'Product', 'Video', 'Whitepaper'],
    assignedToWebsiteSectionIds,
  } = getAsObject(siteConfig, 'search');
  const config = new MarkoWebSearchConfig({
    resultsPerPage: { default: 18 },
    contentTypes,
    assignedToWebsiteSectionIds,
    defaultSortField: 'SCORE',
  });
  app.get('/search', (req, res, next) => {
    if (!get(req, 'query.searchQuery') && get(req, 'query.sortField')) {
      const params = new URLSearchParams(get(req, 'query'));
      params.delete('sortField');
      params.delete('searchQuery');
      if (`${params}`) res.redirect(301, `${get(req, 'route.path')}?${params}`);
      else res.redirect(301, '/search');
    }
    next();
  }, middleware({ config, template }));
};
