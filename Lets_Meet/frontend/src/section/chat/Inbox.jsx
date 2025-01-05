import React, { useEffect, useRef, useState } from "react";
import User01 from "../../assets/images/user/user-01.png";
import {
  Gif,
  Microphone,
  PaperPlaneTilt,
  Phone,
  VideoCamera,
} from "@phosphor-icons/react";
import Dropdown from "../../components/Dropdown";
import EmojiPicker from "../../components/EmojiPicker";
import ProfileInfo from "../../components/ProfileInfo";
import Giphy from "../../components/Giphy";
import { useDispatch } from "react-redux";
import { ToggleAudioModal } from "../../redux/slices/app";
import Attachment from "@/components/Attachment";
import BgChanger from "../../components/BgChanger";
import MessaageSeperator from "@/components/MessaageSeperator";
import TypingIndicator from "@/components/TypingIndicator";
import { DocumentMessages, TextMessages } from "@/components/Messages";
import DocumentMessage from "@/components/Messages/DocumentMessage";
import VoiceMessage from "@/components/Messages/VoiceMessage";
import MediaMessage from "@/components/Messages/MediaMessage";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Inbox = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isGifSearchOpen, setIsGifSearchOpen] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState("/images/beach.avif"); // State for background image

  const profileRef = useRef(null);
  const gifSearchRef = useRef(null);
  const buttonRef = useRef(null);

  // Handle form submission on Enter key press
  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      console.log("Submitted message:", message);
      setMessage("");
    }
  };

  // Toggle Profile Info visibility
  const handleToggleUserInfo = () => {
    setIsProfileOpen((prev) => !prev);
  };

  // Toggle GIF search visibility
  const toggleGifSearchBar = () => {
    setIsGifSearchOpen((prev) => !prev);
  };

  // Handle microphone button click
  const handleMicClick = (e) => {
    e.preventDefault();
    dispatch(ToggleAudioModal(true));
  };

  // Close Profile or Giphy search when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsProfileOpen(false);
      }

      if (
        gifSearchRef.current &&
        !gifSearchRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsGifSearchOpen(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Function to update background image
  const handleBgChange = (newImage) => {
    setBackgroundImage(newImage);
  };

  return (
    <>
      <div
        className={`flex h-full w-[95%] flex-col dark:bg-boxdark ${
          isProfileOpen ? "w-1/2" : "lg:w-3/4"
        }`}
      >
        {/* HEADER */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-stroke px-5 py-4 dark:bg-boxdark dark:border-strokedark">
          {/* Left Section: User Info */}
          <div
            onClick={handleToggleUserInfo}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="h-12 w-12 rounded-full overflow-hidden">
              <img
                src={User01}
                alt="User Avatar"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <h1 className="text-sm font-semibold text-stone-700 dark:text-white truncate">
                Henry Lohil
              </h1>
              <p className="text-sm text-stone-500 dark:text-stone-400">
                Reply To Message
              </p>
            </div>
          </div>

          {/* Right Section: Call Buttons, Dropdown, BgChanger */}
          <div className="flex items-center space-x-6">
            <div className="flex space-x-4 bg-stone-200 dark:bg-form-strokedark rounded-lg p-2 ">
              {/* Video Camera Button with Tooltip */}
              <TooltipProvider>
                <Tooltip side="top">
                  <TooltipTrigger>
                    <button>
                      <VideoCamera size={24} className="hover:text-blue-500" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-slate-500 mt-3 dark:bg-boxdark-2 text-white rounded-md px-2 py-1 text-sm font-medium shadow-lg border-none">
                    Start Video Call
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* Phone Button with Tooltip */}
              <TooltipProvider>
                <Tooltip side="top">
                  <TooltipTrigger>
                    <button>
                      <Phone size={24} className="hover:text-blue-500" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-slate-500 mt-3 dark:bg-boxdark-2 text-white rounded-md px-2 py-1 text-sm font-medium shadow-lg">
                    Start Phone Call
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="flex items-center space-x-4">
              <BgChanger onBgChange={handleBgChange} />{" "}
              {/* Passing handler to BgChanger */}
              <Dropdown />
            </div>
          </div>
        </div>

        {/* MESSAGES */}
        <div
          className="max-h-full overflow-auto px-9 py-5 no-scrollbar space-y-3.5 grow"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <TextMessages
            author="Amit"
            content="gand mara ,bhosdike le https://chatgpt.com/"
            incomming={true}
            timeStamp="2.44pm"
          />
          <TextMessages
            author="Rohit"
            content="tor mai ke chodo "
            read_receipt="sent"
            incomming={false}
            timeStamp="2.44pm"
          />
          <MessaageSeperator />
          <DocumentMessage
            author={"Rohit"}
            incomming={true}
            read_receipt={"read"}
            timestamp={"4.23pm"}
          />
          <VoiceMessage
            incoming={false}
            read_receipt={"read"}
            timestamp={"4.37pm"}
          />
          <MediaMessage
            caption={"beautifull car"}
            author={"Rohit"}
            incoming={true}
            timestamp={"8.78pm"}
            read_receipt={"read"}
          />
          <TypingIndicator />
        </div>

        {/* MESSAGE INPUT */}
        <div className="sticky bottom-0 z-20 border-t border-stroke px-6 py-5 bg-stone-200 dark:bg-boxdark dark:border-strokedark">
          <div className="flex items-center justify-between space-x-4.5 pr-20 mb-3">
            <div className="relative w-full flex justify-between items-center">
              <input
                type="text"
                placeholder="Type Something Over Here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleSubmit}
                className="rounded-xl border border-stroke bg-white grow py-2.5 pl-9 text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:border-strokedark dark:bg-boxdark-2 dark:text-white dark:placeholder-gray-400"
              />
              <div className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center justify-end space-x-4">
                <button
                  onClick={handleMicClick}
                  className="hover:text-blue-600"
                >
                  <Microphone size={24} />
                </button>
                <button
                  aria-label="Attach a file"
                  className="hover:text-blue-600"
                >
                  <Attachment size={24} />
                </button>
                <button
                  onClick={toggleGifSearchBar}
                  ref={buttonRef}
                  className="hover:text-blue-600"
                >
                  <Gif size={24} />
                </button>
                <button>
                  <EmojiPicker size={24} />
                </button>
              </div>
            </div>
            <button
              className="flex items-center justify-center bg-blue-500 text-white rounded-md h-9 max-w-9 w-full hover:bg-blue-600"
              aria-label="Send message"
            >
              <PaperPlaneTilt size={24} />
            </button>
          </div>

          {isGifSearchOpen && (
            <div ref={gifSearchRef}>
              <Giphy />
            </div>
          )}
        </div>
      </div>

      {isProfileOpen && (
        <div ref={profileRef} className="w-1/4">
          <ProfileInfo handleToggleUserInfo={handleToggleUserInfo} />
        </div>
      )}
    </>
  );
};

export default Inbox;
