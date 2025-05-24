/**
 * Adds an event listener to the "Lib it!" button and generates a story
 * using input values from the form.
 */

// Add event listener to the button
document.getElementById("gen-button").addEventListener("click", makeStory);

/**
 * Retrieves input values, creates a simple story, and displays it in the #story div.
 */
function makeStory() {
  // Get values from input fields
  const noun = document.getElementById("noun").value;
  const adjective = document.getElementById("adjective").value;
  const person = document.getElementById("person").value;

  // Create the story
  const story = `${person} really likes ${adjective} ${noun}.`;

  // Display the story
  document.getElementById("story").textContent = story;
}