import React from 'react';
import { calendarText } from '../constants/CalendarConstants';

const Timeline = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  const upcomingEvents = calendarText.filter((item) => {
    const eventDate = item.date ? new Date(item.date) : new Date();
    return (
      (eventDate.getFullYear() === currentYear &&
        (eventDate.getMonth() > currentMonth ||
          (eventDate.getMonth() === currentMonth &&
            eventDate.getDate() >= currentDay))) ||
      eventDate.getFullYear() === currentYear + 1
    );
  });

  return (
    <ul className="relative h-full border-s border-gran py-12">
      {upcomingEvents.map((item, index) => (
        <li key={index} className="mb-14 ms-6">
          <div className="absolute w-4 h-4 bg-gran rounded-full mt-2 -start-2 border border-white" />
          <time className="mb-2 text-lg font-bold leading-none text-text">
            {item.date}
          </time>
          <h3 className="text-2xl font-bold text-white">{item.title}</h3>
          <p className="mb-6 max-w-80 text-lg font-normal text-text">{item.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default Timeline;
