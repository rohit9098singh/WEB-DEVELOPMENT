function removeDublicates(arr){
    let freshArray=[];
    for (let i = 0; i < arr.length; i++) {
        if (!freshArray.includes(arr[i])) {
            freshArray.push(arr[i]);
        }
    }
   return freshArray;
}
const prompt=require("prompt-sync")();
const containDub=[];
const size=parseInt(prompt("Enter the size of an array"))
for (let i = 0; i < size; i++) {
    containDub[i] = parseInt(prompt(`Enter the element at index ${i + 1}: `));
  }
  console.log("the first array is :", containDub);

let res=removeDublicates(containDub);
console.log(res);
