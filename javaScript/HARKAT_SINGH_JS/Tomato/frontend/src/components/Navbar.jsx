import React from "react";
import { assets } from "../assets/frontend_assets/assets";

function Navbar() {
    return (
        <div className="navbar flex justify-between items-center px-6 py-4 ">
            <div className="logo h-8">
                <img src={assets.logo} alt="Logo" className="h-full w-auto " />
            </div>
            {/* Left Side */}
            <div className="menu_items flex items-center ">
                <ul className="flex gap-10 text-gray-700 font-semibold">
                    <li className="hover:text-red-500 cursor-pointer transform hover:scale-110 transition-all duration-200 ease-in-out">
                        Home
                    </li>
                    <li className="hover:text-red-500 cursor-pointer transform hover:scale-110 transition-all duration-200 ease-in-out">
                        Menu
                    </li>
                    <li className="hover:text-red-500 cursor-pointer transform hover:scale-110 transition-all duration-200 ease-in-out">
                        Mobile App
                    </li>
                    <li className="hover:text-red-500 cursor-pointer transform hover:scale-110 transition-all duration-200 ease-in-out">
                        Contact
                    </li>
                </ul>
            </div>

            {/* Right Side */}
            <div className="right-side flex items-center gap-4">
                <img src={assets.search_icon} alt="Search" className="h-6 w-6" />
                <div className="items flex items-center relative">
                    <img src={assets.basket_icon} alt="Basket" className="h-6 w-6" />
                    <span className="dot bg-red-500 w-2 h-2 rounded-full absolute top-0 right-0"></span>
                </div>
                <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600">
                    Sign In
                </button>
            </div>
        </div>
    );
}

export default Navbar;
