# CLONE STRING

## Author

Tommaso Ferrero SWD

---

## Text of the exercise

Write a function ```cloneStrings()``` that only clones string properties of an object  

Starting with the example object of the previous exercise this should be the result  

```js
{ name: 'Green Mueller',
 email: 'Rigoberto_Muller47@yahoo.com',
 address: '575 Aiden Forks',
 bio: 'Tenetur voluptatem odit labore et voluptatem vel qui placeat sit.',
 bankInformation: 
 { amount: '802.04',
 business: 'Bernhard, Kuhn and Stehr',
 name: 'Investment Account 8624',
 type: 'payment',
 account: '34889694' }
}
```

---

## Description of the solution of the exercise

This project contains a simple JavaScript function called `cloneStrings()`.

It takes an object (possibly with nested objects) and returns a new object that contains **only the string properties** of the original.

Nested objects are also processed recursively.

In the example this is what it does:

Given this object:

```js
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
```

It will return:

```json
{
  "name": "Green Mueller",
  "email": "Rigoberto_Muller47@yahoo.com",
  "address": "575 Aiden Forks",
  "bio": "Tenetur voluptatem odit labore et voluptatem vel qui placeat sit.",
  "bankInformation": {
    "amount": "802.04",
    "business": "Bernhard, Kuhn and Stehr",
    "name": "Investment Account 8624",
    "type": "payment",
    "account": "34889694"
  }
}
```

---
