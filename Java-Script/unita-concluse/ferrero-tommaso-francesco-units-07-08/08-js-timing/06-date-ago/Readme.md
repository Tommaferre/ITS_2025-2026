# DATE AGO

## Author

Tommaso Ferrero SWD

## Test of the exercise

### Date ago

- Create a function getDateAgo(date, days) that returns the day of the month n days ago from the given date
- For instance, if today is the 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th
- Test the function to make sure it works reliably with any valid Date object
- Decide what to do with a negative 'days' parameter

  - e.g. getDateAgo(new Date(), -2)

## Description of the solution of the exercise

This project provides a simple and effective JavaScript function:

- getDateAgo(date, days): Calculates the day of the month corresponding to a given number of days ago (or ahead, if a negative number is provided) starting from a reference date.

It ensures that the original date object remains unmodified, following best practices to prevent side effects.
