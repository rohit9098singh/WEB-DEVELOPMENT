import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import razorpay from "razorpay";
import transactionModel from "../models/transactionData.js";

// Register User
const registerUser = async (req, res) => {
  try {
    console.log("Registration data", req.body);
    
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields (name, email, password) are required",
        success: false,
      });
    }

    const userExists = await UserModel.findOne({ email });
    if (userExists) {
      return res.status(409).json({
        message: "User already exists. Please log in.",
        success: false,
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userData = { name, email, password: hashedPassword };
    const newUser = new UserModel(userData);
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "24h" });

    res.status(201).json({
      message: "Registration successful",
      newUser: { name: newUser.name },
      success: true,
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
      success: false,
    });
  }
};

// Login User
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Both email and password are required",
        success: false,
      });
    }

    const user = await UserModel.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(403).json({
        message: "Authentication failed. Incorrect email or password.",
        success: false,
      });
    }

    const jwtToken = jwt.sign({ email: user.email, _id: user._id }, process.env.JWT_SECRET, { expiresIn: "24h" });

    res.status(200).json({
      message: "Login successful",
      user: { name: user.name },
      success: true,
      jwtToken,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};

// User Credits (requires authentication)
const userCredits = async (req, res) => {
  try {
    const userId = req.userId;  // Ensure this is set in the middleware after token verification

    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      credits: user.creditBalance,
      user: { name: user.name }
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Razorpay Payment (uncomment if using)
const razorpayInstance = new razorpay({
  key_id: process.env.RAZORPAY_ID_KEY,
  key_secret: process.env.RAZORPAY_SECRET_KEY
});

const paymentRazorpay = async (req, res) => {
  try {
    const userId = req.userId;
    const { planId } = req.body;

    // Validate inputs
    if (!userId || !planId) {
      return res.status(400).json({ success: false, message: "Missing userId or planId" });
    }

    console.log("Plan ID:", planId);
    console.log("User ID:", userId);

    // Check user existence
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Plans configuration
    const plans = {
      Basic: { credit: 100, amount: 10 },
      Advanced: { credit: 500, amount: 50 },
      Business: { credit: 5000, amount: 250 },
    };

    const selectedPlan = plans[planId];
    if (!selectedPlan) {
      return res.status(400).json({ success: false, message: "Invalid plan selected" });
    }

    const { credit, amount } = selectedPlan;

    // Create transaction
    const transactionData = { userId, plan: planId, amount, credit, date: Date.now() };
    const newTransaction = await transactionModel.create(transactionData);

    // Razorpay order creation
    const options = {
      amount: amount * 100, // Amount in paise
      currency: process.env.CURRENCY || "INR",
      receipt: newTransaction._id.toString(),
    };

    const order = await razorpayInstance.orders.create(options);
    res.json({ success: true, order });
  } catch (error) {
    console.error("Payment error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};


export { registerUser, loginUser, userCredits, paymentRazorpay };
