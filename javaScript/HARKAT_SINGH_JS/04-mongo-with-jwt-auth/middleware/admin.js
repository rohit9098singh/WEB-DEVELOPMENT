const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../index"); // Import the JWT secret from the config file

// Middleware for handling admin authentication
function adminMiddleware(req, res, next) {
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
        // Verify the token using the JWT_SECRET
        const decodedValue = jwt.verify(token, JWT_SECRET);
        
        // Check if the decoded token has a valid username
        if (decodedValue.username) {
            next(); // Proceed to the next middleware or route handler
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
