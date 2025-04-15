import React, { useEffect, useState } from 'react';

type AutoReadTextProps = {
  text: string;
};

const AutoReadText = ({ text }: AutoReadTextProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const words = text.split(' ');

  return (
    <>
      <div
        className=" px-12 tablet:px-24 laptop:px-32 desktop:px-56 xl:px-52 py-14"
        id=""
      >
        <div className="flex flex-col py-4 gap-y-4">
          <h1 className="text-5xl text-white font-bold">About</h1>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex-col flex items-center justify-center max-w-5xl">
          <h1 className="text-4xl font-bold text-gray-500">
            {words.map((word, index) => (
              <span
                key={index}
                className={`transition-colors duration-300 ${
                  scrollPosition > index * 20 ? 'text-white' : 'text-gray-500'
                }`}
              >
                {word}{' '}
              </span>
            ))}
          </h1>
        </div>
      </div>
    </>
  );
};

export default AutoReadText;
