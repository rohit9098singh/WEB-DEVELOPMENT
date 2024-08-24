/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

const prompt=require("prompt-sync")();

function isPlaindromNumber(num){
  let actualnumber=num.toString();
  let reverseNum=actualnumber.split().reverse().join("");

  return actualnumber===reverseNum;

}

const number=prompt("enter the number of your choice in order to check for armstrong")
if(isArmstrongNumber(number)){
  console.log(`${number} is a palindrom`);
  
}
else{
  console.log(`${number} is not a palindrom`);
  
};

// ============== for armstrong number ================

function isArmstrongNumber(n) {
    let sum = 0;
    let digits = n.toString().split(''); // Convert number to string and split into individual digits
    let length = digits.length; // Get the number of digits

    // Calculate the sum of each digit raised to the power of the number of digits
    for (let i = 0; i < length; i++) {
      let digit = parseInt(digits[i]);
      sum += Math.pow(digit, length);
  }
  

    // Return true if the sum equals the original number
    return sum == n;
}

const number_1 = prompt("Enter a number to check if it's an Armstrong number: ");
if (isArmstrongNumber(number_1)) {
    console.log(`${number_1} is an Armstrong number.`);
} else {
    console.log(`${number_1} is not an Armstrong number.`);
}

module.exports = isArmstrongNumber;


