const prompt=require("prompt-sync")();

const str=prompt("Enter your desired string of your choice :");

const newStr=str.split("").reverse().join("");
console.log(newStr);

//with loop concept
let strLen=str.length;
let revStr="";


for(let i=strLen-1;i>=0;i--){
       revStr +=str[i];
}

console.log("the length of the string is as follow :",revStr);
