const express = require('express');
// middleware
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = require('./routes/index.js');
// this is for connecting database
require('./db/db.js');
// this is for hooking up frontend build
const path = require('path');

const server = express();

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); 
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
  next();
});

// this is for hooking up frontend build
const _dirname = path.dirname("")
const buildPath = path.join(_dirname, "../frontend/dist")

server.use(express.static(buildPath))

server.get('/*', function(req, res) {

  res.sendFile(path.join(_dirname, "../frontend/dist/index.html"),
  function(err) {
    if (err) {
      res.status(500).send(err);
    }
  })
})
////

server.use('/', router);

// Error catching
server.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });
  
  module.exports = server;