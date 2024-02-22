import React, { Children } from "react";

export default function ExploreCard({
  name,
  description,
  currentAmount,
  targetAmount,
  children,
}) {
  return (
    <div>
      <div class="w-[400px] max-w-xs p-6 overflow-hidden bg-white shadow-lg rounded-xl dark:bg-gray-800">
        <div class="flex flex-col items-center justify-between md:flex-row">
          <div class="flex items-center justify-start flex-grow w-full">
            <a href="#" class="relative block">
              <img
                alt="profil"
                src="https://i.pinimg.com/564x/6f/52/13/6f521354ef993f1dee8b023f2a84cde9.jpg"
                class="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <div class="flex flex-col items-start ml-4">
              <span class="text-gray-700 dark:text-white">0x0....</span>
              <span class="text-sm font-light text-gray-400 dark:text-gray-300">
                Updated
              </span>
            </div>
          </div>
          <div class="flex-none hidden md:block ">
            <span class="w-full px-3 py-1 text-sm text-white bg-blue-500 rounded-full">
              status
            </span>
          </div>
        </div>
        <p class="mt-4 mb-2 text-lg text-gray-800 dark:text-white">{name}</p>
        <p class="text-sm font-normal text-gray-400">{description}</p>
        {/* fixed texxt visibility issue */}
        <p className="text-yellow-500">Target Amount: {targetAmount}</p>
        <div class="">
          <div class="flex items-start justify-between w-full">
            <p class="flex-grow w-full text-2xl text-gray-700">
              funded:
              <span class="font-light text-green-400 text-md">
                $ {currentAmount}
              </span>
            </p>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
