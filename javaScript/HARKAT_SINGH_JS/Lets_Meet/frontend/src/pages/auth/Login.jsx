import React, { useState } from "react";
import Logo from "../../components/Logo.jsx";
import { Link } from "react-router-dom";
import loginImage from "../../assets/images/user/person.avif";
import googleimage from "../../assets/images/user/googleimage.svg";
import { LockKeyhole, LockOpen, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    <div className="border border-stroke dark:border-strokedark shadow-default bg-white dark:bg-boxdark h-screen bg-[url()] flex items-center">
      {/* Left Section */}
      <motion.div
        className="hidden w-full lg:w-1/2 lg:block"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="py-17 px-26 text-center">
          <motion.div
            className="mb-5.5 inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Link to="/">
              <Logo />
            </Link>
          </motion.div>
          <motion.p
            className="text-xl font-semibold px-20 mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Hey there👋, Welcome Back, Login to chat with your friends & colleagues
          </motion.p>
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <img
              src={loginImage}
              className="h-115 w-auto object-cover object-center"
              alt="Login"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="border-l-2 rounded-lg border-stroke max-w-[500px] w-full lg:w-1/2 bg-stone drop-shadow-2 shadow-lg dark:bg-boxdark px-10 py-8"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-sm mx-auto">
          <motion.h2
            className="text-2xl text-center font-bold text-black dark:text-white mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Sign in to Lets_meet
          </motion.h2>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Email
              </label>
              <div className="relative">
                <motion.input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  {...register("email", { required: "Email is required" })}
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none
                    focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                />
                {errors.email && (
                  <p className="text-[rgb(138,29,25)] text-sm">{errors.email.message}</p>
                )}
                <motion.span
                  className="absolute right-4 top-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <Mail />
                </motion.span>
              </div>
            </motion.div>

            <motion.div
              className="relative mt-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
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
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none
                  focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              />
              {errors.password && (
                <p className="text-[rgb(138,29,25)] text-sm">{errors.password.message}</p>
              )}
              <motion.span
                onClick={togglePassword}
                className="absolute right-4 top-8 cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                {showPassword ? <LockOpen /> : <LockKeyhole />}
              </motion.span>
            </motion.div>

            <motion.div
              className="mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
            >
              <motion.button
                type="submit"
                value="Sign in"
                className="cursor-pointer w-full mt-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                Sign In
              </motion.button>
            </motion.div>

            <motion.button
              className="mt-4 flex w-full items-center justify-center space-x-2 border border-stroke bg-stone-100 p-4 rounded-lg hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.7 }}
            >
              <span>
                <img src={googleimage} alt="Google" />
              </span>
              <p>Sign in with Google</p>
            </motion.button>

            <motion.div
              className="mt-4 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.7 }}
            >
              <p>
                Don't have an account?{" "}
                <span className="text-blue-600">
                  <Link to="/auth/Signup">Sign up</Link>
                </span>
              </p>
            </motion.div>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
