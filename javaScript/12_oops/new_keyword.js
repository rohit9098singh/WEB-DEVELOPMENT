// protypal inheritance behaviour means agar java script engine ko agar kuch nhi milta hai to vo or upper or upper jate rehta 
// hai har mhi manta hai jab tak ke usko vo (null value) na mil jae

function multiplyBy5(num){
    return num*5;
}
multiplyBy5.power=2;// despite we have declared a function we are using a dot operator to access value (shows that function is also an object)..
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

//================================= FUNCTION 2 =============================================

function createUser(username,score){
    this.username=username;
}
createUser.prototype.increment =function(){
    this.score++;
}
createUser.prototype.printMe =function(){
    console.log(`score is ${this.score}`);
}

const chai =new createUser("chai",25);
const tea =new createUser("tea",250); 

/*
  HERE's what happens behind the sceans when the new keyword is used:

  a new object is created: the new keyword initiates the creation of a new javascript object

  a prototype is linked: the newly created objectt gets llinked to the protype
  property of the constructor function. this means that it has access ti properties 
  and method defined on the constructor's progress.

  the constrictor is called:the constructor function is called with the specified 
  argument and this is bound to the newly created object. is no explicit return value is
  specifed from the construcor .javaScript assumes this, the newly creted object, to be the 
  intended return value.

  the new object is returned:after the constructor function has been called,
  if it dosen't return a non-premetive value(object,array,function,etc), the newly created object
  is returned

*/