// 'use strict';

function Thermostat(){

  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.powerSavingMode = true;
  this.maximumTemperature = 25;
}

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.isMinimumTemperature = function(){
  return this.temperature === this.MINIMUM_TEMPERATURE;
};


Thermostat.prototype.turnDown = function(){
  if (this.isMinimumTemperature()) {
    return;
  }
  {
  this.temperature -= 1;
  }
};

Thermostat.prototype.isPowerSavingModeOn = function(){
  this.powerSavingMode === true;
};

Thermostat.prototype.turnUp = function(){
  if (this.temperature < this.maximumTemperature) {
    this.temperature += 1;
  }
  else {
    throw new Error('maximum temperature reached');
  }
};

Thermostat.prototype.resetTemperature = function(){
  this.temperature = 20;
};

Thermostat.prototype.turnPowerSavingModeOn = function(){
  this.powerSavingMode = true;
};

Thermostat.prototype.turnPowerSavingModeOff = function(){
  this.powerSavingMode = false;
};
