/**
 * Manually clones an object, including nested objects and Date values.
 * @param {Object} obj - The object to clone.
 * @returns {Object} A new cloned object.
 */
function clone(obj) {
  // If it's null or not an object, return it directly (primitive value)
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // Handle Date objects
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  // Create a new object or array
  const copy = Array.isArray(obj) ? [] : {};

  // Copy each property recursively
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = clone(obj[key]);
    }
  }

  return copy;
}

// Original object to clone
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

// Clone the object
const clonedPerson = clone(originalPerson);

// Change the name of the cloned object
clonedPerson.name = 'Blue Johnson';

// Show that the original is unchanged
console.log("Original person's name:", originalPerson.name);
console.log("Cloned person's name:", clonedPerson.name);