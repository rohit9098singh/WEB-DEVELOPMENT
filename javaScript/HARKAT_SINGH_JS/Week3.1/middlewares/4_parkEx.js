const express=require("express");
const app=express();
app.use(express.json());

// function that return a boolean if the age of the person is more than 14  
function isoldEnough(age){
     if(age>=14){
        return true;
     }
     else{
        return false;
     }
}

app.get("/ride1",function(req,res){
    if(isoldEnough(req.query.age)){
        res.json({
            msg:"you have successfully complted your first ride "
        })
    }
    else{
        res.status(403).json({
            msg:"sorry you are under age"
        })
    }
   
});
app.get("/ride2",function(req,res){
    if(isoldEnough(req.query.age)){
        res.json({
            msg:"you have successfully complted your second ride "
        })
    }
    else{
        res.status(403).json({
            msg:"sorry you are under age"
        })
    }
   
});

const port=3000;
app.listen(port,()=>{
    console.log(`the app is listening at port :${port}`);
    
});

// see how the code changes at the next programme 5