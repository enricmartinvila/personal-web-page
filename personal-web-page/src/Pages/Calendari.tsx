import React from 'react';
import Timeline from '../Components/Timeline';
import { useI18n } from '../Components/i18nContext';

const Calendari = () => {
  const { translations, handleSelectLanguage } = useI18n();

  return (
    <div className="w-full h-full flex flex-col items-center text-center overflow-auto">
      <h1 className="text-5xl desktop:text-6xl mt-20 mb-24 text-white">
        {translations.calendarPage.title}
      </h1>
      <p className="text-base mobile:px-4 text-text mobile:text-lg tablet:text-xl laptop:text-2xl desktop:text-3xl mb-8">
        {translations.calendarPage.text}
      </p>
      <div className="w-full h-full flex justify-center items-center pt-12 ">
        <Timeline />
      </div>
    </div>
  );
};

export default Calendari;