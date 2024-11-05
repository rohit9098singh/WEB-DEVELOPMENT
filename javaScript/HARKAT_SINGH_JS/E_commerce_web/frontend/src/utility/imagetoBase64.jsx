async function imagetoBase64(file) {
  return new Promise((resolve, reject) => {
      const reader = new FileReader();

      // Check if the file is an image
      if (!file || !file.type.startsWith('image/')) {
          reject(new Error("File is not an image"));
          return;
      }

      reader.readAsDataURL(file);

      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => {
          console.error("Error reading file:", err);
          reject(new Error("Failed to read file"));
      };
  });
}

export { imagetoBase64 };

/**
 * require('dotenv').config(); // Load environment variables

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

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Failed to connect to MongoDB", err));

// API routes
app.get("/", (req, res) => {
  res.send("Server is running. Please wait while fetching the data.");
});

app.post("/signup", (req, res) => {
  console.log(req.body);
  res.json("Signup endpoint hit.");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

 */