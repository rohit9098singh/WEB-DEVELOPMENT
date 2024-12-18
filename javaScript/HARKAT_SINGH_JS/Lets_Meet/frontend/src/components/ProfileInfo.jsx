
import { Chat, DotsThreeVertical, VideoCamera } from "@phosphor-icons/react";
import { Clock, X } from "lucide-react";
import React from "react";

const ProfileInfo = ({ handleToggleUserInfo }) => {
  return (
    <div className="border-l border-stroke dark:border-strokedark flex flex-col h-full">
      <div className="sticky top-0 border-b border-stroke dark:border-strokedark flex items-center justify-between w-full px-6 py-6.5">
        <p className="text-black dark:text-white font-bold text-lg">Profile</p>
        <button onClick={handleToggleUserInfo}>
          <X />
        </button>
      </div>
      <div className="mx-auto my-4">
        <img
          src={
            "https://images.pexels.com/photos/18892681/pexels-photo-18892681/free-photo-of-blonde-model-in-shadow.jpeg?auto=compress&cs=tinysrgb&w=400"
          }
          className="w-44 h-44 rounded-lg object-center object-cover"
        />
      </div>
      <div className="px-6 space-y-1">
        <p className="text-black dark:text-white lg:text-lg font-medium sm:text-sm">
          pookie mon
        </p>
        <span className="sm:text-lg lg:text-lg">Software Engineer</span>
      </div>
      <div className="px-6 my-6">
        <div className="flex flex-row items-center space-x-2">
          <Clock />
          <p>6.50 Am local time</p>
        </div>
      </div>
      <div className="px-6 my-6">
        <div className="flex space-x-2 sm:overflow-auto sm:no-scrollbar">
          <button className="w-full border border-stroke dark:border-strokedark p-2 rounded-md flex items-center justify-center transform transition-transform duration-200 ease-in-out hover:scale-110">
            <Chat size={20} className="mr-3" />
            <p className="text-md font-semibold">Message</p>
          </button>
          <button className="w-full border border-stroke dark:border-strokedark p-2 rounded-md flex items-center justify-center transform transition-transform duration-200 ease-in-out hover:scale-110">
            <VideoCamera size={20} className="mr-3 " />
            <p className="text-md font-semibold">Huddle</p>
          </button>
          <button className="w-full border border-stroke dark:border-strokedark p-2 rounded-md flex items-center justify-center transform transition-transform duration-200 ease-in-out hover:scale-110">
            <DotsThreeVertical size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
