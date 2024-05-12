// object literal 

// const user ={
//     username:"hitesh",
//     loginCount:8,
//     signedIn:true,

//     getUserDetail:function(){
//         console.log("got user details from the database");
//         console.log(`username: ${this.username}`);// is case me agar hum direct username print karwayenge to nhi hoga this. karna hoga hame
//         console.log(this);
//     }
// };
// console.log(user.username);
// console.log(user.getUserDetail);


console.log(this);// here we get an empty object because vo globally declared nhi hai but yahi console pe window objejct print karwa ke dega

//=============================== CONSTRUCTOR ==============================================================================================

   //const promiseOne=new Promise(); // yahi hai construcotr which will be invoked automatically when the function is  called

   function User(username, loginCount, isLoggedIn) {
      this.username = username;
      this.loginCount = loginCount;
      this.isLoggedIn = isLoggedIn;
      return this;
   }

   const userOne =  User("rohit", 12, true);
   const userTwo =  User("amitt", 14, true);
   console.log(userOne);

   // NOTE -> user 2 ko humne kabhi print nhi karwaya
   // but fir bhi usne aapke sare values overide kar de jo ke we will never want

  const userone = new User("rohit", 12, true);// therefore override se bachne ke liye he we add new keyword 
  const usertwo = new User("amitt", 14, true);
  console.log(userone);
  console.log(usertwo);

  console.log(userone.constructor);// it gives the reference of itself only 

