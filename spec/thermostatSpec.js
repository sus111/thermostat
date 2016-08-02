describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });


  it('has default temperature 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });
  it('increases temperature with up button', function(){
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });
  it('decreases temperature with up button', function(){
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });
  it('has a minimum temperature of 10 degrees', function(){
    for(i = 0; i < 10; i++) {
      thermostat.down();
    }
    expect(function(){ thermostat.down(); }).toThrowError('Minimum temperature reached')
  })

  describe ('Power saving mode', function(){

    it('power saving mode is on by default', function() {
      expect(thermostat.powersaving).toBeTruthy
      expect(thermostat.MAXIMUM_TEMPERATURE).toEqual(25);
    })

    it('If power saving mode is on, the maximum temperature is 25 degrees',function(){
      thermostat.powermode('on');
      for(i = 0; i < 5; i++) {
        thermostat.up();
        }
      expect(function(){ thermostat.up(); }).toThrowError('Maximum temperature reached')
    });

    it('If power saving mode is off, the maximum temperature is 32 degrees',function(){
      thermostat.powermode('off');
      for(i = 0; i < 12; i++) {
      thermostat.up();
        }
      expect(function(){ thermostat.up(); }).toThrowError('Maximum temperature reached')
    });
  });

  describe ('reset button', function(){

    it('resets the temperature to 20 degrees', function() {
      thermostat.up()
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe ('colours the display based on energy usage', function() {
    it('shows green when temperature is below 18 degrees', function() {
      thermostat.temperature = 17
      thermostat.displayColour()
      expect(thermostat.colour).toEqual('green')
    })
    it('shows yellow when temperature is below 25 degrees', function() {
      thermostat.temperature = 24
      thermostat.displayColour()
      expect(thermostat.colour).toEqual('yellow')
    })
    it('shows green when temperature is above 25 degrees', function() {
      thermostat.temperature = 26
      thermostat.displayColour()
      expect(thermostat.colour).toEqual('red')
    })
  })
});
