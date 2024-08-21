const express=require("express");
const dbConnect=require("./0_mongodb");

const app=express();

app.use(express.json())

app.get("/",async (req,res)=>{
    let data= await dbConnect();
    data=await data.find().toArray();
    console.log(data);
    res.send(data);
});

app.post("/",async (req,res)=>{
    let data=await dbConnect();
    let result=await data.insert(req.body);
    res.send(req.body);
})

app.listen(3000);