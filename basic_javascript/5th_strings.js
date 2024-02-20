/*Templet literals in strings
  A Way to have embedded expresion in strings
  'this is a templet literals '*/ 
  let special_string=`this is a type what we called as a templet literals and it has number of text`
  console.log(special_string);
 console.log( typeof(special_string));
       
             /*OR */
let object=
{
item:"pen",
cost:10,
 };
let output=`the cost of  ${object.item} is ${object.cost}`;/*also known as string interpoloation*/
console.log(output);            