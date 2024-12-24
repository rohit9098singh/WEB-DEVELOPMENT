import UserModel from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import otpGenerator from "otp-generator";
import { catchAsync } from "../utilities/catchAsync.js";
import { promisify } from "util";

// Function to sign JWT token
const signToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Register user
const registerUser = catchAsync(async (req, res, next) => {
  const { name, email, password, retypePassword } = req.body;

  // Check if passwords match
  if (password !== retypePassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  // Check if the email is already registered and verified
  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    if (existingUser.verified) {
      return res.status(400).json({ message: "Email is already registered and verified" });
    } else {
      // If the user is unverified, update their information
      const hashedPassword = await bcrypt.hash(password, 12);
      await UserModel.findOneAndUpdate(
        { email },
        { name, password: hashedPassword },
        { new: true }
      );
      return res.status(200).json({ message: "User information updated successfully" });
    }
  }

  // If no user exists, create a new user
  const hashedPassword = await bcrypt.hash(password, 12);

  const newUser = new UserModel({
    name,
    email,
    password: hashedPassword,
    verified: false, // New users are not verified initially
    status: "Offline", // Set the default status to Offline
  });

  await newUser.save();
  
  req.userId = newUser._id;
  // Pass the control to the OTP verification middleware
  next();
});

// Send OTP for email verification
const sendOtp = catchAsync(async (req, res) => {
  const { userId } = req;

  const otp = otpGenerator.generate(4, {
    upperCaseAlphabets: false,
    lowerCaseAlphabets: false,
    specialChars: false,
    digits: true,
  });

  const otp_expiry_time = Date.now() + 10 * 60 * 1000; // 10 minutes after the OTP is created

  const user = await UserModel.findByIdAndUpdate(
    userId,
    {
      otp: otp.toString(),
      otp_expiry_time: otp_expiry_time
    },
    { new: true, validateModifiedOnly: true }
  );

  // Logic to send OTP via email goes here (use nodemailer)

  res.status(200).json({
    message: "OTP sent successfully"
  });
});

// Verify OTP
const verifyOtp = catchAsync(async (req, res, next) => {
  const { email, otp } = req.body;

  const user = await UserModel.findOne({
    email,
    otp_expiry_time: { $gt: Date.now() },
  });

  if (!user) {
    return res.status(400).json({
      status: "error",
      message: "Email is invalid or OTP expired"
    });
  }

  if (user.verified) {
    return res.status(400).json({
      status: "error",
      message: "Email already verified"
    });
  }

  if (!(await user.correctOtp(otp))) {
    return res.status(400).json({
      status: "error",
      message: "Incorrect OTP"
    });
  }

  user.verified = true;
  user.otp = undefined;

  const updatedUser = await user.save({ new: true, validateModifiedOnly: true });

  const token = signToken(user._id);
  res.status(200).json({
    status: "success",
    message: "OTP verified successfully",
    token,
    user_Id: user._id
  });
});

// Login user
const loginUser = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      status: "error",
      message: "Both email and password are required"
    });
  }

  const user = await UserModel.findOne({ email }).select("+password");
  if (!user || !user.password) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  if (!(await user.correctPassword(password))) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const token = signToken(user._id);
  res.status(200).json({
    message: "Logged in successfully",
    token,
    user_Id: user._id
  });
});

// Protect middleware
const protect = catchAsync(async (req, res, next) => {
  try {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
    } else if (req.cookies.jwt) {
      token = req.cookies.jwt;
    }

    if (!token) {
      return res.status(401).json({
        message: "You are not logged in. Please log in to access the application"
      });
    }

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    const thisUser = await UserModel.findById(decoded.userId);

    if (!thisUser) {
      return res.status(401).json({
        message: "The user belonging to this token no longer exists"
      });
    }

    if (thisUser.passwordChangedAt > decoded.iat) {
      return res.status(401).json({
        message: "User recently changed password. Please log in again."
      });
    }

    req.user = thisUser;
    next();
  } catch (error) {
    console.log("Protect endpoint failed:", error);
    res.status(400).json({
      status: "error",
      message: "Authentication failed"
    });
  }
});

export { registerUser, verifyOtp, sendOtp, loginUser, protect };
