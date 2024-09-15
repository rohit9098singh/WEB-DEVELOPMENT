const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = express.Router();

// Admin Routes

// Signup Route for Admin
router.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body; // Corrected "passsword" typo to "password"

        // Check if the admin with this username already exists
        const existingAdmin = await Admin.findOne({ username });
        if (existingAdmin) {
            return res.status(400).json({
                message: "Admin with this username already exists"
            });
        }

        // Create a new admin in the database
        await Admin.create({
            username: username,
            password: password
        });

        res.status(201).json({
            message: "Admin created successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Unable to create admin",
            error: error.message
        });
    }
})

// POST Route to Create a Course
router.post("/courses", adminMiddleware, async (req, res) => {
    try {
        const { title, description, imageLink, price } = req.body;  // Update to imageLink (capital "L")

        // Create a new course in the database
        const newCourse = await Course.create({
            title: title,
            description: description,
            imageLink: imageLink,  // Update here as well
            price: price
        });
         console.log(newCourse);
         
        res.json({
            message: "Your course has been created successfully",
            courseId: newCourse._id
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating course",
            error: error.message
        });
    }
});


// GET Route to Fetch All Courses
router.get("/courses", adminMiddleware, async (req, res) => {
    try {
        // Fetch all courses from the database
        const allCourses = await Course.find({});
        
        // Send response with the list of courses
        res.json({
            courses: allCourses
        });
    } catch (error) {
        // Handle errors and send error response
        res.status(500).json({
            message: "Error fetching courses",
            error: error.message
        });
    }
});


module.exports = router;