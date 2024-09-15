const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://rohit:GZG7rPz9qOuyGOsU@cluster0.q8b4u.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:string,
        required:true
    }
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:{
        type:string,
        required:true,
        unique:true,
    },
    password:{
        type:string,
        required:true 
    },
    purchasedCourse:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"course"
    }
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title:{
        type:string,
        required:true,
    },
    description:{
        type:string,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    imageLink:{
        type:string,
        required:true
    },
    published:{
        type:Boolean,
        default:true
    }
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}