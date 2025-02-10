import React from 'react';
import Slider from '../Components/Slider';
import { useI18n } from '../Components/i18nContext';
import TextSlider from '../Components/TextSlider';

export default function MainPage() {

  return (
    <div className="flex items-center justify-center size-full">
      <div className="flex w-4/6 mobile:w-full laptop:w-4/6 h-2/3 flex-col laptop:flex-row pt-24 px-32 mobile:px-8 mobile:py-6">
        <div className="flex flex-col items-center justify-center w-full laptop:w-1/2 p-2">
          <TextSlider />
        </div>
        <div className="w-full laptop:w-1/2 p-2">
          <Slider />
        </div>
      </div>
    </div>
  );
}
