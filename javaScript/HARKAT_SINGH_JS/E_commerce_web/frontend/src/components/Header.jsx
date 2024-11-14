import React, { useState } from "react";
import logo from "../assets/singhlogo.jpg";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showMobileMenu,setShowMobileMenu]=useState(false);

  // Updated to access nested user data
  const userData = useSelector((state) => state.user); 
  const dispatch = useDispatch();
   
  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);    
  };

  const handleLogout = () => {
    dispatch(logoutRedux());
    toast("Logged out successfully");
  };

  const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;

  const handleLogoClick=()=>{
    console.log("button clicked");
    setShowMobileMenu((prev)=>!prev);
    console.log("below");
    
  }
  
  const cartItemNumber =useSelector((state)=>state.product.cartItem)
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 bg-green-200 z-50">
      <div className="flex items-center h-full justify-between">
        <Link to={"/"} onClick={handleLogoClick}>
          <div className="h-12 w-12">
            <img src={logo} alt="Logo" className="h-full w-full rounded-full" />
          </div>
        </Link>
        <div className="flex items-center gap-4 md:gap-7 z-50">
          <nav className=" space-x-4 md:space-x-6 text-base md:text-lg font-semibold hidden md:flex">
            <Link to={"/home"}>Home</Link>
            <Link to={"/menu/672e55335e3764ce2ae07816"}>Menu</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
          </nav>
          {showMobileMenu && (
            <nav className="absolute top-16 left-14 h-screen transform -translate-x-1/2 w-3/4 bg-green-300 flex flex-col items-center space-y-2 py-4 shadow-md drop-shadow-md rounded-lg md:hidden">
              <Link to={"/home"} onClick={() => setShowMobileMenu(false)} className="font-bold text-xl"> Home</Link>
              <Link to={"/menu/672e55335e3764ce2ae07816"} onClick={() => setShowMobileMenu(false)} className="font-bold text-xl"> Menu</Link>
              <Link to={"/about"} onClick={() => setShowMobileMenu(false)} className="font-bold text-xl"> About</Link>
              <Link to={"/contact"} onClick={() => setShowMobileMenu(false)} className="font-bold text-xl"> Contact</Link>   
            </nav>
          )}

          <div className="ml-4 text-2xl text-slate-600 relative">
            <Link to={"/cart"}><FaCartShopping />
                <div className="absolute -top-1 -right-2 text-white bg-red-500 h-5 w-5 text-sm text-center rounded-full flex items-center justify-center">
                  {cartItemNumber.length}
                </div>
            </Link>
          </div>

          <div className="ml-4 text-2xl text-slate-600 relative">
            <div
              className="border border-solid border-slate-600 p-1 rounded-full cursor-pointer"
              onClick={handleShowMenu}
            >
              <FaUserAlt />
            </div>
            {showMenu && (
              <div className="flex flex-col absolute right-2 bg-white mt-2 py-2 px-2 shadow drop-shadow-md rounded-md">
                {/* Show New Product only for admin */}
                {userData.email === adminEmail && (
                  <Link to={"/newproduct"} className="whitespace-nowrap text-sm cursor-pointer">
                    New Product
                  </Link>
                )}

                {/* Show Logout if user is logged in, otherwise show Log In */}
                {userData.email ? (
                  <p
                    className="whitespace-nowrap text-sm cursor-pointer text-red-600"
                    onClick={handleLogout}
                  >
                    Logout({userData.name})
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
      <ToastContainer />
    </header>
  );
}

export default Header;
