const prompt = require("prompt-sync")();
function arrayConcat() {
  const size = parseInt(prompt("Enter the size of an array: "));

  let myArray_1 = [];

  for (let i = 0; i < size; i++) {
    myArray_1[i] = parseInt(prompt(`Enter the element at index ${i + 1}: `));
  }
  console.log("the first array is :", myArray_1);

  let myArray_2 = [];

  for (let i = 0; i < size; i++) {
    myArray_2[i] = parseInt(prompt(`Enter the element at index ${i + 1}: `));
  }
  console.log("the second array is :", myArray_2);

  //    return myArray_1.concat(myArray_2)

  //with loop
  for (let i = 0; i < myArray_2.length; i++) {
    myArray_1.push(myArray_2[i]);
  }

  return myArray_1;
}

console.log("the concatinated array is ", arrayConcat());
