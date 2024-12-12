import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoDb from "./config/db.js";
import userRouter from "./routes/userRouter.js";
import imageRouter from "./routes/imageRoute.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
mongoDb();

// Routes
app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
