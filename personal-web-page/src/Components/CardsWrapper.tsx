import React from 'react';
import Card from './EsplaiCard';
import EsplaiCard from './EsplaiCard';
import MassesCard from './MassesCard';
import WorkingCard from './WorkingCard';

const CardsWrapper = () => {
  return (
    <div className=" px-12 tablet:px-24 laptop:px-32 desktop:px-56 xl:px-52 py-14" id='cards-targets'>
      <div className="flex flex-col py-4 gap-y-4">
        <h1 className="text-5xl text-white font-bold">Projects</h1>
        <p className="max-w-96 text-white text-lg">
          Apart from working on my current job, when i have time i also like to
          do other projects, here you can see some of them
        </p>
      </div>

      <div className="w-full flex flex-col gap-16 gap-y-16 desktop:gap-32 desktop:gap-y-20 xl:gap-44 xl:gap-y-36 tablet:grid grid-cols-3 ">
        <EsplaiCard />
        <MassesCard />
        <WorkingCard />
      </div>
    </div>
  );
};

export default CardsWrapper;
