import React from "react";

const MessaageSeperator = () => {
  return (
    <div>
      <div className="flex flex-row items-center space-x-5 w-full py-2">
        <div className="border-b border-stroke dark:border-strokedark grow"></div>
        <div className="p-2 bg-stone-300 dark:bg-box-dark-2 rounded-md text-sm text-body font-medium">
          Today
        </div>
          <div className="border-b  border-stroke dark:border-strokedark grow"></div>
      </div>
    </div>
  );
};

export default MessaageSeperator;
