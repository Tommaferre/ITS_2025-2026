/*
const {string} = originalString
*/
const originalString = "Abracadabra";


/**
 * array {str} = charArray 
 * return {str}
 * Convert to array, modify, and join back to string
 */
function changeLetterUsingArray(str) {
    // Convert string to an array of characters, '' means that 
    // it divides every single character 
    // (example "ciao".split('')  // ➝ ['c', 'i', 'a', 'o'])
    let charArray = str.split('');
    // Modify the 4th element (index 3)
    charArray[3] = 'X';
    // Join the array back into a string, '' means that it 
    // mustn't be any character beetween one and the other 
    // element 
    return charArray.join('');
}

//put the result of the called function in result
const result = changeLetterUsingArray(originalString);
console.log(result); // Output: "AbrXcadabra"