'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 p-8 max-w-4xl mx-auto"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up drop-shadow-lg">
          Innovating Across the Stack. Delivering Impact.
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8 animate-fade-in-up delay-200 opacity-90 drop-shadow-md">
          As a Full-Stack Developer, I craft end-to-end digital solutions that drive success.
        </p>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(66, 153, 225, 0.6)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg transition duration-300 ease-in-out uppercase tracking-wider"
        >
          Explore My Full-Stack Solutions
        </motion.button>
      </motion.div>
    </section>
  );
}
