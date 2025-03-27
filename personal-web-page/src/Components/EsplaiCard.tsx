import React from 'react';
import DateRange from './DateRange';
import { ReactIcon } from './ReactIcon';

const EsplaiCard = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full aspect-square rounded-lg bg-gradient-to-br from-[#e6a2ab] to-[#dd853e]">
        <div className="relative size-full flex flex-col items-center justify-center p-4 ">
          <h1 className=" absolute top-4 left-4 w-full text-white text-3xl font-semibold">
            Esplai Can Cristu
          </h1>
          <img
            src="./images/logocristu.jpeg"
            alt=""
            className=" size-24 tablet:size-44  desktop:size-56"
          />
        </div>
      </div>
      <div className="flex flex-row justify-between py-4">
        <div className='flex items-center justify-center gap-2'>
          <p className="text-white font-medium text-2xl">Web App</p>
          <ReactIcon className='size-7' />
        </div>
        <DateRange startDate="June, 2024" />
      </div>
    </div>
  );
};

export default EsplaiCard;
