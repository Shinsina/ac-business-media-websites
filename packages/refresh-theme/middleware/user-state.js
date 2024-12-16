const { asyncRoute } = require('@mindful-web/utils');

const getId = (value) => {
  if (!value) return null;
  const trimmed = `${value}`.trim();
  return /^[a-z0-9]{15}$/i.test(trimmed) ? trimmed : null;
};

module.exports = () => asyncRoute(async (req, res, next) => {
  const { query, cookies } = req;

  // oly_enc_id getting of query param or if cookie is present
  const idFromQuery = getId(query.oly_enc_id);
  const idFromCookie = cookies.oly_enc_id ? getId(cookies.oly_enc_id.replace(/^"/, '').replace(/"$/, '')) : undefined;
  const olyEncId = idFromQuery || idFromCookie;

  res.locals.userState = {
    olyEncId,
  };
  next();
});
