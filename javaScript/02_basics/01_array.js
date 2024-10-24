const myArray=[0,1,2,3,4,5,6]; 

const myHeros=["shaktiman","naagraj","tipusultan"];

const array= new Array(1,2,3,4);
console.log(array[0]);

// ============================= ARRAY METHODS==========================

myArray.push(6);
myArray.push(7);
myArray.pop();// removes the last element from thr array..
console.log(myArray);

myArray.unshift(9);// adds 9 to the beggining of the array
myArray.shift();// removes the 9 that was added at the beggining

console.log(myArray.includes(9));
console.log(myArray.indexOf(9));
console.log(myArray.indexOf(3));

const newArr=myArray.join();
console.log(myArray);// [0,1,2,3,4,5]
console.log(newArr);//0,1,2,3,4,5
// here both the values are same but the type has been changed

console.log(typeof(myArray));
console.log(typeof(newArr));//string

//================== SLICE AND SPLICE ============================
console.log("A",myArray);
const myn1=myArray.slice(1,3);
console.log(myn1);

console.log("B",myArray);

const myn2=myArray.splice(1,3);
console.log("c",myArray);//splice ky karta hai ke vo pura value metioned index ka nikla deta hai vaha se
console.log("myn2 hg");

