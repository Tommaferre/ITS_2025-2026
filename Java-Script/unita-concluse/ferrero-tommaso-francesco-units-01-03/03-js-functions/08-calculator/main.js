/*
    squareNumber - this function will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
    halfNumber - this function will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
    percentOf - this function will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
    areaOfCircle - this function will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
    performOperations - this function will take one argument (a number) and perform the following operations using the functions above:
        Take half of the number and store the result.
        Square the result of #1 and store that result.
        Calculate the area of a circle with the result of #2 as the radius.
        Calculate what percentage that area is of the squared result (#3).
    parameter {number} num - The number to be operated on
    parameter {number} squared - The result of the square of the half
    parameter {number} half - The result of the half of the number
    parameter {number} area - The result of the area of the circle
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

function performOperations(num) {
    let half = halfNumber(num);
    let squared = squareNumber(half);
    let area = areaOfCircle(squared);
    let percentage = percentOf(area, squared);
}

performOperations(5);
