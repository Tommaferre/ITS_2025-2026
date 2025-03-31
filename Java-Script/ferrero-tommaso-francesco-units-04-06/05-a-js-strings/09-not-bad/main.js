/*
 *param {string} = str 
 * returns {string} 
 * Replaces the first occurrence of the substring 'not' followed by 'bad' with 'good'.
 * If 'not' and 'bad' are not in the right order or not found, it returns the original string.
 */
function notBad(str) {
    const notIndex = str.indexOf('not');
    const badIndex = str.indexOf('bad');

    // If 'not' comes before 'bad', replace the substring 'not...bad' with 'good'
    if (notIndex !== -1 && badIndex !== -1 && notIndex < badIndex) {
        return str.substring(0, notIndex) + 'good' + str.substring(badIndex + 3);
    }

    // If 'not' and 'bad' are not in the right order or not found, return the original string
    return str;
}

// Example usage:
console.log(notBad('This dinner is not that bad!'));  // Output: "This dinner is good!"
console.log(notBad('This movie is not so bad!'));    // Output: "This movie is good!"
console.log(notBad('This dinner is bad!'));          // Output: "This dinner is bad!"
