const ftoc = function(fahrenheit) {
  //calculate celcius from harenheit
  let celcius = (fahrenheit - 32) * (5/9);
  //round to 1 decimal point
  celcius = Math.round(celcius * 10) /10;
  return celcius;
};

const ctof = function(celcius) {
  //calculate celcius from harenheit
  let fahrenheit = celcius * (9/5) + 32;
  //round to 1 decimal point
  fahrenheit = Math.round(fahrenheit *10)/10;
  return fahrenheit;
};




// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
