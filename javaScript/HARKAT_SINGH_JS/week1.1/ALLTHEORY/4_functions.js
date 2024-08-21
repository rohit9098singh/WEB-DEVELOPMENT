/*
   1) defined as reusing a block of code that perform a specific task repetedly
   2) can takes some of the argument as an input 
   3) return a value as an output
   4) they can even take another function as an argumet 

*/
/*
   NOTE--> you are allowed to call one function  the sum()
           how will you displayResult of a sum..  

*/

function sum(num1, num2,functionToCall) {
  let result = num1 + num2;
  functionToCall(result);
}

function displayResult(data) {
  console.log("Result of the sum is :" + data);
}

function displayResultPassive(data) {
  console.log("Result of the sum is :" + data);
}


//you are allowed to call one function  the sum()
//how will you displayResult of a sum.. 

const ans=sum(1,2,displayResult);
// they are only known as a callbacks