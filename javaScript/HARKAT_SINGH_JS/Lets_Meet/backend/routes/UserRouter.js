import express from "express";
import { registerUser, loginUser, sendOtp } from "../controllers/authController.js";

const userRouter = express.Router();

// Define routes
userRouter.post("/signup", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/verify", sendOtp);

export default userRouter;
