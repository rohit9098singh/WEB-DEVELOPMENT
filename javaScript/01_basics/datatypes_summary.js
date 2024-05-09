// PRIMITIVE => they are all call by value when copied their original data refernce is not given but the copy is being provided

// 7 types --> string,number,boolean,null,undefined,symbol,bigInt

console.log("numbers");
const score=100;
const scorevalue=100.3;

const isLoggedIn=false;
const outsideTemp=null;
let userEmail;

const id= symbol('123');
const anotherId= symbol('123');
// although it seems that both contains the same value but then also it is differnet that is the only work of symbol
console.log(id=== anotherId);//false

const bigNumber=242355431434959n;

// NON-PREMTIVE=>They are called by their references

// types --> array,objects,functions

const heros =["shaktiman","maagraj","dojo"];// arrays
console.log(typeof(heros));//object

let myObj={     //objects
    name:"rohit",
    age:22,
}

const myfunction=function(){
 console.log("hello mc");
}
console.log(typeof(myfunction));//function itself



//********************************* MEMORY MANAGEMENT *******************************/
//TWO TYPES--> 1)STACK (USED IN-primitive types),2)HEAP (USED IN-nonprimitive types).

let myYoutubename= "rohitsinghdotcom";
let anothername=myYoutubename;
anohername= "chai or code";
console.log(myYoutubename);//rohitsinghdotcom
console.log(anothername);//chai or code value her has been changed


let userOne={
    email:"user@google.com",
    upi:"user@ibl",

}
let user2=userOne;//will get the exact value as they deal with the references 

user2.email="rohan@123"
console.log(userOne.email);// the value her would have been changed and will be rohan@123 in both the logs
console.log(user2.email);