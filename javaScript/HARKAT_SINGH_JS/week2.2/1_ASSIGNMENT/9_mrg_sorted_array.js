const prompt =require("prompt-sync")();

const size=parseInt(prompt("Enter the size of the array :"));

const myArray=[];

for(let i=0;i<size;i++){
    myArray[i]=parseInt(prompt(`Enter the element at index ${i+1} :`));
}
console.log("the first array is as follow",myArray);

const size_2=parseInt(prompt("Enter the size of the array :"));

const myArray_2=[];

for(let i=0;i<size_2;i++){
    myArray_2[i]=parseInt(prompt(`Enter the element at index ${i+1} :`));
}
console.log("the second  array is as follow",myArray_2);

let result_1=myArray.sort();
let res_2=myArray_2.sort();


console.log("the concatinated array is as follow",result_1.concat(res_2));
