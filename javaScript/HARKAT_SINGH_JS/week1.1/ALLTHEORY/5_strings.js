// 1==> function to find out the length of string
function getLength(str){
    console.log("original string :",str);
    console.log("length",str.length);
    
}

// 2==> function to find out the index of a particular string

function findTheIndex(str,target){
    console.log("original string :",str);
    console.log("index :",str.indexOf(target));
    
}
findTheIndex("hello world","world");

// 2==>suppose we have the same name repetedly and i want the index of the last element then 
 
 
function findTheIndex(str,target){
    console.log("original string :",str);
    console.log("index :",str.lastIndexOf(target));
    
}
findTheIndex("hello world world world","world");

// 3==> how to use the silice function to extract a part of a string  in it

function getSlice(str,start,end){
    console.log("original string :",str);
    console.log("string after slice :",str.slice(start,end));
    
}
getSlice("hellohi world",0,5);// note first index is inclusive and the last one is exclusive 

// 4==> the substring function that works far similar to slice method

function getSubstring(str, start, end) {
    console.log("Original String:", str);
    console.log("After substring:", str.substring(start, end));
  }
  getSubstring("Hello World", 0, 5);

// 5==> replacing the orginal given with the desired string

function replaceString(str,target,replacement){
    console.log("original string :",str);
    console.log("After replacemnet",str.replace(target,replacement   ));
    
}
replaceString("Hello World", "World", "JavaScript");

// 6==> toUpperCase
function toUpper(str) {
    console.log("Original String:", str);
    console.log("After toUpperCase:", str.toUpperCase());
  }
  toUpper("Hello World");
  
  // 7==> toLowerCase
  function toLower(str) {
    console.log("Original String:", str);
    console.log("After toLowerCase:", str.toLowerCase());
  }
  toLower("Hello World");

  // 8==> if i want to split the given strings in it then

  const value=" my name is rohit singh";
  let newValue=value.split(" ");
  let somedifferntType=value.split("");// for all the particular words 
  let oneSingleArray=value.split(",");

  console.log(newValue);
  console.log(somedifferntType);
  console.log(oneSingleArray);
  
  
  