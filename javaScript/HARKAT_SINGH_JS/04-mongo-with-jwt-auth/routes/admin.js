const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, User, Course } = require("../db");
const router = express.Router();
const jwt = require("jsonwebtoken");



// Admin Routes
const bcrypt = require('bcryptjs');

router.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if the admin with this username already exists
        const existingAdmin = await Admin.findOne({ username });
        if (existingAdmin) {
            return res.status(400).json({
                message: "Admin with this username already exists"
            });
        }

        // Hash the password before storing
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new admin in the database with hashed password
        await Admin.create({
            username: username,
            password: hashedPassword
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
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            msg: "Username and password are required"
        });
    }

    try {
        // Check if the admin exists
        const user = await Admin.findOne({ username: username });

        if (!user) {
            return res.status(401).json({
                msg: "Admin not found"
            });
        }

        // Compare the hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                msg: "Incorrect password"
            });
        }

        // Generate JWT token if the password is correct
        const token = jwt.sign({
            username: user.username,
            id: user._id
        }, JWT_SECRET, { expiresIn: '1h' });

        res.json({
            msg: "Signin successful",
            token
        });

    } catch (error) {
        res.status(500).json({
            msg: "Error during signin",
            error: error.message
        });
    }
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    try {
        const { title, description, imagelink, price } = req.body;

        const newCourse = Course.create({
            title: title,
            description: description,
            imagelink: imagelink,
            price: price
        })
        console.log(`your course is ${newCourse}`);

        res.status(200).send({
            msg: "your course has been creted successfully",
            course_id: newCourse._id
        })
    } catch (error) {
        res.status(403).send({
            msg: "some error accured to create the course please retry it",
            error: error.message
        })
    }


});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })
});

module.exports = router;