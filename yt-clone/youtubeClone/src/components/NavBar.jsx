import React from "react";
import Avatar from 'react-avatar';
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";


function NavBar() {
  return (
    <div className="navbar flex justify-between items-center px-6 py-2">
      <div className="hamburger flex  items-center w-auto gap-3">
        <AiOutlineMenu className="text-xl cursor-pointer" />
        <img
          src="/yt-icon.png"
          alt="YouTube Icon"
          className=" w-24 cursor-pointer"
        />
      </div>

      {/* Center section: Search box */}
      <div className="searchbox-area flex items-center w-1/2 px-6">
        {/* Search input field */}
        <input
          type="text"
          placeholder="Search"
          className="w-full h-10 px-6  border border-gray-300 rounded-l-full outline-none"
        />
        {/* Search button */}
        <button className="h-10 w-16 flex justify-center items-center bg-gray-100 border border-l-0 border-gray-300 rounded-r-full">
          <CiSearch size={"24px"} />
        </button>
        {/* Microphone icon */}
        <IoMdMic
          size={"38px"}
          className="ml-3 p-2 rounded-full cursor-pointer border border-gray-300 hover:bg-gray-100 hover:shadow-md duration-200"
        />
      </div>

      <div className="right-profile-sec flex items-center space-x-5 ">
         <RiVideoAddLine className="text-2xl" />
         <AiOutlineBell className="text-2xl"/>
         <Avatar src="/profile.jpeg" size={32} round={true} />
      </div>
    </div>
  );
}

export default NavBar;
