import React from "react";
import DateRange from "./DateRange";
//
const MassesCard = () => {
  return (
    <div className="flex flex-col">
    <div className="w-full aspect-square rounded-lg bg-gradient-to-br from-[#336335] to-[#634e3e]">
      <div className="relative size-full flex flex-col items-center justify-center p-4 ">
        <h1 className=' absolute top-4 left-4 w-full text-white text-3xl font-semibold'>
          Cal Masses 
        </h1>
        <img src="./images/logomasses.png" alt="" className="w-44 tablet:w-64  desktop:w-96" />
      </div>
    </div>
    <div className="flex flex-row justify-between py-4">
      <p className="text-white font-medium text-2xl">Web App</p>
      <DateRange startDate="Jan 20, 2022" endDate="Oct 10, 2025" />
    </div>
  </div>
  );
};

export default MassesCard;
