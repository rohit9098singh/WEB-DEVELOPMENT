const mongoose=require("mongoose");


const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model("todo",todoSchema);
module.exports={
     todo:todo //todo: mongoose.model("todo", todoSchema) 
}
