'use strict';

const express = require('express');

// the router
const router = express.Router();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const app = express();
// default path
app.get('/', (req, res) => {
  const srcipAddress = req.socket.remoteAddress;
  const dstipAddress = req.socket.localAddress;
  res.send(`<p>Date: ${new Date()}</p><p>Source Address:  <b>${srcipAddress}</b></p><p>Destination Address:  <b>${dstipAddress}</b></p><p>append <b>/header</b> if you want to see request headers</p>`);
});
// header path
app.get('/header', function (req, res) {
 res.json(req.headers);
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});