import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <img src="/images/logo.png" alt="Urbanmile Logo" className="h-12 w-12 mr-3" />
            <h1 className="text-2xl font-bold text-orange-500">URBANMILE</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="hover:bg-gray-700 px-3 py-2 rounded-md">Home</a>
              <a href="#about" className="hover:bg-gray-700 px-3 py-2 rounded-md">About</a>
              <a href="#projects" className="hover:bg-gray-700 px-3 py-2 rounded-md">Projects</a>
              <a href="#why-us" className="hover:bg-gray-700 px-3 py-2 rounded-md">Why Us</a>
              <a href="#directors" className="hover:bg-gray-700 px-3 py-2 rounded-md">Directors</a>
              <a href="#contact" className="hover:bg-gray-700 px-3 py-2 rounded-md">Contact</a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
            <a href="#home" className="block hover:bg-gray-700 px-3 py-2 rounded-md" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" className="block hover:bg-gray-700 px-3 py-2 rounded-md" onClick={() => setIsOpen(false)}>About</a>
            <a href="#projects" className="block hover:bg-gray-700 px-3 py-2 rounded-md" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#why-us" className="block hover:bg-gray-700 px-3 py-2 rounded-md" onClick={() => setIsOpen(false)}>Why Us</a>
            <a href="#directors" className="block hover:bg-gray-700 px-3 py-2 rounded-md" onClick={() => setIsOpen(false)}>Directors</a>
            <a href="#contact" className="block hover:bg-gray-700 px-3 py-2 rounded-md" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
