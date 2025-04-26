

// ATTENTION! For the correct execution of the code you must stay on the web page where you opened index.html until the end of the printing phase to avoid the search engine going into standby and running into errors such as the early start of the second part of the code. Problems usually occur around 60 seconds, in which case you need to reload the page and wait for everything again


/**
 * Converts Celsius temperature to Fahrenheit and prints it to the console, this function was taken from the exercise Temperature conversion from the lesson about function.
 * @param {number} celsius - The temperature in Celsius.
 */
function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    console.log(`${celsius}°C is ${fahrenheit.toFixed(2)}°F`);
}
// --- Using setInterval ---

// Current temperature starting from 0 
let currentTemp = 0;
console.log("I'm using setInterval!");
// Start a timer that runs every 1 second
const intervalId = setInterval(() => {
    celsiusToFahrenheit(currentTemp);
    currentTemp++;

    // Stop the interval when temperature exceeds 100
    if (currentTemp > 100) {
        clearInterval(intervalId);
    }
}, 1000);

// --- Using setTimeout ---

/**
 * Prints temperatures from 0 to 100 using recursive setTimeout
 * @param {number} temp - The current temperature
 */
function printTempsWithTimeout(temp) {
    if (temp > 100) {
        console.log("Finish printing, here you have all the conversion of °C in fahrenheit!");
        return; // Stop when temperature is greater than 100
    }

    celsiusToFahrenheit(temp);

    // Schedule the next temperature after 1 second
    setTimeout(() => {
        printTempsWithTimeout(temp + 1);
    }, 1000);
}

// Start after the setInterval finishes
setTimeout(() => {
    console.log("I'm using setTimeout!")
    printTempsWithTimeout(0);
}, 105000); // 105 seconds to make sure it starts after the setInterval is done