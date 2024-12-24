import React, { useState } from "react";
import { Link } from "react-router-dom";
import signupimage from "../../assets/images/user/chat-signup.svg";
import googleimage from "../../assets/images/user/googleimage.svg";
import { LockKeyhole, LockOpen, Mail, User } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "../../components/Logo.jsx";
import { useForm } from "react-hook-form";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Toggle password visibility
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Replace with actual form submission logic
  };

  return (
    <div>
      <motion.div
        className="border border-stroke dark:border-strokedark shadow-default bg-white dark:bg-boxdark h-screen bg-[url()] flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Section */}
        <motion.div
          className="hidden w-full lg:w-1/2 lg:block"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="py-17 px-26 text-center">
            <Link to="/" className="mb-5.5 inline-block">
              <Logo />
            </Link>
            <motion.p
              className="text-xl font-semibold px-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Join Lets_meet & experience the modern way to connect with people
            </motion.p>
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <img
                src={signupimage}
                className="mt-4 h-40 w-auto object-cover object-center"
                alt="Login"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="border-l-2 rounded-lg border-stroke max-w-[500px] w-full lg:w-1/2 bg-stone drop-shadow-2 shadow-lg dark:bg-boxdark px-10 py-8"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-sm mx-auto">
            <motion.h2
              className="text-2xl text-center font-bold text-black dark:text-white mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Sign up Lets_meet
            </motion.h2>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit(onSubmit)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {/* Name Input */}
              <motion.div
                className="mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Name
                </label>
                <motion.div
                  className="relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.7 }}
                >
                   <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    {...register("name", { required: "Name is required" })}
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                  {errors.name && <p className="text-[rgb(138,29,25)] text-sm">{errors.name.message}</p>}
                  <span className="absolute right-4 top-4">
                    <User />
                  </span>
                </motion.div>
              </motion.div>

              {/* Email Input */}
              <motion.div
                className="mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Email
                </label>
                <motion.div
                  className="relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.7 }}
                >
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    {...register("email", { required: "Email is required" })}
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                  {errors.email && <p className="text-[rgb(138,29,25)] text-sm">{errors.email.message}</p>}
                  <span className="absolute right-4 top-4">
                    <Mail />
                  </span>
                </motion.div>
              </motion.div>

              {/* Password Input */}
              <motion.div
                className="relative mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Password
                </label>
                <motion.input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  {...register("password", { required: "Password is required" })}
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
                {errors.password && <p className="text-[rgb(138,29,25)] text-sm">{errors.password.message}</p>}
                <span 
                  className="absolute right-4 top-8 cursor-pointer"
                  onClick={togglePassword}
                >
                 {showPassword ? <LockOpen/>:<LockKeyhole />} 
                </span>
              </motion.div>

              {/* Retype Password Input */}
              <motion.div
                className="relative mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <label
                  htmlFor="retype-password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Retype Password
                </label>
                <motion.input
                  type={showPassword ? "text" : "password"}
                  id="retype-password"
                  placeholder="Retype your password"
                  {...register("retypePassword", { required: "Please retype your password" })}
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
                {errors.retypePassword && <p className="text-[rgb(138,29,25)] text-sm">{errors.retypePassword.message}</p>}
                <span
                  className="absolute right-4 top-8 cursor-pointer"
                   onClick={togglePassword}
                  >
                  {showPassword ? <LockOpen/>:<LockKeyhole />}
                </span>
              </motion.div>

              {/* Sign up Button */}
              <motion.div
                className="mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.7 }}
              >
                <button
                  type="submit"
                  value="Sign up"
                  className="cursor-pointer w-full mt-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  Sign up
                </button>
              </motion.div>

              {/* Sign up with Google */}
              <motion.button
                className="mt-4 flex w-full items-center justify-center space-x-2 border border-stroke bg-stone-100 p-4 rounded-lg hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <span>
                  <img src={googleimage} alt="Google" />
                </span>
                <p>Sign up with Google</p>
              </motion.button>

              {/* Already have an account */}
              <motion.div
                className="mt-4 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.7 }}
              >
                <p>
                  Already have an account?{" "}
                  <span className="text-blue-600">
                    <Link to="/auth/Login">Sign in</Link>
                  </span>
                </p>
              </motion.div>
            </motion.form>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Signup;
