const http = require('http');
const express = require('express');
const { asyncRoute } = require('@mindful-web/utils');
const { collection } = require('./mongodb');

const { error } = console;
const app = express();

app.get('/hello-world', express.json(), asyncRoute(async (req, res) => {
  // console.log('hitting hellow wolrd: ');
  res.send('hello world');
}));

app.post('/load-spec', express.json(), asyncRoute(async (req, res) => {
  const { id } = req.body;
  // console.log(req, req.body, 'ids: ', ids)
  if (!id) {
    return res.status(400).send({ message: 'No "id" parameter was provided.' });
  }
  const coll = await collection();
  const doc = await coll.findOne({
    _id: id,
  }, { sort: { _id: -1 } });

  if (!doc) {
    return res.status(404).send({
      message: `Unable to find a Product Specs for payload id: ${id}.`,
    });
  }
  return res.send({
    ...doc,
    // @todo Additional fields, text ad lookup/etc?
  });
}));

app.post('/load-specs', express.json(), asyncRoute(async (req, res) => {
  const { ids } = req.body;

  if (!ids || !ids.length) {
    return res.status(400).send({ message: 'No "ids" parameter was provided.' });
  }

  const coll = await collection();
  const docs = await coll.find({ _id: { $in: ids } });
  const specs = await docs.toArray();
  return res.send({ specs });
}));

app.use((req, res) => {
  res.status(404);
  res.send();
});

app.use((err, req, res) => {
  error(err.stack);
  res.status(err.statusCode || 500).send({
    message: err.message,
  });
});

module.exports = http.createServer(app);
