module.exports =reqfilter=(req,res,next)=>{
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