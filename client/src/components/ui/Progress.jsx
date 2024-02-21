import React from "react";

const Progress = ({ percent }) => {
  return (
    <div className="w-full px-4 lg:w-5/12">
      <div className="mb-8">
        <div className="bg-stroke stroke-black dark:bg-dark-3 relative h-4 w-full rounded-2xl">
          <div
            className={`bg-blue-500 absolute top-0 left-0 flex h-full w-[${percent}%] items-center justify-center rounded-2xl text-xs font-semibold text-white`}
          >
            {percent}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
