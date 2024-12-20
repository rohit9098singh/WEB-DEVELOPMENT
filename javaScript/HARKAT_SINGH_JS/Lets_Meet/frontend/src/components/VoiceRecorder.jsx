import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToggleAudioModal } from '../redux/slices/app'; // Assuming the action is correctly imported

const VoiceRecorder = () => {
  const modalRef = useRef(null);
  const dispatch = useDispatch();
  const { audio } = useSelector((state) => state.app.modals);

  useEffect(() => {
    const handleClickOutside = (e) => {
      console.log('Clicked element:', e.target); // Debug log to inspect which element was clicked
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        // If clicked outside the modal, close it
        dispatch(ToggleAudioModal({ value: false, url: "" }));
      }
    };

    if (audio) {
      // Add event listener when modal is open
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      // Cleanup event listener when modal is closed or on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [audio, dispatch]);

  return (
    <div
      className={`fixed top-0 left-0 z-[999999] h-full w-full flex items-center justify-center bg-black/90 px-4 py-5 ${audio ? "block" : "hidden"}`}
    >
      <div
        ref={modalRef}
        className="w-full max-w-142.5 rounded-lg bg-white dark:bg-boxdark md:py-8 px-8 py-12"
      >
        <div className="flex justify-center items-center">
          {/* Your modal content */}
        </div>
        <div className="flex items-center space-x-2 justify-between mt-4">
          {/* Your modal controls */}
        </div>
      </div>
    </div>
  );
};

export default VoiceRecorder;
