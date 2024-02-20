console.dir(window);
console.dir(window.document);/*we can also directly document without writing windows because windows variable  is gobal and should be decaled or not its a choice */
console.dir(document.body);
console.log(document.body);/*to get the full html code */
console.dir(document.body.childNodes[1]);
//basically the dom is used to access the html code into the javascript 
//it provides the benifits such as if the website has been launched so we cannot make any changes because
//once we refresh all the content will vanish away so the console provides the facilities to acess the html code intp js
//and make sutible changes over here 
                    //EXAMPLE
 document.body.style.background ="green"   
document.body.childNodes[3].innerText="abcd"  
console.dir(document.body.childNodes[2]);
console.dir(document.body.childNodes[3]);
console.dir(document.body.childNodes[4]); 
console.dir(document.body.childNodes[5]);   
//make out the difference what happens when the tag changes from DIR to LOG
console.log("=====================================================================");
console.log(document.body.childNodes[2]);
console.log(document.body.childNodes[3]);
console.log(document.body.childNodes[4]); 
console.log(document.body.childNodes[5]); 
//what the differnece is when we use dir its shows all directory
// but when we use the log then it only properly wehn it comes to tags
//such as h1,h2,div when the sequence comes inside the text part of the content it works as the same
 
/*ACCESING THE HTML TAGS WITH THEIR RESPECTIVE CLASS AND THEIR ID and tags */

  //1st is by id
let heading=document.getElementById("heading");//we need to store this because this returns a value so we need to return some  value
console.log(heading);

  //2nd is by class
  console.log("===============by class-name ==================================");
  let h=document.getElementsByClassName("head");//they returns a html collections for us similar to an array but not exactly an array
  console.log(h);
  console.dir(h);

  //BY THEIR TAGS
  console.log("================by tagName==================================");
  let para = document.getElementsByTagName("p");
  console.log(para);
  console.dir(para);
  
//===========================================================THIS IS DIFFERENT KIND OF A SELECTOR===================================================================
// NAME IS QUERY SELECTOR-->here we can pas class,id,tags all as an argument 
console.log("==================using querySelector============================");
let p= document.querySelector("p");//but ye sirf us tag se mamtching first element deta hai
console.log(p);
console.dir(p);

//but if we want all the element from the matching tags then i can write
let ps= document.querySelectorAll("p");//but ye sirf us tag se mamtching first element deta hai
console.log(ps);
console.dir(ps);
//similar things we can achieve with the classes and id's also....

//==================================================================DOM MANIPULATION========================================================================
/*.tagName-returns the tag for element nodes
  .innerText-returns the text content of the element and all its children
  .innetHtml-returns the plain text or html content in the element in the element
  .textContent:returns the textual content even for hidden elements */
  
  let  div= document.querySelector("div");
  console.dir(div);
  let text=div.innerText;/* div.innerText="i miss u"; but the thing it will erase all other content that was present inside it  */
  console.log(text);

  let text1=div.innerHTML;
  console.log(text1);

let r= heading.textContent;//not working to do later
console.log(r)