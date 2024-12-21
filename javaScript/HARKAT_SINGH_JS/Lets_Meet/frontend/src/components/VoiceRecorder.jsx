import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToggleAudioModal } from "../redux/slices/app"; // Assuming the action is correctly imported

import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

const VoiceRecorder = () => {
  const modalRef = useRef(null);
  const dispatch = useDispatch();
  const { audio } = useSelector((state) => state.app.modals);
  const [recordings, setRecordings] = useState([]); // State to manage recordings

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        dispatch(ToggleAudioModal(false));
      }
    };

    if (audio) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [audio, dispatch]);

  const recorderControls = useAudioRecorder(
    {
      noiseSuppression: true,
      echoCancellation: true,
    },
    (error) => console.log(error)
  );

  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const newRecording = {
      id: Date.now(), // Unique ID for each recording
      url: url,
    };
    setRecordings((prev) => [...prev, newRecording]); // Add the new recording to the state
  };

  const removeRecording = (id) => {
    setRecordings((prev) => prev.filter((rec) => rec.id !== id)); // Remove recording by ID
  };

  return (
    <div
      className={`fixed top-0 left-0 z-[999999] h-full w-full flex items-center justify-center bg-black/90 px-4 py-5 ${
        audio ? "block" : "hidden"
      }`}
    >
      <div
        ref={modalRef}
        className="w-full max-w-142.5 rounded-lg bg-white dark:bg-boxdark md:py-8 px-8 py-12"
      >
        <div
          id="audio-container"
          className="flex flex-col space-y-8 items-center w-full"
        >
          <AudioRecorder
            showVisualizer={true}
            onRecordingComplete={(blob) => addAudioElement(blob)}
            recorderControls={recorderControls}
            downloadOnSavePress={true}
            downloadFileExtension="mp3"
          />

          <div className="w-full mt-8">
            <h3 className="text-lg font-bold text-center mb-4">Recordings</h3>
            {recordings.length === 0 ? (
              <p className="text-gray-500 text-center">No Recordings yet start to record....</p>
            ) : (
              <div className="space-y-4">
                {recordings.map((rec) => (
                  <div
                    key={rec.id}
                    className="flex items-center justify-between bg-gray-100 rounded-lg p-4"
                  >
                    <audio src={rec.url} controls className="w-3/4"></audio>
                    <button
                      onClick={() => removeRecording(rec.id)}
                      className="text-black-2 font-semibold underline decoration-[rgb(139,0,0)]"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-row items-center space-x-4 w-full mt-8">
            <button className="rounded-full w-full bg-blue-500  p-2 text-white hover:bg-opacity-90">
              Send
            </button>
            <button
              onClick={() => {
                dispatch(ToggleAudioModal(false));
              }}
              className="rounded-full w-full bg-transparent border border-red text-red p-2"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceRecorder;
