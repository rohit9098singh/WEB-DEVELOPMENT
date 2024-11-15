const jwt=require("jsonwebtoken")

const ensureAuthenticated=(req,res,next)=>{
    const auth=req.headers["authorization"];
    if(!auth){
        return res.status(403).json({
            message:"Unauthorized, jwt token is required "
        })
    }
    try {
        const decoded=jwt.verify(auth,process.env.JWT_SECRET);// agar sara chiz sahi hai or token expire nhi kiya hai to aage badenge
        req.user=decoded // hum uske data ko req.user me store kar rahe taki usko hum subsequent api me call  kar pae 
        next()
    } catch (error) {
        return res.status(403).json({
            message:"Unauthorized, jwt token is wrong or expired "
        })
    }
}

module.exports=ensureAuthenticated;