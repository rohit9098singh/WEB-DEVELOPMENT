import { Chat, SignOut } from "@phosphor-icons/react";
import React from "react";
import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Sidebar = ({ isminimized }) => {
  return (
    <div className={`flex flex-col justify-between border-r border-stroke p-2 dark:bg-boxdark`}>
      <div className="mx-auto dark:opacity-60 rounded-md p-2 dark:border-strokedark">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Chat
                size={24}
                className="text-[#212121] dark:text-blue-500 dark:font-bold"
              />
            </TooltipTrigger>
            <TooltipContent side="right">
              <p >Chats</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Dark mode button */}
      <div className="flex flex-col space-y-3">
        <div>
          <DarkModeSwitcher className="mx-auto rounded-md dark:opacity-60 p-2 dark:border-strokedark cursor-pointer" />
        </div>

        {/* Logout button */}
        <div className="mx-auto rounded-md dark:opacity-60 p-2 dark:border-strokedark cursor-pointer">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <SignOut
                  size={24}
                  className="text-[#212121] dark:text-blue-500 dark:font-bold"
                />
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Logout</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
