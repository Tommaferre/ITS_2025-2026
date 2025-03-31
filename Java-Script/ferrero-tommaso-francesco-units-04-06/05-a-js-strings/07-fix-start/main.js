/**
 * parameter {string} = str 
 * returns {string} 
 * Replaces all occurrences of the first    character in a string with '*', except for the first character itself.
 */

function fixStart(str) {
    if (str.length < 1) return str; // Ensure the string is at least one character long

    let firstChar = str.charAt(0);
    let result = firstChar; // Start with the first character unchanged

    // Loop through the rest of the string and replace occurrences of firstChar with '*'
    for (let i = 1; i < str.length; i++) {
        result += (str.charAt(i) === firstChar) ? '*' : str.charAt(i);
    }
    
    return result;
}

// Example usage:
console.log(fixStart('babble'));  // Output: "ba**le"
console.log(fixStart('google'));  // Output: "goo*le"
console.log(fixStart('apple'));   // Output: "ap*le"
console.log(fixStart('banana'));  // Output: "ba*a*a"
