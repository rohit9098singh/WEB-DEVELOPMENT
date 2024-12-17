import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../../components/Logo";

export default function EmailVerification({ length }) {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRef = useRef([]);

  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;

    const regex = /^[0-9]$/;
    if (regex.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value.charAt(value.length - 1);
      setOtp(newOtp);

      if (index < length - 1) {
        inputRef.current[index + 1]?.focus();
      }

      if (index === length - 1 && newOtp.every((digit) => digit !== "")) {
        console.log("OTP Entered:", newOtp.join(""));
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      if (index > 0) {
        inputRef.current[index - 1]?.focus();
      }
    }
  };

  return (
    <motion.div
      className="h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-3 dark:bg-dark1"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div className="mb-6" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        <Link to="/">
          <Logo className="mx-auto" />
        </Link>
      </motion.div>

      <motion.div
        className="w-full max-w-md bg-white p-6 shadow-xl rounded-xl dark:bg-dark2"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className="text-2xl font-bold text-black dark:text-white text-center mb-4"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Verify Your Account
        </motion.h1>
        <motion.p
          className="text-sm text-gray-700 text-center mb-6"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Enter the 4-digit code sent to your registered email ID.
        </motion.p>

        <form>
          <motion.div
            className="flex justify-center gap-4 mb-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delayChildren: 0.6, staggerChildren: 0.2 },
              },
            }}
          >
            {otp.map((_, index) => (
              <motion.input
                ref={(e) => (inputRef.current[index] = e)}
                type="text"
                maxLength={1}
                key={index}
                value={otp[index]}
                onChange={(e) => handleChange(index, e)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-10 h-10 text-center text-lg border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-dark3 dark:text-white"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              />
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
          </motion.div>
        </form>
      </motion.div>
    </motion.div>
  );
}
