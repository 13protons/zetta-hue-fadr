var zetta = require('zetta');
var Hue = require('zetta-hue-driver');

var app = require('./apps/app.js');

zetta()
  .use(Hue)
  .use(app)
  .listen(1337);
