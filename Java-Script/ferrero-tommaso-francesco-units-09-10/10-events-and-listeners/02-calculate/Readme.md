# CALCULATE

## Author

Tommaso Ferrero SWD

## Test of the exercise

Start with the following HTML:
```html
 <!DOCTYPE html>
 <html>
 <head>
 <meta charset="utf-8" />
 <title>Calculator</title>
 </head>
 <body>
 <label>Square this number:
 <input type="number" id="square-input" size="2">
 </label>
 <button id="square-button">Calculate</button>
  <!--other inputs here -->
 <div id="solution"></div>  
</body>
 </html>
``` 
 ● Add inputs for half number, percentage and circle area  
 ● Use the functions from the previous calculator exercises  
 ● For each operation, create an event listener for the button, and when it's clicked, find the value of the appropriate input and show the result of the calculation in the solution div  
 ● Afterwards, change the code so that you respond to key presses so that the 
user doesn't have to click the button  

## Description of the solution of the exercise

The solution implements a calculator with multiple mathematical operations using JavaScript event listeners. The implementation includes:  

1. Core Mathematical Functions:
   
   - squareNumber() : Calculates the square of a number  
   - halfNumber() : Divides a number by 2  
   - percentOf() : Calculates what percentage one number is of another  
   - areaOfCircle() : Calculates the area of a circle given its radius  

2. User Interface Management:  
   
   - displayResult() : Updates the solution div with calculation results
   - setupEventListeners() : Configures event handling for all input fields

3. Event Handling Implementation:
   
   - Listens for 'keydown' events on all input fields
   - Triggers calculations when the Enter key is pressed
   - Automatically formats results with appropriate decimal places
   - Handles multiple inputs for percentage calculations
   
4. Enhanced Features:
   
   - Input validation through parseFloat
   - Decimal number formatting for circle area and percentages
   - DOM Content Loaded event ensures proper initialization
   - Real-time calculation without requiring button clicks