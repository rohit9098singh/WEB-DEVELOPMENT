function calOccurance(incomingArray){
    let count={};
    let len=incomingArray.length;

    for(let i=0;i<len;i++){
        let element=arr[i];

        if(count[element]){
            count[element]++;
        }
        else{
            count[element]=1;
        }
    }
    return count;

}

const prompt=require("prompt-sync")();
const arr=[];
const size=parseInt(prompt("Enter the size of an array"))
for (let i = 0; i < size; i++) {
    arr[i] = parseInt(prompt(`Enter the element at index ${i + 1}: `));
};
console.log("the array is",arr);

let occurance=calOccurance(arr);
console.log("the occurnacw of the element is ",occurance);


