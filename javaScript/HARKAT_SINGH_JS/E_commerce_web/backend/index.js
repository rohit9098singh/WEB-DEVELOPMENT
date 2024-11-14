const express = require("express");
const cors = require("cors");
require('dotenv').config(); // Load environment variables
const signupController = require("./controllers/signupController");
const loginController =require("./controllers/loginController");
const productController =require("./controllers/productController")
const getProductDetails =require("./controllers/getProductDetails")

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

// =========================================== API routes =========================================
 app.get("/", (req, res) => {
  res.json("Server is running. Please wait while fetching the data.");
});

// 1) SIGNUP CONTROLLER 
 app.post("/signup", signupController);

//2) LOGIN CONTROLLER 
 app.post("/login",loginController)

// 3) PRODUCT SAVING CONTROLLER
app.post("/uploadProduct", productController)

// TO GET ALL THE PRODUCT 
app.get("/getProductDetails",getProductDetails)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});