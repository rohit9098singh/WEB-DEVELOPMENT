const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const { username, password } = req.body;
    User.create({
        username: username,
        password: password
    })
    res.json({
        message: "user created successfully"
    })
});

router.get('/courses', async (req, res) => {  // admin walle me vo middle ware se protected tha but isme nhi hai kyuke peeche wale me admin
    // har ek course dekh sakta hai but user sirf published course ko he dekhna chaheye na 
    // Implement listing all courses logic
    try {
        // Fetch all courses from the database
        const allCourses = await Course.find({
            published: true
        });

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

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const courseId = req.params.courseId; // Extract courseId from req.params
    const username = req.headers.username; // Extract username from req.headers

    console.log(`Username: ${username}`);
    console.log(`Course ID: ${courseId}`);

    try {
        // Check if the user exists
        const user = await User.findOne({ username: username });

        if (!user) {
            return res.status(404).json({ msg: "User does not exist!" });
        }

        // Update the user's purchasedCourses array by pushing the courseId
        await User.updateOne(
            { username: username },
            { $push: { purchasedCourses: courseId } } // Correct $push operation
        );

        res.json({
            message: "Course purchased successfully"
        });
    } catch (error) {
        // Handle errors and log them
        console.error(error);
        res.status(500).json({
            message: "Error purchasing course",
            error: error.message
        });
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    try {
        // Find the user by their username and get the purchasedCourses array
        const user = await User.findOne({
            username: req.headers.username
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        console.log(user.purchasedCourses);
        
        // Fetch the courses based on the course ObjectIds stored in purchasedCourses
        const courses = await Course.find({
            _id: { // Corrected from _Id to _id
                "$in": user.purchasedCourses
            }
        });

        res.json({
            courses: courses
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error fetching purchased courses",
            error: error.message
        });
    }
});


module.exports = router