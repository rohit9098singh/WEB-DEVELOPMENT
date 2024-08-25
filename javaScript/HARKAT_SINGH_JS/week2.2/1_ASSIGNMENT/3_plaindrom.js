 const prompt = require("prompt-sync")();

function isPalindromeNumber(num) {
    let checkNum = num.toString();
    let reverseNum = checkNum.split('').reverse().join('');

    return checkNum === reverseNum;
}

let inputNumber = prompt("Enter the number you want to check for palindrome: ");
if (isPalindromeNumber(inputNumber)) {
    console.log(`The entered number ${inputNumber} is a palindrome.`);
} else {
    console.log("The entered number is not a palindrome.");
}

//for an aramstrong number 

function checkArmstrongNum(num) {
    let sum = 0;
    let digits = num.toString().split(''); // Corrected split
    let length = digits.length;

    for (let i = 0; i < length; i++) { // Removed extra semicolon
        let digit = parseInt(digits[i]);
        sum += Math.pow(digit, length);
    }

    return sum == num; // Return boolean result
}

const checkNum = prompt("Enter the number that is to be checked for Armstrong: ");
if (checkArmstrongNum(checkNum)) {
    console.log(`The provided number ${checkNum} is an Armstrong number.`);
} else {
    console.log("The entered number is not an Armstrong number.");
}
