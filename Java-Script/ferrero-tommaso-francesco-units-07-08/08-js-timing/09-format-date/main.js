/**
 * Formats a given date based on how much time has passed since that date.
 * 
 * @param {Date} date - The date to format.
 * @returns {string} A formatted string representing the date or time difference.
 */
function formatDate(date) {
    const now = new Date(); // Get the current date and time
    const diffMs = now - date; // Difference in milliseconds
  
    // If less than 1 second (1000 milliseconds) has passed
    if (diffMs < 1000) {
      return "right now";
    }
  
    // If less than 1 minute (60,000 milliseconds) has passed
    if (diffMs < 60 * 1000) {
      const seconds = Math.floor(diffMs / 1000); // Convert milliseconds to seconds
      return `${seconds} sec. ago`;
    }
  
    // If less than 1 hour (3,600,000 milliseconds) has passed
    if (diffMs < 60 * 60 * 1000) {
      const minutes = Math.floor(diffMs / (60 * 1000)); // Convert milliseconds to minutes
      return `${minutes} min. ago`;
    }
  
    // Otherwise, format the date as "DD:MM:YY HH:mm"
    // The padStart() method of String values pads this string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of this string. Is really useful with the date because 6:4:24 become 06:04:24 [syntax: padStart(targetLength, padString)] search https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart for more informations
    const day = String(date.getDate()).padStart(2, '0'); // Day with 2 digits
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month with 2 digits (months are 0-based in javascript so genuary will be 0 not 1)
    const year = String(date.getFullYear()).slice(-2); // Last 2 digits of year thanks to slice() method of strings that get a portion of a string
    const hours = String(date.getHours()).padStart(2, '0'); // Hours with 2 digits
    const minutes = String(date.getMinutes()).padStart(2, '0'); // Minutes with 2 digits
  
    return `${day}:${month}:${year} ${hours}:${minutes}`;
  }
  
  // main
console.log(formatDate(new Date(new Date() - 1))); // "right now"
console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 sec. ago"
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 min. ago"
console.log(formatDate(new Date(2024, 3, 17, 10, 0))); // "17:04:24 10:00"
  