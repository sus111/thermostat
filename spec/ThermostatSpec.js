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

  it('has a minimum of 10 degrees', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.turnDown();
    }
  expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('has power saving on by default', function(){
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('turns off powersaving mode', function(){
    thermostat.turnPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('turns powersaving mode back on', function(){
    thermostat.powerSaving = false;
    thermostat.turnPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  describe('when power saving mode is on', function() {
    it('has a maximum temperature of 25 degrees', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.turnUp();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  it('resets the temperature to 20', function(){
    thermostat.temperature = 10;
    thermostat.resetTemperature();
    expect(thermostat.temperature).toEqual(20);
});

// it('has a maximum temperatue of 32 by default', function(){
//   expect(thermostat.maximumTemperature).toEqual(25);
// });
//
// it('raises an error if maximum temperature exceeded', function(){
//   thermostat.temperature = 25;
//   expect(thermostat.turnUp).toThrowError('maximum temperature reached');
// });


});
