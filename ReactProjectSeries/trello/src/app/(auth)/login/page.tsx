"use client";
import { Lock, Mail, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-black/70 via-gray-800 to-indigo-900">
      {/* Login Card */}
      <div className="flex w-[90%] max-w-4xl bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Left Image Section */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-blue-400 to-purple-500 items-center justify-center">
          <img
            src="/login_1.svg"
            className="h-4/5 w-auto drop-shadow-lg"
            alt="Login Illustration"
          />
        </div>

        {/* Right Login Section */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 gap-6 p-8">
          {/* Logo */}
          <img
            src="/logo.png"
            className="h-12 w-auto mb-2"
            alt="Logo"
          />
          <p className="text-2xl font-bold text-gray-800">Welcome Back!</p>
          <p className="text-gray-500 text-center text-sm">
            Please log in to access your account.
          </p>

          {/* Email Input */}
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
            />
            <Mail className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500" />
          </div>

          {/* Password Input */}
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
            />
            {showPassword ? (
              <EyeOff
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <Eye
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-md font-semibold shadow-md hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-400 transition duration-200"
          >
            Log In
          </button>

          {/* Google Sign-In Button */}
          <button className="flex items-center justify-center w-full py-3 bg-white border border-gray-300 rounded-md font-semibold shadow-md hover:shadow-lg transition duration-200">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/640px-Google_%22G%22_logo.svg.png"
              className="h-5 mr-3"
              alt="Google Logo"
            />
            Sign In With Google
          </button>

          {/* Registration Link */}
          <div className="flex gap-1 text-sm text-gray-600">
            <p>New here?</p>
            <Link href="/Signup">
              <span className="underline text-indigo-600 hover:text-indigo-500 cursor-pointer">
                Register
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
