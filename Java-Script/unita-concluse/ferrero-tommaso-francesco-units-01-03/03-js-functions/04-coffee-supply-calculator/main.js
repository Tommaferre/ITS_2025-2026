/*
  calculateSupply function calculates the amount of a coffee you will need to last you until the age of 100.
  It takes in two arguments: age and amountPerDay.
    It has an optional third argument: maxAge, which defaults to 100.
    It calculates the amount of the coffee needed to last you until the maxAge.
    It prints the result to the console.
  parameter {number} age: the age of the person
  parameter {number} amountPerDay: the amount of the coffee per day
  parameter {number} maxAge: the age of the person
  const {number} yearsLeft: the years left until the maxAge
  const {number} daysLeft: the days left until the maxAge
  const {number} totalAmount: the total amount of the coffee needed
  const {number} roundedAmount: the rounded total amount of the coffee needed
  */



function calculateSupply(age, amountPerDay, maxAge = 100) {
    const yearsLeft = maxAge - age;
    const daysLeft = yearsLeft * 365;

    const totalAmount = amountPerDay * daysLeft;

    const roundedAmount = Math.round(totalAmount);

    console.log(`You will need ${roundedAmount} cups of coffee to last you until the age of ${maxAge}.`);
    console.log(`In liters, that would be approximately ${(roundedAmount * 0.25).toFixed(2)} liters of coffee.`);
}

// Call the function three times with different sets of values
calculateSupply(25, 2);  // 2 cups per day at age 25
calculateSupply(22, 1);  // 1 cup per day at age 22
calculateSupply(21, 0);  // 0 cups per day at age 21
calculateSupply(40, 0.3);  // 0.3 liters per day at age 40
calculateSupply(60, 1.5);  // 1.5 cups per day at age 60
