describe('Thermostat', function(){
  var thermostat;

    beforeEach(function(){
      thermostat = new Thermostat();
    });

  it('has a default value of 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('can increase the temperature with the up button', function(){
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it('can decrease the temp with the down button', function(){
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it('has a minimum temp of 10 degrees', function(){
    expect(thermostat.DEFAULT_MINIMUM).toEqual(10);
    for(i = 0; i < 10; i++) {thermostat.down();}
    expect(function(){thermostat.down();}).toThrowError('too cold!');
  });

  it('power saving mode is on by default', function(){
    expect(thermostat.powerSavingMode).toBeTruthy();
  });

  it('has a power saving mode temp limit', function(){
    thermostat.powerSavingModeOff();
    thermostat.powerSavingModeOn();
    expect(thermostat.DEFAULT_MAXIMUM).toEqual(25);
    for(i = 0; i < 5; i++) {thermostat.up();}
    expect(function(){thermostat.up();}).toThrowError('max temp reached');
  });

  it('has a higher max temp when power saving mode is off', function(){
    thermostat.powerSavingModeOff();
    expect(thermostat.HIGHER_MAX_TEMP).toEqual(32);
    for(i = 0; i < 12; i++) {thermostat.up();}
    expect(function(){thermostat.up();}).toThrowError('max temp reached');
  });

  it('can be reset to the default temperature', function() {
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  describe ('changes colour depending on temperature', function(){
    it('when temp is between 18-25', function(){
      expect(thermostat.energyUsage()).toEqual('medium usage');
    });
    it('when temp is less than 18', function(){
      for(i = 0; i < 5; i++) {thermostat.down();}
      expect(thermostat.energyUsage()).toEqual('low usage');
    });
    it('when temp is more than 25', function(){
      thermostat.powerSavingModeOff();
      for(i = 0; i < 6; i++) {thermostat.up();}
      expect(thermostat.energyUsage()).toEqual('high usage');
    });
  });
});
