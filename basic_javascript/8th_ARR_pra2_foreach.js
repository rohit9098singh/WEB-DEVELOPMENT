// question--> we are given array of marks of studnet. filter out the marks of the student that scored 90+.
let marks=[95,98,93,34,24,93]
let newarray=marks.filter((val) => {
   return val>90;
});
console.log(newarray)

//take a number n as an input and create an array of the number from 1 to n ,
//use the reduce method to calculate the sum of all numbers in an array.
//use the reduce method to calculate product of all nuberes in an array
const prompt=require("prompt-sync")();
let n= prompt("enter the value of n :");
let arr=[];
for (let i=1;i<=n;i++)
{
    arr.push(i);
}
console.log(arr);
        //using reduce method with arrow form
let sum=arr.reduce((previous,current)=>{
   return previous+current
});
console.log(sum)

        // Using reduce method with the defined function
function sumFunction(previous1, current1) {
    return previous1 + current1;
}
let sum1 = arr.reduce(sumFunction);

console.log(sum1);

       //applying the factorial
      //using reduce method with arrow form
let product=arr.reduce((previous,current)=>{
    return previous*current
 });
 console.log("factorial of the given number is",product);      