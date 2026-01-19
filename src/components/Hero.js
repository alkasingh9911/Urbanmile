import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            URBANMILE
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-orange-500 mb-6">
            Construction Private Limited
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Specializing in interior and construction works. 
            Transforming spaces with expertise, innovation, and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
              View Projects
            </a>
            <a href="#contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </div>
      
      <div className="bg-orange-500 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-white">55+ Years</h3>
              <p className="text-white">Combined Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">₹113+ Cr</h3>
              <p className="text-white">Projects Value</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
