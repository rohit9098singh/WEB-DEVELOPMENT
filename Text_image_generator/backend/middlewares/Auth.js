import jwt from "jsonwebtoken";

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token

  if (!token) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "default_secret");
    req.userId = decoded._id; // Attach user ID
    req.email = decoded.email; // Optionally attach email
    next();
  } catch (error) {
    res.status(403).json({ success: false, message: "Invalid token" });
  }
};

export default authenticate;
