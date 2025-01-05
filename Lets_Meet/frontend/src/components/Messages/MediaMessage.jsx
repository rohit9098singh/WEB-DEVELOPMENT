import { Check, Checks } from "@phosphor-icons/react";
import React from "react";

const MediaMessage = ({
  incoming,
  author,
  timestamp,
  assets,
  read_receipt,
  caption,
}) => {
  return incoming ? (
    <div className="max-w-125 w-fit">
      <p className="mb-1 text-sm font-medium">{author}</p>
      <div className="bg-stone-200 rounded-2xl rounded-tl-none px-5 py-4 dark:bg-boxdark-2 inline-block space-y-2">
        {/**MEDIA MESSAGE GRID  */}
        <p>{caption}</p>
      </div>
      <p className="text-xs">{timestamp}</p>
    </div>
  ) : (
    <div className="max-w-125 ml-auto">
      <div className="bg-blue-500 rounded-2xl rounded-br-none px-5 py-3 inline-block">
        {/**media message grid  */}
        <p className="text-white ">{caption}</p>
      </div>
      <div className="flex flex-row items-center justify-end space-x-2">
        <div
          className={`${
            read_receipt !== "read"
              ? "text-stone-500 dark:text-white"
              : "text-blue-500"
          }`}
        >
          {read_receipt !== "sent" ? (
            <Checks weight="bold" size={18} />
          ) : (
            <Check weight="bold" size={18} />
          )}
        </div>
        <p className="text-xs">{timestamp}</p>
      </div>
    </div>
  );
};

export default MediaMessage;
