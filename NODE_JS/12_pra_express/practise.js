const express=require("express");
const app=express();

app.get("",(req,res)=>{
    res.send("<h1>Welocome,to the home page</h1>");
})

app.get("/about",(req,res)=>{
    res.send(`
      <input type="text" placeholder="username" value="${req.query.name}"/>;
      <button>CLick Me</button> 
        
      `)
});

app.get("/help",(req,res)=>{
    res.send([
        {
            name:"anil",
            email:"anil@rahau232"
        },
        {
            name:"Rohit",
            email:"Rohit@rahau232"
        },

    ]);
})

app.listen(4000);