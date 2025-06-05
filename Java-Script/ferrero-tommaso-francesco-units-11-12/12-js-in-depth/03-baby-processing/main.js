/**
 * Array of babies with outfit and favoriteFoods (copied from previous exercise)
 * @type {Array<Object>}
 */
const babies = [
  {
    name: "Lyla",
    months: 10,
    noises: ["giggle", "coo"],
    favoriteFoods: ["banana", "apple", "rice", "carrot"],
    outfit: { shirt: "blue", pants: "red", hat: "green" }
  },
  {
    name: "Noah",
    months: 8,
    noises: ["laugh", "babble"],
    favoriteFoods: ["pear", "toast", "cheese", "peas"],
    outfit: { shirt: "yellow", pants: "gray", hat: "blue" }
  },
  {
    name: "Mia",
    months: 6,
    noises: ["squeal", "hum"],
    favoriteFoods: ["avocado", "yogurt", "bread", "spinach"],
    outfit: { shirt: "pink", pants: "white", hat: "purple" }
  },
  {
    name: "Leo",
    months: 9,
    noises: ["chuckle", "hiccup"],
    favoriteFoods: ["mango", "apple", "sweet potato", "zucchini"],
    outfit: { shirt: "green", pants: "black", hat: "orange" }
  }
];

/**
 * Returns a string describing a baby's outfit
 * @param {Object} baby - A baby object from the array
 * @returns {string} A sentence describing the outfit
 */
function getBabyOutfit(baby) {
  const { name, outfit } = baby;
  return `${name} is wearing a ${outfit.shirt} shirt and ${outfit.pants} pants and a ${outfit.hat} hat.`;
}

/**
 * Prints what a baby is eating, using a random order of favorite foods
 * @param {Object} baby - A baby object from the array
 */
function feedBaby(baby) {
  const { name, favoriteFoods } = baby;

  // Create a copy of the array to shuffle
  const foods = [...favoriteFoods];

  // Shuffle the foods using Fisher-Yates algorithm
  for (let i = foods.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [foods[i], foods[j]] = [foods[j], foods[i]];
  }

  // Join foods with commas and "and" before the last item
  const last = foods.pop();
  const sentence = foods.length > 0 ? `${foods.join(", ")} and ${last}` : last;

  console.log(`${name} is eating ${sentence}.`);
}

// Run both functions for all babies
babies.forEach(baby => {
  console.log(getBabyOutfit(baby));
  feedBaby(baby);
  console.log("-------------------");
});