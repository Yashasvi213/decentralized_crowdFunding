import React, { Children } from "react";

import Avatar from "@mui/material/Avatar";
import { Progress } from "antd";
function truncateDescription(description, limit) {
  const char = description.split("");
  if (char.length > limit) {
    return char.slice(0, limit).join("") + "...";
  }
  return description;
}

export default function ExploreCard({
  name,
  description,
  currentAmount,
  targetAmount,
  children,
  funders,
}) {
  const percent = (currentAmount / targetAmount) * 100;
  return (
    <div>
      <div className="bg-blue-50 p-2 rounded-md shadow-md w-[300px] border-[1px] border-black hover:bg-blue-100 transition-all ease-in-out">
        <div class="p-2 max-w-[300px] flex flex-col gap-2  rounded-lg ">
          <div className="flex justify-between">
            <div>
              <h1 class="text-base font-semibold">{truncateDescription(name, 15)}</h1>
              <p class="text-gray-500 text-md ">
                {truncateDescription(description, 20)}
              </p>
            </div>
            <Avatar src="https://i.pinimg.com/564x/28/48/e9/2848e9b67d266928df3665e4cb1293d4.jpg" />
          </div>

          <div class="flex justify-between">
            <div className="flex gap-2">
              <p>raised</p>
              <p className="text-green-600">{currentAmount}</p>
            </div>
          </div>
          <div className="">
            <Progress percent={percent} showInfo={false} />
            {percent}% of {targetAmount}
          </div>
          {/* <div class="w-full h-[30px] rounded-xl bg-[url('https://i.pinimg.com/564x/9e/6c/e3/9e6ce3b59f19f82d8eeba6b733c2cc76.jpg')] transition duration-300 ease-in-out transform hover:scale-105"></div> */}
          {children}
        </div>
      </div>
    </div>
  );
}
