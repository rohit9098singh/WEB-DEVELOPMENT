const express=require("express");
const router=express.Router();

//middleware that is specific to this router
// router.use((req,res,next)=>{
//     console.log("time",Date.now());
//     next();
// })

// define the home page route
router.get("/",(req,res)=>{
    req.setEncoding("birds home page")
});

router.get("/about",(req,res)=>{
    console.log("About birds");
})

router.get("/blogpost/:slug",(req,res)=>{
    console.log(`fetch the blog post for ${req.params.slug}`);
})

module.exports=router;