'use client';

import { motion } from 'framer-motion';

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 md:px-8 lg:px-16 bg-gray-800">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 relative"
      >
        <span className="relative z-10">Our Comprehensive Services</span>
        <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1.5 bg-blue-500 rounded-full"></span>
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="bg-gray-700 p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-600 hover:border-blue-500 transform hover:-translate-y-2 transition-all duration-300"
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-blue-400">Enterprise Web Development</h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">Crafting robust, scalable, and secure web applications tailored to meet complex business requirements and deliver unparalleled performance.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="bg-gray-700 p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-600 hover:border-blue-500 transform hover:-translate-y-2 transition-all duration-300"
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-blue-400">Advanced UI/UX Design</h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">Designing intuitive and engaging user experiences that not only enhance usability but also drive significant user adoption and satisfaction.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          className="bg-gray-700 p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-600 hover:border-blue-500 transform hover:-translate-y-2 transition-all duration-300"
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-400">Strategic Technology Consulting</h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">Providing expert guidance and strategic roadmaps to navigate digital transformation, optimize technology investments, and ensure long-term success.</p>
        </motion.div>
      </div>
    </section>
  );
}
