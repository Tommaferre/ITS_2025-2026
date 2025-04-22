/**
 * Validates a credit card number based on specific rules:
 * - Must be 16 digits
 * - Only digits allowed
 * - Must have at least 2 different digits
 * - Final digit must be even
 * - Sum of digits must be > 16
 * @param {string} cardNumber - Credit card number (may include dashes)
 * @returns {{ valid: boolean, number: string, error?: string }}
 */
function validateCreditCard(cardNumber) {
    const cleaned = cardNumber.replace(/-/g, '');//this line permit to work only with numbers (g = global --> all not only the first, '' it's the empty string that it's substituted to the - )
  
    // Must be 16 digits
    if (cleaned.length !== 16) {
      return { valid: false, number: cardNumber, error: 'wrong length' };
    }
  
    //String composed only by one or more number, there is the ! at the beginning to negate the condition, so if the stirng isn't compposed only by number return an error
    if (!/^\d+$/.test(cleaned)) {
      return { valid: false, number: cardNumber, error: 'invalid characters' };
    }
  
    //transform the cleaned string in an array of numbers, (map(Number) converts every character in a number, takes a function for parameter and return an array, it's an iterative method so it calls the function one time for every element)
    const digits = cleaned.split('').map(Number);

    //control if all the digits are equals to the first one element
    const allSame = digits.every(d => d === digits[0]);
    if (allSame) {
      return { valid: false, number: cardNumber, error: 'only one type of digit' };
    }
  
    //control if the last digit (the 16°) is an odd number (!== not an even number)
    if (digits[15] % 2 !== 0) {
      return { valid: false, number: cardNumber, error: 'odd final digit' };
    }
  
    // sum of the digits of the card 
    let sum = 0;
    for (let digit of digits) {
      sum += digit;
    }
    if (sum <= 16) {
      return { valid: false, number: cardNumber, error: 'sum too small' };
    } else {
        return { valid: true, number: cardNumber };
    }
  }
  
  /**
   * Prints the result of the credit card validation in a formatted way
   * @param {{ valid: boolean, number: string, error?: string }} result
   */
  function printResult(result) {
    console.log("================================");
    console.log(`= number : ${result.number} =`);
    console.log(`= valid : ${result.valid} =`);
    if (!result.valid) {
      console.log(`= error : ${result.error} =`);
    }
    console.log("================================");
  }
  
  // Test credit card numbers
  const cards = [
    '9999-9999-8888-0000',
    '4444-4444-4444-4444',
    '6666-6666-6666-1666',
    'a923-3211-9c01-1112',
    '1111-1111-1111-1110',
    '6666-6666-6666-6661'
  ];
  
  // Run validation and print results
  cards.forEach(card => printResult(validateCreditCard(card)));