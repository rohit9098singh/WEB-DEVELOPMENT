let score = 33;
console.log(typeof(score));// number

let score2 = "33";
console.log(typeof(score2));//string

let valueInNumber = Number(score2);
console.log(typeof(valueInNumber));//number as it is typecasted

let score3 = "33abc";
let newscore3 =Number(score3);
console.log(typeof(newscore3));// will retrurn a number which should not happen as it has number as well as letter  
console.log(newscore3);// returns (NaN)=not a number


let score4=null
console.log(typeof(score));//returns object
let newscore4 =Number(score4);
console.log(typeof(newscore4));// number
console.log(newscore4);// in this case it returns (0);


let score5=undefined
console.log(typeof(score));//returns undefined
let newscore5 =Number(score5);
console.log(typeof(newscore5));// returns undefined
console.log(newscore5);//NAN

let score6=boolean;
console.log(typeof(score6));//returns boolean
let newscore6 =Number(score5);
console.log(typeof(newscore6));// return boolean
console.log(newscore6); // returns 1

/*=====================MORE==================== */

let isLoggedIn = 1;//if 0 then false
let booleanIsLoggedIn =boolean(isLoggedIn);
console.log(booleanIsLoggedIn);//true

let isLoggedIn_1 = "";// if "rohit then returns true"
let booleanIsLoggedIn_1 =boolean(isLoggedIn_1);
console.log(booleanIsLoggedIn_1);//false

/*STRINGS */
 
let someNumber = 33;
let stringNumber=string(someNumber);
console.log(someNumber);
console.log(typeof stringNumber);//string
 
// ************************************* OPERATIONS **************************************

let value = 3;
let negValue=-value;
comsole.log(negValue);//-3

let str1="rohit";
let str2=" singh";
let str3 =str1+str2;
console.log(str3);// rohit singh

console.log("1" + 2);//12
console.log(1 + "2");//12
console.log("1" + 2 + 2);//122
console.log(1+ 2 +"2");//32

console.log(true);//true
console.log(+true);// 1 because true aapne aap me boolean hai jisko humne increamnt kiya hai 1 se

