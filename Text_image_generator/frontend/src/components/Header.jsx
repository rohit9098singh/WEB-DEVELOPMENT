import React, { useContext } from 'react';
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const {user,setShowLogin}=useContext(AppContext)
  const navigate=useNavigate();
  const onclickHandler=()=>{
    if(user){
      navigate("/result")
    }
    else{
      setShowLogin(true)
    }

  }
  return (
    <motion.div
      className="flex flex-col justify-center items-center my-20"
      initial={{ opacity: 0.2, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Tagline */}
      <motion.div
        className="text-stone-500 inline-flex items-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p>Best text to image generator</p>
        <img src={assets.star_icon} alt="Star Icon" />
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.5 }}
      >
        Turn text to <span className="text-blue-600">image</span> in seconds.
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-center max-w-xl mt-5 text-neutral-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Unleash your creativity with AI. Turn your imagination into visuals in seconds — just type,
        and watch the magic happen.
      </motion.p>

      {/* Button */}
      <motion.button
        onClick={onclickHandler}
        className="sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full shadow-md hover:shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        Generate Images
        <img className="h-6" src={assets.star_group} alt="Star Group" />
      </motion.button>

      {/* Sample Images */}
      <motion.div
        className="flex flex-wrap justify-center mt-16 gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        {Array(6).fill("").map((_, index) => (
          <motion.img
            key={index}
            className="rounded cursor-pointer max-sm:w-10 transition-transform transform"
            src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
            width={70}
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </motion.div>

      {/* Footer Text */}
      <motion.p
        className="mt-2 text-neutral-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        Generated image from pixyImage
      </motion.p>
    </motion.div>
  );
};

export default Header;
