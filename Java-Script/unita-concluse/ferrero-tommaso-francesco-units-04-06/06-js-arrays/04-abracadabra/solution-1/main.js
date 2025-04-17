/*
const {string} = originalString
*/
const originalString = "Abracadabra";

/*
const {string} = firstPart
const {string} = lastPart
return {string} = first and last part combined with X in the middle
Using substring method to split the string and recombine
*/
function changeLetterUsingSubstring(str) {
    // The substring method lets extract portions of the string
    // We extract before position 3 (0-indexed, so 4th letter is at position 3)
    const firstPart = str.substring(0, 3);
    // We extract after position 4 (the 5th character onwards)
    const lastPart = str.substring(4);
    // Combine with our new character
    return firstPart + "X" + lastPart;
}

//put the result of the called function in result
const result = changeLetterUsingSubstring(originalString);
console.log(result); // Output: "AbrXcadabra"
