function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMPERATURE = 25;
  this.GREEN_MAX = 18
  this.YELLOW_MAX = 25
  this.powersaving = true;
  this.colour = "yellow"

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
  if(mode === 'off'){
    this.MAXIMUM_TEMPERATURE = 32;
    this.powersaving = false
  } else {
    this.MAXIMUM_TEMPERATURE = 25;
    this.powersaving = true
  }
}

Thermostat.prototype.reset = function(){
  this.temperature = 20
}

Thermostat.prototype.displayColour = function(){
  if(this.temperature > this.GREEN_MAX && this.temperature < this.YELLOW_MAX) {
    return this.colour = 'yellow'
  }
  if(this.temperature < this.GREEN_MAX) {
    return this.colour = 'green'
  }
  if(this.temperature > this.YELLOW_MAX) {
    return this.colour = "red"
  }
}
