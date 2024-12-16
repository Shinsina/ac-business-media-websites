const objectPath = require('@mindful-web/object-path');

const { getAsArray } = objectPath;

const get = (o, path) => {
  const v = objectPath.get(o, path);
  return v == null ? undefined : v;
};

const getAuthor = (node) => {
  const authors = getAsArray(node, 'authors.edges').map((e) => get(e, 'node.name'));
  return authors.length ? { '@type': 'Person', name: authors.join(', ') } : undefined;
};

const getImages = (node) => {
  const images = getAsArray(node, 'images.edges').map((e) => get(e, 'node.src'));
  return images.length ? images : undefined;
};

const getCreators = (node) => getAsArray(node, 'authors.edges').map((e) => get(e, 'node.name'));

const getKeywords = (node) => getAsArray(node, 'taxonomy.edges').map((e) => get(e, 'node.name'));

const getPublishedISOString = (node) => {
  const { published } = node;
  return published ? (new Date(published)).toISOString() : undefined;
};

module.exports = (node) => {
  const publishedISOString = node.published ? (new Date(node.published)).toISOString() : undefined;
  const updatedISOString = node.updated ? (new Date(node.updated)).toISOString() : undefined;
  const siteUrl = get(node, 'siteContext.url');
  const canonicalUrl = get(node, 'siteContext.canonicalUrl');

  const defaultStruturedData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': get(node, 'siteContext.canonicalUrl'),
    },
    headline: get(node, 'metadata.title'),
    name: get(node, 'metadata.title'),
    ...(get(node, 'metadata.description') && { description: get(node, 'metadata.description') }),
    ...(get(node, 'metadata.image.src') && { thumbnailUrl: get(node, 'metadata.image.src') }),
    ...(getImages(node) && { image: getImages(node) }),
    datePublished: publishedISOString,
    dateModified: updatedISOString,
    articleSection: get(node, 'primarySection.name'),
    url: canonicalUrl,
    ...(siteUrl !== canonicalUrl && { url: siteUrl, isBasedOn: canonicalUrl }),
    ...(getAuthor(node) && { author: getAuthor(node) }),
    ...(getCreators(node).length && { creator: getCreators(node) }),
    ...(getKeywords(node).length && { keywords: getKeywords(node) }),
  };

  if (node.type === 'video') {
    const structuredData = JSON.stringify({
      ...defaultStruturedData,
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      uploadDate: getPublishedISOString(node),
      embedUrl: get(node, 'embedSrc'),
    });
    return structuredData;
  }

  const structuredData = JSON.stringify({
    ...defaultStruturedData,
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    image: getImages(node),
  });
  return structuredData;
};
