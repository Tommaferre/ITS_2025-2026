/**
 * Create an empty array to store baby objects
 * @type {Array<Object>}
 */
const babies = [];

/**
 * Add a baby using an object literal directly in push
 */
babies.push({
  name: "Lyla",
  months: 10,
  noises: ["giggle", "coo"],
  favoriteFoods: ["banana", "apple"]
});

/**
 * Add a baby using a separate object variable
 */
const baby2 = {
  name: "Noah",
  months: 8,
  noises: ["laugh", "babble"],
  favoriteFoods: ["pear", "carrot"]
};
babies.push(baby2);

/**
 * Add a baby using Object constructor
 */
const baby3 = new Object();
baby3.name = "Mia";
baby3.months = 6;
baby3.noises = ["squeal", "hum"];
baby3.favoriteFoods = ["avocado", "pumpkin"];
babies.push(baby3);

/**
 * Add a baby using class-like function (factory function)
 */
function createBaby(name, months, noises, favoriteFoods) {
  return {
    name,
    months,
    noises,
    favoriteFoods
  };
}
const baby4 = createBaby("Leo", 9, ["chuckle", "hiccup"], ["mango", "sweet potato"]);
babies.push(baby4);

/**
 * Print key-value pairs of each baby
 */
console.log("Babies without outfit:\n");

babies.forEach(baby => {
  for (const key in baby) {
    console.log(`[${key}: "${baby[key]}"]`);
  }
  console.log("-------------------");
});

/**
 * Add outfit property to each baby
 * Each outfit has 3 properties (e.g., shirt, pants, hat)
 */
babies.forEach(baby => {
  baby.outfit = {
    shirt: "blue",
    pants: "green",
    hat: "yellow"
  };
});

/**
 * Print each baby with outfit in a nicely formatted way
 */
console.log("\nBabies with outfit:\n");

babies.forEach(baby => {
  console.log({
    name: baby.name,
    months: baby.months,
    noises: baby.noises,
    favoriteFoods: baby.favoriteFoods,
    outfit: baby.outfit
  });
  console.log("-------------------");
});