require('dotenv').config(); // Load environment variables

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8080;

// MongoDB connection
const connectionString = process.env.MONGODB_URL;
if (!connectionString) {
  console.error("MONGODB_URL is undefined. Check your .env file.");
  process.exit(1);
}

mongoose.connect(connectionString)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Failed to connect to MongoDB", err));

// USER SCHEMA
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50
  },
  lastName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 100
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  confirmPassword: {
    type: String,
    required: true,
    minlength: 6
  },
  image: {
    type: String,
    maxlength: 500 // optional limit
  }
});

// Export the user model
const User = mongoose.model("User", userSchema);

// API routes
app.get("/", (req, res) => {
  res.json("Server is running. Please wait while fetching the data.");
});

app.post("/signup", async (req, res) => {
  const { email, firstName, lastName, password, confirmPassword, image } = req.body;
  
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const newUser = new User({ firstName, lastName, email, password, confirmPassword, image });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error("Error during signup:", err);
    res.status(500).json({ message: "Server error" });
  }
});



// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
