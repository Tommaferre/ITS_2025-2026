/*
    * @param {number|string} param1
    * @param {number|string} param2
    * @return {number|string|null}
    * If both parameters are numbers, return the sum of the two numbers.
    * If both parameters are strings, return the concatenation of the two strings.
    * If the parameters are different types, return null.
*/


function merger(param1, param2) {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2;
    } else if (typeof param1 === 'string' && typeof param2 === 'string') {
        return param1 + param2;
    } else {
        return null;
    }
}

console.log(merger(5, 10)); // Output: 15
console.log(merger("Hello, ", "World!")); // Output: "Hello, World!"
console.log(merger(5, "10")); // Output: null
console.log(merger(true, false)); // Output: null
