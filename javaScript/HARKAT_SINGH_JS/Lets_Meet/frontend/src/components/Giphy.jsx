import React, { useRef, useState } from "react";

const Giphy = () => {
  const gridRef = useRef();
  const [isSearchOpen,setIsSearchOpen]=useState(false)

  const toggleGifySearch=()=>{
    setIsSearchOpen((prev)=>!prev)
  }
  return (
    <div ref={gridRef} className="w-full">
      <input 
        type="text"
        placeholder="Search for gif...."
        className="text-black-2 border border-stroke  dark:border-strokedark dark:bg-boxdark-2 dark:text-white dark:placeholder-gray-400 rounded-md p-2 w-full outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Giphy;
