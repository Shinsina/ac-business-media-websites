const withNativeXStory = require('@mindful-web/marko-web-native-x/middleware/with-story');
const { getAsObject } = require('@mindful-web/object-path');
const queryFragment = require('@mindful-web/marko-web-theme-monorail/graphql/fragments/native-x-story');
const template = require('../templates/content/native-x-story');

module.exports = (app) => {
  const config = getAsObject(app, 'locals.nativeX');
  app.get('/premium-content/:section/:slug/:id', withNativeXStory({ config, template, queryFragment }));
};
