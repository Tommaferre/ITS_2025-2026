/**
 * Recipe Exercise
 * @typedef {Object} Recipe
 * @property {string} title - The title of the recipe.
 * @property {number} servings - Number of servings the recipe provides.
 * @property {string[]} ingredients - List of ingredients needed for the recipe.
 */

/**
 * Favorite recipe object containing information about Pizza Margherita.
 * @type {Recipe}
 */
const favoriteRecipe = {
    title: "Pizza Margherita",
    servings: 1,
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella",
      "Fresh basil leaves",
      "Olive oil",
      "Salt"
    ]
  };
  
  /**
   * Logs the recipe details to the console.
   */
  function logRecipe(recipe) {
    console.log("Recipe Title: " + recipe.title);
    console.log("Servings: " + recipe.servings);
    console.log("Ingredients:");
    recipe.ingredients.forEach(ingredient => {
      console.log(ingredient);
    });
  }
  
  // Call the function to display the recipe
  logRecipe(favoriteRecipe);