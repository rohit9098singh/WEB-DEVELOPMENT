import React, { useState } from "react";
import logo from "../assets/singhlogo.jpg";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux"; // Import useDispatch
import { logoutRedux } from "../redux/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch(); 
  console.log("inside header", userData);

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev); // Toggle the state correctly here
  };

  const handleLogout = () => {
    dispatch(logoutRedux()); // Correctly dispatch the logout action
    toast(` logged out succesfully`)

  };

  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 bg-green-200">
      {/* desktop */}
      <div className="flex items-center h-full justify-between">
        <Link to={"/"}>
          <div className="h-12 w-12">
            <img src={logo} alt="Logo" className="h-full w-full rounded-full" />
          </div>
        </Link>
        <div className="flex items-center gap-4 md:gap-7 z-50">
          <nav className="flex space-x-4 md:space-x-6 text-base md:text-lg font-semibold">
            <Link to={"/home"}>Home</Link>
            <Link to={"/menu"}>Menu</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
          </nav>
          <div className="ml-4 text-2xl text-slate-600 relative">
            <FaCartShopping />
            <div className="absolute -top-1 -right-2 text-white bg-red-500 h-5 w-5 text-sm text-center rounded-full flex items-center justify-center">
              {0}
            </div>
          </div>

          <div className="ml-4 text-2xl text-slate-600">
            <div
              className="border border-solid border-slate-600 p-1 rounded-full cursor-pointer"
              onClick={handleShowMenu}
            >
              <FaUserAlt />
            </div>
            {showMenu && (
              <div className="flex flex-col absolute right-2 bg-white mt-2 py-2 px-2 shadow drop-shadow-md rounded-md">
                <Link to={"newproduct"} className="whitespace-nowrap text-sm cursor-pointer">
                  New Product
                </Link>
                {userData.image ? (
                  <p
                    className="whitespace-nowrap text-sm cursor-pointer text-red-600"
                    onClick={handleLogout} // Add logout handler
                  >
                    Logout
                  </p>
                ) : (
                  <Link to={"login"} className="whitespace-nowrap text-sm cursor-pointer">
                    Log In
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* for mobile */}
    </header>
  );
}

export default Header;
