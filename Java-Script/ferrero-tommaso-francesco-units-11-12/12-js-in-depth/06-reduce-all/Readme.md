# REDUCE ALL

## Author

Tommaso Ferrero SWD

---

## Text of the exercise

Make sure that you fully understand the Array reduce method  

Write functions that use the reduce method to implement your version of the following Array methods: `forEach()` , `map()`, `filter()` , `vindexOf()` , `slice()`.

For each method, implement parameters and return values as in the documentation

● do not use Array.prototype

● your functions receive as a first parameter the array on which to operate

● all other parameters should be identical to the documentation

● except for the thisArg parameter, you don't have to implement it

For example your implementation of forEach could be something like this:

```js
function myForEach(arr, ... ) {
}
```

Testing:  
● write tests that compare the output of your functions to those of the Array methods
● write several and comprehensive tests for each method
● make sure that your methods give the same output as the originals

```js
// Example of testing myMap
// group of arrays used for testing
let testGroup = [
 [ 1, 2, 3, 4, 5 ],
 [ 0, 0, 3, 4, 5 ],
 [ 7, 0, 9, 74, 85, 1, 42, 3, 88 ]
];
// test function for testing map - can be any function as long as the parameters are what map 
expects
let testFunc = function(num) {
 return num * 2;
};
// replace this with your implementation of map using reduce
function myMap(arr, ... ) {
}
console.log('==== Testing Array.map() method ====');
testGroup.forEach(function(arr) {
 console.log(arr.map(testFunc));
});
console.log('\n==== Testing the function myMap() ====');
testGroup.forEach(function(arr) {
 console.log(myMap(arr, testFunc));
});
// note that tests for forEach, indexOf, filter and slice will be different because the methods behave differently

```

---

## Description of the solution of the exercise

This project contains JavaScript implementations of common array methods using only the `reduce()` method.

All functions are named `myForEach`, `myMap`, `myFilter`, `myIndexOf`, and `mySlice`.

Each one takes an array and simulates the behavior of its standard method.

For example:

```js
myMap([1, 2, 3], x => x * 2); // [2, 4, 6]
```

All implementations are tested by comparing their results with the native JavaScript methods.

Example of test for map():

```js
const testFunc = num => num * 2;
const arr = [1, 2, 3];

console.log(arr.map(testFunc));      // [2, 4, 6]
console.log(myMap(arr, testFunc));   // [2, 4, 6]
```
