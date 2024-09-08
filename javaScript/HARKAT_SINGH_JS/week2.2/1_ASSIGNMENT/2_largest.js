const prompt = require("prompt-sync")();
function maxArraysize(){
    const size = parseInt(prompt("Enter the size of an array: "));

let myArray = [];

for (let i = 0; i < size; i++) {
    myArray[i] = parseInt(prompt(`Enter the element at index ${i + 1}: `));
}

console.log("The array elements are:", myArray);

let maxEement=myArray[0];

for(let i=1 ;i<=myArray.length;i++){
    if(myArray[i]>maxEement){
        maxEement=myArray[i];
    }
}
console.log("the maximum element from your array is = ",maxEement);

}

maxArraysize();
console.log("hello world");
console.log("hello");
console.log("hello world ");

