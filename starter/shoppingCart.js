console.log('Exporting module');

const shippingCost = 20;
const cart = [];

export const addToCart = function (item, quantity) {
  cart.push({ item, quantity });
  console.log(`${quantity} ${item}(s) added to cart.`);
};

const totalPrice = 200;
const totalQuantity = 237;
export { totalPrice, totalQuantity };
