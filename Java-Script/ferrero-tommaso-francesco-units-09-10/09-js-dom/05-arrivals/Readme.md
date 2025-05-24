# ARRIVALS

## Author

Tommaso Ferrero SWD

## Test of the exercise

Implement the arrivals page of an airport such as "http://www.aeroportoditorino.it/en/tofly/flights/departs-arrivals"
 - Create a complete proper webpage with a title, description and all other HTML tags 
- Add Javascript and CSS files
 - Include as much detail as you can to each flight row
 - Add a Status to each flight. Status can be DEPARTING, DELAYED, ON_TIME, ARRIVED, etc
- Simulate a real arrivals list
 - The list should start empty and update every 10 seconds
 - Flights that have arrived should be removed after 60 seconds
 - Flights should change status in time. E.g. departing>on_time>delayed>arrived
 - Flights that are delayed should be displayed in red
 - New flights should be added to the bottom of the list
 - The list should be sorted by date and hour

## Description of the solution of the exercise

In this exercise i've recreated the arrivals page of the aeroporto di Torino with title, description ecc.  
In JavaScript i've included some airlines and airport to fake the arrivals page. Every 10 seconds a new flight appear in the list and flights that have arrived is removed after 60 second. The flight status also change in time. With an external Css file i've added some features like flights that are delayed is showed in red and some decorations for the page.