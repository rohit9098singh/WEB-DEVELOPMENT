const prompt = require("prompt-sync")();

// Get the size of the array from the user
const size = parseInt(prompt("Enter the size of an array: "));

let myArray = [];
for (let i = 0; i < size; i++) {
   myArray[i] = parseInt(prompt(`Enter the element present at index ${i}: `)); // Index starts from 0
}
console.log("Input Array:", myArray);

// Function to filter even numbers
function filterLogic(n) {
    if (n % 2 == 0) {
        return true; // Need to return true to include the element in the filtered array
    } else {
        return false;
    }
}

// Filtering using the filterLogic function
const ans = myArray.filter(filterLogic);

// Filtering using an arrow function
const ans_2 = myArray.filter((e) => {
    if (e % 2 == 0) {
        return true; // Return true for even numbers
    } else {
        return false;
    }
});

console.log("Filtered Array (Using filterLogic):", ans);
console.log("Filtered Array (Using Arrow Function):", ans_2);
