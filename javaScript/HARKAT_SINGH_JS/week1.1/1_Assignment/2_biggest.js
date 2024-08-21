const prompt = require('prompt-sync')();

let size = parseInt(prompt("Enter the size of the array:")); // Fixed typo here

let userInputArray = [];

for (let i = 0; i < size; i++) {
    userInputArray[i] = parseInt(prompt(`Enter element number ${i + 1}:`));
}

let biggernumber = userInputArray[0];

for (let i = 1; i < userInputArray.length; i++) {
    if (userInputArray[i] > biggernumber) {
        biggernumber = userInputArray[i]; // Added missing semicolon here
    }
}

console.log(`The biggest number is ${biggernumber}`);
