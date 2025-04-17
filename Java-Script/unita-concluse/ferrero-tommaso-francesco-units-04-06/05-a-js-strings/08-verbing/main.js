/*
 * param {string} = str 
 * returns {string} 
 * Modifies a string by adding 'ing' to the end if the string has at least 3 characters,
 * or 'ly' if it already ends with 'ing'. If the string length is less than 3, it remains unchanged.
 */
function verbing(str) {
    if (str.length < 3) return str; // If string length is less than 3, return as is

    // If the string ends with 'ing', append 'ly', otherwise append 'ing'
    return str.endsWith('ing') ? str + 'ly' : str + 'ing';
}

// Example usage:
console.log(verbing('swim'));      // Output: "swimming"
console.log(verbing('swimming'));  // Output: "swimmingly"
console.log(verbing('go'));        // Output: "go"
