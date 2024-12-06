import express from "express";
import { placeOrder, createRazorpayOrder, verifyPayment } from "../controllers/orderController.js";
import authenticate from "../middlewares/Auth.js";

const orderRouter = express.Router();

// Place an order
orderRouter.post("/place", authenticate, placeOrder);

// Create a Razorpay order
orderRouter.post("/razorpay/create", authenticate, createRazorpayOrder);

// Verify Razorpay payment
orderRouter.post("/razorpay/verify", authenticate, verifyPayment);

export default orderRouter;
