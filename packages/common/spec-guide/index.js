const { asyncRoute } = require('@mindful-web/utils');
const fetch = require('node-fetch');
const { SPEC_GUIDE_DOCS_API_KEY } = require('../env');

module.exports = (app) => {
  app.use('/__spec-guide', asyncRoute(async (req, res) => {
    const { src } = req.query;
    const url = `${src}?key=${SPEC_GUIDE_DOCS_API_KEY}`;
    try {
      const response = await fetch(url);
      const json = await response.json();
      res.send(json);
    } catch (error) {
      res.status(500).send(error);
    }
  }));
};
