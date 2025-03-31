/*
  parameters {string} = str1,str2
  return {string}
  this function swap the first 2 characters of each string passed by parameters
*/

function mixUp(str1, str2) {
    if (str1.length < 2 || str2.length < 2) return "Strings must be at least 2 characters long";

    let swapped1 = str2.slice(0, 2) + str1.slice(2);
    let swapped2 = str1.slice(0, 2) + str2.slice(2);

    return `${swapped1} ${swapped2}`;
}

// Example usage:
console.log(mixUp('mix', 'pod'));      // Output: "pox mid"
console.log(mixUp('dog', 'dinner'));   // Output: "dig donner"
console.log(mixUp('hello', 'world'));  // Output: "wollo herld"
