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
});
