/**
 * 
 * parameters {string} = str1, str2 
 * returns {boolean} Checks if the first string contains the second string.
 */

function aContainsb(str1, str2) {
    return str1.includes(str2);
}

// Example usage:
console.log(aContainsb("Another hello world", "hell")); // Output: true
console.log(aContainsb("Another hello world", "goodbye")); // Output: false
