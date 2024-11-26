import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

function Footer() {
  return (
    <div className="footer bg-[#323232] text-[#d9d9d9] flex flex-col gap-8 p-10" id="Footer">
        {/* Main footer content */}
        <div className="footer_content w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Left section */}
            <div className="left flex flex-col gap-4">
                {/* Logo and Description */}
                <img src={assets.logo} className="w-32" alt="Logo" />
                <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ipsa assumenda eligendi! Sit sapiente earum enim? Nihil recusandae reiciendis ad.
                </p>
                
                {/* Social media icons */}
                <div className="social_media flex gap-3 mt-4">
                    <img src={assets.facebook_icon} alt="Facebook Icon" className="w-6 h-6 cursor-pointer hover:opacity-80" />
                    <img src={assets.linkedin_icon} alt="LinkedIn Icon" className="w-6 h-6 cursor-pointer hover:opacity-80" />
                    <img src={assets.twitter_icon} alt="Twitter Icon" className="w-6 h-6 cursor-pointer hover:opacity-80" />
                </div>
            </div>
            
            {/* Middle section */}
            <div className="middle flex flex-col gap-3">
                <h2 className="font-bold text-lg">COMPANY</h2>
                <ul className="text-sm space-y-2">
                    <li className="hover:text-[#f9f9f9] cursor-pointer">Home</li>
                    <li className="hover:text-[#f9f9f9] cursor-pointer">About us</li>
                    <li className="hover:text-[#f9f9f9] cursor-pointer">Delivery</li>
                    <li className="hover:text-[#f9f9f9] cursor-pointer">Privacy policy</li>
                </ul>
            </div>
            
            {/* Right section */}
            <div className="right flex flex-col gap-3">
                <h2 className="font-bold text-lg">GET IN TOUCH</h2>
                <ul className="text-sm space-y-2">
                    <li className="hover:text-[#f9f9f9] cursor-pointer">+95724-39721</li>
                    <li className="hover:text-[#f9f9f9] cursor-pointer">rohitsingh@gmail.com</li>
                </ul>
            </div>
        </div>
        
        {/* Footer separator */}
        <hr className="my-4 border-t-[1px] border-[#555555]" />
        
        {/* Copyright */}
        <p className="footer-copyright text-center text-sm">
            copyright 2024 <a href="#" className="text-[#f9f9f9] hover:underline">@Tomato.com</a> - All Rights Reserved.
        </p>
    </div>
  );
}

export default Footer;
