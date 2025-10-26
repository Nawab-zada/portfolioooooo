'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex-shrink-0">
          <a href="#" className="text-3xl font-extrabold text-blue-500 hover:text-blue-400 transition-colors duration-300 tracking-tight">
            Full Stack <span className="text-white">Developer</span>
          </a>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300 relative group">
              About
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a href="#portfolio" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300 relative group">
              Portfolio
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a href="#services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300 relative group">
              Services
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300 relative group">
              Contact
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="md:hidden bg-gray-900 bg-opacity-90 backdrop-blur-sm shadow-lg"
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </a>
          <a
            href="#portfolio"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Portfolio
          </a>
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>
        </div>
      </motion.div>
    </nav>
  );
}
