// Store current age, max age, and daily coffee consumption
let currentAge = 21; // Change this to your actual age
let maxAge = 90; // Change this to your estimated maximum age
let coffeePerDay = 1; // Change this to how many cups you drink daily

// Calculate total coffee needed
let yearsLeft = maxAge - currentAge;
let totalCoffeeNeeded = yearsLeft * 365 * coffeePerDay;

// Output the result to the console
console.log(`You will need ${totalCoffeeNeeded} cups of coffee to last you until the ripe old age of ${maxAge}.`);
