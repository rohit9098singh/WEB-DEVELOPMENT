import React, { useContext } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";



function Navbar({ setLogin }) {
  const { calculateSubtotal, token, setToken } = useContext(StoreContext);
  const navigate=useNavigate()
  const logoutHandler=()=>{
        localStorage.removeItem("token");
        setToken("");
        setTimeout(() => {
          console.log("Navigating.....")
          navigate("/")
        },6000);
       
  }
  return (
    <div className="navbar sticky z-50 flex md:justify-around justify-between items-center px-4 py-4 md:px-6 md:py-4 h-16 top-0 bg-gray-200 text-white shadow-md ">
      {/* Logo Section */}
      <div className="hidden md:block logo h-6 md:h-8">
        <Link to="/">
          <img src={assets.logo} alt="Logo" className="h-full w-auto" />
        </Link>
      </div>
      {/* Hamburger Menu for Small Screens */}
      <div className="menu_toggle flex md:hidden text-3xl">
        <GiHamburgerMenu className="text-red-500" />
      </div>
      {/* Menu Items for Larger Screens */}
      <div className="menu_items hidden md:flex md:items-center">
        <ul className="flex gap-5 md:gap-8 text-gray-700 font-semibold">
          <Link
            to="/"
            className="hover:text-red-500 cursor-pointer transform hover:scale-110 transition-all duration-200 ease-in-out"
          >
            Home
          </Link>
          <a
            href="#ExploreMenu"
            className="hover:text-red-500 cursor-pointer transform hover:scale-110 transition-all duration-200 ease-in-out"
          >
            Menu
          </a>
          <a
            href="#Appdownload"
            className="hover:text-red-500 cursor-pointer transform hover:scale-110 transition-all duration-200 ease-in-out"
          >
            Mobile App
          </a>
          <a
            href="#Footer"
            className="hover:text-red-500 cursor-pointer transform hover:scale-110 transition-all duration-200 ease-in-out"
          >
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
          <Link to="/cart">
            {" "}
            <img src={assets.basket_icon} alt="Basket" className="h-6 w-6" />
          </Link>
          <span
            className={
              calculateSubtotal() === 0
                ? ""
                : "dot bg-red-500 w-2 h-2 rounded-full absolute top-0 right-0"
            }
          ></span>
        </div>
        {!token ? (
          <button onClick={() => setLogin(true)} className="bg-red-500 rounded-lg px-4 py-2 hover:bg-red-600  ">Sign In</button>
        ) : (
          <div className="navbar-profile relative group">
            <img
              src={assets.profile_icon}
              alt="Profile"
              className="cursor-pointer"
            />
            <ul className="nav_pro_dropdown w-[100px]  absolute hidden group-hover:flex flex-col gap-2 bg-[#2f2f2f] p-2 rounded-md border border-red-500 outline outline-2 outline-white list-none right-0 z-10">
              <li className="flex items-center gap-2 cursor-pointer hover:text-red-600 p-1">
                <img src={assets.bag_icon} alt="Orders" className="w-[20px] fill-current text-black"/>
                <p className="">Orders</p>
              </li>
              <hr className="border-red-500 my-1"/>
              <li onClick={logoutHandler} className="flex items-center gap-2 cursor-pointer hover:text-red-600 p-1">
                <img src={assets.logout_icon} alt="Logout" className="w-[20px]"/>
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
