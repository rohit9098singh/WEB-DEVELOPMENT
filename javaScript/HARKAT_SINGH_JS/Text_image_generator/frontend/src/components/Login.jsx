import React, { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [state, setState] = useState("login");
  const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const endpoint = state === "login" ? "/api/user/login" : "/api/user/register";
    const payload =
      state === "login"
        ? { email: data.email, password: data.password }
        : { name: data.fullName, email: data.email, password: data.password };
  
    try {
      const response = await axios.post(`${backendUrl}${endpoint}`, payload);
      if (response.data.success) {
        const { jwtToken, user } = response.data;
        setToken(jwtToken); 
        setUser(user);
        localStorage.setItem("token", jwtToken); 
        setShowLogin(false);
  
        // Show success toast after successful signup/login
        toast.success(response.data.message || "Success! You are now logged in.");
      } else {
        toast.error(response.data.message || "An error occurred.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An unexpected error occurred.");
    }
  };
  

  // useEffect(() => {
  //   // Check if token exists on page load
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     setToken(token);
  //     // Optionally fetch user info based on token
  //   }
  // }, [setToken]);

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
        <motion.form
          initial={{ opacity: 0.2, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)}
          className="relative bg-white p-10 rounded-xl text-slate-500"
        >
          <h1 className="text-center text-2xl text-neutral-700 font-medium">
            {state === "login" ? "Login" : "Signup"}
          </h1>

          {state !== "login" && (
            <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
              <img src={assets.userProfile} alt="User Icon" width={20} />
              <input
                type="text"
                {...register("fullName", { required: true })}
                className="outline-none text-sm w-full"
                placeholder="Full Name"
              />
            </div>
          )}

          <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
            <img src={assets.email_icon} alt="Email Icon" />
            <input
              type="email"
              {...register("email", { required: true })}
              className="outline-none text-sm w-full"
              placeholder="Email ID"
            />
          </div>

          <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
            <img src={assets.lock_icon} alt="Password Icon" />
            <input
              type="password"
              {...register("password", { required: true })}
              className="outline-none text-sm w-full"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 w-full text-white py-2 rounded-full mt-4"
          >
            {state === "login" ? "Login" : "Create Account"}
          </button>

          <p className="mt-5 text-center">
            {state === "login" ? (
              <>
                Don't have an account?{" "}
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => setState("signup")}
                >
                  Sign up
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => setState("login")}
                >
                  Login
                </span>
              </>
            )}
          </p>

          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            className="absolute top-5 right-5 cursor-pointer text-black"
            alt="Close Icon"
          />
        </motion.form>
      </div>
    </div>
  );
};

export default Login;
