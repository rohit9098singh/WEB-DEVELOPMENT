import React, { useState } from 'react';
import { assets } from "../assets/frontend_assets/assets";

const UserLogDetails = ({ setLogin }) => {
  const [CurrentState, setCurrentState] = useState("sign up");

  return (
    <div className='userLogDetaits fixed bg-black bg-opacity-60 z-50 flex items-center justify-center h-screen w-screen '>
      <div className='container bg-white w-96 space-y-6 rounded-md p-8 shadow-lg'>
        {/* Title Section */}
        <div className='title flex justify-between items-center pb-4 border-b'>
          <h2 className='font-semibold capitalize text-black text-xl'>{CurrentState}</h2>
          <img 
            src={assets.cross_icon} 
            onClick={() => setLogin(false)} 
            className='cursor-pointer w-5 h-5' 
            alt="Close" 
          />
        </div>

        {/* Input Fields */}
        <div className='input_field flex flex-col gap-6'>
          {CurrentState === "sign up" && (
            <input 
              type="text" 
              placeholder='Your name'
              required 
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          )}
          <input 
            type="email" 
            placeholder='Your email'
            required 
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input 
            type="password" 
            placeholder='Your password'
            required 
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Action Button */}
        <button className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 translation'>
          {CurrentState === "sign up" ? "Sign Up" : "Login"}
        </button>

        {/* Terms and Conditions */}
        <div className='condition flex item-start space-x-2 text-gray-600 text-sm' >
          <input type="checkbox" required />
          <p>By continuing, I agree to the <span className='text-blue-500 underline'>Terms of Use</span> & <span className='text-blue-500 underline'>Privacy Policy.</span> </p>
        </div>

        {/* Toggle State Link */}
        {CurrentState === "Login"
         ?  <p> Create a new account?<span onClick={() => setCurrentState("sign up")} className='cursor-pointer text-blue-500 underline'> Click here </span></p>
         : <p>  Already have an account?{' '}<span onClick={() => setCurrentState("Login")} className='cursor-pointer text-blue-500 underline'>Login here</span>
           </p>
        }
      </div>
    </div>
  );
};

export default UserLogDetails;
