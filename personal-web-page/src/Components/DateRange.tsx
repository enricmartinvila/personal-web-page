import React from 'react';
import { CalendarIcon } from '@heroicons/react/24/solid';

type DateRangeProps = {
  startDate: string;
  endDate: string;
};

const DateRange = ({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate: string;
}) => {
  return (
    <div className="flex rounded-md flex-row items-center justify-center h-8 w-60 border border-white hover:bg-gray-800">
      <div className="flex justify-between items-center gap-4 p-2">
        <CalendarIcon className=" h-5 w-4 text-white" />
        <div className="flex text-white items-center justify-center">
          <p className="text-sm font-bold">{startDate}</p>
          <p className="text-sm px-2">-</p>
          <p className="text-sm font-bold">{endDate}</p>
        </div>
      </div>
    </div>
  );
};

export default DateRange;
