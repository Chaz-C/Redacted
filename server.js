const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const filter = require('./filterMod');

app.use(bodyParser.urlencoded({ extended: true}));

app.use('/', (req,res, next) => {
  filter(req, res);
  next();
});

app.post('/message', (req,res) => {
  console.log('in post');
  res.end();
});

module.exports = app;