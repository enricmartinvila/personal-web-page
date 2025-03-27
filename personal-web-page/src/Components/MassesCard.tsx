import React from "react";
import DateRange from "./DateRange";
import { ReactIcon } from "./ReactIcon";
//
const MassesCard = () => {
  return (
    <div className="flex flex-col">
    <div className="w-full aspect-square rounded-lg bg-gradient-to-br from-[#336335] to-[#634e3e]">
      <div className="relative size-full flex flex-col items-center justify-center p-4 ">
        <h1 className=' absolute top-4 left-4 w-full text-white text-3xl font-semibold'>
          Cal Masses 
        </h1>
        <img src="./images/logomasses.png" alt="" className="w-44 tablet:w-64  desktop:w-72" />
      </div>
    </div>
    <div className="flex flex-row justify-between py-4">
        <div className='flex items-center justify-center gap-2'>
          <p className="text-white font-medium text-2xl">Web App</p>
          <ReactIcon className='size-7' />
        </div>
        <DateRange startDate="January, 2024" />
      </div>
  </div>
  );
};

export default MassesCard;
