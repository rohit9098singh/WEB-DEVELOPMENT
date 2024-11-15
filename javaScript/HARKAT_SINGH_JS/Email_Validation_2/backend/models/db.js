require('dotenv').config(); // load environment variables from .env file

const mongoose = require("mongoose");
const connectionString = process.env.MONGODB_URL || "your-default-connection-string";

mongoose.connect(connectionString)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err.message));