const { websiteScheduledContent } = require('@mindful-web/web-common/block-loaders');
const defaultFragment = require('@mindful-web/marko-web-theme-monorail/graphql/fragments/section-feed-block');
const shuffle = require('@ac-business-media/package-global/utils/shuffle-array');

const loadCompanies = async (apolloClient, params = {}) => {
  const defaults = {
    limit: 100,
    includeContentTypes: ['Company'],
    excludeContentIds: [10073526],
    includeLabels: ['Titanium'],
    queryFragment: defaultFragment,
  };

  return websiteScheduledContent(apolloClient, {
    ...defaults,
    ...params,
  });
};

const loadStandardContent = async (apolloClient, params = {}) => {
  const defaults = {
    limit: 12,
    includeContentTypes: ['Product'],
    queryFragment: defaultFragment,
  };

  return websiteScheduledContent(apolloClient, {
    ...defaults,
    ...params,
  });
};

module.exports = async (apolloClient, {
  sectionId,
} = {}) => {
  const companies = await loadCompanies(apolloClient, {
    ...(sectionId && { sectionId }),
  });

  const companyIds = shuffle(companies.nodes.map((node) => node.id));
  const cIds = companyIds.length > 5 ? companyIds.slice(0, 5) : shuffle(companyIds);
  const productNodes = [];
  if (cIds && cIds.length !== 0) {
    const productLimit = Math.ceil(25 / cIds.length);

    await Promise.all(cIds.map(async (id) => {
      const content = await loadStandardContent(apolloClient, {
        ...(sectionId && { sectionId }),
        company: id,
        limit: productLimit,
      });

      productNodes.push(...content.nodes);
    }));
  }
  return {
    products: {
      nodes: shuffle(productNodes),
    },
  };
};
