import React from 'react';
import DateRange from './DateRange';

const WorkingCard = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full aspect-square rounded-lg bg-gradient-to-br from-[#0e0e0e] to-[#3e56dd]">
        <div className="relative size-full flex flex-col items-center justify-center p-4 ">
          <h1 className=' absolute top-4 left-4 w-full text-white text-3xl font-semibold'>
            Work in progress...
          </h1>
          {/* <img src="./images/logocristu.jpeg" alt="" className=" size-44 tablet:size-64  desktop:size-96" /> */}
        </div>
      </div>
      <div className="flex flex-row justify-between py-4">
        <p className="text-white font-medium text-2xl">----- ------</p>
        <DateRange startDate="xx, xxxx"  />
      </div>
    </div>
  );
};

export default WorkingCard;
