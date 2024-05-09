const jsUsers={
    name:"hitesh",
    "full name":"singh",// isko for hum firstconsole walle method se  nbi kara sakte print dusra wall sab print kara dega
    age:18,
    location:"jaipur",
    email:"p@gamil.com",
    isLoggedIn:false,
    lastLoginDate:["monday","saturday"]
};
console.log(jsUsers.email);
console.log(jsUsers["email"]);

//Note:we can also use symbals here also but the style of using it will differ


const mysym=symbol("key1");

const jsUsers_1={
    name:"hitesh",
    "full name":"singh",
    [mysym]:"mykey1",//will give an error when accesed
    age:18,
    location:"jaipur",
    email:"p@gamil.com",
    isLoggedIn:false,
    lastLoginDate:["monday","saturday"]
};
console.log(jsUsers_1.email);
console.log(jsUsers_1["email"]);

console.log(jsUsers_1["full name"]);// cannot be accesed with the dot operator here

console.log(jsUsers_1.mysym);// this will give the output(mykey) but whats ti note is it is not been used as a symbol
console.log(typeof jsUsers_1.mysym);// string

// if i want  to use it as a symbol then in that case case we use this syntx of square bracket
console.log(jsUsers_1[mysym]);//mykey

//============= since with the dot operator we can change the value if we want that the value should not change the we can use a function called freez

Object.freeze(jsUsers);// after even if i chnage there will be no chnage 
