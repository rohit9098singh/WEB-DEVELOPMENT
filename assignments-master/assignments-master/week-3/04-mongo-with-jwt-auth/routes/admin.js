const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin,User, Course } = require("../db");
const router = express.Router(); 
const jwt=require("jsonwebtoken");



// Admin Routes
router.post('/signup',async (req, res) => {
    // Implement admin signup logic
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
});

router.post('/signin', async (req, res) => {
    // Destructure username and password from request body
    const { username, password } = req.body;

    // Check if username and password are provided
    if (!username || !password) {
        return res.status(400).json({
            msg: "Username and password are required"
        });
    }

    try {
        // Check if the user exists in the database
        const user = await User.findOne({ username: username });

        if (!user) {
            return res.status(401).json({
                msg: "User not found"
            });
        }

        // Validate password (assuming password is stored in plain text, but in real applications use hashed passwords)
        if (user.password !== password) {
            return res.status(401).json({
                msg: "Incorrect password"
            });
        }

        // If validation passes, generate JWT token
        const token = jwt.sign({
            username: user.username,
            id: user._id  // Include any other relevant data in the token if needed
        }, JWT_SECRET, { expiresIn: '1h' });  // Set expiration time for security

        // Respond with the token
        res.json({
            msg: "Signin successful",
            token
        });

    } catch (error) {
        // Handle any other errors
        res.status(500).json({
            msg: "Error during signin",
            error: error.message
        });
    }
});


router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
     try {
        const {title,description,imagelink,price}=req.body;
   
        const newCourse=Course.create({
            title:title,
            description:description,
            imagelink:imagelink,
            price:price
        })
        console.log(`your course is ${newCourse}`);
     
        res.status(200).send({
         msg:"your course has been creted successfully",
         course_id: newCourse._id
        })
     } catch (error) {
        res.status(403).send({
            msg:"canot fetch the error",
            error:error.message
        })
     }

   
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response=await Course.find({});

    res.json({
        courses:response
    })
});

module.exports = router;