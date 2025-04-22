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
    const cleaned = cardNumber.replace(/-/g, '');
  
    if (cleaned.length !== 16) {
      return { valid: false, number: cardNumber, error: 'wrong length' };
    }
  
    if (!/^\d+$/.test(cleaned)) {
      return { valid: false, number: cardNumber, error: 'invalid characters' };
    }
  
    const digits = cleaned.split('').map(Number);
    const allSame = digits.every(d => d === digits[0]);
    if (allSame) {
      return { valid: false, number: cardNumber, error: 'only one type of digit' };
    }
  
    if (digits[15] % 2 !== 0) {
      return { valid: false, number: cardNumber, error: 'odd final digit' };
    }
  
    const sum = digits.reduce((a, b) => a + b, 0);
    if (sum <= 16) {
      return { valid: false, number: cardNumber, error: 'sum too small' };
    }
  
    return { valid: true, number: cardNumber };
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