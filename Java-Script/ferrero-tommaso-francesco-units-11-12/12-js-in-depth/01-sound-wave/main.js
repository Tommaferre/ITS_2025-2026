/**
 * The starting array of noises.
 * @type {string[]}
 */
const noisesArray = ['quack', 'sneeze', 'boom'];

/**
 * This array will store the transformed versions of each noise.
 * @type {string[]}
 */
const transformedNoises = [];

/**
 * Loop through each word in the noisesArray
 */
noisesArray.forEach(word => {
  // Loop through each letter of the word
  for (let i = 0; i < word.length; i++) {
    // Convert the word into an array of characters
    const letters = word.split('');

    // Capitalize the i-th letter
    letters[i] = letters[i].toUpperCase();

    // Join the letters back into a word
    const modifiedWord = letters.join('');

    // Add exclamation marks: one for the first letter, two for the second, etc.
    const result = modifiedWord + '!'.repeat(i + 1);

    // Add the result to the final array
    transformedNoises.push(result);
  }
});

/**
 * Print the final transformed array to the console
 */
console.log(transformedNoises);