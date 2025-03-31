/*
  parameter {string} = str
  return {string}+{string}
  this function change the first letter of the words in input to upper case
*/



function capital(str) {
    if (!str) return str; // Handle empty string case
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Example usage:
console.log(capital("hello world")); // Output: "Hello world"
