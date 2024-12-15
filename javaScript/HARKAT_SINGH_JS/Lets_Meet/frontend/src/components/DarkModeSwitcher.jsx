import { Moon, Sun } from "@phosphor-icons/react";
import React from "react";
import useColorMode from "../hooks/useColorMode";

const DarkModeSwitcher = () => {
  const [colorMode, setColorMode] = useColorMode();
  
  return (
    <li className="list-none">
      <label
        className={`relative m-0 block h-7.5 w-14 rounded-full ${
          colorMode === "dark" ? "bg-blue-500" : "bg-stroke"
        }`}
      >
        <input
          type="checkbox"
          className="absolute z-50 top-0 h-full cursor-pointer opacity-0"
          onChange={() => {
            if (typeof setColorMode === "function") {
              setColorMode(colorMode === "light" ? "dark" : "light");
            }
          }}
        />
        <span
          className={`absolute top-1/2 left-[3px] -translate-y-1/2 h-6 w-6 duration-150 ease-linear flex items-center justify-center bg-white rounded-full ${colorMode === "dark" && '!right-[3px] !translate-x-full'}`} // THE (!) USED HERE IS NOT THE NOT SYMBOL BUT THE IMPORTANT SYMBOL
        >
          <span className="dark:hidden">
            <Sun />
          </span>
          <span className="hidden dark:inline-block">
            <Moon />
          </span>
        </span>
      </label>
    </li>
  );
};

export default DarkModeSwitcher;
