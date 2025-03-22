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

(function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (item, quantity) {
    cart.push({ item, quantity });
    console.log(`${quantity} ${item}(s) added to cart.`);
  };

  const orderStock = function (item, quantity) {
    cart.push({ item, quantity });
    console.log(`${quantity} ${item}(s) ordered from supplier.`);
  };
});
