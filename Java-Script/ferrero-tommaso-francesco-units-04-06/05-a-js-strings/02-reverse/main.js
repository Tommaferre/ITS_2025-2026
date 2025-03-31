/*
parameter {string} str
return {string} reversed
returns the string in reverse order
*/


function Reverse(str) {
    let reversed = ""; 
    let length = str.length;
    
    while (length > 0) {
        reversed += str.charAt(length - 1);
        length--;
    }
    return reversed;
}

// Example usage
console.log(Reverse("foobar")); // Output: "raboof"
console.log(Reverse("hello")); // Output: "olleh"
