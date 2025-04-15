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
    <>
      {opacity === 0 && (
        // Display the image when the text is fully invisible
        <img
          src="./images/logopersonal.webp"
          alt="Personal Logo"
          className="w-56 fixed top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-auto"
        />
      )}

      <div className="flex h-screen w-screen items-center justify-center" id='home'>
        <div
          className="px-6 laptop:px-0 flex-col flex items-center justify-center"
          style={{
            opacity: opacity,
            transform: `scale(${scale})`,
            transition: 'opacity 0.1s, transform 0.1s',
          }}
        >
          <h1 className="text-7xl font-bold text-white">Enric Martin Vila</h1>
          <h1 className="text-7xl font-bold text-gray-400">
            Frontend Developer
          </h1>
        </div>
      </div>
    </>
  );
};

export default MainText;
