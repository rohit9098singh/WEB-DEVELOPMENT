const express=require("express");
const app=express();
app.use(express.json());

app.post("/health-checkup",function(req,res){
    //kidney[1,2] as an
    const kidneys=req.body.kidneys;
    const kidneyLength=kidneys.length;

    res.send("you have "+ kidneyLength +" kidney")
});

// util this what we are seeing is whenever our servre is getting 
// crashed it is showing all the exceptions which we dont want to revel it to the 
// user so for that reson we use the concept of 

//========================= global catches which takes care of aall such error ==============
// basically known as a error handling middleware 
app.use(function(err,req,res,next){
      res.json({
        msg:"sorry somethinng is up with our server please try again"
      })
});
app.listen(3000);