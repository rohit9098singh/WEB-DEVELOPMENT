import React, { useState } from "react";
import loginLogo from "../assets/login.webp";
import { BiHide, BiShow } from "react-icons/bi";
import { Link } from "react-router-dom";


function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function togglePasswordVisibility() {
    setPasswordVisible(!passwordVisible);
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      alert("Successfully logged in");
    } else {
      alert("Please enter the required fields");
    }
  };

  return (
    <div className="p-4 md:p-6 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl drop-shadow-md shadow-md p-6">
        {/* Logo and Title */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 overflow-hidden rounded-full shadow-md mb-2">
            <img
              src={loginLogo}
              alt="Login Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-center text-2xl font-bold text-gray-800">Log In</h1>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={data.email}
              id="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={handleOnChange}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative flex items-center mt-1">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                value={data.password}
                id="password"
                placeholder="Enter your password"
                className="w-full p-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={handleOnChange}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {passwordVisible ? <BiHide size={20} /> : <BiShow size={20} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 bg-blue-500 text-white p-2 rounded-md font-semibold hover:bg-blue-600 transition-colors duration-200"
          >
            Log In
          </button>
        </form>

        <p className="flex justify-center mt-2 font-semibold">
          Don't have an account?
          <Link to="/signup" className="text-red-500 ml-1">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
