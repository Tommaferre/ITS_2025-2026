# FORMAT DATE

## Author

Tommaso Ferrero SWD

## Test of the exercise

### Format date

Write a function formatDate(date) that accepts a date and outputs it as follows:  

● If less than a second has passed since the date, output "right now"  
● If less than a minute has passed since the date, output "n sec. ago"  
● If less than an hour has passed since the date, output "m min. ago"  
● Otherwise, output the date in this format "DD.MM.YY HH:mm"  

- e.g. 17.04.16 10:00

## Description of the solution of the exercise

This project provides a JavaScript function, formatDate, that formats a given date based on how much time has passed since that date. It outputs the result in various formats depending on the time difference.

The function returns:

- "right now" if less than a second has passed.

- "n sec. ago" if less than a minute has passed.

- "m min. ago" if less than an hour has passed.

- A formatted date string in the format DD:MM:YY HH:mm for all other cases.
