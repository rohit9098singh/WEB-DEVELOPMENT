const express=require("express");
const app=express();
app.use(express.json());

function isOldEnoughMiddleware(req,res,next){ // this guy has a access to the request object hence can extract value
    const age=req.query.age
    if(age>=14){
        next();
    }
    else{
        res.json({
            msg:"sorry you are not if age yet",
        })
    }
};

// routes jo hai vo ek tarah ka rides jab ek banda andar aa chuka hai to ye man 
// liya jat hai ke vo ticket rakha hai iskiye vo aab us chiz ko check nhi karega 

app.get("/ride1",isOldEnoughMiddleware,function(req,res){  // since middleware is just the series of function call we will just define it here 
     res.json({
        msg:"you have succesfully riden the ride 1 ",
     })
});

app.get("/ride2",isOldEnoughMiddleware,function(req,res){
    res.json({
        msg:"you have succesfully riden the ride 1 ",
    })
});

app.listen(3000);