# ENHANCED CATWALK

## Author

Tommaso Ferrero SWD

## Test of the exercise

 ● Start with the code from the previous ‘Catwalk’ exercise  
 ● Add 4 buttons at the top of the page: ‘start’, ‘faster’, ‘slower’ and ‘stop’  
 ● Add an area to display info  
 ● When the start button is clicked the cat should start moving across the screen  
 ● The cat should stop moving when the stop button is clicked  
 ● The cat moves faster when the faster button is clicked and slower when the slower button is clicked  
 ● Show the current speed on screen in the info area  
 ● Disable the start/stop/faster/slower buttons at the appropriate times  
 ○ e.g. the user shouldn't be able to click "stop" if the cat isn't currently moving  

## Description of the solution of the exercise

The solution enhances the previous cat walk exercise with speed controls and button management. The implementation includes:

1. User Interface Controls:
   
   - Four control buttons: start, stop, faster, and slower
   - Speed display area showing current movement speed
   - Dynamic button state management based on cat's status
   
2. Movement System:
   
   - Base catWalk() function for cat movement
   - Directional movement with image flipping
   - Boundary detection for screen edges
   - Speed adjustment system (5 units per change)

3. Enhanced Features:
   
   - Speed control ranging from 5 to unlimited
   - Automatic button state updates:
     - Start button disabled while walking
     - Stop/Faster/Slower buttons disabled when not walking
     - Slower button disabled at minimum speed (5)
   - Real-time speed display updates
   - Smooth direction changes at screen edges