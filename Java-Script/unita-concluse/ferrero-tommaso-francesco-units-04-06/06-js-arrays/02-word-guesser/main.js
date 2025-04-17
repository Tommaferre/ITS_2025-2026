/*
* array {string} = wordToGuess
* Array to hold the letter of the word to guess
*/
const wordToGuess =['C', 'A', 'T'];

/*
* array {string} = guessedLetter 
* Array to hold the current guessed letters
* Filled initially with _ (inizialized with let because it need to change during the guesses)
*/
let guessedLetters=['_','_','_'];

/*
* const {number} = maxGuesses
* Maximum number of guesses allowed
*/ 
const maxGuesses = 6;

/*
* {number} = currentGuesses
* Current number of guesses
*/
let currentGuesses = 0;

/*
* parameter {string} = letter
* Function to guess a letter in the word
*/
function guessLetter(letter) {
    if (currentGuesses >= maxGuesses) {
        console.log('No more guesses left. You lost!');
        return;
    } //you don't have more guesses so you doesn't find the word

    let correctGuess = false; //reverse programming (false then if you find the word change in true)
    for (let i = 0; i < wordToGuess.length; i++) {
        if (wordToGuess[i] === letter) {
            guessedLetters[i] = letter;
            correctGuess = true;
        }
    }
    //Join method add the elements of the array guessedLetters in a string so you can print it
    if (correctGuess) {
        console.log(`Correct! The current guessed letters are: ${guessedLetters.join(' ')}`);
    } else {
        console.log(`Incorrect guess. The current guessed letters are: ${guessedLetters.join(' ')}`);
    }

    currentGuesses++;//increment of the current guesses to check if there are some guesses remaining
    console.log(`You have ${maxGuesses - currentGuesses} guesses remaining.`);

    //check if in the guessedLetters array there aren't _ (that means that you find the word)
    //the method includes check if a value is in the array
    if (!guessedLetters.includes('_')) {
        console.log('Congratulations! You guessed the word!');
    }
    //no more guesses --> 
    else if (currentGuesses >= maxGuesses) {
        console.log('You lost! The word was:', wordToGuess.join(''));
    }
}

// Example usage
guessLetter('G');
guessLetter('I');
guessLetter('O');
guessLetter('A');
guessLetter('T');
guessLetter('C');