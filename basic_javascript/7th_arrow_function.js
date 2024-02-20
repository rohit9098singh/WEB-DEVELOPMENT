function sum(a,b){/*normal function*/
    return a+b;
}
const newsum=(a,b) =>{    /*this is what we call as a arrow function  */
console.log(5+6);
}
function mul(a,b){/*normal function */
    return a*b;
}
const newmult=(a,b) =>{    /*this is what we call as a arrow function  */
  return a*b;
}
const printhello =()=>{/*without parametrized arrow function */
    console.log("hello");
}
console.log(sum(4,6));
console.log(mul(4,6));
newsum(4,8);
console.log(newmult(5,6));
printhello();