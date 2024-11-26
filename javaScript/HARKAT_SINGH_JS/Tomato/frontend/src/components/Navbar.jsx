import React, { useContext } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

function Navbar({setLogin}) {
  const { calculateSubtotal} = useContext(StoreContext);
  return (
    <div className="navbar flex justify-between items-center px-4 py-4 md:px-6 md:py-4 ">
      {/* Logo Section */}
      <div className="hidden md:block logo h-6 md:h-8">
        <Link to="/"><img src={assets.logo} alt="Logo" className="h-full w-auto" /></Link>
      </div>
      {/* Hamburger Menu for Small Screens */}
      <div className="menu_toggle flex md:hidden text-3xl">
         <GiHamburgerMenu/>
      </div>
      {/* Menu Items for Larger Screens */}
      <div className="menu_items hidden md:flex md:items-center">
        <ul className="flex gap-5 md:gap-8 text-gray-700 font-semibold">
          <Link to="/" className="hover:text-red-500 cursor-pointer transform hover:scale-110 transition-all duration-200 ease-in-out">
            Home
          </Link>
          <a href="#ExploreMenu" className="hover:text-red-500 cursor-pointer transform hover:scale-110 transition-all duration-200 ease-in-out">
            Menu
          </a>
          <a href="#Appdownload" className="hover:text-red-500 cursor-pointer transform hover:scale-110 transition-all duration-200 ease-in-out">
            Mobile App
          </a>
          <a href="#Footer" className="hover:text-red-500 cursor-pointer transform hover:scale-110 transition-all duration-200 ease-in-out">
            Contact
          </a>
        </ul>
      </div>

      {/* Right Side */}
      <div className="right-side flex items-center md:gap-4 gap-6">
        <img
          src={assets.search_icon}
          alt="Search"
          className="h-6 w-6 hidden sm:block"
        />
        <div className="items flex items-center relative">
         <Link to="/cart"> <img src={assets.basket_icon} alt="Basket" className="h-6 w-6" /></Link>
          <span className={calculateSubtotal()===0 ? "": "dot bg-red-500 w-2 h-2 rounded-full absolute top-0 right-0"}></span>
        </div>
        <button onClick={()=>setLogin(true)} className="bg-red-500 text-white px-2 py-1 md:px-4 md:py-2 md:rounded-full rounded-2xl hover:bg-red-600">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Navbar;
