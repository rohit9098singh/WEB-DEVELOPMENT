import React from "react";

const TypingIndicator = () => {
  return (
    <div className=" m-1  max-w-fit bg-stone-300 dark:bg-boxdark-2 p-2 rounded-tl-none rounded-md">
      <div className="flex  items-center space-x-2 text-md text-body dark:text-white">
        <p className="text-black-2 dark:text-white font-semibold">Typing</p>
        <div className=" flex items-center h-[17px] space-x-2 mt-1">
          {/* Dot 1 */}
          <span
            className="h-1.5 w-1.5 bg-black-2  dark:bg-white rounded-full"
            style={{
              animation: "typing 1.5s infinite ease-in-out",
              animationDelay: "0ms",
            }}
          ></span>
          {/* Dot 2 */}
          <span
            className="h-1.5 w-1.5 bg-black-2  dark:bg-white rounded-full"
            style={{
              animation: "typing 1.5s infinite ease-in-out",
              animationDelay: "200ms",
            }}
          ></span>
          {/* Dot 3 */}
          <span
            className="h-1.5 w-1.5 bg-black-2  dark:bg-white rounded-full"
            style={{
              animation: "typing 1.5s infinite ease-in-out",
              animationDelay: "400ms",
            }}
          ></span>
        </div>
      </div>

      {/* Keyframes Inline */}
      <style>
        {`
          @keyframes typing {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
        `}
      </style>
    </div>
  );
};

export default TypingIndicator;
