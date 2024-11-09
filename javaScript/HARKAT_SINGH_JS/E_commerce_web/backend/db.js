const mongoose = require("mongoose");

// User Schema
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String } // Optional image field without length limit
});

// Product Schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { 
    type: String, 
    required: true, 
    enum: ["Fruits", "Vegetables", "Icecream", "Pizza","Rice","Cake","Burger","Sandwitch","Chicken","Idly_Dosa","Paneer"] 
  },
  image: { type: String }, 
  price: { type: Number, required: true, min: 0 },
  description: { type: String, required: true }
});

// Models
const User = mongoose.model("User", userSchema);
const Product = mongoose.model("Product", productSchema);

// Database Connection
const connectionString = process.env.MONGODB_URL || "your-default-connection-string";
mongoose.connect(connectionString)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Failed to connect to MongoDB", err));

module.exports = { User, Product };
