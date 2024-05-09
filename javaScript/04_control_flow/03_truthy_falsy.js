const userEmail ="rohit@gamil.com";

if(userEmail){
    console.log("got user email");
}
else{
    console.log("enter user email");
}

//=============SUPPOSE WE HAD AN EMPTY STRING THEN IT DISPLAYS ENYTER USER EMAIL MEANS CONDITION EVALUATES TO FALSE
const userEmail_1 ="";

if(userEmail_1){
    console.log("got user email");
}
else{
    console.log("enter user email");
}

//================ IN CASE OF EMPTY OBJECT THE GOT USE EMAIL ID GETS EXCECUTED THAT MEANS IT EVALUATES TO TRUE

const userEmail_2 =[];

if(userEmail_2){
    console.log("got user email");
}
else{
    console.log("enter user email");
}
if(userEmail_2.length === 0){
    console.log("Array is empty");
}

//NOTE => WE SHOULD KNOW HOW MANY TRUTHY VALUES AND HOW MANY FALSY VALUES ARE THERE WE MUST KNOW 
        
//FALSY VALUE => FALSE,0,-0,Bigint,"",null,undefined,NaN

//TRUTHY VALUES=> "0",'false',"",[],{},function(){}
// false==0 ans= true
//false=="" ans= true
//0=="" ans=true


// tocheck an empty object
const emptyobj={};
if(Object.keys(emptyobj).length === 0)// hota ye hai object.keys ek array deta hai anad array ke upper hum .length property use kar he sakte hai
{
    console.log("object is empty is empty");
}