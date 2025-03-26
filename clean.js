'use strict';

const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimit = function (user) {
  const limit = spendingLimits?.[user] ?? 0;

  return limit;
};

const addExpense = function (value, description, user = 'jonas') {
  user.toLowerCase();

  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;
  const limit = getLimit(user);

  if (value <= limit) {
    budget.push({ value: -value, description, user });
  }
};

addExpense(10, 'Pizza 🍕');
addExpense(100, 'Going to movies 🍿', 'Matilda');
addExpense(200, 'Stuff', 'Jay');
console.log(budget);

const checkExpenses = function () {
  budget.forEach(function (entry) {
    const limit = getLimit(entry.user);

    if (entry.value < -limit) {
      entry.flag = 'limit';
    }
  });
};

checkExpenses();

console.log(budget);

const logBigExpenses = function (bigLimit) {
  let output = '';

  for (const entry of budget)
    output += entry.value <= -bigLimit ? `${entry.description.slice(-2)}/` : '';

  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

logBigExpenses(1000);
