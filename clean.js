'use strict';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimit = function (user, limits) {
  const limit = limits?.[user] ?? 0;

  return limit;
};

//Pure function
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();

  const limit = getLimit(cleanUser, limits);

  return value <= limit
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;

  // if (value <= limit) {
  //   return [...state, { value: -value, description, user: cleanUser }];
  // }
};

const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
console.log(newBudget1);
const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);

const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');
console.log(newBudget3);

const checkExpenses = function (state, limits) {
  return state.map(function (entry) {
    return entry.value < -getLimit(entry.user, limits)
      ? { ...entry, flag: 'limit' }
      : entry;
  });
};

checkExpenses(newBudget3, spendingLimits);

const logBigExpenses = function (state, bigLimit, output = '') {
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .reduce(function (acc, cur) {
      return `${acc} / ${cur.description.slice(-2)} `;
    }, '')
    .slice(2);

  console.log(bigExpenses);
};

console.log(budget);
logBigExpenses(newBudget3, 100);
