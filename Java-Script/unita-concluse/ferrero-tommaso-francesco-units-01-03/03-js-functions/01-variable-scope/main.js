/*
    The following code demonstrates the concept of global and local variables in JavaScript.
    The variable 'globalResult' is a global variable, which means it can be accessed from anywhere in the code.
    The variable 'localResult' is a local variable, which means it can only be accessed within the function where it is declared.
    It will throw an error if we try to access the local variable outside the function.
    The function 'addNumbers' takes two parameters 'num1' and 'num2' and calculates the sum of these two numbers.
    The sum is stored in the local variable 'localResult' and then assigned to the global variable 'globalResult'.
    We call the 'addNumbers' function multiple times with different arguments to demonstrate the concept of local and global variables.
    We print the value of 'globalResult' after each function call to see how it changes.
    param {number} num1 - The first number to be added.
    param {number} num2 - The second number to be added.
    global {number} globalResult - The global variable to store the sum of numbers.
    local {number} localResult - The local variable to store the sum of numbers inside the function.
*/


let globalResult = 0;

function addNumbers(num1, num2) {
    let localResult = num1 + num2;
    
    console.log(`Local Result (inside function): ${localResult}`);

    globalResult = localResult;
}

addNumbers(3, 4);  // Expected output: Local Result (inside function): 7
console.log(`Global Result (outside function): ${globalResult}`);  // 7

addNumbers(10, 5); // Expected output: Local Result (inside function): 15
console.log(`Global Result (outside function): ${globalResult}`);  // 15

addNumbers(20, 30); // Expected output: Local Result (inside function): 50
console.log(`Global Result (outside function): ${globalResult}`);  // 50

