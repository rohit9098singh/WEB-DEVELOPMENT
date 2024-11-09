import React, { useState, useEffect } from "react";
import loginLogo from "../assets/login.webp";
import { BiHide, BiShow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../redux/userSlice";

function Login() {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const userData = useSelector((state) => state.user); // Access user from Redux store

  const dispatch = useDispatch();

  useEffect(() => {
    // Log only if userData is different from previous state
    if (userData) {
      console.log("Redux state updated:", userData);
    }
  }, [userData]); // Trigger useEffect only when userData changes

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const serverDomain = import.meta.env.VITE_SERVER_DOMAIN;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;

    if (email && password) {
      try {
        const response = await fetch(`${serverDomain}/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const resdata = await response.json();
        

        if (response.ok) {
          toast.success(`${resdata.user.firstName} ${resdata.message}`,{
             autoClose: 3000,
          });
          localStorage.setItem("user", JSON.stringify(resdata));
          dispatch(loginRedux(resdata)); // jab login hora hai to hum data ko set kar rahe hai redux ke madat se.......
          setTimeout(() => {
            navigate("/home");
          }, 1000);
          console.log(resdata);
        } else {
          toast.error(`Error: ${resdata.message || "Failed to log in"}`);
        }
      } catch (error) {
        console.error("Network error:", error);
        toast.error("A network error occurred. Please try again later.");
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
              src={loginLogo}
              alt="Login Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-center text-2xl font-bold text-gray-800">Log In</h1>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
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

export default Login;
