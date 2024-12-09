import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";

const Login = () => {
  const [state, setState] = useState("login");
  const { setShowLogin } = useContext(AppContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Simulate form submission
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset(); // Reset the form after submission
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div>
      <div className=" fixed  top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
        <motion.form
          initial={{ opacity: 0.2, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)}
          className="relative bg-white p-10 rounded-xl text-slate-500"
        >
          <h1 className="text-center text-2xl text-neutral-700 font-medium">
            {state}
          </h1>
          <p className="text-sm">Welcome back! Please sign in to continue</p>

          {/* Full Name Field (Shown only in "Signup" state) */}
          {state !== "login" && (
            <>
              <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
                <img src={assets.user_icon} alt="User Icon" />
                <input
                  type="text"
                  {...register("fullName", { required: state !== "login" })}
                  className="outline-none text-sm w-full"
                  placeholder="Full Name"
                />
              </div>
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">
                  Full Name is required.
                </p>
              )}
            </>
          )}

          {/* Email Field */}
          <>
            <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
              <img src={assets.email_icon} alt="Email Icon" />
              <input
                type="email"
                {...register("email", { required: true })}
                className="outline-none text-sm w-full"
                placeholder="Email ID"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">Email is required.</p>
            )}
          </>

          {/* Password Field */}
          <>
            <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
              <img src={assets.lock_icon} alt="Password Icon" />
              <input
                type="password"
                {...register("password", { required: true, minLength: 6 })}
                className="outline-none text-sm w-full"
                placeholder="Password"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.type === "required"
                  ? "Password is required."
                  : "Password must be at least 6 characters."}
              </p>
            )}
          </>

          <p className="text-sm text-blue-600 my-4 cursor-pointer">
            Forgot Password
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 w-full text-white py-2 rounded-full mt-4"
          >
            {state === "login" ? "Login" : "Create Account"}
          </button>

          {/* Switch between Login and Signup */}
          {state === "login" ? (
            <p className="mt-5 text-center">
              Don't have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => setState("Signup")}
              >
                Sign up
              </span>
            </p>
          ) : (
            <p className="mt-5 text-center">
              Already have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => setState("login")}
              >
                Login
              </span>
            </p>
          )}

          {/* Close Button */}
          <img
            onClick={() => {
              console.log("button clicked ");         
              setShowLogin(false)
            }}
            src={assets.cross_icon}
            className="absolute top-5 right-5 cursor-pointer text-black "
            alt="Close Icon"
          />
        </motion.form>
      </div>
    </div>
  );
};

export default Login;
