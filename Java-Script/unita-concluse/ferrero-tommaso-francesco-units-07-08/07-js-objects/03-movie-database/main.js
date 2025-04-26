/**
 * Movie Database Exercise
 * @typedef {Object} Movie
 * @property {string} title - The title of the movie
 * @property {number} duration - The duration of the movie in minutes
 * @property {string[]} stars - An array of actors starring in the movie
 */

// Create a movie object
const movie = {
    title: "Puff the Magic Dragon",
    duration: 30,
    stars: ["Puff", "Jackie", "Living Sneezes"]
  };
  
  /**
   * Array of movie objects
   * @type {Movie[]}
   */
  const movies = [
    {
      title: "Puff the Magic Dragon",
      duration: 30,
      stars: ["Puff", "Jackie", "Living Sneezes"]
    },
    {
      title: "Space jam",
      duration: 88,
      stars: ["Michael Jordan", "Bill Murray", "Wayne Knight"]
    }
  ];
  
  /**
   * Prints information about a movie
   * @param {Movie} movie - The movie object to print information about
   */
  function printMovie(movie) {
    console.log(movie.title + " lasts for " + movie.duration + " minutes. Stars: " + movie.stars.join(", ") + ".");
  }
  
  // Test with one movie
  printMovie(movie);
  
  // Print all movies
  for (let i = 0; i < movies.length; i++) {
    printMovie(movies[i]);
  }