const joi=require("joi");

const signupValidation=(req,res,next)=>{
    const Schema=joi.object({  // ke kis tarah se request aane walle hai server se to object ke form me 
         name:joi.string().min(3).max(100).required(),
         email:joi.string().email().required(),
         password:joi.string().min(4).max(100).required(),
    });

    const {error}=Schema.validate(req.body);

    if(error){
        return res.status(400).json({
            message:"Bad request",
            error:error,
        })
    }
    next();
}

const loginValidation=(req,res,next)=>{
    const Schema=joi.object({  // ke kis tarah se request aane walle hai server se to object ke form me 
         email:joi.string().email().required(),
         password:joi.string().min(4).max(100).required(),
    });

    const {error}=Schema.validate(req.body);

    if(error){
        return res.status(400).json({
            message:"Bad request",
            error:error,
        })
    }
    next();
}

module.exports={
    signupValidation,
    loginValidation
}