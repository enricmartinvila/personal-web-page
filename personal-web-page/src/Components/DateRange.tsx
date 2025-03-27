import React from 'react';
import { CalendarIcon } from '@heroicons/react/24/solid';

type DateRangeProps = {
  startDate: string;
  endDate?: string; // Make endDate optional
};

const DateRange = ({ startDate, endDate }: DateRangeProps) => {
  return (
    <div className="flex rounded-md flex-row items-center justify-center h-8 w-fit border border-white">
      {endDate ? (
        // Render the full date range if endDate is provided
        <div className="flex justify-between items-center gap-4 p-2">
          <CalendarIcon className="h-5 w-4 text-white" />
          <div className="flex text-white items-center justify-center">
            <p className="text-sm font-bold">{startDate}</p>
            <p className="text-sm px-2">-</p>
            <p className="text-sm font-bold">{endDate}</p>
          </div>
        </div>
      ) : (
        // Render only the startDate in larger text if endDate is not provided
        <div className="flex flex-row items-center justify-between gap-8 px-3 py-2">
          <CalendarIcon className="h-6 w-6 text-white mb-1" />
          <p className="text-lg font-bold text-white">{startDate}</p>
        </div>
      )}
    </div>
  );
};

export default DateRange;
