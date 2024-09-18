const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");  // Import the JWT secret from the config file

// Middleware for handling admin authentication
async function adminMiddleware(req, res, next) {
    // Extract the token from the Authorization header
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
        return res.status(401).json({
            msg: "Authorization token is required"
        });
    }

    const [scheme, token] = authHeader.split(" ");

    // Check if the token scheme is "Bearer"
    if (scheme !== "Bearer" || !token) {
        return res.status(401).json({
            msg: "Invalid token format"
        });
    }

    try {
        console.log("JWT_SECRET:", JWT_SECRET);  // Check if JWT_SECRET is valid
        console.log("Token:", token);            // Log the token being passed
        
        // Verify the token using the JWT_SECRET
        const decodedValue = await jwt.verify(token, JWT_SECRET);
        console.log("Decoded Token:", decodedValue);  // Log the decoded token
        
        // Check if the decoded token has a valid username
        if (decodedValue.username) {
            req.user = decodedValue;  // Optionally attach the decoded user to the request object
            next();  // Proceed to the next middleware or route handler
        } else {
            res.status(403).json({
                msg: "You are not authenticated"
            });
        }
    } catch (error) {
        // Handle token verification errors
        res.status(403).json({
            msg: "Invalid or expired token",
            error: error.message
        });
    }
}

module.exports = adminMiddleware;
