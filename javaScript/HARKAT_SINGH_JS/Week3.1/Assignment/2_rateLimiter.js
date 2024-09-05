const express = require("express"); // Corrected import statement
const app = express();

let numberOfRequestsForUser = {}; // Use 'let' for reinitialization

// Rate limiter middleware
const rateLimiter = function(req, res, next) {
  const userId = req.headers["user-id"];

  // When the user makes the first request, the server checks the headers and extracts the user-id as 12345.
  // If the user-id is missing, this block will execute.
  if (!userId) {
    return res.status(400).send("Error: User ID is mandatory, please enter the required userId"); // Use status 400 for missing user ID
  }

  // Check if the user-id is valid (example: check if it's a number or specific format)
  if (typeof userId !== 'string' || !/^\d+$/.test(userId)) { // Assuming valid user-ids are numeric strings
    return res.status(400).send('Error: Invalid User ID format'); // Respond with 400 if user ID is invalid
  }

  // If the user-id is missing, the server would respond with a 400 error and the message
  // "User ID is required." But in our case, the user has provided a valid user-id therefore we must now increment the request count by one right
  // For example: numberOfRequestsForUser = {
  //                                            '12345': 1
  //                                          };
  // If the user sends another request within the same second, the count will be incremented again:
  //    numberOfRequestsForUser = {
  //                                 '12345': 2
  //                               };

  // Initialize the user's request count if not already present
  if (!numberOfRequestsForUser[userId]) {
    numberOfRequestsForUser[userId] = 0;
  }

  // Increment the request count for the user
  numberOfRequestsForUser[userId]++;

  // Check if the user has exceeded the limit
  if (numberOfRequestsForUser[userId] > 5) {
    return res.status(404).send('Error: Rate limit exceeded'); // 404 as per requirement
  }

  // Proceed to the next middleware or route handler
  next();
};

// Use the rate limiter middleware for all routes
app.use(rateLimiter);

// Reset request counts every second using a simple approach
setInterval(() => {
  numberOfRequestsForUser = {}; // Resets the object to an empty state
}, 1000);

// Example route
app.get('/', (req, res) => {
  res.send('Welcome to the Express server!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000 yes it is');
});



// const express = require('express');
// const app = express();

// let numberOfRequestsForUser = {};

// setInterval(() => {
//     numberOfRequestsForUser = {};
// }, 1000)

// app.use(function(req,res,next){
//    const userId=req.headers["user-id"];
//    if(numberOfRequestsForUser[userId]){
//     numberOfRequestsForUser[userId]=numberOfRequestsForUser[userId]+1;
//     if(numberOfRequestsForUser[userId]>5){
//         res.status(404).send("no entry")
//     }
//     else{
//         next();
//     }
//    }
//    else{
//     numberOfRequestsForUser[userId]=1;
//     next();
//    }
// });



// app.get('/user', function(req, res) {
//   res.status(200).json({ name: 'john' });
// });

// app.post('/user', function(req, res) {
//   res.status(200).json({ msg: 'created dummy user' });
// });

// module.exports = app;
