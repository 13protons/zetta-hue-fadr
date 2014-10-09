var Device = require('zetta').Device;
var util = require('util');


var Light = module.exports = function(pin) {
  Device.call(this);
};
util.inherits(Light, Device);

Light.prototype.init = function(config) {
  config
    .state('off')
    .type('light')
    .name('Light')
    .color('#000000')
    .when('on', { allow: ['turn-off', 'set-color'] })
    .when('off', { allow: ['turn-on', 'set-color'] })
    .map('turn-on', this.turnOn)
    .map('turn-off', this.turnOff)
    .map('set-color', this.setColor);
    
};

Light.prototype.turnOn = function(cb) {
  self.state = 'on';
  if(this.color === '#000000'){
    self.color = '#ffffff';
  }
  cb();
};

Light.prototype.turnOff = function(cb) {
  self.state = 'off';
  cb();
};

Light.prototype.setColor = function(color, cb) {
  this.color = color;
  if (this.state === 'off') {
    this.call('turn-on', cb);
  } 
};