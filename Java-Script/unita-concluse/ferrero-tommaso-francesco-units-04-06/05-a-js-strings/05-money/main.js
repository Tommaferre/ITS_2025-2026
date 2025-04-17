/*
    parameter {number} = amount
    return {string}
    this function return the amount of dollar/s, if it's 1 million return the amount plus a smiley face
*/

function money(amount) {
    if (typeof amount !== "number" || amount < 0) return "Invalid amount"; // Handle edge cases
    //The ternary operator in JavaScript is a shorthand way to write an if...else statement. It allows you to make quick decisions within a single line of code. If the condition is true (truthy), expression1 is executed. Otherwise, expression2 is executed.
    let dollarText = amount === 1 ? "dollar" : "dollars"; // Singular or plural
    let smiley = amount === 1000000 ? " ;)" : ""; // Add smiley if 1 million
    
    return `${amount} ${dollarText}${smiley}`;
}

// Example usage:
console.log(money(1));        // Output: "1 dollar"
console.log(money(10));       // Output: "10 dollars"
console.log(money(1000000));  // Output: "1000000 dollars ;)"
console.log(money(-5));       // Output: "Invalid amount"
console.log(money("hello"));  // Output: "Invalid amount"
