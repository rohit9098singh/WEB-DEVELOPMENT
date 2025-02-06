import mongoose from "mongoose";

interface ConnectionObject {
    isConnected?: number;
}

const connection: ConnectionObject = {};

export async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log("Already connected to the database");
        return;
    }
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || "");
        connection.isConnected = db.connection.readyState; // Corrected here
        console.log("Connected to the database successfully");
    } catch (error) {
        console.error("Database connection failed:", error); 
        process.exit(1)
    }
}
