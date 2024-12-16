const { asyncRoute } = require('@mindful-web/utils');
const { json } = require('express');
const fetch = require('node-fetch');
// const specServiece = require('@ac-business-media/ironpros-product-spec');

const specServiece = process.env.IRONPROS_PRODUCT_SPECS_SERVICE_URL;

const createError = (message, code) => {
  const error = new Error(message);
  if (code) error.code = code;
  return error;
};

module.exports = (app) => {
  /**
   * Handles requests for product specs by ids
   */
  app.post('/__load-specs', json(), asyncRoute(async (req, res) => {
    try {
      const { body } = await req;
      const { ids, shouldThrow } = body;
      if (!ids) throw createError('You must provide a IDs to continue.', 400);
      const specRes = await fetch(`${specServiece}/load-specs`, {
        method: 'post',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          ids,
        }),
      });
      if (!specRes.ok && shouldThrow) throw new Error(`${specRes.status}: ${specRes.statusText}`);
      const r = await specRes.json();
      res.json(r);
    } catch (error) {
      res.status(error.code || 500).json({ error: error.message });
    }
    return [];
  }));
};
