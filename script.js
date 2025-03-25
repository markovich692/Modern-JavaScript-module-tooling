// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart(`bread`, 5);
// console.log(ShoppingCart.totalPrice, ShoppingCart.tq);

import { shippingCost } from './shoppingCart.js';
// import add, { cart } from './shoppingCart.js';

// add('bread', 6);
// add('cake', 6);
// add('gum', 6);

const getLastPost = async function () {
  // console.log(`start fetching`);

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

//MODULE PATTERN
const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (item, quantity) {
    cart.push({ item, quantity });
    // console.log(`${quantity} ${item}(s) added to cart.`);
  };

  const orderStock = function (item, quantity) {
    cart.push({ item, quantity });
    // console.log(`${quantity} ${item}(s) ordered from supplier.`);
  };

  return {
    cart,
    shippingCost,
    totalPrice,
    totalQuantity,
    addToCart,
  };
})();

shoppingCart2.addToCart('biscuit', 6);
shoppingCart2.cart.push(shoppingCart2.totalPrice);

// console.log(shoppingCart2.cart);
// console.log(shoppingCart2.totalPrice);
import cloneDeep from 'lodash-es';

const obj1 = {
  name: 'Marc',
  age: 24,
  hobby: ['soccer', 'volley-ball', 'music'],
};

//Shallow copy
const obj1Clone = Object.assign({}, obj1);

obj1Clone.name = 'Bill';

const obj1DeepClone = cloneDeep(obj1);

console.log('Updated log');
obj1.hobby.push('jumping');
console.log(obj1);
console.log(obj1Clone);
console.log(obj1DeepClone);

console.log(shippingCost);

if (module.hot) {
  module.hot.accept();
}

import 'core-js/stable';
