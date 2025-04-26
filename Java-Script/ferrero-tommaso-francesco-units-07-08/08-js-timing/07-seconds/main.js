/**
 * Calculates the number of seconds elapsed since the beginning of the current day.
 * @returns {number} The number of seconds from the beginning of today.
 */
function getSecondsToday() {
    // Create a Date object for the current date and time
    const now = new Date();
    
    // Create a Date object for the beginning of today (midnight)
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    // Calculate the difference in milliseconds
    const diff = now - today;
    
    // Convert milliseconds to seconds and return
    return Math.floor(diff / 1000);
  }
  
  /**
   * Calculates the number of seconds remaining until the start of tomorrow.
   * @returns {number} The number of seconds till tomorrow.
   */
  function getSecondsToTomorrow() {
    // Create a Date object for the current date and time
    const now = new Date();
    
    // Create a Date object for the beginning of tomorrow (midnight)
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    
    // Calculate the difference in milliseconds
    const diff = tomorrow - now;
    
    // Convert milliseconds to seconds and return
    return Math.floor(diff / 1000);
  }


// main  
console.log(getSecondsToday());
console.log(getSecondsToTomorrow());
