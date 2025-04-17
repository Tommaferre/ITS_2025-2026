/*
    same function as the one in grade master, it takes a score and returns a grade
    based on the score.
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

/* 
    Loop to test assignGrade function from 60 to 100
    score {number} - score to test
    returns {string} - grade
*/
for (let score = 60; score <= 100; score++) {
    console.log(`For ${score}, you got a ${assignGrade(score)}.`);
}
