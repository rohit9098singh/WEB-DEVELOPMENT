import { MagnifyingGlass } from '@phosphor-icons/react'
import React, { useState } from 'react'
import User01 from "../../assets/images/user/user-01.png";
import User02 from "../../assets/images/user/user-02.png";
import User03 from "../../assets/images/user/user-03.png";
import User04 from "../../assets/images/user/user-04.png";
import User05 from "../../assets/images/user/user-06.png";
import User06 from "../../assets/images/user/user-07.png";
import User07 from "../../assets/images/user/user-08.png";
import User08 from "../../assets/images/user/user-09.png";

const List = [
  {
    imgSrc: User01,
    name: "Henry Dholi",
    message: "I cam across your profile and...",
  },
  {
    imgSrc: User02,
    name: "Mariya Desoja",
    message: "I like your confidence 💪",
  },
  {
    imgSrc: User03,
    name: "Robert Jhon",
    message: "Can you share your offer?",
  },
  {
    imgSrc: User04,
    name: "Cody Fisher",
    message: `I'm waiting for your response!`,
  },
  {
    imgSrc: User05,
    name: "Jenny Wilson",
    message: "I came across your profile and...",
  },
  {
    imgSrc: User06,
    name: "Robert Jhon",
    message: "Can you share your offer?",
  },
  {
    imgSrc: User07,
    name: "Cody Fisher",
    message: `I'm waiting for your response!`,
  },
  {
    imgSrc: User08,
    name: "Jenny Wilson",
    message: "I came across your profile and...",
  },
];

const Chatlist = () => {
  return (
    <div className="hidden h-full flex-col lg:flex lg:w-1/4 border-r border-stroke dark:bg-boxdark dark:border-strokedark dark:">
      {/* Header */}
      <div className="sticky top-0 bg-white dark:bg flex items-center justify-between border-b border-stroke dark:bg-boxdark dark:border-strokedark dark:bg-boxdark-1 px-6 py-4 z-10">
        <h3 className="text-lg font-medium text-black dark:text-white">Active Conversation</h3>
        <span className="rounded-md border-[.5px] border-stroke dark:border-strokedark bg-stone-200 px-2 py-0.5  font-medium text-black dark:text-white dark:bg-boxdark-2 cursor-pointer">
          8
        </span>
      </div>

      {/* Search Bar */}
      <div className="px-6 py-4">
        <form className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-xl border  border-stroke bg-stone-200 py-2.5 pl-9 text-sm outline-none focus:ring-1 focus:ring-blue-500  dark:border-strokedark dark:bg-boxdark-2 dark:text-white"
          />
          <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 ">
            <MagnifyingGlass size={20} />
          </button>
        </form>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-auto px-6 pb-4 no-scrollbar">
        {List.map((user, index) => (
          <div
            key={index}
            className="relative flex items-center gap-4 py-3 px-4 rounded-xl hover:bg-stone-200 dark:hover:bg-boxdark-2 cursor-pointer"
          >
            {/* Profile Image */}
            <img
              src={user.imgSrc}
              alt={user.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="relative top-3 right-6 -tranlate-y-1/2 w-2.5 h-2.5 rounded-full bg-green-500"></div>

            {/* User Info */}
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm text-black dark:text-white truncate">
                {user.name}
              </p>
              <p className="text-xs  text-gray-500 dark:text-gray-400 truncate">
                {user.message}
              </p>
            </div>

            {/* Unread Indicator */}
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
          </div>
        ))}
      </div>
    </div>
   
  );
};

export default Chatlist;
