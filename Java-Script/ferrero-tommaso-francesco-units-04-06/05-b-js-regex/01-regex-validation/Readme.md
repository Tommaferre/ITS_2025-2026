# Regex validation

## Author

Tommaso Ferrero SWD

## Test of the exercise

Regex validation  
Write regular expressions to validate the following inputs  

1.Email Address  
Expected pattern: [any characters]@[any characters].[2-4 letters]  

2.Phone Number  
Expected pattern: [optional + or country code] [digits, possibly separated by dashes or spaces]  

3.Password  
Expected pattern: [at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character]  

4.URL  
Expected pattern: [protocol]://[domain].[top-level domain]/[optional path]?[optional query string]#[optional fragment]  

## Description of the solution of the exercise

Regular expressions (regex) in JavaScript are used to match patterns in strings.  
In this exercise i've writed some regular expressions to validate the requests.  
Common patterns: \d, \w, ^, $, [abc], a|b ==> (digit, word char, start of string, end of the string, any of a/b/c, a or b)  
Quantifiers: *, +, ?, {n}, {n,}, {n,m} ==> (0 or more, 1 or more, 0 or 1, exactly n times, at least n times, beetween n and m times)  
Flags: i (case-insensitive), g (global, find all matches), m (multiline)  
