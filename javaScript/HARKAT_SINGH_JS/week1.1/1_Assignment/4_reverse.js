const prompt = require('prompt-sync')();

function findEvenNumber() {
    let size = parseInt(prompt("Enter the size of an array: "));

    let arr = [];

    // Input array elements
    for (let i = 0; i < size; i++) {
        arr[i] = parseInt(prompt(`Enter element number ${i + 1}: `));
    }

    // Reverse the array
    let reversedArr = [];
    for (let i = size - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }

    // Print the reversed array
    console.log("Reversed array:", reversedArr);
}

// Call the function
findEvenNumber();
