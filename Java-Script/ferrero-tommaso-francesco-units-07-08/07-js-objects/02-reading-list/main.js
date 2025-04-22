/**
 * Reading List Exercise
 * @typedef {Object} Book
 * @property {string} title - The title of the book
 * @property {string} author - The author of the book
 * @property {boolean} alreadyRead - Whether the book has been read or not
 */

// Create an array of book objects
const books = [
    {
      title: "The Hobbit", 
      author: "J.R.R. Tolkien", 
      alreadyRead: true
    },
    {
      title: "The Lord of the Rings", 
      author: "J.R.R. Tolkien", 
      alreadyRead: false
    }
  ];
  
  // Iterate through the array of books
  for (let i = 0; i < books.length; i++) {
    // Log the book title and author
    console.log(books[i].title + " by " + books[i].author);
    
    // Check if the book was read and log appropriate message
    if (books[i].alreadyRead) {
      console.log('You already read "' + books[i].title + '" by ' + books[i].author);
    } else {
      console.log('You still need to read "' + books[i].title + '" by ' + books[i].author);
    }
  }