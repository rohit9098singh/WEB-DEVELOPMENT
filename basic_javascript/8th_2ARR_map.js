/*                                                MAP METHOD
creats a new array with the result of some operations the value its callback returns are used to form new array */

//SYNTAX:arr.map(callbackfnx(value,index,array))
 
let nums=[45,55,23];
let newarr=nums.map((val)=>{/*here we are trying to create a new array itself */
      return val*val;
})
console.log(newarr)