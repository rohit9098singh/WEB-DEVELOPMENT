/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/




const prompt = require('prompt-sync')();

function findLargestElement(numbers) {
    let largestNumber = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largestNumber) {
            largestNumber = numbers[i];
        }
    }

    return largestNumber;
}

// Take user input for the array size
let size = parseInt(prompt("Enter the size of the array:"));

let userInputArray = [];

// Take user input for the array elements
for (let i = 0; i < size; i++) {
    userInputArray[i] = parseInt(prompt(`Enter element number ${i + 1}:`));
}

// Find and print the largest element in the array
console.log(`The largest element is ${findLargestElement(userInputArray)}`);

module.exports = findLargestElement;