
import dotenv from "dotenv";
dotenv.config();
import  mongoose from "mongoose";
const connectionString=process.env.MONGODB_URL;

const mongoDb = async () => {
  try {
    await mongoose.connect( connectionString);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

export default mongoDb;

