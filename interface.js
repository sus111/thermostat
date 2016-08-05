$(document).ready(function(){
  var thermostat = new Thermostat();
    
   function updateTemperature() {
    $('#temperature').text(thermostat.temperature + "°C");
    $('#body').attr('class', thermostat.energyUsage());
  }    
    
  updateTemperature();

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    displayWeather(city);
  });

  displayWeather('London');

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=044e356b671b8e64178e84aad3771111';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
    $('#current-temperature').text(Math.round(data.main.temp) + "°C");
    });
  }

 

  $('#temp-up').on('click', function(){
    thermostat.up();
    updateTemperature();
  });

  $('#temp-down').on('click', function(){
    thermostat.down();
    updateTemperature();
  });

  $('#temp-reset').click(function(){
    thermostat.reset();
    updateTemperature();
  });

  $('#powersaving-on').click(function(){
    thermostat.powerSavingModeOn();
    $('#powersaving-status').text('on');
    updateTemperature();
  });

  $('#powersaving-off').click(function(){
    thermostat.powerSavingModeOff();
    $('#powersaving-status').text('off');
    updateTemperature();
  });
    
    
});
