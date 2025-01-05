import { Checks } from "@phosphor-icons/react";
import { Check } from "lucide-react";
import React from "react";
import Waveform from "../Waveform";

const VoiceMessage = ({ incoming, timestamp, read_receipt }) => {
  return incoming ? (
    <div className="max-w-[320px] w-full">
      {/* Incoming voice message bubble */}
      <div className=" relative mb-3 rounded-2xl rounded-tl-none px-6 py-4 bg-stone-300 dark:bg-boxdark-2 shadow-md">
        <Waveform incoming={incoming} />
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-300 mt-2 text-right">{timestamp}</p>
    </div>
  ) : (
    <div className="ml-auto max-w-[320px] w-full">
      {/* Outgoing voice message bubble */}
      <div className="mb-3 rounded-2xl rounded-br-none px-6 py-4 bg-stone-200 dark:bg-boxdark-2 shadow-md">
        <Waveform incoming={incoming} />
         <div className="absolute top-0 left-0 w-5 h-5 bg-blue-500 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
      </div>
      {/* Read receipt and timestamp */}
      <div className="flex items-center justify-end space-x-2 mt-2">
        <div
          className={`${
            read_receipt !== "read" ? "text-stone-500 dark:text-white" : "text-blue-500"
          }`}
        >
          {read_receipt !== "sent" ? (
            <Checks weight="bold" size={20} />
          ) : (
            <Check weight="bold" size={20} />
          )}
        </div>
        <p className="text-xs text-gray-600 dark:text-gray-300">{timestamp}</p>
      </div>
    </div>
  );
};

export default VoiceMessage;
