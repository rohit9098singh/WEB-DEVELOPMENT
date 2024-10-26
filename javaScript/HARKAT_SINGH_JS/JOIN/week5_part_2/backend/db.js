const mongoose=require("mongoose");


const taskSchema=mongoose.Schema({
     title:{
        type:String,
        required:true,
        minlength:1,
        maxlength:100
     },
     description:{
        type: String,
        maxlength: 50,  
        default: '' 
     },
     completed:{
        type:Boolean,
        default:false
     }
})

const task=mongoose.model("task",taskSchema);

module.exports={
    task
}
















/**
 *  ===================================== IF REQUIRED ================================
 * const mongoose = require("mongoose");

// Connect to the MongoDB database
mongoose.connect("mongodb+srv://rohit:GZG7rPz9qOuyGOsU@cluster0.q8b4u.mongodb.net/myAppDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Define the user schema
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensures that each email is unique
        minlength: 5,
        maxlength: 100
    }
});

// Define the task schema
const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100
    },
    description: {
        type: String,
        maxlength: 50,
        default: ''
    },
    completed: {
        type: Boolean,
        default: false
    }
});

// Define the product schema
const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100
    },
    price: {
        type: Number,
        required: true,
        min: 0 // Ensure the price is not negative
    }
});

// Create models for each schema
const User = mongoose.model("User", userSchema); // Collection name will be 'users'
const Task = mongoose.model("Task", taskSchema); // Collection name will be 'tasks'
const Product = mongoose.model("Product", productSchema); // Collection name will be 'products'

// Export the models
module.exports = {
    User,
    Task,
    Product
};

 */