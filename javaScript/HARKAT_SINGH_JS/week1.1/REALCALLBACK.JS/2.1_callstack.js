console.log("hi there");

setTimeout(function(){
    console.log("from inside async function");
    
},20000);

setTimeout(function(){
    console.log("from inside async function -2");
    
},10000);

let a=0;
for(let i=0;i<10;i++){
    a=a+i;
}
console.log(a);
