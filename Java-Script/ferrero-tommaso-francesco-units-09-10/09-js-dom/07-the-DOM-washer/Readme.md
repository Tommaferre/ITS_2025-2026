# THE DOM WASHER

## Author

Tommaso Ferrero SWD

## Test of the exercise

Create a simulation of a dishwasher system using two stacks of dishes  
 ● one stack represents dirty dishes, and the other represents clean dishes  
 ● the dirty stack has a random number of plates 10 - 15  
 ● useful functions  
 ○ washDish - moves a dish from the dirty stack to the clean stack  
 ○ drawStacks - displays the current state of both stacks in the page updating the DOM  
 ○ runSimulation - simulate washing all dirty dishes adding a random delay between steps  
 ● Use correct HTML and CSS as needed for this exercise  
 Bonus  
 1. have three stacks of dirty dishes and one clean stack
 2. the dishwasher is able to wash two dishes at a time
 
## Description of the solution of the exercise

The solution implements a dishwasher simulation system using JavaScript classes and DOM manipulation. The implementation includes:  

1. A DishwasherSystem class that manages:
   
   - Three stacks of dirty dishes and one clean stack
   - Each dirty stack initialized with 5-10 random plates
   - Visual representation of plates using DOM elements

2. Key functionalities:
   
   - washDish() : Moves two dishes simultaneously from dirty stacks to the clean stack
   - drawStacks() : Updates the DOM to display current state of all stacks
   - runSimulation() : Runs the washing process with random delays between 500ms and 1.5s