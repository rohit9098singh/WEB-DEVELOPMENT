import express from "express";
import { registerUser, loginUser, userCredits, paymentRazorpay } from "../controllers/userController.js";
import authenticate from "../middlewares/Auth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/credits", authenticate, userCredits);
userRouter.post("/pay-razor", authenticate, paymentRazorpay);

export default userRouter;
