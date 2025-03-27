import { ArrowDownCircleIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';

const ScrollDownButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsVisible(false); // Hide the button when scrolling starts
      } else {
        setIsVisible(true); // Show the button when at the top
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTarget = () => {
    const target = document.getElementById('cards-targets');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      onClick={handleScrollToTarget}
      className={`fixed bottom-10 gap-2 right-10 flex w-fit px-3 py-1 text-white text-xl animate-bounce border rounded-full cursor-pointer hover:bg-stone-900 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <p>Scroll down</p>
      <ArrowDownCircleIcon className="h-6 w-6 text-white" />
    </div>
  );
};

export default ScrollDownButton;