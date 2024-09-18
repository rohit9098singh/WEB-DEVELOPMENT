const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = express.Router();
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config"); 
 // Correct import

const bcrypt = require('bcryptjs');

router.post('/signup', async (req, res) => {
    console.log("Request received");
    try {
        const { username, password } = req.body;
        console.log(`Username: ${username}, Password: ${password}`);
        
        const existingAdmin = await Admin.findOne({ username });
        if (existingAdmin) {
            return res.status(400).json
            ({ message: "Admin with this username already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("Hashed Password:", hashedPassword);

        await Admin.create({ username: username, password: hashedPassword });

        res.status(201).json({ message: "Admin created successfully" });

    } catch (error) {
        res.status(500).json({ message: "Unable to create admin", error: error.message });
    }
});

router.post('/signin', async (req, res) => {
    const { username, password } = req.body;
    console.log(JWT_SECRET);
    

    if (!username || !password) {
        return res.status(400).json({ msg: "Username and password are required" });
    }

    try {
        const user = await Admin.findOne({ username });
        console.log("JWT_SECRET:", JWT_SECRET);

        if (!user) {
            return res.status(401).json({ msg: "Admin not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ msg: "Incorrect password" });
        }
        
        if (typeof JWT_SECRET !== 'string' || JWT_SECRET.trim() === '') {
            throw new Error('Invalid JWT_SECRET');
        }
        const token = jwt.sign(
            { username: user.username, id: user._id },
            JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ msg: "Signin successful", token });

    } catch (error) {
        res.status(500).json({ msg: "Error during signin", error: error.message });
    }
});
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

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })
});

module.exports = router;



/**
 *   "title":"rahul@gmail.com",
   "description":"by rahul",
   "imagelink":"www.google.com/mom.png",
   "price":4900
 */