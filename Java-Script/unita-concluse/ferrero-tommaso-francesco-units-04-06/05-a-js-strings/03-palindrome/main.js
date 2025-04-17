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

/*
parameter {string} str
return {boolean}
returns true if the string is a palindrome
*/
function isPalindrome(str) {
    return str === Reverse(str);
}

// Example usage
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("madame")); // Output: false
