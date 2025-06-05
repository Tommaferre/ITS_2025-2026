# CLONE

## Author

Tommaso Ferrero SWD

## Text of the exercise

Write a function `clone()` that clones **any object**

- Test it on the object in the next slide:
- Change the name of the cloned object and make sure that the original did not change

Important:  
Write the function yourself, do not use built-in functions such as Object.assign(), jQuery.extend() or JSON.parse(JSON.stringify())

```js
{
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
}
```

## Description of the solution of the exercise

A custom clone() function was created to copy any object, including:

- Nested objects

- Arrays

- Date objects

The function checks each value:

- If it's a primitive (string, number, boolean), it returns it as-is.

- If it's a Date, it creates a new one.

- If it's an object or array, it recursively copies all properties.

After cloning, it changes the name of the cloned object.

Finally, it prints both the original and cloned name to confirm:

- The original did not change, which proves the clone is working correctly.
