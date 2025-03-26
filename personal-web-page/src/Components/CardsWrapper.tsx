import React from 'react';
import Card from './EsplaiCard';
import EsplaiCard from './EsplaiCard';
import MassesCard from './MassesCard';

const CardsWrapper = () => {
  return (
    <div className=" px-12 tablet:px-24 laptop:px-32 desktop:px-44 py-14">
      <div className="flex flex-col py-4 gap-y-4">
        <h1 className="text-4xl text-white font-bold">Projects</h1>
        <p className="max-w-72 text-white">
          Apart from working on my current job, when i have time i also like to
          do other projects, here you can see some of them
        </p>
      </div>

      <div className="w-full flex flex-col gap-24 gap-y-24 laptop:grid grid-cols-2 ">
        <EsplaiCard />
        <MassesCard />
        <EsplaiCard />
        <EsplaiCard />
      </div>
    </div>
  );
};

export default CardsWrapper;
