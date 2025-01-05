import { File, Image, Paperclip } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToggleDocumentModal, ToggleMediaModal } from "../redux/slices/app";

const Attachment = () => {
  const [dropdown, setDropdown] = useState(false);
  const paperClipRef = useRef(null);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();

  const handleToggleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        paperClipRef.current &&
        !paperClipRef.current.contains(e.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setDropdown(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      {/* Paperclip Icon */}
      <button
        ref={paperClipRef}
        onClick={handleToggleDropdown}
        className="p-2"
      >
        <Paperclip size={20} />
      </button>

      {/* Dropdown Menu */}
      {dropdown && (
        <div
          ref={dropdownRef}
          className="absolute space-y-2 dark:bg-white bg-stone-300 border-2 border-transparent shadow-lg px-4 py-2 rounded-lg left-2 bottom-12 z-40 w-[220px]"
        >
          {/* Images & Videos Button */}
          <button
            onClick={() => dispatch(ToggleMediaModal(true))}
            className="flex gap-2 hover:bg-white dark:hover:bg-black dark:hover:bg-opacity-20 px-2 py-1 rounded-md"
          >
            <Image className="text-[#333333] duration-200" />
            <span className="text-[#333333] font-medium">
              Images & Videos
            </span>
          </button>

          {/* Files & Documents Button */}
          <button
            onClick={()=> dispatch(ToggleDocumentModal(true))}
            className="flex gap-2 hover:bg-white dark:hover:bg-black dark:hover:bg-opacity-20 px-2 py-1 rounded-md"
          >
             
            <File className="text-[#333333] transform duration-200" />
            <span className="text-[#333333] font-medium">
              Files & Documents
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Attachment;
