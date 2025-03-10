import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import React, { useEffect, useRef, useState } from "react";
import { Smiley } from "@phosphor-icons/react";

const EmojiPicker = () => {
  const colorMode = JSON.parse(window.localStorage.getItem("color-theme"));
  const [pickerOpen, setPickerOpen] = useState(false);
  const smileyButtonRef = useRef(null);
  const smileyPickerRef = useRef(null);

  const handleTrigger = (e) => {
    e.preventDefault();
    setPickerOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        smileyButtonRef.current &&
        !smileyButtonRef.current.contains(e.target) &&
        smileyPickerRef.current &&
        !smileyPickerRef.current.contains(e.target)
      ) {
        setPickerOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex">
      {/* Trigger Button */}
      <button
        ref={smileyButtonRef}
        onClick={handleTrigger}
        className="text-black dark:text-white hover:text-blue-500"
      >
        <Smiley size={24} />
      </button>

      {/* Emoji Picker (not inside a button) */}
      {pickerOpen && (
        <div
          ref={smileyPickerRef}
          className="absolute bottom-5 right-1"
        >
          <Picker
            theme={colorMode}
            data={data}
            onEmojiSelect={(emoji) => console.log(emoji)} // Use a proper emoji select handler
          />
        </div>
      )}
    </div>
  );
};

export default EmojiPicker;
