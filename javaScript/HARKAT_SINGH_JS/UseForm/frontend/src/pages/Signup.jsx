import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log("Submitting the data:", data);
     
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-[900px] h-[500px] flex rounded-xl shadow-lg">
        {/* Left side */}
        <div className="flex-1 bg-teal-500 flex flex-col items-center justify-center rounded-l-xl">
          <h1 className="text-white text-4xl mb-6">Welcome Back</h1>
          <Link to="/login">
            <button
              type="button"
              className="bg-white text-teal-500 py-3 px-8 rounded-full font-semibold text-sm"
            >
              Sign In
            </button>
          </Link>
        </div>

        {/* Right side */}
        <div className="flex-2 bg-white flex flex-col items-center justify-center rounded-r-xl">
          <form
            className="w-[370px] flex flex-col items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-4xl mb-6">Create Account</h1>

            {/* First Name */}
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName", {
                required: { value: true, message: "First name is required" },
                minLength: { value: 3, message: "First name must be at least 3 characters" },
                maxLength: { value: 20, message: "First name must not exceed 20 characters" },
              })}
              className="w-[370px] p-4 rounded-xl bg-gray-200 mb-4 text-sm"
            />
            {errors.firstName && (
              <span className="text-red-500 text-xs">{errors.firstName.message}</span>
            )}

            {/* Last Name */}
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastName", {
                required: { value: true, message: "Last name is required" },
                minLength: { value: 3, message: "Last name must be at least 3 characters" },
                maxLength: { value: 20, message: "Last name must not exceed 20 characters" },
              })}
              className="w-[370px] p-4 rounded-xl bg-gray-200 mb-4 text-sm"
            />
            {errors.lastName && (
              <span className="text-red-500 text-xs">{errors.lastName.message}</span>
            )}

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: { value: true, message: "Email is required" },
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
              className="w-[370px] p-4 rounded-xl bg-gray-200 mb-4 text-sm"
            />
            {errors.email && (
              <span className="text-red-500 text-xs">{errors.email.message}</span>
            )}

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: { value: true, message: "Password is required" },
                minLength: { value: 6, message: "Password must be at least 6 characters" },
                maxLength: { value: 20, message: "Password must not exceed 20 characters" },
              })}
              className="w-[370px] p-4 rounded-xl bg-gray-200 mb-4 text-sm"
            />
            {errors.password && (
              <span className="text-red-500 text-xs">{errors.password.message}</span>
            )}

            {/* Error Message */}
            {error && (
              <div className="w-[370px] p-4 mb-4 text-sm bg-red-500 text-white rounded-xl text-center">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-[180px] py-3 bg-teal-500 text-white rounded-full font-semibold text-sm mt-4 hover:bg-teal-600"
            >
              {isSubmitting ? "Submitting..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
