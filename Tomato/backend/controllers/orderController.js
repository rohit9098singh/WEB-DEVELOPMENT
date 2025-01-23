// import orderModel from "../models/orderModel.js";
// import userModel from "../models/userModel.js";
// import Razorpay from "razorpay";
// import crypto from "crypto";

// const { RAZORPAY_ID_KEY, RAZORPAY_SECRET_KEY } = process.env;

// // Create a Razorpay Order
// const createRazorpayOrder = async (req, res) => {
//   try {
//     const razorpay = new Razorpay({
//       key_id: RAZORPAY_ID_KEY,
//       key_secret: RAZORPAY_SECRET_KEY,
//     });

//     const { amount } = req.body;

//     const options = {
//       amount: amount * 100, // Convert to paise
//       currency: "INR",
//       receipt: `receipt_${format(new Date(), "yyyyMMdd_HHmmss")}`,
//     };

//     const order = await razorpay.orders.create(options);//.orders.create(options) is a method provided by the Razorpay API to create a new order.
//     res.status(200).json({ success: true, order });
//   } catch (error) {
//     console.error("Error creating Razorpay order:", error);
//     res.status(500).json({ success: false, error: "Failed to create order" });
//   }
// };

// // Verify Razorpay Payment
// const verifyPayment = async (req, res) => {
//   try {
//     const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

//     const generatedSignature = crypto
//       .createHmac("sha256", RAZORPAY_SECRET_KEY)
//       .update(`${razorpay_order_id}|${razorpay_payment_id}`)
//       .digest("hex");

//     if (generatedSignature === razorpay_signature) {
//       res.status(200).json({ success: true, message: "Payment verified successfully" });
//     } else {
//       res.status(400).json({ success: false, message: "Invalid payment signature" });
//     }
//   } catch (error) {
//     console.error("Error verifying payment:", error);
//     res.status(500).json({ success: false, error: "Failed to verify payment" });
//   }
// };

// // Place an order
// const placeOrder = async (req, res) => {
//   const userId = req.userId;

//   try {
//     const newOrder = new orderModel({
//       userId: userId,
//       items: req.body.items,
//       amount: req.body.amount,
//       address: req.body.address,
//     });

//     await newOrder.save();

//     await userModel.findByIdAndUpdate(userId, { cartData: {} });

//     res.status(200).json({ success: true, message: "Order placed successfully" });
//   } catch (error) {
//     console.error("Error placing order:", error);
//     res.status(500).json({ success: false, error: "Failed to place order" });
//   }
// };

// export { placeOrder, createRazorpayOrder, verifyPayment };

import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Razorpay from "razorpay";
import crypto from "crypto";

// Environment variables
const { RAZORPAY_ID_KEY, RAZORPAY_SECRET_KEY } = process.env;

// Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: RAZORPAY_ID_KEY,
  key_secret: RAZORPAY_SECRET_KEY,
});

// Placing user order for frontend
const placeOrder = async (req, res) => {
  const frontend_url = "http://localhost:5173";
  console.log("the uthenticated user id",req.userId);
  
  try {
    // Step 1: Create a new order
    const newOrder = new orderModel({
      userid: req.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });

    await newOrder.save();

    // Step 2: Clear user cart after order placement
    await userModel.findByIdAndUpdate(req.body.userId, {
      cartData: {},
    });

    // Step 3: Prepare Razorpay order
    const paymentOptions = {
      amount: req.body.amount * 100, // Razorpay accepts amount in paisa
      currency: "INR",
      receipt: `order_rcptid_${newOrder._id}`,
    };

    const razorpayOrder = await razorpay.orders.create(paymentOptions);

    res.json({
      success: true,
      orderId: newOrder._id,
      razorpayOrderId: razorpayOrder.id,
    });
  } catch (error) {
    console.error("Error placing order:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to place order. Please try again.",
    });
  }
};

export { placeOrder };
