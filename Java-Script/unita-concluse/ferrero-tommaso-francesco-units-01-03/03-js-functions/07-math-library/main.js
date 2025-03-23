/*
    squareNumber - this function will take one argument (a number), square that number, and return the result.
    halfNumber - this function will take one argument (a number), divide it by 2, and return the result.
    percentOf - this function will take two numbers, figure out what percent the first number represents of the second number, and return the result.
    areaOfCircle - this function will take one argument (the radius), calculate the area based on that, and return the result.
    parameter {number} num - The number to be squared/ halved
    parameter {number} num1 - The number to be calculated as a percentage of num2
    parameter {number} num2 - The number to be used as the total
    parameter {number} radius - The radius of the circle
    parameter {number} squared - The result of squaring the number
    parameter {number} half - The result of halving the number
    parameter {number} percent - The percentage of num1 in num2
    parameter {number} area - The area of the circle
*/


function squareNumber(num) {
    let squared = num * num;
    console.log(`The result of squaring the number ${num} is ${squared}.`);
    return squared;
}

function halfNumber(num) {
    let half = num / 2;
    console.log(`Half of ${num} is ${half}.`);
    return half;
}
function percentOf(num1, num2) {
    let percent = (num1 / num2) * 100;
    console.log(`${num1} is ${percent.toFixed(2)}% of ${num2}.`);
    return percent;
}

function areaOfCircle(radius) {
    let area = Math.PI * Math.pow(radius, 2);
    console.log(`The area for a circle with radius ${radius} is ${area.toFixed(2)}.`);
    return area;
}

let numToSquare = 3;
squareNumber(numToSquare);

let numToHalf = 5;  
halfNumber(numToHalf);

let num1 = 2, num2 = 4;
percentOf(num1, num2);

let radius = 2;
areaOfCircle(radius);
