
import dotenv from "dotenv"
dotenv.config();
import mongoose from "mongoose";

const connectionString=process.env.MONGODB_URL;

const mongoDb=async()=>{
    try {
        await mongoose.connect(connectionString);
        console.log("mongoDB connected successfully");
        
    } catch (error) {
        console.error("Error connrcting your database",error)
    }
}

export default mongoDb;