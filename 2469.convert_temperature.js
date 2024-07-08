function convertTemperature(celsius) {
  const kelvin = celsius + 273.15;
  const fahrenheit = celsius * 1.8 + 32.0;
  return [kelvin.toFixed(5), fahrenheit.toFixed(5)];
}

// Example usage:
console.log(convertTemperature(36.5)); // Output: [ '309.65000', '97.70000' ]
console.log(convertTemperature(122.11)); // Output: [ '395.26000', '251.79800' ]
