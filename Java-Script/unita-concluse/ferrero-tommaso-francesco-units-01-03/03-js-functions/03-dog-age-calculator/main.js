/*
    Function to calculate a dog's age in dog years based on the human age and a conversion rate.
    The default conversion rate is 7 dog years per human year.
    You can also specify a custom conversion rate.
    param {number} humanAge - The age of the dog in human years.
    param {number} [conversionRate=7] - The conversion rate of human years to dog years.
    const {number} dogAge - The age of the dog in dog years.
*/



function calculateDogAge(humanAge, conversionRate = 7) {
    const dogAge = humanAge * conversionRate;

    console.log(`Your dog is ${dogAge} years old in dog years!`);
}

calculateDogAge(1);  // 1 human year, default conversion rate (7 dog years)
calculateDogAge(3);  // 3 human years, default conversion rate (7 dog years)
calculateDogAge(5, 6);  // 5 human years, with a conversion rate of 6 dog years per human year
