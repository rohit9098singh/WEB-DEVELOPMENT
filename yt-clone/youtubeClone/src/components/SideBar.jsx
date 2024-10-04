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
import { AiOutlineSetting } from "react-icons/ai"; // Settings icon
import { AiOutlineExclamationCircle } from "react-icons/ai"; // Help icon
import { MdFeedback } from "react-icons/md";


function SideBar() {
  const sideBarItems = [
    { id: 1, name: "Home", icons: <GoHome /> },
    { id: 2, name: "Shorts", icons: <SiYoutubeshorts /> },
    { id: 3, name: "Subscription", icons: <MdOutlineSubscriptions /> },
  ];

  const sideBarItems_2 = [
    { id: 1, name: "Your Channel", icons: <FaYoutube /> },
    { id: 2, name: "History", icons: <SiTrendmicro /> },
    { id: 3, name: "Playlists", icons: <MdOutlineSubscriptions /> },
    { id: 4, name: "Your Videos", icons: <FaYoutube /> },
    { id: 5, name: "Watch later", icons: <SiYoutubestudio /> },
    { id: 6, name: "Liked videos", icons: <MdOutlineSubscriptions /> },
  ];

  const exploreItems = [
    { id: 1, name: "Shopping", icons: <HiOutlineShoppingBag /> },
    { id: 2, name: "Music", icons: <PiMusicNotesLight /> },
    { id: 3, name: "Movies", icons: <PiFilmSlateLight /> },
    { id: 4, name: "Live", icons: <CgMediaLive /> },
    { id: 5, name: "Gaming", icons: <SiYoutubegaming /> },
    { id: 6, name: "News", icons: <FaRegNewspaper /> },
    { id: 7, name: "Sports", icons: <TfiCup /> },
    { id: 8, name: "Learning", icons: <PiLightbulbLight /> },
    { id: 9, name: "Fashion & Beauty", icons: <SiStylelint /> },
    { id: 10, name: "Podcasts", icons: <MdPodcasts /> },
  ];

  const more = [
    { id: 1, name: "YouTube Premium", icons: <SiYoutubemusic /> },
    { id: 2, name: "YouTube Studio", icons: <SiYoutubestudio /> },
    { id: 3, name: "YouTube Music", icons: <PiMusicNotesLight /> },
    { id: 4, name: "YouTube Kids", icons: <FaYoutube /> },
  ];

  const exploreItems_5 = [
    { id: 1, name: "Settings", icons: <AiOutlineSetting /> }, // Settings icon
    { id: 2, name: "Report history", icons: <SiYoutubeshorts /> }, // Keeping shorts icon for Report history
    { id: 3, name: "Help", icons: <AiOutlineExclamationCircle /> }, // Help icon
    { id: 4, name: "Send Feedback", icons: <MdFeedback /> }, // Feedback icon
  ];

  return (
    <div className="px-6 w-[15%] h-[calc(100vh-6.525rem)] overflow-y-auto overflow-x-hidden">
      {/* HOME */}
      <div className="space-y-3">
        {sideBarItems.map((item) => (
          <div key={item.id} className="flex items-center space-x-5 hover:bg-gray-300 duration-300 rounded-xl p-1">
            <span className="text-xl cursor-pointer">{item.icons}</span>
            <span className="cursor-pointer">{item.name}</span>
          </div>
        ))}
      </div>
      <br />
      <hr />

      {/* YOU */}
      <div className="space-y-3 mt-4">
        <div className="flex items-center space-x-2">
          <h1 className="font-bold">You</h1>
          <FaChevronRight />
        </div>
        {sideBarItems_2.map((item) => (
          <div key={item.id} className="flex items-center space-x-5 hover:bg-gray-300 duration-300 rounded-xl p-1">
            <span className="text-xl cursor-pointer">{item.icons}</span>
            <span className="cursor-pointer">{item.name}</span>
          </div>
        ))}
      </div>
      <br />
      <hr />

      {/* EXPLORE */}
      <div className="space-y-3 mt-4">
        <div>
          <h1 className="font-bold">Explore</h1>
        </div>
        {exploreItems.map((item) => (
          <div key={item.id} className="flex items-center space-x-5 hover:bg-gray-300 duration-300 rounded-xl p-1">
            <span className="text-xl cursor-pointer">{item.icons}</span>
            <span className="cursor-pointer">{item.name}</span>
          </div>
        ))}
      </div>
      <br />
      <hr />

      {/* MORE SECTION */}
      <div className="space-y-3 mt-4">
        <div>
          <h1 className="font-bold">More</h1>
        </div>
        {more.map((item) => (
          <div key={item.id} className="flex items-center space-x-5 hover:bg-gray-300 duration-300 rounded-xl p-1">
            <span className="text-xl cursor-pointer text-[#e52222]">{item.icons}</span>
            <span className="cursor-pointer">{item.name}</span>
          </div>
        ))}
      </div>
      <br />
      <hr />

      {/* EXPLORE ITEMS 5 SECTION */}
      <div className="space-y-3 mt-4">
        <div>
          <h1 className="font-bold">Explore More</h1>
        </div>
        {exploreItems_5.map((item) => (
          <div key={item.id} className="flex items-center space-x-5 hover:bg-gray-300 duration-300 rounded-xl p-1">
            <span className="text-xl cursor-pointer">{item.icons}</span>
            <span className="cursor-pointer">{item.name}</span>
          </div>
        ))}
      </div>
      <br />
      <hr className="bg-gray-500"/>
      <div className="mt-auto mt-3">
        <p className="text-xs font-semibold text-gray-500 ">
          About Press Copyright<br /> 
          Contact us Creator<br /> 
          Advertise Developers <br />
        </p>
        <p className="text-xs font-semibold text-gray-500 mt-2">
          Terms Privacy Policy & Safety <br /> 
          How YouTube works <br /> 
          Test new features
        </p>
      </div>
      <br />
      <p className="text-xs text-gray-800 mt-1">© 2024 Rohit singh</p>
    </div>
  );
}

export default SideBar;
