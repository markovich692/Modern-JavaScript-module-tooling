// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart(`bread`, 5);

// import add, { pagnier } from './shoppingCart.js';

// console.log(ShoppingCart.totalPrice, ShoppingCart.tq);

// add('bread', 6);
// add('cake', 6);
// add('gum', 6);

// console.log(pagnier);

console.log(`start fetching`);

const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
const data = await res;

console.log(data);
