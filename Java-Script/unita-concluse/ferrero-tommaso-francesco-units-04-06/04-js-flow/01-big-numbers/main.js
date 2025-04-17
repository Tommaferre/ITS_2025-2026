/*
    parameter {number} num1
    parameter {number} num2
    return {number} the greatest number
*/


function greaterNum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
let result1 = greaterNum(5, 10);
console.log(`The greater number of 5 and 10 is ${result1}.`); //this will print 10

let result2 = greaterNum(20, 15);
console.log(`The greater number of 20 and 15 is ${result2}.`); //this will print 20