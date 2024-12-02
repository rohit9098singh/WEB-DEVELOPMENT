const router=require("express").Router();
const {signupValidation,loginValidation}=require("../middlewares/AuthValidation");

const signup=require("../controllers/AuthController").signup;
const login=require("../controllers/AuthController").login;

router.post("/signup",signup)
router.post("/login",loginValidation,login);

module.exports=router;