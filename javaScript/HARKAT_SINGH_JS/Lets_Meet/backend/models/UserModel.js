import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    passwordChangedAt: {
      type: Date,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    otp: {
      type: String,
    },
    otp_expiry_time: {
      type: Date,
    },
    status: {
      type: String,
      enum: ["Online", "Offline"],
      default: "Offline",
    },
  },
  {
    timestamps: true,
  }
);

// Pre-save hook for OTP
userSchema.pre("save", async function (next) {
  if (!this.isModified("otp") || !this.otp) {
    return next();
  }

  // Hash the OTP with a cost of 12
  this.otp = await bcrypt.hash(this.otp.toString(), 12);
  next();
});

// Pre-save hook for password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password") || !this.password) {
    return next();
  }

  // Hash the password with a cost of 12
  this.password = await bcrypt.hash(this.password.toString(), 12);
  next();
});

// Methods for comparing passwords and OTPs
userSchema.methods.correctOtp = async function (candidateOtp) {
  return await bcrypt.compare(candidateOtp, this.otp);
};

userSchema.methods.correctPassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
