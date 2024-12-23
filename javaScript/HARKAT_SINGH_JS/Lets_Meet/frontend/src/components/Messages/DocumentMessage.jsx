import React from "react";
import { Checks, DownloadSimple } from "@phosphor-icons/react";
import { Check, File } from "lucide-react";

const DocumentMessage = ({ incomming, author, timestamp, read_receipt }) => {
  return incomming ? (
    <div className="max-w-xs w-fit">
      <div className="flex flex-col">
        {/* Author's name */}
        <p className="mb-2 text-sm font-semibold text-gray-700 capitalize dark:text-gray-300">
          {author}
        </p>
        {/* Message container */}
        <div className="bg-stone-200 dark:bg-boxdark-2 rounded-2xl rounded-tl-none p-4 shadow-md space-y-4">
          {/* Document section */}
          <div className="flex items-center justify-between bg-stone-300 dark:bg-stone-700/50 p-3 rounded-lg shadow-sm space-x-2">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-500 text-white rounded-md">
                <File size={24} />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800 dark:text-white">
                  admin_v1.0.zip
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  12.5 MB
                </p>
              </div>
            </div>
            {/* Download button */}
            <button
              className="p-2 bg-blue-500 text-white rounded-full hover:bg-indigo-600 transition-all"
              aria-label="Download document"
            >
              <DownloadSimple size={20} />
            </button>
          </div>
          {/* Message text */}
          <p className="text-sm text-gray-800 dark:text-gray-300">
            Text related to the document
          </p>
        </div>
        {/* Timestamp */}
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
          {timestamp}
        </p>
      </div>
    </div>
  ) : (
    <div className="max-w-md w-fit ml-auto">
      <div className="flex flex-col items-end">
        {/* Message container */}
        <div className="dark:bg-boxdark-2 text-black-2 bg-stone-200 dark:text-white rounded-2xl rounded-br-none p-4 shadow-lg space-y-4">
          {/* Document section */}
          <div className="flex items-center justify-between bg-blue-500/20 p-3 rounded-lg shadow-sm space-x-2">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-indigo-700/30 text-white rounded-md">
                <File size={24} />
              </div>
              <div>
                <p className="text-sm font-semibold">admin_v1.0.zip</p>
                <p className="text-xs text-black-2 dark:text-white">12.5 MB</p>
              </div>
            </div>
            {/* Download button */}
            <button
              className="p-2 bg-blue-500 text-white rounded-full hover:bg-indigo-700 transition-all"
              aria-label="Download document"
            >
              <DownloadSimple size={20} />
            </button>
          </div>
          {/* Message text */}
          <p className="text-sm">Text related to the document</p>
        </div>
        {/* Read receipt */}
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
    </div>
  );
};

export default DocumentMessage;
