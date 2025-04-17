// Regular Expressions:
// Email Address Regex
const emailRegex = /^\S+@\S+\.\S{2,}$/; 
//(^\S+)At the start of the string you must have one or more non whitespace characters, (@) the string must contain a @ symbol, (\S) again non whitespace characters (domain name), (\.) litterarly a dot escaped character \ needed because . is a regex metaharacter, (\S{2,}) at least 2 non whitespace characters (top-level domain), ($) end of the string

// Phone Number Regex
const phoneRegex = /^[+]?[\d\s-]{7,}$/;
 //(^[+]?) At the start of the string we can find an optional + sign for the country codes, ([\d\s-]) only digits, spaces, or score allowed, ({7,}) at least 7 or above characters

// Password Regex
const passwordRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/; 
//(?=.*[a-z]) Must contain at least 1 lowercase letter (a-z), the ?= checks if the condition exists without consuming characters (like a "peek" into the string - it looks forward but doesn't move the regex cursor, the content inside (?=...) must be present somewhere after the current position), (?=.*[A-Z]) like the previous one, the only difference is that checks for uppercase letter, (?=.*\d) requires at least one digit (0-9), (?=.*[\W_]) must contain at least one non word character; the W alone only allows these specific special characters: ! @ # $ % ^ & *, it doesn't match _ so it must be added, (.) can be any character, ({8,}) at least 8 characters long. 

// URL Regex
const urlRegex = /^(https?:\/\/)?[\w.-]+\.\w{2,}/; 
//((https?:\/\/)?) Optional http:// or https:// ((s?)optional s so i don't have to rewrite http and https), (:\/\/) literal ://, ([\w.-]+) domain name part, (w) word characters, (.) literal dot that is allowed in domain names, (-) litteral score also allowed, (+) one or more of these characters, (\.) a literal dot before the top level domain (like .com), (\w{2,}) at least 2 word characters

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

//Invalid phone number (constters in the phone number)
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