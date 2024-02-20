//perform some operations and reduce the array to a single value.
//it returns that single value
            
             //EXAMPLE
const array=[1,2,3,4];
const output=array.reduce((previous,curr)=>{
      return previous+curr;
});
console.log(output);
     /*or */
const array1=[1,2,3,4];
const output1=array.reduce((previous,curr)=>{
      return previous>curr?previous:curr;
});
console.log(output1);