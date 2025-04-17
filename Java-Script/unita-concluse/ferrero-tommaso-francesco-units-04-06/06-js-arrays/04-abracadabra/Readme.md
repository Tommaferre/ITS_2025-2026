# ABRACADABRA

## Author

Tommaso Ferrero SWD

## Test of the exercise

### Abracadabra

● Code 3 different solutions to change the 4th letter in the following string "Abracadabra" into an "X"  
● Each solution should be in a separate folder.  
○ Name them solution-1, solution-2, etc.  
● Also include a doc file in which you explain what 3 ways you used  

## Description of the solutions of the exercise

This document explains three different techniques for modifying a specific character in a JavaScript string. Specifically, in this exercise i've changed the 4th letter of the string "Abracadabra" into an "X".  

### IMPORTANT THINGS TO KNOW BEFORE ALL

Two things about JavaScript strings that are very important:  

- String in JavaScript are based on a zero-based indexing so the first character of a string is at position 0 not 1.
- String in JavaScript are immutable, which means that they cannot be modified after creation! When we "modify" a string we are actually creating a new string with the modification that we made.

### SOLUTION 1

I've used the substring() method to extract 2 portions of the string (creating two new strings), then i concatenated this part to form a new string with an 'X' beetween them.

### SOLUTION 2

For this solution i've used JavaScript arrays, which, unlike strings, are mutable. So i converted the string in an array of characters using the method split(''). Then i modified the specific array element at index 3, after that i reconverted the array in a string back using the method join(''). This method to modify strings it's particularly useful when you need to make multiple changes to different positions in a string because you can interact directly on the single character easily.

### SOLUTION 3

I've used the slice() string method for this solution. It's similar to the first one (the substring() method), in other cases they work different but in this purpose they work nearly identically. So there is a function that extract characters from the beginning of the string up to index 3 not included, adds the 'X' and at the end it appends the remaining characters starting from index 4.  
This slice() methods usually is preferred over substring() because it handles negative indices allowing to count from the end of the string.
