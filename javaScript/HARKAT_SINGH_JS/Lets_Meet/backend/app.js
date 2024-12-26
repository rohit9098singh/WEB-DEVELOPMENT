import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routes/UserRouter.js";
import mongoDb from "./config/db.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json({ limit: "10kb" }));
app.use(cors({ origin: "*", methods: ["GET", "POST", "PATCH", "DELETE", "PUT"] }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev")); //habdjoa

// Rate limiter
const limiter = rateLimit({
  max: 3000,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests, please try again later.",
});
app.use("/api", limiter);

// Security middlewares
app.use(mongoSanitize());
app.use(xss());

// Connect to MongoDB
mongoDb();

// Routes
app.use("/api/user", userRouter);

// Global error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({ message: err.message || "Internal Server Error" });
});

export default app;
