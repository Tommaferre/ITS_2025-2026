# OH NO YOU DON'T

## Author

Tommaso Ferrero SWD

## Test of the exercise

### Oh no you don’t

● Write a function “useful” that does something useful in Javascript  
● Schedule it to run after 10 seconds  
● Write another function that cancels the scheduling of the first function  
● Use the second function to cancel the first one after 5 seconds and output ‘function cancelled’ to the console  

## Description of the solution of the exercise

This project demonstrates how to schedule a function to run after a delay and cancel it before it executes, using JavaScript's setTimeout and clearTimeout methods.  
Important to remeber is that the scheduling  doesn't stop the execution of the code,  it starts a counter in the "background" and continue with the code. It also return a numeric ID that we can use like a timer to do other things in the code.  
In this exercise the function useful() doesn't print nothing on the console because it is cancelled before the ending of the timer (cancelled after 5 seconds and it should have printed after 10 seconds).
