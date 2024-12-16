const { get } = require('@mindful-web/object-path');
const htmlSitemap = require('@mindful-web/marko-web-html-sitemap/routes');
const renderBlock = require('@mindful-web/marko-web-theme-monorail/routes/render-block');
const magazine = require('@mindful-web/marko-web-theme-monorail-magazine/routes');
const issueFragment = require('@mindful-web/marko-web-theme-monorail-magazine/graphql/fragments/magazine-issue-page');
const taxonomy = require('@mindful-web/marko-web-theme-monorail/routes/taxonomy');
const omedaNewsletters = require('@mindful-web/marko-web-omeda/routes/omeda-newsletters');
const mindfulPreview = require('@mindful-web/marko-web-theme-monorail/routes/ad-preview');

const companySearchHandler = require('./company-search');
const rss = require('./rss');
const printContent = require('./print-content');
const publicFiles = require('./public-files');
const redirects = require('./redirects');
const recommended = require('./recommended');
const search = require('./search');
const staticPage = require('./static-page');
const subscribe = require('./subscribe');

const magazineIndex = require('../templates/magazine/index');
const magazineIssue = require('../templates/magazine/issue');

module.exports = (app, siteConfig) => {
  // Handle spec-guide sheet request on /__company-search?searchQuery=CompanyName
  companySearchHandler(app);

  // Magazine
  magazine(app, { index: magazineIndex, issue: magazineIssue }, { issueFragment });

  // rss
  rss(app);

  // recommended
  recommended(app);

  // Omeda newsletter signup
  omedaNewsletters(app);

  // Shared Print Content
  printContent(app);

  // Shared Public Files (e.g. ads.txt)
  publicFiles(app);

  // Redirects
  redirects(app);

  // Remote component/block loader
  renderBlock(app);

  // Taxonomy pages (for handling redirects from old WP sites)
  taxonomy(app);

  // Search routes
  search(app, siteConfig);

  // Static pages
  staticPage(app);

  // Subscribe
  subscribe(app);

  // Mindful Preview
  const namespace = get(siteConfig, 'mindful.namespace');
  mindfulPreview(app, namespace);

  // HTML Sitemap
  htmlSitemap(app);
};
