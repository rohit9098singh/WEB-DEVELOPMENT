import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer";
import AudioFile from "../assets/audio/file_example.mp3";
import { Pause, Play } from "lucide-react";

const Waveform = () => {
  const waveformRef = useRef(null);
  const [wavesurfer, setWavesurfer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");

  useEffect(() => {
    if (waveformRef.current) {
      const ws = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "#3C50E0",
        progressColor: "#80CAEE",
        url: AudioFile,
        responsive: true,
        height: 40,
        width:80
      });

      ws.on("ready", () => {
        setDuration(formatTime(ws.getDuration()));
      });

      ws.on("audioprocess", () => {
        setCurrentTime(formatTime(ws.getCurrentTime()));
      });

      ws.on("finish", () => {
        setIsPlaying(false);
      });

      setWavesurfer(ws);

      return () => ws.destroy();
    }
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  const handlePlayPause = () => {
    if (wavesurfer) {
      if (isPlaying) {
        wavesurfer.pause();
      } else {
        wavesurfer.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={`flex items-center  space-x-4  `}>
      <div className="bg-white rounded-full p-2 dark:bg-blue-500 ">
        <button
          className="h-5 w-5 text-black dark:text-white"
          onClick={handlePlayPause}
        >
          {isPlaying ? <Pause /> : <Play />}
        </button>
      </div>
      <div className="w-full flex flex-col">
        <div ref={waveformRef} className="w-full" />
        <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
          {currentTime} / {duration}
        </p>
      </div>
    </div>
  );
};

export default Waveform;
