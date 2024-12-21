import { X } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToggleMediaModal } from "../redux/slices/app";
import { PaperPlaneTilt } from "@phosphor-icons/react";

const MediaPicker = () => {
  const modalRef = useRef(null);
  const dispatch = useDispatch();

  const { media } = useSelector((state) => state.app.modals);
  console.log(media);
  

  useEffect(() => {
      const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
          dispatch(ToggleMediaModal(false));
        }
      };
  
      if (media){
        document.addEventListener("mousedown", handleClickOutside);
      }
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [media, dispatch]);

  return (
    <div
      className={`fixed top-0 left-0 z-[999999] h-full w-full flex items-center justify-center bg-black/90 px-4 py-5 ${
        media ? "block" : "hidden"
      }`}
    >
      {/* Modal Content */}
      <div
        ref={modalRef}
        className="w-full max-w-[570px] rounded-lg bg-white dark:bg-boxdark md:py-8 px-8 py-12"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-md font-semibold text-black dark:text-white">
            Choose Media File To Send
          </p>
          <button
            onClick={() => dispatch(ToggleMediaModal(false))}
            className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
          >
            <X />
          </button>
        </div>
        {/*File Dropzone */}

        {/* Content Area */}
        <div className="flex items-center space-x-2 justify-between mt-4">
          <input
            type="text"
            placeholder="Enter something"
            className="rounded-xl border-2 bg-white border-stone-300 grow py-2.5 pl-9 text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:border-strokedark dark:bg-boxdark-2 dark:text-white dark:placeholder-gray-400"
          />
          <button className="p-2.5 border border-blue-500 flex justify-center items-center bg-blue-500 hover:bg-opacity-90 rounded-lg">
            <PaperPlaneTilt size={18} weight="bold" className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediaPicker;
