# SLOW LIST

## Author

Tommaso Ferrero SWD

## Test of the exercise

### Slow list

● Create an array that holds a list of 30 items (food, books, etc.)  
● Print one item of the list every second until the list is completely printed  

- Use setInterval to achieve this goal
- Do the same thing using setTimeout

## Description of the solution of the exercise

In this exercise, i've used two different methods to achive the same result of printing one array item per second, but they use foundamentally different mechanisms.
The setInterval approach (with the function printWithSetInterval()) creates a persistent timer that repeatedly executes the function every 1000ms (1 second), with a counter, it prints the array items and if all the items have been printed triggers the second function to demonstrate the setTimeout approach. setInterval approach works without an explicit loop because it implicitly creates a timed loop to call repeatedly the function itself at fixed intervals. Important to know is that the index variable maintains state between function calls.  
The setTimeout approach (with the function printWithSetTimeout()) uses a for loop to iterate through the array immediately and for each item schedules a separaet function call with setTimeout. It calculates different delay times for each call so the first item will be printed afrer 0ms, the second one after 1000ms, the third one after 2000ms and so on. In this approach, differently by the previous one, all timeouts are cheduled at once but they execute at different times in the future.
