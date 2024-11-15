const { signupValidation, loginValidation } = require("../middlewares/AuthValidation");
const signup = require("./../controllers/AuthController").signup;
const login = require("./../controllers/AuthController").login;
const router=require("express").Router();

// AUTHORIZATION ROUTERS ARE DEFINED AT HERE 
router.post("/signup",signupValidation,signup); //signup ise faida ye hoda ke ye controll yaha par tab aayega jab vo validate hojayega signupValidation se 
router.post("/login",loginValidation,login); 
module.exports=router