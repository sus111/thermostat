function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMPERATURE = 32;
}


Thermostat.prototype.up = function(){
  if(this.temperature === this.MAXIMUM_TEMPERATURE) {
    throw new Error('Maximum temperature reached');
  }
  this.temperature++;
}

Thermostat.prototype.down = function(){
  if(this.temperature === this.MINIMUM_TEMPERATURE) {
    throw new Error('Minimum temperature reached');
  }
  this.temperature--;
}

Thermostat.prototype.powermode = function(mode){
  if(mode === 'on'){
    this.MAXIMUM_TEMPERATURE = 25;
  } else {
    this.MAXIMUM_TEMPERATURE = 32;
  }
}
