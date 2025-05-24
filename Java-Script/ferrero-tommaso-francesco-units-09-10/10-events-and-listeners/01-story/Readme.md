# STORY

## Author

Tommaso Ferrero SWD

## Test of the exercise

Start with the following HTML:
```html
 <!DOCTYPE html>
 <html>
 <head>
 <meta charset="utf-8" />
  <title>Story</title>
 </head>
 <body>
 <h1>Story</h1>
 <ul>
 <li>Noun: <input type="text" id="noun"></li>
 <li>Adjective: <input type="text" id="adjective"></li>
 <li>Someone's Name: <input type="text" id="person"></li>
 </ul>
 <button id="gen-button">Lib it!</button>
 <div id="story"></div>
 </body>
 </html>
```
- Add an event listener to the button so that it calls a makeStory function 
when clicked.

- In the makeStory function, retrieve the current values of the form input 
elements, make a story from them, and output that in the story div (like 
"Joseph really likes pink cucumbers.")

## Description of the solution of the exercise

In this file i've used JavaScript to create a sentence/story based on the user input.  
The project allows users to enter a noun, an adjective and a person's name, after that, on button click, it combines the input into a sentence like "Joseph really likes pink cucumbers", then display it directly on the page.