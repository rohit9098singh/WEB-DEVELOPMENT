"use client";
import { CircleUser, Search } from "lucide-react";
import Image from "next/image";
import React from "react";
import Avatar from "react-avatar";

const Headers = () => {
  return (
    <header className="sticky top-0  ">
      {/* Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055D1] -z-10 filter blur-3xl"></div>

      {/* Header Content */}
      <div className="flex flex-col sm:flex-row justify-between items-center p-3 bg-gray-400/10 shadow-md relative z-10">
        {/* Logo Section */}
        <div className="mb-4 sm:mb-0">
          <Image
            src="/logo.png"
            alt="Trello logo"
            width={100}
            height={100}
            className="w-32 md:w-40 object-contain"
          />
        </div>

        {/* Search and Avatar Section */}
        <div className="flex  justify-between items-center gap-4 w-full sm:w-auto ">
          {/* Search Form */}
          <form className="flex items-center space-x-3 bg-white rounded-lg p-2 shadow-md w-full ">
            <Search className="h-6 w-6 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none px-3 py-2 text-sm font-serif"
            />
            <button
              type="submit"
              className="hidden bg-blue-500 text-white px-3 py-1 rounded-lg "
            >
              Search
            </button>
          </form>

          {/* Avatar */}
          <div >
            <Avatar name={"Rohit Singh"} round color="#0055D1" size="40" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headers;
