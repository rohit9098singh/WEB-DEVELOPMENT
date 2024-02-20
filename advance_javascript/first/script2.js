let h2=document.querySelector("h2");
console.dir(h2);
h2.innerText=h2.innerText+"from udemy angela"

let divs=document.querySelectorAll(".box");
console.log(divs[0]);
console.log(divs[1]);
console.log(divs[2]);
//divs[0].innerText="new unique value 2";
//divs[1].innerText="new unique value 2";
//divs[2].innerText="new unique value 2";
/*OR USING FOR OF LOOPS*/
let index=1;
for(div of divs){
    console.log(div.innerText);
    div.innerText=`new unique value ${index}` ;
    index++;
}