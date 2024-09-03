const express = require("express"); // Include express
const app = express();

app.use(express.json()); // To parse JSON bodies

let numberOfRequest = 0;

// Middleware to count number of requests
function calnumberOfRequest(req, res, next) {
    numberOfRequest++;
    console.log(numberOfRequest);
    next();
}

app.use(calnumberOfRequest); // Corrected middleware usage

// Middleware for user validation
function userMiddleware(req, res, next) {
    const username = req.headers.username.toLowerCase(); // Retrieve username from headers and make it lowercase
    const password = req.headers.password; // Retrieve password from headers

    if (username !== "rohit" || password !== "pass") { // Check if credentials are incorrect
        res.status(403).json({
            msg: "Incorrect input"
        });
    } else {
        next(); // Proceed to the next middleware/route handler if credentials are correct
    }
}

// Middleware for kidney validation
function kidneyMiddleware(req, res, next) {
    const kidneyId = parseInt(req.query.kidneyId); // Retrieve and parse kidneyId from query parameters

    // Check for invalid kidneyId (must be 1 or 2)
    if (kidneyId !== 1 && kidneyId !== 2) {
        res.status(405).json({
            msg: "Incorrect inputs"
        });
    } else {
        next(); // Proceed to the next middleware/route handler if kidneyId is valid
    }
}

// Route for health check, requiring both user and kidney validation
app.get("/health-check", userMiddleware, kidneyMiddleware, function (req, res) {
    res.send("Your kidney is healthy");
});

// Route for kidney check, requiring both user and kidney validation
app.get("/kidney-check", userMiddleware, kidneyMiddleware, function (req, res) {
    res.send("Your kidney is healthy");
});

// Route for heart check, requiring only user validation
app.get("/heart-check", userMiddleware, function (req, res) { // No kidney validation needed
    res.send("Your heart is healthy");
});

// Start the server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
