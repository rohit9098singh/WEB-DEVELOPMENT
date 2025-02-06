import { dbConnect } from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";

export async function POST(request: Request) {
  await dbConnect();

  try {
    const { username, email, password } = await request.json();

    // Check if a verified user already exists with the same username or email
    const existingUser = await UserModel.findOne({
      $or: [{ username, isVerified: true }, { email }],
    });

    if (existingUser) {
      return Response.json(
        {
          success: false,
          message: existingUser.email === email
            ? "Email is already registered"
            : "Username is already taken",
        },
        { status: 400 }
      );
    }

    // Check if an unverified user exists with the given email
    let user = await UserModel.findOne({ email });

    const verifyCode = generateOTP();
    const hashedPassword = await bcrypt.hash(password, 10);
    const verifyCodeExpiry = new Date(Date.now() + 3600000); // 1-hour expiry

    if (user) {
      // If user exists but is NOT verified, update password & verification code
      user.password = hashedPassword;
      user.verifyCode = verifyCode;
      user.verifyCodeExpiry = verifyCodeExpiry;
      await user.save();
    } else {
      // Otherwise, create a new user
      user = await UserModel.create({
        username,
        email,
        password: hashedPassword,
        verifyCode,
        verifyCodeExpiry,
        isVerified: false,
        isAcceptingMessage: true,
        messages: [],
      });
    }

    // Send verification email
    const emailResponse = await sendVerificationEmail(email, username, verifyCode);
    if (!emailResponse.success) {
      return Response.json(
        { success: false, message: "Failed to send verification email" },
        { status: 500 }
      );
    }

    return Response.json(
      { 
        success: true, 
        message: user.isVerified
          ? "Password updated successfully. Please verify your email."
          : "User registered successfully. Please verify your email."
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("Error registering user:", error);
    return Response.json(
      { success: false, message: "Error in registering user" },
      { status: 500 }
    );
  }
}

// Helper function to generate a 6-digit OTP
function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}
