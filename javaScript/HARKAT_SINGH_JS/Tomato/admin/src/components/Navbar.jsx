import React, { useState } from 'react';
import { FaBars, FaBell, FaSearch, FaUserCircle } from 'react-icons/fa';

const Navbar = ({ handleSidebarToggle }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <div className="bg-gray-800 px-4 py-3 flex justify-between drop-shadow-md fixed w-full top-0 z-50">
      {/* Left Section - Branding */}
      <div className="flex items-center text-xl text-white">
        <FaBars
          className="me-4 cursor-pointer md:hidden"
          onClick={handleSidebarToggle} // Toggling sidebar
        />
        <span className="font-semibold">E-commerce</span>
      </div>

      {/* Right Section - Icons and Search */}
      <div className="flex items-center gap-5">
        {/* Search Bar */}
        <div className="relative hidden md:block">
          <input
            type="text"
            className="w-full py-1 pl-12 rounded shadow outline-none"
            placeholder="Search..."
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">
            <FaSearch />
          </span>
        </div>

        {/* Notification Bell */}
        <div className="text-white relative">
          <FaBell className="w-6 h-6 cursor-pointer" />
        </div>

        {/* User Dropdown */}
        <div className="relative text-white">
          <FaUserCircle
            className="w-6 h-6 cursor-pointer"
            onClick={() => setDropdownVisible(!dropdownVisible)}
          />
          {dropdownVisible && (
            <div className="absolute right-0 mt-2 bg-white text-gray-700 rounded-lg shadow-md w-40">
              <ul className="py-2 text-sm">
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Profile</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Settings</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Log Out</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
