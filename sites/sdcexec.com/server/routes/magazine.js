const { withMagazineIssue, withMagazinePublication } = require('@mindful-web/marko-web/middleware');
const index = require('@ac-business-media/refresh-theme/templates/magazine');
const publication = require('@ac-business-media/refresh-theme/templates/magazine/publication');
const publicationFragment = require('@ac-business-media/refresh-theme/graphql/fragments/magazine-publication-page');
const issue = require('@ac-business-media/refresh-theme/templates/magazine/issue');
const issueFragment = require('@ac-business-media/refresh-theme/graphql/fragments/magazine-issue-page');

module.exports = (app) => {
  app.get('/magazine', (req, res) => {
    res.marko(index);
  });

  app.get('/magazine/:id([a-fA-F0-9]{24})', withMagazinePublication({
    template: publication,
    queryFragment: publicationFragment,
  }));

  app.get('/magazine/:id(\\d+)', withMagazineIssue({
    template: issue,
    queryFragment: issueFragment,
  }));
};
