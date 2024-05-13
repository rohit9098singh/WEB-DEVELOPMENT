let count=0;
const button=document.querySelectorAll(".btn");
const value=document.querySelector("#value");

console.log(button);
button.forEach(function(btn){
    btn.addEventListener("click",function(e){
       console.log( e.currentTarget);
        const style=e.currentTarget.classList;
        if(style.contains("increase")){
            count++;
        }
        else if(style.contains("decrease")){
            count--;
        }
        else{
            count=0;
        }
        if(value>0){
            value.style.color="green"
        }
        if(value<0){
            value.style.color="green"
        }
        if(value==0){
            value.style.color="black"
        }
        value.textContent=count;
    })
})
