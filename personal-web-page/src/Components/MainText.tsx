import React, { useEffect, useState } from 'react';

const MainText = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate opacity and scale based on scroll position
  const opacity = Math.max(1 - scrollY / 300, 0); // Fade out as you scroll down
  const scale = Math.max(1 - scrollY / 1000, 0.5); // Shrink as you scroll down

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div
        className="px-6 laptop:px-0 flex-col flex items-center justify-center"
        style={{
          opacity: opacity,
          transform: `scale(${scale})`,
          transition: 'opacity 0.1s, transform 0.1s',
        }}
      >
        <h1 className="text-5xl font-bold text-white">Enric Martin Vila</h1>
        <h1 className="text-5xl font-bold text-gray-400">Frontend Developer</h1>
      </div>
    </div>
  );
};

export default MainText;