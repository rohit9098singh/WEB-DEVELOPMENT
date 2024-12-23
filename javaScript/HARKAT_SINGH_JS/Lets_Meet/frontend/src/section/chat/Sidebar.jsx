import { Chat, DotsThreeCircle, Shapes, SignOut, UserCircle, Users } from "@phosphor-icons/react";
import React, { useState } from "react";
import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const Navigation = [
  {
    id: 0,
    title: "Dms",
    icon: <Chat size={24} />
  },
  {
    id: 1,
    title: "Groups",
    icon: <Users size={24} />
  },
  {
    id: 2,
    title: "Profile",
    icon: <UserCircle size={24} />
  },
  {
    id: 3,
    title: "More",
    icon: <DotsThreeCircle size={24} />
  }
]
const Sidebar = () => {
  const [selected,setSeleted]=useState(0);

  const handleClick=(id)=>{
    setSeleted(id)
  }
  return (
    <div className="flex flex-col justify-between border-r border-stroke p-2 dark:bg-boxdark"> {/**main seperates the top icon with bottom */}
      <div className="flex flex-col items-center space-y-6"> {/**the top part has the first icon seperate and the four other icons  */}
        <div className="flex flex-col space-y-2 text-center "> {/**the top icons has the icon and the text for that reason aother dic is used at here  */}
          <div className="mx-auto rounded-md border border-stroke dark:border-strokedark">
            <Shapes size={24} />
          </div>
          <span className="text-sm font-medium">Workspace</span>
        </div>
        {
          Navigation.map(({ id, title, icon }) => {
            return (
              <div
                key={id}
                className="flex flex-col text-center space-y-2 hover:cursor-pointer hover:text-blue-500 "
                onClick={() => { handleClick(id)}}
              >
                <div className={`${selected=== id &&" bg-blue-500 bg-opacity-90 text-white"} mx-auto p-2 rounded-md border border-stroke dark:border-strokedark hover:border-blue-500 `}>
                   {icon}
                </div>
                <span className={`${selected===id && "text-blue-500"} text-sm font-medium`}>{title}</span>
              </div>
            )
          })
        }
      </div>

      {/* Dark mode button */}
      <div className="flex flex-col items-center space-y-3">
        <div>
          <DarkModeSwitcher className="mx-auto rounded-md dark:opacity-60 p-2 dark:border-strokedark cursor-pointer" />
        </div>

        {/* Logout button */}
        <TooltipProvider>
          <Tooltip >
            <TooltipTrigger>
              <div className="mx-auto rounded-md dark:opacity-60 p-2 dark:border-strokedark cursor-pointer">
                <SignOut
                  size={24}
                  className="text-[#212121] dark:text-blue-500 dark:font-bold"
                />
              </div>
            </TooltipTrigger>
            <TooltipContent
              side="right"
              className="mb-6 border-none bg-blue-500 dark:bg-boxdark-2 dark:text-white text-white rounded-md px-2 py-1 text-sm font-medium shadow-lg0"
            >
              Log Out
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default Sidebar;
