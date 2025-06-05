# BABY PROCESSING

## Author

Tommaso Ferrero SWD

## Text of the exercise

Using the babies array from the previous exercise:

● Write a `getBabyOutfit()` function that returns a description of a baby's outfit  
  ○ Example: `"Lyla is wearing a blue shirt and red pants and a green hat"`  

● Write a `feedBaby()` function that prints what a baby is eating  
  ○ Example: `"Lyla is eating food3, food1, food4 and food2"`  
  ○ All foods from `favoriteFoods` must appear in a **random order** every time the function is called

● Run both functions on **all the babies**

---

## Description of the solution of the exercise

The solution is written in `main.js` and includes:

- An array of 4 baby objects from the previous exercise  
- Each baby has the following properties:
  - `name`
  - `months`
  - `noises`
  - `favoriteFoods`
  - `outfit` (with `shirt`, `pants`, and `hat`)

### Functions created

#### `getBabyOutfit(baby)`

- Takes a baby object as input
- Returns a sentence like:
  - `"Leo is wearing a green shirt and black pants and a orange hat"`

#### `feedBaby(baby)`

- Takes a baby object as input
- Shuffles the foods using a simple algorithm
- Prints a sentence like:
  - `"Mia is eating carrot, banana, apple and rice"`

Finally, both functions are called for **each baby** using a `forEach` loop.
