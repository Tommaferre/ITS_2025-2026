/**
 * myForEach - Executes a function on each element of the array using reduce.
 * @param {Array} arr - The array to loop over
 * @param {Function} callback - The function to execute on each element
 */
function myForEach(arr, callback) {
  arr.reduce((_, current, index) => {
    callback(current, index, arr);
  }, null);
}

/**
 * myMap - Creates a new array with results of calling a function on every element.
 * @param {Array} arr - The array to map
 * @param {Function} callback - Function that returns the mapped value
 * @returns {Array} - New array with mapped values
 */
function myMap(arr, callback) {
  return arr.reduce((acc, current, index) => {
    acc.push(callback(current, index, arr));
    return acc;
  }, []);
}

/**
 * myFilter - Creates a new array with elements that pass the test function.
 * @param {Array} arr - The array to filter
 * @param {Function} callback - Function that returns true to keep the element
 * @returns {Array} - New array with filtered values
 */
function myFilter(arr, callback) {
  return arr.reduce((acc, current, index) => {
    if (callback(current, index, arr)) {
      acc.push(current);
    }
    return acc;
  }, []);
}

/**
 * myIndexOf - Returns the first index where the element is found, or -1 if not found.
 * @param {Array} arr - The array to search
 * @param {*} searchElement - The element to find
 * @param {number} [fromIndex=0] - The index to start the search
 * @returns {number} - The index of the element, or -1
 */
function myIndexOf(arr, searchElement, fromIndex = 0) {
  let foundIndex = -1;
  arr.reduce((_, current, index) => {
    if (index >= fromIndex && current === searchElement && foundIndex === -1) {
      foundIndex = index;
    }
  }, null);
  return foundIndex;
}

/**
 * mySlice - Returns a shallow copy of a portion of an array.
 * @param {Array} arr - The array to slice
 * @param {number} [start=0] - Start index
 * @param {number} [end=arr.length] - End index (not included)
 * @returns {Array} - New sliced array
 */
function mySlice(arr, start = 0, end = arr.length) {
  if (start < 0) start = arr.length + start;
  if (end < 0) end = arr.length + end;
  return arr.reduce((acc, current, index) => {
    if (index >= start && index < end) {
      acc.push(current);
    }
    return acc;
  }, []);
}

// ============ TESTING ============

// Arrays used for testing
let testGroup = [
  [1, 2, 3, 4, 5],
  [0, 0, 3, 4, 5],
  [7, 0, 9, 74, 85, 1, 42, 3, 88]
];

// Test function for map and filter
let testFunc = num => num * 2;
let testFilter = num => num > 10;

// ===== forEach =====
console.log('==== Testing Array.forEach() ====');
testGroup.forEach(arr => arr.forEach(val => console.log(val)));
console.log('\n==== Testing myForEach() ====');
testGroup.forEach(arr => myForEach(arr, val => console.log(val)));

// ===== map =====
console.log('\n==== Testing Array.map() ====');
testGroup.forEach(arr => console.log(arr.map(testFunc)));
console.log('\n==== Testing myMap() ====');
testGroup.forEach(arr => console.log(myMap(arr, testFunc)));

// ===== filter =====
console.log('\n==== Testing Array.filter() ====');
testGroup.forEach(arr => console.log(arr.filter(testFilter)));
console.log('\n==== Testing myFilter() ====');
testGroup.forEach(arr => console.log(myFilter(arr, testFilter)));

// ===== indexOf =====
console.log('\n==== Testing Array.indexOf() ====');
console.log([1, 2, 3, 4, 2].indexOf(2));
console.log('\n==== Testing myIndexOf() ====');
console.log(myIndexOf([1, 2, 3, 4, 2], 2));

// ===== slice =====
console.log('\n==== Testing Array.slice() ====');
console.log([1, 2, 3, 4, 5].slice(1, 4));
console.log('\n==== Testing mySlice() ====');
console.log(mySlice([1, 2, 3, 4, 5], 1, 4));