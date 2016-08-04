// 'use strict';

function Thermostat(){

  this.temperature = 20;
  this.powerSaving = 1;
  this.maximumTemperature = 25;
}

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.turnUp = function(){
  if (this.temperature < this.maximumTemperature) {
    this.temperature += 1;
  }
  else {
    throw new Error('maximum temperature reached');
  }
};

Thermostat.prototype.turnDown = function(){
  if (this.temperature > 10) {
    this.temperature -= 1;
  }
  else {
    throw new Error('minimum temperature is 10');
  }
};

Thermostat.prototype.resetTemperature = function(){
  this.temperature = 20;
};

Thermostat.prototype.togglePowerSaving = function(){
  this.powerSaving ^= true;
};
