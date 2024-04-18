const convertToCelsius = function(measure) {
  converted = (measure - 32) * 5/9;
  // rounds to one decimal place
  return Math.round(converted * 10) / 10
};

const convertToFahrenheit = function(measure) {
  converted = measure * 9/5 +32;
  // rounds to one decimal place
  return Math.round(converted * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
