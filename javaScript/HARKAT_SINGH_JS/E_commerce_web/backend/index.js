const express = require("express");
const cors = require("cors");
require('dotenv').config(); // Load environment variables
const signupController = require("./controllers/signupController");
const loginController =require("./controllers/loginController")

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

// =========================================== API routes =========================================
 app.get("/", (req, res) => {
  res.json("Server is running. Please wait while fetching the data.");
});

// SIGNUP CONTROLLER 
 app.post("/signup", signupController);

// LOGIN CONTROLLER 
 app.post("/login",loginController)
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});