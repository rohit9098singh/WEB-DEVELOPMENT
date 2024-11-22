import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

const Headers = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // State for toggling the navbar

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="bg-gray-900 text-white ">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 ">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">MyApp</Link>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex  items-center">
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="text-lg hover:text-yellow-400 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="text-lg hover:text-yellow-400 transition duration-300"
              >
                Signup
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="text-lg hover:text-yellow-400 transition duration-300"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/addproduct"
                className="text-lg hover:text-yellow-400 transition duration-300"
              >
                Products
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-3xl"
          onClick={toggleNav}
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`md:hidden fixed inset-0 bg-gray-900 bg-opacity-75 z-50 transition-all duration-500 ease-in-out transform ${
          isNavOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-6">
          <button
            className="text-3xl text-white"
            onClick={toggleNav}
          >
            <IoMdClose />
          </button>
        </div>
        <nav className="flex flex-col items-center">
          <ul className="space-y-6">
            <li>
              <Link
                to="/"
                className="text-xl text-white hover:text-yellow-400 transition duration-300"
                onClick={toggleNav}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="text-xl text-white hover:text-yellow-400 transition duration-300"
                onClick={toggleNav}
              >
                Signup
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="text-xl text-white hover:text-yellow-400 transition duration-300"
                onClick={toggleNav}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/addproduct"
                className="text-xl text-white hover:text-yellow-400 transition duration-300"
                onClick={toggleNav}
              >
                Products
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Headers;
