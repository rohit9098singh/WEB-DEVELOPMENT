import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";

export default function EmailVerification({ length }) {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  console.log(otp);

  const inputRef = useRef([]);

  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
  
    const regex = /^[0-9]$/;
    if (regex.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
  
      // Auto-focus to next input
      if (index < length - 1) {
        inputRef.current[index + 1]?.focus();
      }
  

      if (index === length - 1 && newOtp.every((digit) => digit !== "")) {
        console.log("OTP Entered:", newOtp.join(""));
        // Add form submission logic here
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
    <div className="h-screen  flex flex-col items-center justify-center overflow-hidden bg-gray-3 dark:bg-dark1">
      <div className="mb-6">
        <Link to="/">
          <Logo className="mx-auto" />
        </Link>
      </div>

      <div className="w-full max-w-md bg-white p-6 shadow-xl rounded-xl dark:bg-dark2">
        <h1 className="text-2xl font-bold text-black dark:text-white text-center mb-4">
          Verify Your Account
        </h1>
        <p className="text-sm text-gray-700 text-center mb-6">
          Enter the 4-digit code sent to your registered email ID.
        </p>

        <form>
          <div className="flex justify-center gap-4 mb-6">
            {otp.map((_, index) => (
              <input
                ref={(e) => (inputRef.current[index] = e)}
                type="text"
                maxLength={1}
                key={index}
                value={otp[index]}
                onChange={(e) => handleChange(index, e)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-10 h-10 text-center text-lg border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-form-strokedark dark:bg-form-input dark:text-white"
              />
            ))}
          </div>
          <span className=" mb-4 mt-4  text-black dark:text-white spacex-2 flex items-center justify-center">
              <p >Did not recieved a code {""} ? <button className="text-blue-500">Resend</button></p>
          </span>
          <div className="text-center ">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200 "
            >
              Verify
            </button>
          </div>
          <span className="text-red flex justify-center items-center">
            <p className="mt-4 font-semibold text-sm">
               Dont't share the verificatiob code with anyone !
            </p> 
          </span>
        </form>
      </div>
    </div>
  );
}
