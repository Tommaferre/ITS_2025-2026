# BABIES

## Author

Tommaso Ferrero SWD

## Text of the exercise

Create an empty array of babies  
● Each baby should have the following properties:  
  ○ `name` (a string)  
  ○ `months` (age in months as number)  
  ○ `noises` (an array of strings)  
  ○ `favoriteFoods` (an array of strings)  
● Add 4 different babies to the array using as many different ways as possible  
● Iterate through the array printing key and value pairs (e.g., [name:"Lyla"])  
● Now add an `outfit` property to each baby in the array  
  ○ Outfit should describe at least 3 parts of their clothing using different properties (e.g., `"shirt": "blue"`)  
● Print each baby again with their outfit in a nicely formatted object

## Description of the solution of the exercise

1. I've created an **empty array** called `babies`.
2. Then i've added **4 different babies**, each with the required properties:
   - `name` (e.g., "Lyla")
   - `months` (e.g., 10)
   - `noises` (like "coo", "giggle")
   - `favoriteFoods` (like "banana", "apple")

    Each baby is added using a **different method**:

    - Direct object inside `push`
    - Stored object variable
    - `new Object()` constructor
    - A small function that returns a new baby object

3. Print each baby's properties one by one as `[key: "value"]`.

4. After that, i've **added an outfit** to each baby:
   - Each outfit has 3 items (e.g., shirt, pants, hat)

5. Each babies will be printed again this time showing their outfit as a part of a clean object.
