function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.MIN_TEMPERATURE = 10;
  this.MAX_TEMPERATURE_POWERSAVERON = 25;
  this.MAX_TEMPERATURE_POWERSAVEROFF = 32;
  this.MAX_TEMPERATURE = this.MAX_TEMPERATURE_POWERSAVERON
  this.YELLOW_ENERGY_MIN = 18;
  this.powersaving = true;
}

Thermostat.prototype.currentTemperature = function() {
  return this.temperature
}

Thermostat.prototype.up = function(){
  if(this.temperature === this.MAX_TEMPERATURE) {
    throw new Error('Maximum temperature reached');
  }
  this.temperature++;
}

Thermostat.prototype.down = function(){
  if(this.temperature === this.MIN_TEMPERATURE) {
    throw new Error('Minimum temperature reached');
  }
  this.temperature--;
}

Thermostat.prototype.powerSavingOff = function(){
    this.MAX_TEMPERATURE = this.MAX_TEMPERATURE_POWERSAVEROFF;
    this.powersaving = false
}

Thermostat.prototype.powerSavingOn = function(){
    this.MAX_TEMPERATURE = this.MAX_TEMPERATURE_POWERSAVERON;
    this.powersaving = true
}

Thermostat.prototype.reset = function(){
  this.temperature = this.DEFAULT_TEMPERATURE
}

Thermostat.prototype.energyUsage = function(){
  if(this.temperature < this.YELLOW_ENERGY_MIN) {
    return this.colour = 'green';
  }
  if(this.temperature >= this.YELLOW_ENERGY_MIN && this.temperature <= this.MAX_TEMPERATURE_POWERSAVERON) {
    return this.colour = 'yellow';
  }
    return this.colour = "red";
}
