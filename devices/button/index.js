var Device = require('zetta').Device;
var util = require('util');


var Button = module.exports = function(name) {
  Device.call(this);
  this.name = name || 'Button';
};
util.inherits(Button, Device);

Light.prototype.init = function(config) {
  config
    .state('ready')
    .type('button')
    .when('ready', { allow: ['click'] })
    .map('click', this.Click);
    
};

Light.prototype.Click = function(cb) {
  cb();
};
