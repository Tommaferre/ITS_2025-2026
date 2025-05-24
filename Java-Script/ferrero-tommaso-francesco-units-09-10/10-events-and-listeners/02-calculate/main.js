/**
 * Calculator script that performs square, half, percentage, and circle area calculations.
 * Results are displayed in the #solution div when the user presses Enter inside any input.
 */

/**
 * Squares a number.
 * @param {number} num - The number to square.
 * @returns {number} The squared value.
 */
function squareNumber(num) {
  return num * num;
}

/**
 * Halves a number.
 * @param {number} num - The number to halve.
 * @returns {number} Half of the number.
 */
function halfNumber(num) {
  return num / 2;
}

/**
 * Calculates what percentage `part` is of `whole`.
 * @param {number} part - The part value.
 * @param {number} whole - The whole value.
 * @returns {number} The percentage.
 */
function percentOf(part, whole) {
  return (part / whole) * 100;
}

/**
 * Calculates the area of a circle given its radius.
 * @param {number} radius - The circle's radius.
 * @returns {number} The area.
 */
function areaOfCircle(radius) {
  return Math.PI * radius * radius;
}

/**
 * Displays the result in the solution div.
 * @param {string} result - The text to display.
 */
function displayResult(result) {
  document.getElementById("solution").textContent = result;
}

/**
 * Sets up input event listeners for each calculator function.
 */
function setupEventListeners() {
  document.getElementById("square-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const value = parseFloat(e.target.value);
      const result = squareNumber(value);
      displayResult(`Square of ${value} is ${result}`);
    }
  });

  document.getElementById("half-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const value = parseFloat(e.target.value);
      const result = halfNumber(value);
      displayResult(`Half of ${value} is ${result}`);
    }
  });

  document.getElementById("percent-input1").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const part = parseFloat(e.target.value);
      const whole = parseFloat(document.getElementById("percent-input2").value);
      const result = percentOf(part, whole);
      displayResult(`${part} is ${result.toFixed(2)}% of ${whole}`);
    }
  });

  document.getElementById("percent-input2").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const part = parseFloat(document.getElementById("percent-input1").value);
      const whole = parseFloat(e.target.value);
      const result = percentOf(part, whole);
      displayResult(`${part} is ${result.toFixed(2)}% of ${whole}`);
    }
  });

  document.getElementById("circle-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const radius = parseFloat(e.target.value);
      const result = areaOfCircle(radius);
      displayResult(`Area of a circle with radius ${radius} is ${result.toFixed(2)}`);
    }
  });
}

// Initialize listeners after DOM is loaded
document.addEventListener("DOMContentLoaded", setupEventListeners);
