import React from "react";
import { useState } from "react";
import login from "../assets/login.webp";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";

function Signup() {
  const [passwordVisible,setPasswordVisible]=useState(false);
  return (
    <div className="p-4 md:p-6 flex items-center justify-center">
      <div className="w-full max-w-md m-auto bg-white drop-shadow-md shadow-md rounded-2xl p-6">
        <div className="logo-title flex flex-col items-center mb-6">
          <div className="w-20 h-20 overflow-hidden rounded-full shadow-md mb-4">
            <img src={login} className="w-full h-full  object-cover" />
          </div>
          <h1 className="text-center text-2xl font-bold text text-gray-800">
            signUp
          </h1>
        </div>
        <form className="space-y-4">
           <div>
           <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">firstName</label>
            <input 
              type="text"
              name=""
              placeholder="Enter your first name "
              id="firstName" 
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
            />
           </div>
           <div>
           <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">firstName</label>
            <input 
              type="text"
              name=""
              placeholder="Enter your first name "
              id="firstName" 
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
            />
           </div>
           <div>
           <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">firstName</label>
            <input 
              type="text"
              name=""
              placeholder="Enter your first name "
              id="firstName" 
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
            />
           </div>
           <div>
           <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">firstName</label>
            <input 
              type="text"
              name=""
              placeholder="Enter your first name "
              id="firstName" 
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
            />
           </div>
           <button type="submit" className="bg-blue-500 w-full rounded-xl text-white p-2 font-semibold hover:bg-blue-600 duration-200">
              signUp <span><BiShow/></span> <span><BiHide /></span>
           </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
