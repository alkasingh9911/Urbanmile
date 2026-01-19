import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">URBANMILE</h3>
            <p className="text-gray-400 mb-4">
              Construction Private Limited - Specializing in interior and construction works since 2025.
            </p>
            <p className="text-gray-400">
              Transforming spaces with expertise, innovation, and excellence.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-orange-500 transition">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-orange-500 transition">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-orange-500 transition">Projects</a></li>
              <li><a href="#why-us" className="text-gray-400 hover:text-orange-500 transition">Why Us</a></li>
              <li><a href="#directors" className="text-gray-400 hover:text-orange-500 transition">Directors</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-orange-500 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Delhi 110032</li>
              <li>
                <a href="mailto:Info@urbanmile.in" className="hover:text-orange-500 transition">
                  Info@urbanmile.in
                </a>
              </li>
              <li>
                <a href="tel:9873009679" className="hover:text-orange-500 transition">
                  +91 9873009679
                </a>
              </li>
              <li>
                <a href="http://www.urbanmile.in" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">
                  www.urbanmile.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Urbanmile Construction Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
