const { websiteScheduledContent } = require('@mindful-web/web-common/block-loaders');
const defaultFragment = require('../graphql/fragments/home-page-top-stories');

const loadTopStoryContent = async (apolloClient, params = {}) => {
  const defaults = {
    limit: 1,
    sectionAlias: 'home', // 'home/top-story',
    requiresImage: true,
    queryFragment: defaultFragment,
  };

  return websiteScheduledContent(apolloClient, {
    ...defaults,
    ...params,
  });
};

const loadFeaturedContent = async (apolloClient, params = {}) => {
  const defaults = {
    limit: 8,
    sectionAlias: 'home', // 'latest-news',
    queryFragment: defaultFragment,
  };
  return websiteScheduledContent(apolloClient, {
    ...defaults,
    ...params,
  });
};

module.exports = async (apolloClient, {
  topStoryParams,
  featuredParams,
} = {}) => {
  let topStory = await loadTopStoryContent(apolloClient);
  let topStoryIds = topStory.nodes.map((node) => node.id);
  // If no content is found for home/top-story repull for
  // a single featured story with the featued alias
  if (topStoryIds.length === 0) {
    topStory = await loadFeaturedContent(apolloClient, {
      sectionAlias: 'home', // 'home/top-story',
      ...topStoryParams,
      limit: 1,
    });
    topStoryIds = topStory.nodes.map((node) => node.id);
  }

  const featured = await loadFeaturedContent(apolloClient, {
    ...featuredParams,
    excludeContentIds: topStoryIds,
  });
  const featuredIds = featured.nodes.map((node) => node.id);

  const ids = [...topStoryIds, ...featuredIds];
  return {
    topStory,
    featured,
    ids,
  };
};
