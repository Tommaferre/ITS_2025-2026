/*
    celcius to fahrenheit formula
    (0°C × 9/5) + 32 = 32°F
    fahrenheit to celcius formula
    (32°F − 32) × 5/9 = 0°C
    celsiusToFahrenheit function takes a celsius temperature as an argument and converts it to fahrenheit.
    fahrenheitToCelsius function takes a fahrenheit temperature as an argument and converts it to celsius.
    parameter {number} celsius: celsius temperature
    returns {number} fahrenheit
    parameter {number} fahrenheit: fahrenheit temperature
    returns {number} celsius
*/

function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius}°C is ${fahrenheit.toFixed(2)}°F`);
}

function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    console.log(`${fahrenheit}°F is ${celsius.toFixed(2)}°C`);
}
let celsiusTemp = 25;
celsiusToFahrenheit(celsiusTemp);
let fahrenheitTemp = 77;
fahrenheitToCelsius(fahrenheitTemp);