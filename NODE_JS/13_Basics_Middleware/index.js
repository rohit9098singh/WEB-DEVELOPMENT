// const express=require("express");
// const app=express();

// //application level middleware ==> this cannot be put on a particular middleware rather it is put in a overall page
// const reqfilter=(req,res,next)=>{
//     console.log("request got filter");
//     if(!req.query.age){
//         res.send("please enter your age for the access")
//     }
//     else if(req.query.age<18){
//         res.send("you cannot acces the page");
//     }
//     else{
//         next(); 
//     }
    
// }
// app.use(reqfilter);


// app.get("/",(req,res)=>{
//     res.send("welcome to home page")
// });

// app.get("/about",(req,res)=>{
//     res.send("welcome to the about  page")
// });

// app.get("/users",(req,res)=>{
//     res.send("welcome to the users  page")
// });

// app.listen(3000);



// ======================suppose we have a sceanario to use the restriction to a particular app page only then the code would just simply chnage a bit=====

const express=require("express");
const app=express();

//application level middleware ==> this cannot be put on a particular middleware rather it is put in a overall page
const reqfilter=(req,res,next)=>{
    console.log("request got filter");
    if(!req.query.age){
        res.send("please enter your age for the access")
    }
    else if(req.query.age<18){
        res.send("you cannot acces the page");
    }
    else{
        next(); 
    }
    
}



app.get("/",(req,res)=>{
    res.send("welcome to home page")
});

app.get("/about",(req,res)=>{
    res.send("welcome to the about  page")
});

app.get("/users",reqfilter,(req,res)=>{
    res.send("welcome to the users  page")
});

app.listen(3000);