const express=require("express");
const cors= require("cors");
const mongoose=require("mongoose");

const app=express();
app.use(cors());
// app.use(express.json());

app.get("/",(req,res)=>{
    res.send("running  the backend server ")
})

const PORT=process.env.PORT || 8081
app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
    
})