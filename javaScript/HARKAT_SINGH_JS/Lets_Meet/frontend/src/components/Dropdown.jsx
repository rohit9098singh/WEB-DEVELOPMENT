import { Ellipsis, Pencil, Trash2 } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const Dropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  const threeDotReference = useRef(null); // Ref for the three-dot button
  const dropdownReference = useRef(null); // Ref for the dropdown menu

  const onClickHandler = () => {
    setDropdown((prev) => !prev); // Toggle dropdown visibility
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      // Close dropdown if click is outside both the button and dropdown
      if (
        threeDotReference.current &&
        !threeDotReference.current.contains(e.target) &&
        dropdownReference.current && 
        !dropdownReference.current.contains(e.target)
      ) {
        setDropdown(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      {/* Attach ref correctly to the button */}
      <button ref={threeDotReference} onClick={onClickHandler}>
        <Ellipsis />
      </button>

      {/* Dropdown menu */}
      {dropdown && (
        <div
          ref={dropdownReference}
          className="absolute space-y-2 dark:bg-white bg-stone-300 shadow-md px-4 py-2 rounded-lg right-5"
        >
          {/* Edit Button */}
          <button className="flex gap-2 hover:bg-white dark:hover:bg-black dark:hover:bg-opacity-20 px-2 py-1 rounded-md">
            <Pencil className="text-[#333333] duration-200" />
            <span className="text-[#333333] font-medium">Edit</span>
          </button>

          {/* Delete Button */}
          <button className="flex gap-2 hover:bg-white dark:hover:bg-black dark:hover:bg-opacity-20 px-2 py-1 rounded-md">
            <Trash2 className="text-[#333333] transform duration-200" />
            <span className="text-[#333333] font-medium">Delete</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
