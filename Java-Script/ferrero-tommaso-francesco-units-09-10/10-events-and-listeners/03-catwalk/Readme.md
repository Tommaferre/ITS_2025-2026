# CATWALK

## Author

Tommaso Ferrero SWD

## Test of the exercise

Start with the following HTML:

```html
 <!DOCTYPE html>
 <html>
 <head>
 <meta charset="utf-8" />
 <title>Cat Walk</title>
 </head>
 <body>
 <img style="position:absolute;" src="http://www.anniemation.com/clip_art/images/cat-walk.gif">
 </body>
 </html>
```
● The cat should start from the left side of the screen  
 ● Write a function ‘catWalk()’ that moves the cat 10 pixels to the right  
 ● Make the cat move across the screen by calling that function every 50ms  
 ● Write different versions of the function to handle the following variants:  
 ○ Variant 1: When the cat reaches the right side of the screen it should restart from the left  
 ○ Variant 2: When the cat reaches the right side of the screen, it should move backwards.  
When it reaches the left it should move forwards
 ○ Variant 3: When the cat reaches the middle of the screen, replace the img with a different cat image. Keep it in the middle for 10 seconds, and then replace the img with the original image and have it continue the walk as in variant 2  

## Description of the solution of the exercise

The solution implements a cat animation system with three different movement variants using JavaScript. The implementation includes:

1. Core Animation System:
   
   - Global state management for cat position, direction, and animation status
   - Base catWalk() function moving the cat 10 pixels right
   - Screen width calculation accounting for cat image size
   - Reset functionality to restore initial state
   
2. Movement Variants:
   
   - Variant 1 ( catWalkVariant1 ):
     - Cat moves right and restarts from left when reaching screen edge
   - Variant 2 ( catWalkVariant2 ):
     - Cat bounces between screen edges
     - Flips cat image horizontally based on direction
   - Variant 3 ( catWalkVariant3 ):
     - Combines bouncing movement with middle pause
     - Changes cat image for 10 seconds when reaching screen center
     - Resumes bouncing movement after pause