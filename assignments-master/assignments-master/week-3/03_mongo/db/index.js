const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://rohit:GZG7rPz9qOuyGOsU@cluster0.q8b4u.mongodb.net/course_selling_app');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    purchasedCourses: [{   // Make this an array of ObjectIds
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"     // Correct ref to match the model name
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    imageLink:{
        type:String,
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