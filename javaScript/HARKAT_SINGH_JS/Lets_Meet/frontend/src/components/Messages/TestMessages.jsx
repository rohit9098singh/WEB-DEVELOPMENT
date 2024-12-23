import React from "react";
import { ExtractLinks } from "../../utils/ExtractLinks";
import Microlink from "@microlink/react";
import { Check, Checks } from "@phosphor-icons/react";

const TestMessages = ({
  incomming,
  author,
  timeStamp,
  read_receipt, // to check whether the message is sent, delivered, or read
  content,
}) => {
  const { links, originalString } = ExtractLinks(content);

  return incomming ? (
    <div className="max-w-[650px] w-fit">
      {/* Author name */}
      <p className="mb-1 text-sm font-medium">{author}</p>

      {/* Message content */}
      <div className="bg-stone-200 rounded-2xl rounded-tl-none px-5 py-4 dark:bg-boxdark-2 inline-block space-y-2">
        {/* Render original string safely */}
        <p dangerouslySetInnerHTML={{ __html: originalString }}></p>
        {/* Display link preview if links exist */}
        {links.length > 0 && (
          <Microlink style={{ width: "100%" }} url={links[0]} />
        )}
      </div>

      {/* Timestamp */}
      <p className="text-xs">{timeStamp}</p>
    </div>
  ) : (
    <div className="max-w-fit ml-auto">
      {/* Outgoing message bubble */}
      <div className="bg-blue-500 rounded-2xl rounded-br-none px-5 py-3 inline-block">
        <p dangerouslySetInnerHTML={{ __html: originalString }}></p>
        {links.length > 0 && (
          <Microlink style={{ width: "100%" }} url={links[0]} />
        )}
      </div>

      {/* Read receipt and timestamp */}
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
        <p className="text-xs">{timeStamp}</p>
      </div>
    </div>
  );
};

export default TestMessages;
