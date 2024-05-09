const user={
    username: "hitesh",
    price:999,
    welcomeMessage: function(){
        console.log(`{this.username}, welcome to my website`);
    }

}

user.welcomeMessage();// yah tak to this ke madat se current contet ko print kar re the jo ke value tha but neech hum kya kar re hai ke contrext ko change kar re hai hm

user.username="sam";// context changed
user.welcomeMessage();

//======================================================================================================================================================================
const user_1={
    username_1: "hitesh",
    price_1:999,
    welcomeMessage_1: function(){
        console.log(`{this.username_1}, welcome to my website`);
        console.log(this);
    }

}
user.welcomeMessage();
user.username="sam";// context changed
user.welcomeMessage();

console.log(this);

//=====================================================================================================================================================================
// function chai(){
//     let username="hitesh"
//     console.log(username);
//     console.log(this.username);// undefined
// }

//=======================================================================================================================================================================
const chai =function chai(){
    let username="hitesh"
    console.log(username);
    console.log(this.username);// undefined
}
chai();

//========================================================================================================================================================================

console.log("for arrow function just remove  the function keyword and add an arrow over there");

const chai_1 = () =>{
    let username="hitesh"
    console.log(this);// empty pranthesis {}
    console.log(this.username);// also undefined
}