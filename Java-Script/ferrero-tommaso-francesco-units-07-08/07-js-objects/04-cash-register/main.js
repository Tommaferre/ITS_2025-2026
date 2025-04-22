/**
 * @typedef {Object.<string, string>} ShoppingCart
 * the first string is for the name of the item, the second one for the price
 */

/**
 * Calculates the total price of all items in a shopping cart
 * @param {ShoppingCart} cart - Shopping cart object with items and prices
 * @returns {number} - The total price
 */
function cashRegister(cart) {
    let total = 0;
    
    for (let item in cart) {
      //remember: the for loop, loops on the keys in the object cart, cart[item] return the value associated to the key, in this case the price (a string so it must be converted!)
      total += parseFloat(cart[item]); //parseFloat converts a string to a floating-point number
    }
    
    return total;
  }
  
  // Test shopping cart
  // In the object we have multiple couples key: value, in this case --> itemName: itemPrice 
  let cartForParty = {
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
  };
  
  //output
  console.log(cashRegister(cartForParty)); // 60.55 