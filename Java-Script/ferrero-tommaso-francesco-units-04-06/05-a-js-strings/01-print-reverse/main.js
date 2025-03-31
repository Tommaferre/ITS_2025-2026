/*
parameter {string} str
return {string}
prints the string in reverse order 
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
