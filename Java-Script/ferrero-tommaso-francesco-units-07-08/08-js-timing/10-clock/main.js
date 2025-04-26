/**
 * Starts a clock that prints the current time to the console every second.
 */
function startClock() {
    // Use setInterval to run a function every 1000 milliseconds
    setInterval(() => {
      const now = new Date(); // Get the current date and time
      
      // padStart() string method is explained in the previous exercise with also the MDN references to get more information if needed
      const hours = String(now.getHours()).padStart(2, '0'); // Get hours, format to 2 digits
      const minutes = String(now.getMinutes()).padStart(2, '0'); // Get minutes, format to 2 digits
      const seconds = String(now.getSeconds()).padStart(2, '0'); // Get seconds, format to 2 digits
  
      const currentTime = `${hours}:${minutes}:${seconds}`; // Create the time string in HH:mm:ss format
  
      console.log(currentTime); // Print the time
    }, 1000);
  }
  
  // main
  startClock();
  