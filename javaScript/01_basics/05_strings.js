const name="hitesh-hc";
const repoCount= 50;
console.log(name+ repoCount + "value");// not reccomendable
console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);//recomended

// one  more way to declare the string 
const gameName =new stringNumber('rohit');

console.log(gameName[0])//h
console.log(gameName.__proto__);// {}--> seems like empty but it is not
console.log(gameName.lenght); //8

console.log(gameName.toUpperCase()); //HITESH
console.log(gameName.charAt(2)); //t
console.log(gameName.indexOf('t'));//2 

const newString=gameName.substring(0,4);//cannot use negative values at here 
console.log(newString);//hite

const anotherString=gameName.slice[0,4];
const anotherString_1=gameName.slice[-8,4];

const leyString ="    hitesh    ";
console.log(leyString);
console.log(leyString.trim());// remove spaces

const url="https://hitesh.com%20chaoudhary";
console.log(url.replace('%20','-'));//when the user enter spaces in the link it replaces it with %20 which must be replaced by the symbol : -;

console.log(url.includes('hitesh'))// true.

console.log(gameName.split('-'))// [ 'hitesh' ,'hc' ,'com']
