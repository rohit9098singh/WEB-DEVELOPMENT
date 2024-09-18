const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../index");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send({
            msg: "One of the fields is missing, either the username or the password. Make sure to fill it."
        });
    }
    try {
        await User.create({ username, password });
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
    // Implement user signin logic
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send({
            msg: "One of the fields is missing, either the username or the password. Make sure to fill it."
        });
    }

    try {
        const lowerUser = await User.findOne({ username });
        
        if (!lowerUser || lowerUser.password !== password) {
            return res.status(401).send({
                msg: "Invalid credentials"
            });
        }

        // Create the token
        const token = jwt.sign({ userId: lowerUser._id }, JWT_SECRET, { expiresIn: "1h" });
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
    // Implement listing all courses logic
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
    // Implement course purchase logic
    const { courseId } = req.params;
    const userId = req.user._id;

    try {
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).send({
                msg: "Course not found"
            });
        }

        const lowerUser = await User.findById(userId);
        if (lowerUser.purchasedCourses.includes(courseId)) {
            return res.status(400).send({
                msg: "Course already purchased"
            });
        }

        lowerUser.purchasedCourses.push(courseId);
        await lowerUser.save();

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
    // Implement fetching purchased courses logic
    const userId = req.user._id;

    try {
        const lowerUser = await User.findById(userId).populate("purchasedCourses");
        res.send({
            purchasedCourses: lowerUser.purchasedCourses
        });
    } catch (error) {
        res.status(500).send({
            msg: "Error retrieving purchased courses",
            error: error.message
        });
    }
});

module.exports = router;
