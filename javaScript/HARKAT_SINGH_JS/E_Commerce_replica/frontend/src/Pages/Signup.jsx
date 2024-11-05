import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Ensure to import Link
import login from "../assets/login.webp";
import { BiShow, BiHide } from "react-icons/bi";
import { imagetoBase64 } from "../utility/imagetoBase64"; // Import the function from its correct path

function Signup() {
  const [passwordVisible, setPasswordVisible] = useState(false); // Fixed duplicate declaration
  const navigate = useNavigate();
  
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: ""
  });

  function togglePasswordVisibility() {
    setPasswordVisible(!passwordVisible);
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUploadProfileImage = async (e) => {
    const data = await imagetoBase64(e.target.files[0]);
    setData((prev) => ({
      ...prev,
      image: data
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., validation, API call)
    console.log(data); // For testing purposes
    // You might want to navigate to another page after successful signup
    // navigate("/some-path");
  };

  return (
    <div className="p-4 md:p-6 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl drop-shadow-md shadow-md p-6">
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 overflow-hidden rounded-full shadow-md mb-2 relative">
            <img
              src={data.image ? data.image : login} // Changed to use `login`
              alt="Login Logo"
              className="w-full h-full object-cover"
            />
            <label htmlFor="profileImage">
              <div className="absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-25 w-full text-center cursor-pointer">
                <p className="text-sm p-1 text-white">Upload</p>
              </div>
              <input
                type="file"
                id="profileImage"
                accept="image/*" // Fixed accept attribute
                className="hidden hover:"
                onChange={handleUploadProfileImage}
              />
            </label>
          </div>
          <h1 className="text-center text-2xl font-bold text-gray-800">Sign Up</h1>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={data.firstName}
              id="firstName"
              placeholder="Enter your first name"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={handleOnChange}
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={data.lastName}
              id="lastName"
              placeholder="Enter your last name"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={handleOnChange}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
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

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="relative flex items-center mt-1">
              <input
                type={passwordVisible ? "text" : "password"}
                name="confirmPassword"
                value={data.confirmPassword}
                id="confirmPassword"
                placeholder="Confirm your password"
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

          <button
            type="submit"
            className="w-full mt-4 bg-blue-500 text-white p-2 rounded-md font-semibold hover:bg-blue-600 transition-colors duration-200"
          >
            Sign Up
          </button>
        </form>
        
        <p className="flex justify-center mt-2 font-semibold">
          Already have an account?
          <Link to="/login" className="text-red-500 ml-1">Log In</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
