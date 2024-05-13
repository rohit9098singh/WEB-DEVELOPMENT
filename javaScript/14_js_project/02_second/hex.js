

const hexNum=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const button=document.querySelector("#btn");
const color=document.querySelector(".color");

button.addEventListener("click",function(e){
  let hex="#";
  for(let i=0;i<6;i++){
       const randomValue=randomColor();
    hex += hexNum[randomValue];
  }
  document.body.style.backgroundColor=hex;
  color.textContent=hex;
},false);

function randomColor(){
  return Math.floor(Math.random()*hexNum.length);
}
