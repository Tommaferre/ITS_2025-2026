# CREDIT CARD VALIDATION

## Author

Tommaso Ferrero SWD

## Test of the exercise

### Credit card validation

- Write a function called “validateCreditCard” that checks credit card numbers according to the following rules:  
    ○ Number must be 16 digits, all of them must be numbers  
    ○ You must have at least two different digits represented (all of the digits cannot be the same)  
    ○ The final digit must be even  
    ○ The sum of all the digits must be greater than 16  

- The following credit card numbers are valid:  
    ○ 9999-9999-8888-0000  
    ○ 6666-6666-6666-1666  

- The following credit card numbers are invalid:  
    ○ a923-3211-9c01-1112 invalid characters  
    ○ 4444-4444-4444-4444 only one type of number  
    ○ 1111-1111-1111-1110 sum less than 16  
    ○ 6666-6666-6666-6661 odd final number  

Call the function with several credit card numbers:  

```javascript
validateCreditCard('9999-9999-8888-0000');  
validateCreditCard('4444-4444-4444-4444');  
validateCreditCard('6666-6666-6666-1666');  
```

The function returns an object saying that the credit card is valid, or what the error is:  

```javascript
{ valid: true, number: '9999-9999-8888-0000' }
{ valid: false, number: 'a923-3211-9c01-1112', error: 'wrong_length' }
```

For each card check, print out the result to the log in this format:

```javascript
================================
= number : a923-3211-9c01-1112 =
= valid : false                =
= error : wrong length         =
================================
```

## Description of the solution of the exercise

The solution implements a function called validateCreditCard that performs several checks on the input credit card number. It first removes any dashes and then verifies the length and that all characters are digits. It ensures that the number contains at least two different digits, the last digit is even, and the sum of all digits is greater than 16. If any of these conditions fail, the function returns an object indicating the card is invalid along with an appropriate error message. Otherwise, it returns an object confirming the card is valid. The function printResult is used to display the validation results in a clear, formatted way.
