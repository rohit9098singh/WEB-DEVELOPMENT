import React from "react";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { PiMusicNotesLight } from "react-icons/pi";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
function SideBar() {
  return (
    <div className="px-6">
      <div className="space-y-3">{/*is ek extra div bas y axis pe equal space dene ke liye lagaya gya hai */}
        <div className="flex items-center space-x-5 hover:bg-gray-300  duration-300 rounded-xl p-1 ">
          <GoHome className="text-xl cursor-pointer" />
          <span className="cursor-pointer">HOME</span>
        </div>
        <div className="flex items-center space-x-5 hover:bg-gray-300  duration-300 rounded-xl p-1 ">
          <SiYoutubeshorts className="text-xl cursor-pointer" />
          <span className="cursor-pointer">Shorts</span>
        </div>
        <div className="flex items-center space-x-5 hover:bg-gray-300  duration-300 rounded-xl p-1 ">
          <MdOutlineSubscriptions className="text-xl cursor-pointer" />
          <span className="cursor-pointer">Subscription</span>
        </div>
      </div>
    </div>
  ); 
}

export default SideBar;


