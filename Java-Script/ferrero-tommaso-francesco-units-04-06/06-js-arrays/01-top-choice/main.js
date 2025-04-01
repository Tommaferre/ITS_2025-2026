/*
 * array {string} = topChoice
 * Array to hold your top choices.
 */
const topChoices = ['blue', 'dog', 'Harry Potter', 'pizza'];

// Log each choice to the screen
for (let i = 0; i < topChoices.length; i++) {
    console.log(`My #${i + 1} choice is ${topChoices[i]}.`);
}

//BONUS

const topChoices1 = ['blue', 'dog', 'Harry Potter', 'pizza'];

/*
 * param {number} = number
 * returns {string} 
 * Get the correct number suffix for a given number.
 */
function getNumberSuffix(number) {
    if (number === 1) return 'st';
    if (number === 2) return 'nd';
    if (number === 3) return 'rd';
    return 'th';
}

/*
 * Log each choice to the screen with the correct number suffix.
 */
for (let i = 0; i < topChoices1.length; i++) {
    const choiceNumber = i + 1;
    const suffix = getNumberSuffix(choiceNumber);
    console.log(`My ${choiceNumber}${suffix} choice is ${topChoices1[i]}.`);
}