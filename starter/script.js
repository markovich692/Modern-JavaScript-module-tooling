// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart(`bread`, 5);
// console.log(ShoppingCart.totalPrice, ShoppingCart.tq);

import add, { cart } from './shoppingCart.js';

add('bread', 6);
add('cake', 6);
add('gum', 6);

const getLastPost = async function () {
  console.log(`start fetching`);

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost2 = await getLastPost();
console.log(lastPost2);
