/*
   calculateCircumference function calculates the circumference of a circle given the radius.
   calculateArea function calculates the area of a circle given the radius.
   parameter {number} radius: the radius of the circle
   const {number} circumference: the circumference of the circle
   const {number} area: the area of the circle
*/


function calcCircumference(radius) {
    const circumference = 2 * Math.PI * radius;  // Circumference formula: 2 * π * radius
    console.log(`The circumference is ${circumference.toFixed(2)}`);
}

function calcArea(radius) {
    const area = Math.PI * Math.pow(radius, 2);  // Area formula: π * radius^2
    console.log(`The area is ${area.toFixed(2)}`);
}

calcCircumference(5);  // Example: radius of 5
calcArea(5);  // Example: radius of 5
