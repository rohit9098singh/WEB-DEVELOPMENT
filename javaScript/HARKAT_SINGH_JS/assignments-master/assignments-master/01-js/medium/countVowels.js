/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
const prompt = require("prompt-sync")();

function countVowels(str) {
    let vowelCount = 0;
    let vowelsFound = []; // Corrected the variable name here
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase(); // Capturing the current character
        if (vowels.includes(char)) {
            vowelCount++;
            if (!vowelsFound.includes(char)) {
                vowelsFound.push(char);
            }
        }
    }
    
    console.log(`The vowels present are: ${vowelsFound.join("")}`);
    return vowelCount;
}

const str = prompt("Enter the string of your choice: ");
const result = countVowels(str);
console.log(`The number of vowels present in the given string is: ${result}`);

module.exports = countVowels;
