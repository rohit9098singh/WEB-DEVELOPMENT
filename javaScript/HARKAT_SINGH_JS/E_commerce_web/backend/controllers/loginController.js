const loginSchema = require("../type").loginSchema; 
const User=require("../db").User;
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");
const Secret=process.env.jwt_SECRET;

const loginController=async (req,res)=>{
    // const { email, firstName, lastName, password, confirmPassword, image } = req.body;
    
    
    console.log(req.body);
    const {email,password}=req.body;
    try {
        if(!loginSchema.safeParse(req.body).success){
           return res.status(400).json(
            {message:"invalid data "}
           )
        }
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"user not found please signUp first"})
        }

        // comparing the password with the  hash password in the database
        const isValidPassword=await bcrypt.compare(password,user.password)

        if(!isValidPassword){
            return res.status(400).json({message: "invalid password please check !"})
        }

        // agar authentication complete hpogya then uska jwt create kar do
        const token=jwt.sign({email:user.email,userId:user._id},Secret,{expiresIn:"24h"});

        res.status(200).json({message:"loged In succesfully",
            token,
            user
        })
    } catch (error) {
         console.log("Error during the login",error);
         res.status(500).json({message:"server error at here "})
         
    } 
    
}

module.exports= loginController;