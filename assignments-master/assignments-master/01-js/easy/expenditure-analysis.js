/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // Step 1: Initialize an object to keep track of total spending per category
  const totals = {};

  // Step 2: Iterate through the transactions
  transactions.forEach(transaction => {
    const { category, price } = transaction;

    // If the category is not already in the totals object, add it
    if (!totals[category]) {
      totals[category] = 0;
    }

    // Add the current transaction's price to the total for the category
    totals[category] += price;
  });

  // Step 3: Convert the totals object into an array of objects
  const result = Object.keys(totals).map(category => ({
    category: category,
    totalSpent: totals[category]
  }));

  return result;
}

// Example usage
const transactions = [
  { category: "Groceries", price: 50 },
  { category: "Utilities", price: 100 },
  { category: "Groceries", price: 30 },
  { category: "Entertainment", price: 60 },
  { category: "Utilities", price: 40 }
];

console.log(calculateTotalSpentByCategory(transactions));

module.exports = calculateTotalSpentByCategory;