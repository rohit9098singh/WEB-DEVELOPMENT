/*when ever a function is associated with a object then those functions are only called methods
  for example:-1)toUpperCase->can be used only for strings cannot be used for anything else
  so this types are of functions 
  for each loop are of an example of methods*/

  //syntax for forEach loop :-
  //arr.forEach(callBackFunction)
  //callback is a  function passed as an argument to another function. 
             
            /*EXAMPLE*/
let arr=[1,2,3];
arr.forEach(function printValue(value){// value=value at each index
    console.log(value);
})
           /*WITH ARROW FUNCTION */
  let array=["pune","delhi","tata"];
  array.forEach((values,index)=>
  {
    console.log(values," at index:",index,"and the array is:",array);
    //or
    console.log(values.toUpperCase()," at index:",index,"and the array is:",array);//when we have to perform specific operation with every element of array
  })         


  //what are higher order funvtions:-are those which takes another functions as an arguments or returns the functions therefore for 
  //forEach loop is an example oof higher order functon