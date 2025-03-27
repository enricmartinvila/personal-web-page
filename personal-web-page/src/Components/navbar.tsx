import React from 'react';

interface NavbarProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

const sections = [
  { name: 'home', quantity: 0 },
  { name: 'projects', quantity: 4 },
  { name: 'about', quantity: 0 },
  { name: 'contact', quantity: 0 },
];

export default function Navbar({
  activeSection,
  scrollToSection,
}: NavbarProps) {
  return (
    <div className="fixed top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
      <nav className="w-fit py-2 rounded-full items-center shadow-md px-4 flex justify-center bg-stone-900 gap-2.5">
        {sections.map(({ name, quantity }) => (
          <button
            key={name}
            onClick={() => scrollToSection(name)}
            className={`w-fit h-fit px-3 py-1 rounded-full transition-all text-lg ${
              activeSection === name ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {name.charAt(0).toUpperCase() + name.slice(1)}
            {quantity > 0 && (
              <span className="absolute top-1 -right-0 mt-0.5 mr-1 w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
                {quantity}
              </span>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}
