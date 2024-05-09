const buttons=document.querySelectorAll(".button");
const body=document.querySelector("body");

buttons.forEach(function(items){
   console.log(items);
   items.addEventListener('click',function(event){
     console.log(event);// this gives the extra information about the event that has occured here it is a click event
     console.log(event.target) ;//gives the infomation about the element that recievs an event here in this case it is the buttons
     if(event.target.id==="grey"){
        body.style.backgroundColor="grey";
     }
     else if(event.target.id ==="white"){
       body.style.backgroundColor="white";
     } 
     else if(event.target.id==="blue"){
        body.style.backgroundColor="blue";
     }  
    else if(event.target.id==="yellow"){
        body.style.backgroundColor="yellow";
    }    
   });

});

