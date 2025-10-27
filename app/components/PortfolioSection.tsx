'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PortfolioSection() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');

  const openVideoModal = (videoUrl: string) => {
    setCurrentVideoUrl(videoUrl);
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
    setCurrentVideoUrl('');
  };

  return (
    <section id="portfolio" className="py-24 px-4 md:px-8 lg:px-16 bg-gray-900">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 relative"
      >
        <span className="relative z-10">Our Landmark Projects</span>
        <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1.5 bg-blue-500 rounded-full"></span>
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-7xl mx-auto">
        {/* Project Card 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative bg-gray-800 rounded-xl shadow-2xl overflow-hidden group cursor-pointer border border-gray-600 hover:border-blue-500 transform hover:-translate-y-2 transition-all duration-300"
          onClick={() => window.open('https://admin-pied-omega.vercel.app/', '_blank')}
        >
          <img src="/admin.png" alt="Project: Admin Dashboard" className="w-full h-56 sm:h-64 object-cover object-center" />
          <div className="p-6 sm:p-7">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-400">Admin Dashboard</h3>
            <p className="text-gray-300 text-sm leading-relaxed">A comprehensive administrative portal for managing users, content, and system configurations with intuitive controls and real-time data visualization.</p>
            <span className="mt-4 sm:mt-5 text-blue-400 transition duration-300 font-medium flex items-center">
              View Live Demo <span className="ml-2">&rarr;</span>
            </span>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-xl sm:text-2xl font-bold tracking-wide">Explore Project</p>
          </div>
        </motion.div>

        {/* Project Card 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative bg-gray-800 rounded-xl shadow-2xl overflow-hidden group cursor-pointer border border-gray-600 hover:border-blue-500 transform hover:-translate-y-2 transition-all duration-300"
          onClick={() => window.open('https://vendor-ruby.vercel.app/', '_blank')}
        >
          <img src="/vender.png" alt="Project: Vendor Dashboard" className="w-full h-56 sm:h-64 object-cover object-center" />
          <div className="p-6 sm:p-7">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-400">Vendor Dashboard</h3>
            <p className="text-gray-300 text-sm leading-relaxed">An intuitive platform for vendors to manage their products, orders, and sales performance, enhancing operational efficiency and revenue generation.</p>
            <span className="mt-4 sm:mt-5 text-blue-400 transition duration-300 font-medium flex items-center">
              View Live Demo <span className="ml-2">&rarr;</span>
            </span>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-xl sm:text-2xl font-bold tracking-wide">Explore Project</p>
          </div>
        </motion.div>

        {/* Project Card 3 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="relative bg-gray-800 rounded-xl shadow-2xl overflow-hidden group cursor-pointer border border-gray-600 hover:border-blue-500 transform hover:-translate-y-2 transition-all duration-300"
          onClick={() => window.open('https://standandpay.vercel.app/', '_blank')}
        >
          <img src="/stayandpay.PNG" alt="Project: Global Transpay" className="w-full h-56 sm:h-64 object-cover object-center" />
          <div className="p-6 sm:p-7">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-400">Global Transpay Platform</h3>
            <p className="text-gray-300 text-sm leading-relaxed">A secure and efficient global payment and financial hub, offering diverse services from trading platforms to international scholarships and virtual cards.</p>
            <span className="mt-4 sm:mt-5 text-blue-400 transition duration-300 font-medium flex items-center">
              View Live Demo <span className="ml-2">&rarr;</span>
            </span>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-xl sm:text-2xl font-bold tracking-wide">Explore Project</p>
          </div>
        </motion.div>

        {/* New Project Card: Food Delivery */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          className="relative bg-gray-800 rounded-xl shadow-2xl overflow-hidden group cursor-pointer border border-gray-600 hover:border-blue-500 transform hover:-translate-y-2 transition-all duration-300"
          onClick={() => alert('Link not available yet!')}
        >
          <img src="/deliverimage.png" alt="Project: Food Delivery App" className="w-full h-56 sm:h-64 object-cover object-center" />
          <div className="p-6 sm:p-7">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-400">Food Delivery Platform</h3>
            <p className="text-gray-300 text-sm leading-relaxed">A modern and efficient platform connecting customers with local restaurants for seamless food ordering and delivery experiences.</p>
            <div className="flex flex-wrap gap-3 mt-4 sm:mt-5">
              <span
                onClick={() => alert('Link not available yet!')}
                className="text-blue-400 hover:text-blue-300 transition duration-300 font-medium flex items-center cursor-pointer"
              >
                View Details <span className="ml-2">&rarr;</span>
              </span>
              <span
                onClick={() => openVideoModal('')}
                className="text-purple-400 hover:text-purple-300 transition duration-300 font-medium flex items-center cursor-pointer"
              >
                Watch Video <span className="ml-2">▶</span>
              </span>
            </div>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-xl sm:text-2xl font-bold tracking-wide">Explore Project</p>
          </div>
        </motion.div>

        {/* New Project Card: E-commerce */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
          className="relative bg-gray-800 rounded-xl shadow-2xl overflow-hidden group cursor-pointer border border-gray-600 hover:border-blue-500 transform hover:-translate-y-2 transition-all duration-300"
          onClick={() => alert('Link not available yet!')}
        >
          <img src="/hero section.png" alt="Project: E-commerce Store" className="w-full h-56 sm:h-64 object-cover object-center" />
          <div className="p-6 sm:p-7">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-400">E-commerce Storefront</h3>
            <p className="text-gray-300 text-sm leading-relaxed">A dynamic and scalable e-commerce solution designed to provide a seamless shopping experience with robust product management and secure transactions.</p>
            <span className="mt-4 sm:mt-5 text-blue-400 transition duration-300 font-medium flex items-center">
              View Details <span className="ml-2">&rarr;</span>
            </span>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-xl sm:text-2xl font-bold tracking-wide">Explore Project</p>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={closeVideoModal}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-4xl h-auto aspect-video rounded-lg shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the video player
          >
            <iframe
              className="w-full h-full"
              src={`${currentVideoUrl}?autoplay=1`}
              title="Project Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition-colors duration-200"
            >
              &times;
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
