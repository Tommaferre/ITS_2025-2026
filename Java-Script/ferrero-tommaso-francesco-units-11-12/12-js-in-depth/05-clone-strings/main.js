/**
 * cloneStrings - Creates a new object that contains only the string properties
 * from the input object, preserving nested object structure.
 *
 * @param {Object} obj - The original object to clone from
 * @returns {Object} - A new object with only string properties
 */
function cloneStrings(obj) {
  // Check if the input is an object and not null
  if (typeof obj !== 'object' || obj === null) return {};

  // Create a new empty object (or array, if input was array)
  const result = {};

  // Loop through each property in the object
  for (const key in obj) {
    const value = obj[key];

    // If the property is a string, add it to the result
    if (typeof value === 'string') {
      result[key] = value;
    }
    // If it's a nested object, apply cloneStrings recursively
    else if (typeof value === 'object' && value !== null) {
      const nested = cloneStrings(value);
      // Only add non-empty objects
      if (Object.keys(nested).length > 0) {
        result[key] = nested;
      }
    }
  }

  return result;
}

// Example object from the previous exercise
const originalPerson = {
  name: 'Green Mueller',
  email: 'Rigoberto_Muller47@yahoo.com',
  address: '575 Aiden Forks',
  bio: 'Tenetur voluptatem odit labore et voluptatem vel qui placeat sit.',
  active: false,
  salary: 37993,
  birth: new Date('1965-04-18T13:38:00+02:00'),
  bankInformation: {
    amount: '802.04',
    date: new Date('2012-02-02T00:00:00+01:00'),
    business: 'Bernhard, Kuhn and Stehr',
    name: 'Investment Account 8624',
    type: 'payment',
    account: '34889694'
  }
};
// Call the function and print the result
const cloned = cloneStrings(original);
console.log(cloned);