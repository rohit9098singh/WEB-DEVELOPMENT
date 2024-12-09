import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { motion } from "framer-motion";

const Result = () => {
  const [image,setImage]=useState(assets.sample_img_1);
  const [isImageLoaded,setisImageLoaded]=useState(false);
  const [loading,setLoading]=useState(false);
  const [input,setInput]=useState("");

  const submitHandler=async (e)=>{
      
  }
  return (
    <motion.form
      initial={{ opacity: 0.2, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      onSubmit={submitHandler} className="flex flex-col items-center gap-4 mt-8">
      {/* Image with Loading Indicator */}
      <div className="relative">
        <img
        
          src={image}
          alt="Generated Content"
          className="rounded-lg max-w-md"
        />
        <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${loading ? "w-full transition-all duration-[10s]":"w-0"} `} />
      </div>
      <p className={!loading ?" hidden" : ""}>Loading....</p>

      {/* Input Field */}
    {!isImageLoaded&&
      <div className="flex items-center w-full max-w-xl rounded-full bg-neutral-500 text-white">
        <input
          onChange={e=>setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="Describe what you want to generate"
          className="placeholder-color flex-1 bg-transparent outline-none px-4 py-2 text-sm placeholder-gray-300"
        />
        <button
          type="submit"
          className="bg-zinc-900 px-10 sm:px-16 py-2 rounded-full text-white hover:bg-zinc-800 transition-all"
        >
          Generate
        </button>
      </div>
    } 
    {isImageLoaded &&
      <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
          <p onClick={()=>{setisImageLoaded(false)}} className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'>Generate Other</p>
          <a href={image} download className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer'>Download</a>
      </div>
    } 
    </motion.form>
  );
};

export default Result;
