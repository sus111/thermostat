// 'use strict';

describe('Thermostat', function(){

  beforeEach(function(){
    thermostat = new Thermostat();
    currentTemperature = 20;
  });

  it('sets default temperatue to 20 degrees', function(){
    expect(thermostat.temperature).toEqual(currentTemperature);
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(currentTemperature);
  });

  it('increases the temperature incrementally by 1', function(){
    thermostat.turnUp();
    expect(thermostat.temperature).toEqual(currentTemperature + 1);
  });

  it('decreases the temperature decrementally by 1', function(){
    thermostat.turnDown();
    expect(thermostat.temperature).toEqual(currentTemperature - 1);
  });

  it('has a minimum temperature of 10', function(){
    thermostat.temperature = 10;
    expect(thermostat.turnDown).toThrowError('minimum temperature is 10');
    });

  it('has power saving on by default', function(){
    expect(thermostat.powerSaving).toEqual(1);
  });

  it('has a maximum temperatue of 32 by default', function(){
    expect(thermostat.maximumTemperature).toEqual(25);
  });

  it('raises an error if maximum temperature exceeded', function(){
    thermostat.temperature = 25;
    expect(thermostat.turnUp).toThrowError('maximum temperature reached');
  });

  it('turns off powersaving mode', function(){
    thermostat.togglePowerSaving();
    expect(thermostat.powerSaving).toEqual(0);
  });

  it('turns powersaving mode back on', function(){
    thermostat.powerSaving = 0;
    thermostat.togglePowerSaving();
    expect(thermostat.powerSaving).toEqual(1);
  });

  it('resets the temperature to 20', function(){
    thermostat.temperature = 10;
    thermostat.resetTemperature();
    expect(thermostat.temperature).toEqual(20);
});

});
