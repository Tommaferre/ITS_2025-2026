# IDENTITY HIJACK

## Author

Tommaso Ferrero SWD

## Test of the exercise

Change the Stanford website using elements from the  Berkeley website.  
● Brand and name  
 ○ Find any elements with the word 'Stanford' and replace it with 'Berkeley'  
 ○ Remember to change the title of the page as well  
 ○ Replace any symbols of Stanford University with Berkeley  
 ● Colors  
 ○ Find all elements with the 'Stanford' color(s) and replace them with the 'Berkeley' color(s)  
 ● Links  
 ○ Manually find all the links in the navigation area and replace them with references to the   
Berkeley website if there are similar pages there. Otherwise links should point to the 
Berkeley homepage  
 ● Submit a Javascript file with all the changes  

## Description of the solution of the exercise

The solution implements a complete website transformation from Stanford to Berkeley using JavaScript DOM manipulation. The implementation consists of four main functions:

1. replaceTextContent() : Traverses all DOM elements and replaces any occurrence of 'Stanford' with 'Berkeley' in text nodes, including the page title.

2. replaceLogos() : Identifies images related to Stanford through their alt text or src attributes and replaces them with Berkeley's official logo.

3. replaceColors() : Changes Stanford's signature colors (#8C1515 and #820000) to Berkeley's official colors:
   
   - Berkeley Blue (#003262)
   - Berkeley Gold (#FDB515)

4. replaceNavLinks() : Modifies navigation links to point to equivalent Berkeley pages based on their content (admissions, academics, research, about) or defaults to Berkeley's homepage.  

All these functions are automatically executed when the DOM content is fully loaded through the 'DOMContentLoaded' event listener, ensuring a complete transformation of the Stanford website into a Berkeley-themed version.