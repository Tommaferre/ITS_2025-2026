/*
    checkEvenOdd function will check if the number is even or odd
    and print the result to the console.
    for loop will iterate from 0 to 20
    if the number is divisible by 2 then it is even
    else it is odd
*/


function checkEvenOdd() {
    for (let i = 0; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(`${i} is even`);
        } else {
            console.log(`${i} is odd`);
        }
    }
}

checkEvenOdd();
// Output:
// 0 is even
// 1 is odd
// 2 is even
// 3 is odd
// 4 is even
// 5 is odd
// ...