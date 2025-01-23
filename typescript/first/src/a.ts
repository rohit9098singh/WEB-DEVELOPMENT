// in javascript
/**
 * const x=1;
 * log(x)
 */

// IN TYPESCRIPT
//const x: number= 1;
// console.log(x);

// function greet(firstName:string,lastName:string,age:number){
//     console.log("hello",firstName);
//     console.log(age);
//     console.log(lastName);
    
    
    
// }
// function sum(a:number,b:number):number{   // writing this third num means that the function returns a number 
//     return a+b;
// }

// function isLegal(age:number):boolean {
//     if (age>18){
//         console.log("legal");
//         return true;
//     }
//     else{
//         console.log("not legal");   
//         return false; 
//     }
// }

// greet("rohit","singh",30);
// console.log(sum(3,4));
// console.log(isLegal(18));


// create a function that takes another function as an input and and runs after 1 sec 
function runsAfter15sec(fn:()=> number){
    setTimeout(fn,1000);
 }

runsAfter15sec(()=>{
    console.log("hello world"); // by this time it returns nothing so the type would be void 
    return 1; // but now it is returning interger so type will be number 
    
})