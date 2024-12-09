import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { plans } from '../assets/assets'; // Ensure `plans` is exported correctly from this file
import { AppContext } from '../context/AppContext';
import { motion } from "framer-motion";

const BuyCredit = () => {
  const {user}=useContext(AppContext)
  return (
    <>
      {/* Header Section */}
      <motion.div
       initial={{ opacity: 0.2, y: 50 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 1 }}
       viewport={{ once: true }}
       className="min-h-[35vh] text-center pt-8 mb-6 bg-gray-50">
        <button className="border border-gray-400 px-10 py-2 rounded-lg hover:bg-gray-100 transition-all">
          Our Plans
        </button>
        <h1 className="text-center text-4xl font-bold mt-4 mb-4 sm:mb-6">
          Choose Your Plan
        </h1>
        <p className="text-gray-600 text-lg">
          Select the best plan that fits your needs.
        </p>
      </motion.div>

      {/* Plans Section */}
      <div className="flex flex-wrap justify-center gap-6 px-6 text-left">
        {plans.map((item, index) => (
          <div
            key={index}
            className="bg-white drop-shadow-lg border rounded-lg py-10 px-8 text-gray-600 hover:scale-105 hover:shadow-xl transition-transform duration-500 max-w-sm"
          >
            {/* Icon */}
            <img
              src={assets.logo_icon}
              alt="Plan Icon"
              width={40}
              className="mx-auto mb-4"
            />

            {/* Plan Details */}
            <p className="mt-2 mb-1 font-semibold text-center text-xl text-gray-800">
              {item.id}
            </p>
            <p className="text-sm text-center text-gray-500">{item.desc}</p>

            {/* Price and Credits */}
            <div className="mt-4 text-center">
              <span className="text-3xl font-semibold text-gray-800">
                ${item.price}
              </span>
              <span className="text-gray-500"> / {item.credits} credits</span>
              <button className='w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52'>{user ?"purchase":"Get Started"}</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BuyCredit;
