import { ToggleGifModal } from "../redux/slices/app";
import { PaperPlaneTilt } from "@phosphor-icons/react";
import { X } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const GifModel = () => {
  const dispatch = useDispatch();
  const modalRef = useRef(null); // Reference to the modal content

  // Select modal state and the currently selected GIF URL
  const { gif } = useSelector((state) => state.app.modals);
  const { selectedGifUrl } = useSelector((state) => state.app);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        // If clicked outside, close the modal
        dispatch(
          ToggleGifModal({
            value: false,
            url: "",
          })
        );
      }
    };

    if (gif) {
      // Add event listener when modal is open
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      // Cleanup event listener when modal is closed
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [gif, dispatch]);

  return (
    <div
      className={`fixed top-0 left-0 z-[999999] h-full w-full flex items-center justify-center bg-black/90 px-4 py-5 ${
        gif ? "block" : "hidden"
      }`}
    >
      {/* Modal Content */}
      <div
        ref={modalRef}
        className="w-full max-w-142.5 rounded-lg bg-white dark:bg-boxdark md:py-8 px-8 py-12"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between mb-8 space-x-2">
          <p className="text-md font-semibold text-black dark:text-white">
            Send Giphy
          </p>
          <button
            onClick={() => {
              // Close the modal and reset URL
              dispatch(
                ToggleGifModal({
                  value: false,
                  url: "",
                })
              );
            }}
          >
            <X />
          </button>
        </div>

        {/* Selected GIF */}
        <div>
          <img
            src={selectedGifUrl}
            alt="Selected GIF"
            className="w-full rounded-md mx-auto max-h-80 object-cover"
          />
        </div>

        {/* Input and Send Button */}
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

export default GifModel;
