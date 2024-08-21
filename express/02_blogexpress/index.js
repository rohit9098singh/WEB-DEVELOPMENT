const express=require("express");
const exphbs=require("express-handlebars");
const { engine } = require('express-handlebars'); 


const path=require("path");
const app=express();
const port=3000;

app.engine("handlebars",engine());
app.set("view engine","handlebars");

app.use(express.static(path.join(__dirname,"static")));
app.use("/",require(path.join(__dirname,"routes/blog.js")));

app.listen(port,()=>{
  console.log(`blog app listening at https://localhost:${port}`);
})