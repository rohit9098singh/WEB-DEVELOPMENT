
const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user"); // Correct import
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// User Routes
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send({
            msg: "One of the fields is missing, either the username or the password. Make sure to fill it."
        });
    }
    try {
        await User.create({
             username:username, 
             password:password
             });
        res.send({
            msg: "User created and added to the database successfully"
        });
    } catch (error) {
        res.status(500).send({
            msg: "Error creating the user",
            error: error.message
        });
    }
});


router.post('/signin', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send({
            msg: "One of the fields is missing, either the username or the password. Make sure to fill it."
        });
    }

    try {
        const user = await User.findOne({ username });
        if (!user || user.password !== password) {
            return res.status(401).send({
                msg: "Invalid credentials"
            });
        }
        // Create the token
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });
        res.send({
            token: token
        });
    } catch (error) {
        res.status(500).send({
            msg: "Error during signin request",
            error: error.message
        });
    }
});


router.get('/courses', async (req, res) => {
    try {
        const courses = await Course.find({});
        res.send({
            response: courses
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error retrieving courses",
            error: error.message
        });
    }
});


router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const { courseId } = req.params;
    const user=req.user;
    console.log(user);
    

    try {
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).send({
                msg: "Course not found"
            });
        }

        const user = await User.findById(userId);
        if (user.purchasedCourses.includes(courseId)) {
            return res.status(400).send({
                msg: "Course already purchased"
            });
        }

        user.purchasedCourses.push(courseId);
        await user.save();

        res.send({
            msg: "Course purchased successfully"
        });
    } catch (error) {
        res.status(500).send({
            msg: "Error purchasing the course",
            error: error.message
        });
    }
});


router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const userId = req.user._id;

    try {
        const user = await User.findById(userId).populate("purchasedCourses");
        res.send({
            purchasedCourses: user.purchasedCourses
        });
    } catch (error) {
        res.status(500).send({
            msg: "Error retrieving purchased courses",
            error: error.message
        });
    }
});


module.exports = router