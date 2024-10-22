const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://rohit:GZG7rPz9qOuyGOsU@cluster0.q8b4u.mongodb.net/todo")

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model("todo",todoSchema);
module.exports={
     todo:todo //todo: mongoose.model("todo", todoSchema) 
}