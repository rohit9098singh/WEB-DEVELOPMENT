import React, { useState, useContext } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { StoreContext } from "../context/StoreContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UserLogDetails = ({ setLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [CurrentState, setCurrentState] = useState("sign up");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const endpoint = CurrentState === "Login" ? "login" : "signup";
    try {
      const response = await fetch(`${url}/api/user/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        if (CurrentState === "Login") {
          setToken(result.jwtToken);
          localStorage.setItem("token", result.jwtToken);
          toast.success("Login successful!");
          setLogin(false);
        } else {
          toast.success("Signup successful! You can now login.");
          setCurrentState("Login");
        }
      } else {
        toast.error(result.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      console.error(`Error during ${endpoint}:`, error);
      toast.error(`Something went wrong during ${endpoint}.`);
    }
  };


  return (
    <div className="userLogDetails fixed bg-black bg-opacity-60 z-50 flex items-center justify-center h-screen w-screen">
      <div className="container bg-white w-96 space-y-6 rounded-md p-8 shadow-lg">
        {/* Title Section */}
        <div className="title flex justify-between items-center pb-4 border-b">
          <h2 className="font-semibold capitalize text-black text-xl">{CurrentState}</h2>
          <img
            src={assets.cross_icon}
            onClick={() => setLogin(false)}
            className="cursor-pointer w-5 h-5"
            alt="Close"
          />
        </div>

        {/* Input Fields */}
        <form onSubmit={handleSubmit(onSubmit)} className="input_field flex flex-col gap-6">
          {CurrentState === "sign up" && (
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="Your name"
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          )}
          {errors.name && <span className="text-red-500">{errors.name.message}</span>}

          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
            type="email"
            placeholder="Your email"
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}

          <input
            {...register("password", {
              required: "Password is required",
              minLength: { value: 8, message: "Password must be at least 8 characters long" },
            })}
            type="password"
            placeholder="Your password"
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.password && <span className="text-red-500">{errors.password.message}</span>}

          {/* Action Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            {CurrentState === "sign up" ? "Sign Up" : "Login"}
          </button>
        </form>

        {/* Terms and Conditions */}
        <div className="condition flex items-start space-x-2 text-gray-600 text-sm">
          <input
            type="checkbox"
            {...register("terms", { required: "You must agree to the Terms and Privacy Policy" })}
            required
          />
          {errors.terms && (
                 <span className="text-red-500">{errors.terms.message}</span>
          )}
          <p>
            By continuing, I agree to the{" "}
            <span className="text-blue-500 underline">Terms of Use</span> &{" "}
            <span className="text-blue-500 underline">Privacy Policy.</span>
          </p>
        </div>

        {/* Toggle State Link */}
        {CurrentState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => setCurrentState("sign up")}
              className="cursor-pointer text-blue-500 underline"
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setCurrentState("Login")}
              className="cursor-pointer text-blue-500 underline"
            >
              Login here
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default UserLogDetails;
