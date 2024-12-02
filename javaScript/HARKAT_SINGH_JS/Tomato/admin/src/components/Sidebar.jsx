import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoAddCircleOutline } from 'react-icons/io5';
import { FaListAlt } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';

const Sidebar = ({ sidebarToggle }) => {
  return (
    <div
      className={`w-64 bg-gray-800 fixed h-full flex flex-col justify-between transition-all z-20 ${
        sidebarToggle ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}
    >
      <div className="p-4">
        <h1 className="text-2xl text-white font-bold mb-4">Admin Dashboard</h1>
        <hr className="border-gray-600 mb-4" />

        {/* Navigation Links */}
        <div className="Elements flex flex-col gap-5">
          <NavLink to="/add" className="text-white flex items-center hover:text-red-500 mb-4">
            <IoAddCircleOutline className="w-6 h-6 mr-2" />
            <h1>Add Item</h1>
          </NavLink>

          <NavLink to="/order" className="text-white flex items-center hover:text-red-500 mb-4">
            <MdOutlineShoppingCart className="w-6 h-6 mr-2" />
            <h1>Order Items</h1>
          </NavLink>

          <NavLink to="/list" className="text-white flex items-center hover:text-red-500 mb-4">
            <FaListAlt className="w-6 h-6 mr-2" />
            <h1>Item List</h1>
          </NavLink>
        </div>
      </div>

      <div className="p-4">
        <NavLink to="/settings" className="text-white flex items-center hover:text-red-500">
          <FiSettings className="w-6 h-6 mr-2" />
          <h1>Settings</h1>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
