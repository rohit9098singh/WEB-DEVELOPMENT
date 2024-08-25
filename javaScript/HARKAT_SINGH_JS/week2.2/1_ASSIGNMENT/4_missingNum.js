const prompt = require("prompt-sync")();

function findMissingNum(arr){
  
     let n = arr.length + 1; // Including the missing number
     let expectedSum = (n * (n + 1)) / 2;
     let actualSum = arr.reduce((acc, num) => acc + num, 0);

     return expectedSum - actualSum;
}

let arr = [1, 2, 4, 5, 6];
let missingNumber = findMissingNum(arr);
console.log("The missing number is:", missingNumber);
