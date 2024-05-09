function logginUserMessage(username){
    if(username === undefined){
        console.log("enter a user name");
        return

    }
    return `${username} just logged in`;
}

console.log(logginUserMessage("hitesh"));
//console.log(logginUserMessage(""));//just logged in
console.log(logginUserMessage());// undefined

//========================================== SHOPPING CART =================================================
 function calculateCartprice(num1){
    return num1;
 }
 console.log(calculateCartprice(100,200,300));// hoga ye ke first value le lega baki aage walla values nhi lega vo uske liye kya karna hoga ke


 function calculateCartprice_1(...num2){// this ... helps to take all the operator called as rest operator
    return num2;
 }
 console.log(calculateCartprice_1(100,200,300));

 //======================================== HOW TO PASS OBJECT AS A FUNCTION ARGS ===========================
 const user={
    username:"hitesh",
    price:199
 }

 function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
 }
 handleobject(user);// we could have even made an object and passed over here
