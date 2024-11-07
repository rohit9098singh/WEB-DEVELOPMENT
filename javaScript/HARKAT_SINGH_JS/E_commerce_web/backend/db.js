const mongoose = require("mongoose");

// SCHEMA define
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

// MODEL define
const User = mongoose.model("User", userSchema);

const connectionString = process.env.MONGODB_URL;
if (!connectionString) {
  console.error("MONGODB_URL is undefined. Check your .env file.");
  process.exit(1);
}

//mongoose.connect
mongoose.connect(connectionString)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Failed to connect to MongoDB", err));


module.exports = { User };