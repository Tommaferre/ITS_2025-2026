# SOUND WAVE

## Author

Tommaso Ferrero SWD

## Text of the exercise

Given the following array:

```js
let noisesArray = ['quack', 'sneeze', 'boom'];
```

Produce the following array, then print it to the console:

```js
[
  'Quack!', 'qUack!!', 'quAck!!!', 'quaCk!!!!', 'quacK!!!!!',
  'Sneeze!', 'sNeeze!!', 'snEeze!!!', 'sneEze!!!! ', 'sneeZe!!!!!', 'sneezE!!!!!!',
  'Boom!', 'bOom!!', 'boOm!!!', 'booM!!!!'
]
```

## Description of the solution of the exercise

In this exercise i've defined the original array ```['quack', 'sneeze', 'boom']```, then i've looped through each word in the array and for each letter in the word the script capitalizes that specific letter and adds a number of eclamation marks equal to the letter's positioning (starting from 1). Then it stores each version in an new array and prints the final array in th econsole.
