// here next which is passed as an argument are a kind of function that should be called for the execution if every prechecks are done properly
// at end the last function need not have to call the next function or  the  take next as a inout parametere 

const express=require("express");

const app=express();

app.get("/health-checkup",function(req,res,next){
    console.log("hi from req1");
    next();
},function(req,res,next){
    console.log("hi there from rew2");
    next();
},function(req,res){
    console.log("hello form the third route ");
    res.send("hello world ")
    
});
app.listen(3000);