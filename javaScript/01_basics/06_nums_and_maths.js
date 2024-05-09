const score = 400;// by this java script autoamtically predicts that it was a number but we can explicitly definr it also
console.log(score);//400

const balance=new Number(100);// expicitly defined that it was a number
console.log(balance);//[number: 100]

console.log(balance.toString());// output:100 as the type has been changed to string..
console.log(balance.toString().length);//3

console.log(balance.toFixed(2));// 100.00

const otherNumber=23.444242;
console.log(otherNumber.toPrecision(3));//23.4

const otherNumber1=123.444242;
console.log(otherNumber1.toPrecision(3));// 124

const hundreds=1000000;
console.log(hundreds.toLocaleString());// 1,000,000 according to the us standered

//************************* MATHS ************************************/

console.log(math);
console.log(math.abs(4));//4
console.log(math.abs(-4));//4 positive remains positive but negative becomes positive
console.log(math.round(4.6));//5
console.log(math.ceil(4.44));//5
console.log(math.floor(4.34));//4
console.log(math.min(4,3,5,2));//2


console.log(math.random());//any random value between 0 to 1  means 0.343553434 something

console.log(math.random()*10);// one value will be shifted before the decimal 3.23524242 something this time.
console.log(math.random()*10+1);// because 0 can also be there 0.01 case ke liye we add +1 that even if the value comes 0 +1 makes it 1.

console.log(math.round(math.random()*10)+1);// 1,2,4 like this 

const min =10;
const max =20;
console.log(math.floor(math.random()*(max-min+1)+min));// number will be in between 11 to 20..
