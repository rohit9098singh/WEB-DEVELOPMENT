const mongoose=require("mongoose");
console.log("jj")

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model("todo",todoSchema);
module.exports={
     todo:todo //todo: mongoose.model("todo", todoSchema) 
}
