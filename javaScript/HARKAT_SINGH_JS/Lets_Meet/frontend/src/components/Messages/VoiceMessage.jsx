import { Checks } from "@phosphor-icons/react";
import { Check } from "lucide-react";
import React from "react";
import Waveform from "../Waveform";

const VoiceMessage = ({ incoming, timestamp, read_receipt }) => {
  return incoming ? (
    <div className="max-w-125 w-fit">
      {/* Incoming voice message bubble */}
      <div className="mb-2.5 rounded-2xl rounded-tl-none px-5 py-3 bg-stone-300 dark:bg-boxdark-2">
        <Waveform incoming={incoming} />
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">{timestamp}</p>
    </div>
  ) : (
    <div className="ml-auto max-w-125 w-fit">
      {/* Outgoing voice message bubble */}
      <div className="mb-2.5 rounded-2xl rounded-br-none px-8 py-2 bg-stone-200 dark:bg-boxdark-2">
        <Waveform incoming={incoming} />
      </div>
      {/* Read receipt and timestamp */}
      <div className="flex flex-row items-center justify-end space-x-2 mt-1">
        <div
          className={`${
            read_receipt !== "read" ? "text-stone-500 dark:text-white" : "text-blue-500"
          }`}
        >
          {read_receipt !== "sent" ? (
            <Checks weight="bold" size={18} />
          ) : (
            <Check weight="bold" size={18} />
          )}
        </div>
        <p className="text-xs text-gray-600 dark:text-gray-300">{timestamp}</p>
      </div>
    </div>
  );
};

export default VoiceMessage;
