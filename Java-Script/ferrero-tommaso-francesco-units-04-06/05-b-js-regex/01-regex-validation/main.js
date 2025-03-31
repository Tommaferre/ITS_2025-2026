// Regular Expressions for Validation

// Email Address Regex
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// Phone Number Regex
const phoneRegex = /^[+]?(\d{1,3}[\s-])?(\(?\d{1,4}\)?[\s-]?)?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,4}$/;

// Password Regex
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

// URL Regex
const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.[a-zA-Z]{2,})\/?([a-zA-Z0-9-\/]*)\??([a-zA-Z0-9=&]*)#?([a-zA-Z0-9-]*)$/;

/*
.test() method is used with regular expressions to check if a string matches the pattern specified by the regular expression. It returns a boolean value (true or false), indicating whether the pattern is found within the string.
 */

// Tests for Email
const emailTest = "test@example.com";
console.log("Email Test: ", emailRegex.test(emailTest));  // true

// Invalid email (missing @)
const emailTest1 = "testexample.com";
console.log("Email Test (false): ", emailRegex.test(emailTest1));  // false

// Tests for Phone Number
const phoneTest = "+1-555-123-4567";
console.log("Phone Test: ", phoneRegex.test(phoneTest));  // true

//Invalid phone number (letters in the phone number)
const phoneTest1 = "123-abc-4567";
console.log("Phone Test (false): ", phoneRegex.test(phoneTest1));  // false

// Tests for Password
const passwordTest = "StrongP@ss1";
console.log("Password Test: ", passwordRegex.test(passwordTest));  // true

//Invalid password (no special character)
const passwordTest1 = "Password123";
console.log("Password Test (false): ", passwordRegex.test(passwordTest1));  // false

// Tests for URL
const urlTest = "https://www.example.com/path?query=1#section";
console.log("URL Test: ", urlRegex.test(urlTest));  // true

//Invalid URL (missing domain)
const urlTest1 = "https:///path?query=1";
console.log("URL Test (false): ", urlRegex.test(urlTest1));  // false