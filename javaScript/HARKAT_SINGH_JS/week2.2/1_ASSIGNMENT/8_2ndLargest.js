const prompt =require("prompt-sync")();

const size=parseInt(prompt("Enter the size of the array :"));

const myArray=[];

for(let i=0;i<size;i++){
    myArray[i]=parseInt(prompt(`Enter the element at index ${i+1} :`));
}
console.log(myArray);

calSecondLargest(myArray);

function calSecondLargest(incomingArray){
    let largest=Number.MIN_VALUE;
    let secondLargest=Number.MIN_VALUE;
    for(let i=0;i<size;i++){
        if(largest<incomingArray[i]){
            secondLargest=largest;
            largest=incomingArray[i];
        }
    }
    console.log("the largest element of the array is ",largest);
    console.log("the second largest element of the array is ",secondLargest);
};


