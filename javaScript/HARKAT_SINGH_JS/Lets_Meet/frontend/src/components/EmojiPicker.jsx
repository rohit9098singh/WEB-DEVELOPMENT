import { Smile } from "lucide-react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import React, { useEffect, useRef, useState } from "react";
import { Smiley } from "@phosphor-icons/react";

const EmojiPicker = () => {
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
      <button
        ref={smileyButtonRef}
        onClick={handleTrigger}
        className="text-black hover:text-black-2"
      >
        <Smiley size={24} />
      </button>

      {pickerOpen && (
        <div
          ref={smileyPickerRef}
          className="absolute bottom-5 right-1"
        
        >
          <Picker data={data} onEmojiSelect={console.log}  />
        </div>
      )}
    </div>
  );
};

export default EmojiPicker;
