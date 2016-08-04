function Thermostat(){
  this.DEFAULT_TEMP = 20;
  this.DEFAULT_MINIMUM = 10;
  this.LOWER_MAX_TEMP = 25;
  this.DEFAULT_MAXIMUM = this.LOWER_MAX_TEMP;
  this.HIGHER_MAX_TEMP = 32;
  this.powerSavingMode = true;
  this.temperature = this.DEFAULT_TEMP;
}

Thermostat.prototype.up = function() {
  if(this.temperature === this.DEFAULT_MAXIMUM){
    throw new Error('max temp reached');
  }
  this.temperature += 1;
};
Thermostat.prototype.down = function() {
  if(this.temperature === this.DEFAULT_MINIMUM){
    throw new Error('too cold!');
  }
  this.temperature -= 1;
};
Thermostat.prototype.powerSavingModeOff = function() {
  this.powerSavingMode = false;
  this.DEFAULT_MAXIMUM = this.HIGHER_MAX_TEMP;
};
Thermostat.prototype.powerSavingModeOn = function() {
  this.powerSavingMode = true;
  this.DEFAULT_MAXIMUM = this.LOWER_MAX_TEMP;
};
Thermostat.prototype.reset = function() {
  this.temperature = this.DEFAULT_TEMP;
};
Thermostat.prototype.energyUsage = function(){
  if(this.temperature >= 18 && this.temperature <= 25 ){
    return 'medium usage';
  }
  if (this.temperature < 18 ) {
    return 'low usage';
  }
  return 'high usage';
};
