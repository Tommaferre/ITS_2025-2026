# Important JavaScript Array Methods: slice() vs splice()

Here’s a quick rundown of two JavaScript array methods that often get mixed up: **slice()** and **splice()**. This file covers what they do, how they work, and when to use each one.

---

## What They Do

- **slice()**
  - **Purpose:** Extracts a part of an array and returns a new array.
  - **Key Point:** It **does not change** the original array.
  - **Parameters:** `slice(start, end)` where `start` is inclusive and `end` is exclusive. If `end` is omitted, it goes to the end of the array.
  - **Cool Trick:** You can use negative numbers to count from the end.

- **splice()**
  - **Purpose:** Changes the original array by removing, adding, or replacing elements.
  - **Key Point:** It **modifies** the original array.
  - **Parameters:** `splice(start, deleteCount, ...items)` where:
    - `start` is the index where changes begin.
    - `deleteCount` tells how many elements to remove.
    - `...items` are the new elements to add (if any).
  - **Extra:** If you leave out `deleteCount`, it removes everything from the `start` index onward.

---

## Quick Comparison

| Feature        | slice()                                  | splice()                                  |
|----------------|------------------------------------------|-------------------------------------------|
| **Action**     | Extracts and returns a new array         | Removes/adds elements, modifying the original array |
| **Original**   | Remains unchanged                        | Gets modified                             |
| **Usage**      | Creating subarrays or cloning arrays     | Updating arrays dynamically               |

---

## Examples

### Using slice()

```javascript
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// Get a portion without changing 'fruits'
const favoriteFruits = fruits.slice(1, 4);
console.log(favoriteFruits); // ['banana', 'cherry', 'date']
console.log(fruits);         // Original array is still intact!
```

### Using splice()

```javascript
const vegetables = ['carrot', 'broccoli', 'potato', 'tomato', 'spinach'];

// Remove 2 items starting at index 2
const removed = vegetables.splice(2, 2);
console.log(removed);     // ['potato', 'tomato']
console.log(vegetables);  // Modified array: ['carrot', 'broccoli', 'spinach']

// Adding new items without removal:
const colors = ['red', 'blue', 'green'];
colors.splice(1, 0, 'yellow', 'purple');
console.log(colors); // ['red', 'yellow', 'purple', 'blue', 'green']
```

## When to Use Each

### Use `slice()` when

- You need a copy of part of an array.
- You want to work with the array without messing up the original.

### Use `splice()` when

- You want to remove, add, or replace items in the original array.
- You need to update your array in place.

