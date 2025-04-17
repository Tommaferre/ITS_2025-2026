/*
   parameter {number} score
   return {string} the grade for the score
   return a grade based on the score, if it's below 60 return F else it return a value D-A
*/


function assignGrade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

console.log(`The grade for score 95 is: ${assignGrade(95)}`); // Expected: A
console.log(`The grade for score 85 is: ${assignGrade(85)}`); // Expected: B
console.log(`The grade for score 75 is: ${assignGrade(75)}`); // Expected: C
console.log(`The grade for score 65 is: ${assignGrade(65)}`); // Expected: D
console.log(`The grade for score 50 is: ${assignGrade(50)}`); // Expected: F