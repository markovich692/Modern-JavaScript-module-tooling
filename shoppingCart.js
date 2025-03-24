console.log('Exporting module');

export const cart = [];
// export { cart };

export const addToCart = function (item, quantity) {
  cart.push({ item, quantity });
  console.log(`${quantity} ${item}(s) added to cart.`);
};

const totalPrice = 200;
const totalQuantity = 237;
export { totalPrice, totalQuantity as tq };

export default function (item, quantity) {
  cart.push({ item, quantity });
  // console.log(`${quantity} ${item}(s) added to cart.`);
}

export const shippingCost = 20;
