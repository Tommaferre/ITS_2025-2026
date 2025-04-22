const recipes = [
    {
        title: "Margherita Pizza",
        servings: 2,
        ingredients: ["Pizza Dough", "Tomatoes", "Mozzarella", "Basil", "Olive Oil"]
    }
];

function displayRecipe(recipe) {
    const container = document.getElementById('recipeContainer');
    const recipeCard = document.createElement('div');
    recipeCard.className = 'recipe-card';

    recipeCard.innerHTML = `
        <div class="title">${recipe.title}</div>
        <div class="servings">Serves: ${recipe.servings}</div>
        <h3>Ingredients:</h3>
        <ul class="ingredients">
            ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
        </ul>
    `;

    container.appendChild(recipeCard);
    
    // Console output
    console.log(`Recipe: ${recipe.title}`);
    console.log(`Servings: ${recipe.servings}`);
    console.log('Ingredients:');
    recipe.ingredients.forEach(ing => console.log(`- ${ing}`));
    console.log('-------------------');
}

// Display all recipes
recipes.forEach(recipe => displayRecipe(recipe));