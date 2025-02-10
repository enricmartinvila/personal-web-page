import React, { useEffect, useState } from 'react';

const MainText = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex-col flex items-center justify-center">
        <h1 className={`text-4xl font-bold text-white ${animate ? 'animate-slide-in' : ''}`}>Enric Martin Vila</h1>
        <h1 className={`text-4xl font-bold text-gray-400 ${animate ? 'animate-slide-in' : ''}`}>Frontend Developer</h1>
      </div>
    </div>
  );
};

export default MainText;