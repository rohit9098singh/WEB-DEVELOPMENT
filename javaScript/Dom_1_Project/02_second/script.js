// const form=document.querySelector("form");
const calculateButton = document.querySelector(".calculate");

calculateButton.addEventListener('click',function(e){
    e.preventDefault();
    
   const height=parseFloat(document.querySelector(".first-input").value);//direct we get the value of the height but that is in string format
   const weight=parseFloat(document.querySelector(".second-input").value);//NOTE- hum ye dono ko event ke bahar bhi likh sakte but aisa karte nhi hai 
                                                                //kyuke hum chahate hai ke jaise he hum form ko submit kar rahe use time
                                                                 //hum us values ko lena cha rahe hai agr upper he kar denge to height or weight dono me empt vlaue he aayega na..
    const result=document.querySelector("#message");
    result.innerHTML="";
    
    if(height===''|| height<=0|| isNaN(height)){
       result.innerHTML=`please give a valid height ${height} `; 
    }
    else if(weight===''|| weight<=0|| isNaN(weight)){
        result.innerHTML=`please give a valid weight ${weight} `; 
     }
     else{
       const bmi= (weight/((height*height)/10000).toFixed(2));
       result.innerHTML=`<span>${bmi}</span>`;
     }
});