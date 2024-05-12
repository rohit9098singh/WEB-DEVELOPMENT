const outer =document.getElementById("outer");
const inner=document.getElementById("inner");
const button=document.getElementById("button");

outer.addEventListener("click",(e)=>{
    console.log("outer element clicked");
},false);

inner.addEventListener("click",(e)=>{
    console.log("inner element clicked");
},false);

button.addEventListener("click",(e)=>{
    console.log("button clicked");
},false)

// button.addEventListener("click",(e)=>{
//     console.log("button clicked");
//     e.stopPropagation() --> they basiclly stop the propogation from here just execute this and refrain the other to execute
// },false)  
//============================================================================================================================
// obove case is only event bubbling
// when true then it is called capturing
