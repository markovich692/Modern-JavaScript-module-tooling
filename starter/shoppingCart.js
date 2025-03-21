console.log('Exporting module');

const shippingCost = 20;
const cart = [];

export const addToCart = function (item, quantity) {
  cart.push({ item, quantity });
  console.log(`${quantity}, ${bread} added to cart`);
};
