# WORD GUESSER GAME

## Author

Tommaso Ferrero SWD

## Test of the exercise

### Word Guesser Game

#### Instructions

- Create two arrays:
  - One for the letters of the word (e.g., `'C', 'A', 'T'`)
  - Another for the current guessed letters (start with `'_','_','_'` and add the correct letters to it)

- Write a function called `guessLetter` that should:
  - Take one parameter, a letter.
  - Have a maximum number of guesses (e.g., `6`).
  - Check if the letter is in the word array.
  - If the letter matches, add it in the correct position of the guessed array.
  - Show the user the current guessed letters.
  - Tell the user if they guessed a correct letter.
  - Tell the user how many guesses remain.
  - Tell the user if they won or lost the game.

### Example Usage

```javascript
guessLetter('G');
guessLetter('I');
guessLetter('O');
guessLetter('A');
guessLetter('T');
```

## Description of the solution of the exercise

This exercise is like an hangman game, a word guessing game, where the player tries to guess the letters of a predefined word within a limited number of attempts.
After the choice of the word, the function guessLetter allows the user to guess a letter and updates the game state.
With some checks like if the max guesses are reached or for the win/loss conditions, output on the console the progresses of the user.
The function is called multiple times with different letter to guess the word.
