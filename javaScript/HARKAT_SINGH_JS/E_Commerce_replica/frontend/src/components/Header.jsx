import React from 'react'
import {useState} from "react"
import logo from "../assets/singhlogo.jpg";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const handleShowMenu=()=>{
        setShowMenu((prev)=> !prev)
    }
  return (
    <div>
        <header className='fixed shadow-md w-full h-16 px-2  md:px-4 '>
            <div className='flex items-center h-full justify-between'>
                 <Link to={"/"}>
                    <div className='h-12 w-12'>
                        <img src={logo} className='h-full w-full rounded-full'/>
                    </div>
                 </Link>
                     <div className='flex items-center gap-4 md:gap-7 z-50'>
                        <nav className='flex space-x-4 md:space-x-6 text-base md:text-large font-semibold'>
                             <Link to="/">Home</Link>
                             <Link  to="/menu">Menu</Link>
                             <Link to="/about">About</Link>
                             <Link to="/contact">Contact</Link> 
                        </nav>
                        <div className='ml-4 text-2xl text-slate-600 relative'>
                             <FaCartShopping />
                             <div className='absolute -right-2 -top-1 bg-red-600 text-white flex items-center justify-center text-center rounded-full text-sm h-5 w-5'>0</div>
                        </div>
                        <div className=' ml-4 text-slate-600 text-2xl'>
                            <div className=' flex border border-solid border-slate-600 p-1 rounded-full cursor-pointer'>
                              <FaUserAlt onClick={handleShowMenu}/>
                            </div>
                            {showMenu && <div className='flex flex-col absolute right-2 bg-white mt-2 py-2 px-2 shadow drop-shadow-md'>
                            <Link to={"newpage"} className='whitespace-nowrap text-sm cursor-pointer'>New Product</Link>
                            <Link to={"Signup"} className='whitespace-nowrap text-sm cursor-pointer'>LogIn</Link>
                        </div>}
                        </div>
                     </div>
            </div>
        </header>
    </div>
  )
}

export default Header