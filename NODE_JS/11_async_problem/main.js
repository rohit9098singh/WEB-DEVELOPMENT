// let a=10;
// let b=20;

const { rejects } = require("assert");
const { promises } = require("dns");

// setTimeout(()=>{
//     b=20;
// },2000);

// console.log(a+b);

//THE ABOVE PROGRAMME IS THE EXAMPLE TO SHOW THE DISADVANTAGE OF THE ASYNC FUNCTION THAT
//EVEN THOUGH WE HAVE UPDATED THE VALUE IN THE SETTIMEOUT FUNCTION IT WILL NOT USE IT VALUE AND
// RESULT WILL BE STILL 10; THEREFORE TO RESOLVE WE USES PROMISES

let a=10;
let b=0;

let waitingTime=new Promise((resolve,reject)=>{
    setTimeout(()=>{
         resolve(30);
         },2000);
});
waitingTime.then((data)=>{
    b=data;
    console.log(a+b);
})