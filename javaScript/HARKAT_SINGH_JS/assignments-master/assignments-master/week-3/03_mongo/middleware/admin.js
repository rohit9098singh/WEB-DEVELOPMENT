const {Admin}= require("../db")  //means that you are importing the Admin object or module from the file located at "../db"
// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username; // harkirat@gmail.com
    const password = req.headers.password; /// 123456

    // now the main thing that i want to check is that does this username exist in the admin database;
    // for this i need to get the access of the admin what i have done it above const {Admin}= require("../db");

    Admin.findOne({
        username: username,
        password: password 
    })
    .then(function(value) {
        if (value) {       // THIS BASICALY MEANS WE FOUND AN EXISTING USERNAME SO WE CAN CALL THE NEXT FUNCTION MEANS 
                           //THE CONTROL REACH IN THE ROUTES FOLDER TO ACCESS THE DEFINED MIDDLEWARE THERE 
            next();
        } else {
            res.status(403).json({
                msg: "Admin doesnt exist"
            })
        }
    })
}
module.exports = adminMiddleware;