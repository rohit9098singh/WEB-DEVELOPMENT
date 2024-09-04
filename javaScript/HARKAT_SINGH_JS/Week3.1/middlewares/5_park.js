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


//================================= NOTE NOTE NOTE ===============================
/**
 * AGAR MUJHE LAGTA HAI KE KOI EK PARTICULAR MIDDLE WARE HAR PLACE PE USE HONE WALLA HAI 
 * THEN HUM KYA KARENGE JAISE KE YAHA PE VO isOldEnough() FUNCTION HAR ROUTE PE USED HAI THEN
 * ANDAR SE HATA KE USKO HUM KYA KARENGE GLOBAL BANA DENGE
 * 
 * app.use(isOldEnoughMiddleware);==> aab ye sare routes pe automatically apply hojata hai
 * 
 * workig sabse pehle ride1/ pe isoldenoughmiddleware chalega fir vo next ke karan vapas se route ke andar walle function ko execute
 * karne lagega 
 * 
 * or ek chiz app.use() functionality jo hai vo sirf or sirf appnse se neeche walle routes ke liye he kam aayenge upper nhi
 * 
 * for exmple:=>
 *  app.use(isOldEnoughMiddleware);
 * 
 * app.get("/ride1",isOldEnoughMiddleware,function(req,res){  // since middleware is just the series of function call we will just define it here 
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
 */