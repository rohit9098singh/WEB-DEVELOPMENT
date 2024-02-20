// creates a new array of element that gives true for condition/filter
// example:- all even elements from a particular list of elements 
let arr=[1,2,3,4,5,6,7];
let evenArray=arr.filter((val)=>{
    return val % 2==0;
    
});
console.log(evenArray)