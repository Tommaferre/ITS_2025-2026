
//const {string} = originalString

const originalString = "Abracadabra";

/*
return {string}
Using slice method with string concatenation
*/
function changeLetterUsingSlice(str) {
    // slice(0, 3) gets characters from index 0 up to but not including index 3
    // slice(4) gets all characters from index 4 to the end
    return str.slice(0, 3) + 'X' + str.slice(4);
}

//put the result of the called function in result
const result = changeLetterUsingSlice(originalString);
console.log(result); // Output: "AbrXcadabra"