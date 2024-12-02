const UserModel = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  console.log(req.body);
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(409).json({
        message: "User already signed in, you can log in.",
        success: false,
      });
    }

    const userModel = new UserModel({ firstName, lastName, email, password });
    userModel.password = await bcrypt.hash(password, 10);
    await userModel.save();

    res.status(200).json({
      message: "Signup successful",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    const errMessage = "Auth failed: email or password is wrong";

    if (!user) {
      return res.status(403).json({
        message: errMessage,
        success: false,
      });
    }

    const isPasswordEqual = await bcrypt.compare(password, user.password);

    if (!isPasswordEqual) {
      return res.status(403).json({
        message: "Your password did not match",
        success: false,
      });
    }

    const secret = process.env.JWT_SECRET;
    const jwtToken = jwt.sign({ email: user.email, _id: user._id }, secret, {
      expiresIn: "24h",
    });

    res.status(200).json({
      message: "Login successful",
      success: true,
      jwtToken,
      email,
      name: `${user.firstName} ${user.lastName} `,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

module.exports = { signup, login };
