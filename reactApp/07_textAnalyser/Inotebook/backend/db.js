const mongoose = require("mongoose");

const mongoUri = "mongodb+srv://rohit:GZG7rPz9qOuyGOsU@cluster0.q8b4u.mongodb.net/myDatabase"; // Include your database name

const connectTomongo = async () => {
    try {
        await mongoose.connect(mongoUri); // Removed deprecated options
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};

// Export the connection function
module.exports = connectTomongo;
