import React, { useState } from "react";
import loginLogo from "../assets/login.webp";
import { BiHide, BiShow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { imagetoBase64 } from "../utility/imagetoBase64";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Make sure to import Toastify's CSS

function SignUp() {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
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

  const handleUploadProfileImage = async (e) => {
    const base64Data = await imagetoBase64(e.target.files[0]);
    setData((prev) => ({
      ...prev,
      image: base64Data,
    }));
  };

  const serverDomain = import.meta.env.VITE_SERVER_DOMAIN;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, email, password, confirmPassword } = data;
  
    if (firstName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        if (password.length < 6) {
          toast.error("Password must be at least 6 characters long");
          return;
        }
        try {
          const response = await fetch(`${serverDomain}/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
          const resdata = await response.json();
          console.log(resdata)
  
          if (response.ok) {
            toast.success(`${resdata.newUser.firstName} ${resdata.message}`);
            localStorage.setItem("user", JSON.stringify(resdata));
            setTimeout(()=>{
              navigate("/login");
            },1000)
            console.log(resdata);
          } else {
            toast.error(`Error: ${resdata.message || "Failed to create account"}`);
          }
        } catch (error) {
          console.error("Network error:", error);
          toast.error("A network error occurred. Please try again later.");
        }
      } else {
        toast.error("Passwords do not match.");
      }
    } else {
      toast.error("Please fill in all required fields.");
    }
  };
  

  return (
    <div className="p-4 md:p-6 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6">
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 overflow-hidden rounded-full shadow-md mb-2 relative">
            <img
              src={data.image || loginLogo}
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <label htmlFor="profileImage">
              <div className="absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-25 w-full text-center cursor-pointer">
                <p className="text-sm p-1 text-white">Upload</p>
              </div>
              <input
                type="file"
                id="profileImage"
                accept="image/*"
                className="hidden"
                onChange={handleUploadProfileImage}
              />
            </label>
          </div>
          <h1 className="text-center text-2xl font-bold text-gray-800">Sign Up</h1>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <InputField
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Enter your first name"
            value={data.firstName}
            onChange={handleOnChange}
          />

          <InputField
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Enter your last name"
            value={data.lastName}
            onChange={handleOnChange}
          />

          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={data.email}
            onChange={handleOnChange}
          />

          <PasswordField
            label="Password"
            name="password"
            value={data.password}
            placeholder="Enter your password"
            passwordVisible={passwordVisible}
            togglePasswordVisibility={togglePasswordVisibility}
            onChange={handleOnChange}
          />

          <PasswordField
            label="Confirm Password"
            name="confirmPassword"
            value={data.confirmPassword}
            placeholder="Confirm your password"
            passwordVisible={passwordVisible}
            togglePasswordVisibility={togglePasswordVisibility}
            onChange={handleOnChange}
          />

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
      <ToastContainer />
    </div>
  );
}

const InputField = ({ label, name, type, placeholder, value, onChange }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      value={value}
      className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={onChange}
    />
  </div>
);

const PasswordField = ({ label, name, value, placeholder, passwordVisible, togglePasswordVisibility, onChange }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
    <div className="relative flex items-center mt-1">
      <input
        type={passwordVisible ? "text" : "password"}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        className="w-full p-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={onChange}
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
);

export default SignUp;
