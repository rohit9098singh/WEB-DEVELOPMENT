/**
 * you are given with an array,
 * give me back a new array in which value is multiplied by 2
 * supose inputArray=[1,2,3,4,5]
 * outputArray=[2,4,6,8,10] 
 */


// note ==> map exist as a function only on a array class
const prompt=require("prompt-sync")();

const size=parseInt(prompt("Enter the size of an array :"));

let myArray=[]
for(let i=0;i<size;i++){
   myArray[i]=parseInt(prompt(`Enter the element present at index ${i+1} :`));
}
console.log(myArray);

// we could have use it like tis 
function tranform(i){
    return i*2;
}
//const ans=map(array,tranform);==> but we cannot use it like this beacsue it is method of an array classs


const ans=myArray.map(tranform);
console.log(ans);

// or i can also do like ke can define the function inside the map only

const ans_2=myArray.map(function(i){
    return i*2;
})
console.log("the second ans with same value is ",ans_2);


