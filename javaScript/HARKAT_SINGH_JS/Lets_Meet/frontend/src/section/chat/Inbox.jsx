import React, { useState } from "react";
import User01 from "../../assets/images/user/user-01.png";
import { Gif, LinkSimple, PaperPlaneTilt, Phone, VideoCamera } from "@phosphor-icons/react";
import Dropdown from "../../components/Dropdown";
import EmojiPicker from "@/components/EmojiPicker";
import ProfileInfo from "../../components/ProfileInfo";
import Giphy from "../../components/Giphy"

const Inbox = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      console.log("Submitted message:", message);
      setMessage("");
    }
  };
  const [isProfileOpen,setIsProfileOpen]=useState(false);

  const handleToggleUserInfo=()=>{
      setIsProfileOpen((prev)=>!prev);
  }
  return (
    <>
      <div className={`flex h-full w-[95%] flex-col dark:bg-boxdark ${isProfileOpen ? "w-1/2" :"lg:w-3/4"} `}>
        {/** HEADER */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-stroke dark:bg-boxdark dark:border-strokedark px-5 py-4">
          <div 
             onClick={handleToggleUserInfo}
             className="flex items-center gap-3 cursor-pointer"
           >
            <div className="h-12 w-12 rounded-full overflow-hidden">
              <img src={User01} alt={"Avatar"} className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col gap-y-0">
              <h1 className="text-sm font-semibold text-stone-700 dark:text-white truncate">
                Henry Lohil
              </h1>
              <p className="text-sm">Reply To Message</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 mr-5">
            {/* Call buttons */}
            <div className="flex space-x-4 bg-stone-200 dark:bg-form-strokedark rounded-lg p-2">
              <button>
                <VideoCamera size={24} className="hover:text-blue-500" />
              </button>
              <button>
                <Phone size={24} className="hover:text-blue-500" />
              </button>
            </div>

            {/* Dropdown menu */}
            <Dropdown />
          </div>
        </div>

        {/** MESSAGES */}
        <div className="max-h-full overflow-auto px-9 py-7.5 no-scrollbar space-y-3.5 grow">
          {/* Message from Riya (Left Side) */}
          <div className="max-w-fit">
            <p className="mb-1 text-sm font-medium">Riya Kumari</p>
            <div className="bg-stone-200 rounded-2xl rounded-tl-none px-5 py-3 dark:bg-boxdark-2 inline-block">
              <p>
                Hey, I want to meet you to inform you of something very important.
              </p>
            </div>
            <p className="text-xs">1:24</p>
          </div>

          {/* Reply Message (Right Side) */}
          <div className="max-w-fit ml-auto">
            <div className="bg-blue-500 rounded-2xl rounded-br-none px-5 py-3 inline-block">
              <p className="text-white">Ok</p>
            </div>
            <p className="text-xs">1:26</p>
          </div>
        </div>

        {/** MESSAGE INPUT */}
        <div className="sticky bottom-0 z-20 border-t border-stroke dark:border-strokedark bg-stone-200 px-6 py-5 dark:bg-boxdark ">
          <div className="flex items-center justify-between space-x-4.5 pr-20 mb-3">
            <div className="relative w-full flex justify-between items-center">
              <input
                type="text"
                placeholder="Type Something Over Here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleSubmit}
                className="rounded-xl border border-stroke bg-white grow py-2.5 pl-9 text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:border-strokedark dark:bg-boxdark-2 dark:text-white dark:placeholder-gray-400 sm:hide-placeholder md:show-placeholder"
              />
              <div className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center justify-end space-x-4">
                <button aria-label="Attach a file" className="hover:text-blue-600">
                  <LinkSimple size={26} />
                </button>
                <button>
                    <Gif size={24}/>
                </button>
                <EmojiPicker size={24} />
              </div>
            </div>
            <button
              className="flex items-center justify-center bg-blue-500 text-white rounded-md h-9 max-w-9 w-full hover:bg-blue-600"
              aria-label="Send message"
            >
              <PaperPlaneTilt size={24} />
            </button>
          </div>
          {/**THE GIPHY COMPONENT RENDERS HERE BELOW THE INPUT TAG */}
           <Giphy/>
        </div>
      </div>
      {
        isProfileOpen && (
            <div className="w-1/4">
                <ProfileInfo handleToggleUserInfo={handleToggleUserInfo}/>
            </div>
        )
      }
    </>
  );
};

export default Inbox;
