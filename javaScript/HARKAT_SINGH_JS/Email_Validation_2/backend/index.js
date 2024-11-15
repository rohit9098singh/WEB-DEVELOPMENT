const express=require("express");
const app=express();
require("dotenv").config();
const cors=require("cors");

const AuthRouter=require("./Routers/AuthRouter");
const productRouter=require("./Routers/ProductRouter")

require("./models/db")

app.use(express.json());
app.use(cors());

const  PORT= process.env.PORT ||  8080

//  ROUTERS
app.use("/auth",AuthRouter)
app.use("/products",productRouter)





app.listen(PORT,()=>{
    console.log(`listening at port http://${PORT}`);
    
})