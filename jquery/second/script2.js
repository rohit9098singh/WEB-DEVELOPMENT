for(i=0;i<document.querySelectorAll(".buttons").length;i++){
    document.querySelectorAll(".buttons")[i].addEventListener("click",()=>{
        document.querySelector("h1").style.color="red"
    },false)
}