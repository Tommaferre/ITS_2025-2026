/*
parameter {string} str
return {string}
prints the string in reversed order 
*/

function printReverse(str) {
    let reversed = ""; 
    let length = str.length;
    while (length > 0) {
        reversed += str.charAt(length - 1);
        length--;
    }
    console.log(reversed); 
}

// Example usage
printReverse("foobar"); // Output: "raboof"
printReverse("hello"); // Output: "olleh"
/*
If we call printReverse("hello"):

reversed initially is "" (empty string)
length initially is 5
Iteration 1: reversed becomes "o", length becomes 4
Iteration 2: reversed becomes "ol", length becomes 3
Iteration 3: reversed becomes "oll", length becomes 2
Iteration 4: reversed becomes "olle", length becomes 1
Iteration 5: reversed becomes "olleh", length becomes 0
The loop ends and "olleh" is printed
*/
