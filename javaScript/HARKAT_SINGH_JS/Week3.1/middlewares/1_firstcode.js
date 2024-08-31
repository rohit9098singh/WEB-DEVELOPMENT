/**
 *  Q)how do you do?
 * =>Auth checks?(does this user has fund to visit the respective doctor)
 * => ensure input by the user is valid (bp/blood tests) like are the blood test fine and all like this 
 * 
 *  ================================== PRECHEKS ARE OF TWO TYPES ================================
 * 1=> AUTHENTICATION -> MAKING SURE THAT THIS PERSON IS ACTUALLY LOGED IN OR NOT 
 * 2=> INPUTVALIDATION-> CHECKS THAT YE HE WANTS TO ACESS THIS RESULT BUT HAVE SEND US THE RIGHT INPUT TO US OR NOT 
 * 
 * 
 *======================================= BEFORE WE PROCEED LETS ADD CONSTAINTS TO OUR ROUTES======================= 
 *  1=> USER NEED TO SEND A KIDNEY AS A (QUERY PARAM) WHICH SHOULD BE A NUMBER FROM 1-2(HUMAN ONLY HAS 2 KIDMEYS)
 *  2=> USER SHOULD SEND A USERNAME AND A PASSWORD AS A HEADER
 */

//======================================= UGLY WAY OF DOING =========================================================
                // const express = require("express");
                // const app = express();

                // app.get("/health-checkup", (req, res) => {
                //     // Retrieve query and header parameters
                //     const kidneyId = parseInt(req.query.kidneyId); // Convert kidneyId to an integer
                //     const username = req.headers.username;
                //     const password = req.headers.password;

                //     // Check for valid username and password
                //     if (username !== "rohit" || password !== "pass") {
                //         // Status code 403 for Forbidden: User does not exist or invalid credentials
                //         res.status(403).json({
                //             msg: "User does not exist or invalid credentials",
                //         });
                //         return;
                //     }

                //     // Check for valid kidneyId (must be 1 or 2)
                //     if (kidneyId !== 1 && kidneyId !== 2) {
                //         // Status code 411 for Length Required: Kidney ID input is incorrect
                //         res.status(411).json({
                //             msg: "Wrong input, kidneyId must be 1 or 2",
                //         });
                //         return;
                //     }

                //     // Success response
                //     // Status code 200 for OK: Kidney health checkup is fine
                //     res.status(200).json({
                //         msg: "Your kidney is healthy",
                //     });
                // });

                // // Start the server
                // app.listen(3000, () => {
                //     console.log("Server running on port 3000");
                // });

// suppose if i had to make a another route which makes a kidney replacement so  we will have to make a put request but for
// again i have to make the same changes but as a good develooper i would feel not to do so right
// similar things will also be for the post route cases also 
// we can think of writing a seperate line of code and seperating the logic of it from the main route but that will also not help that
// much because still we will have a bunch of codes  

// therefore when you have to make a lot of checks then you move the checks in some othere place and that other places are callled the middlewares 

//============================================  cleaner way of doing it ===========================================================================

// app.use(express.json()) jo humlog use kar rahe the uska kam ye tha ke supose hume koi middkeware ko har place pe use karna tha to usko app.use ke andar pass on kar dynge 
// jasie ke is programme me hume number of request ko calukate karna tha har request je abdar

// therefore app.use takes a middleware only as a input 



const express = require("express"); // Include express
const app = express();


app.use(express.json()); // To parse JSON bodies

let numberOfRequest=0;
function calnumberOfRequest(req,res,next){
    numberOfRequest++;
    console.log(numberOfRequest);
    
    next();
}
app.use(numberOfRequest);// it is same as including the numberof request in argument of every request

// Middleware for user validation
function userMiddleware(req, res, next) {
    const username = req.headers.username; // Retrieve username from headers
    const password = req.headers.password; // Retrieve password from headers

    if (username !== "Rohit" || password !== "pass") { // Check if credentials are incorrect
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

    if ((kidneyId !== 1 && kidneyId !== 2) || req.headers.password !== "pass") { // Check for invalid kidneyId and correct password
        res.status(405).json({
            msg: "Incorrect inputs"
        });
    } else {
        next(); // Proceed to the next middleware/route handler if kidneyId is valid
    }
}

// Route for health check, requiring both user and kidney validation
app.get("/health-check",  userMiddleware, kidneyMiddleware, function(req, res) {
    res.send("Your kidney is healthy");
});

// Route for kidney check, requiring both user and kidney validation
app.get("/kidney-check",   userMiddleware, kidneyMiddleware, function(req, res) {
    res.send("Your kidney is healthy");
});

// Route for heart check, requiring only user validation
app.get("/heart-check",   userMiddleware, function(req, res) { // No kidney validation needed
    res.send("Your heart is healthy");
});

// Start the server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
