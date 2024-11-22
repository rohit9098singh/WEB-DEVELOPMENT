const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
    const token = req.header["authorization"];

    if (!token) {
        return res.status(403).json({
            message: "No token provided. It is required."
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({
            message: "Unauthorized, JWT token is incorrect or expired."
        });
    }
};

module.exports = authenticate;
