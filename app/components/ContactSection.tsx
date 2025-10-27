'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would send this formData to your backend here.
    // For now, we'll construct the WhatsApp message.
    const whatsappMessage = `Hello, my name is ${formData.name}.\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/923028334266?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    // Optionally clear the form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 lg:px-16 bg-gray-800">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 relative"
      >
        <span className="relative z-10">Connect With Us</span>
        <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1.5 bg-blue-500 rounded-full"></span>
      </motion.h2>
      <div className="max-w-2xl mx-auto bg-gray-700 p-8 sm:p-10 rounded-xl shadow-2xl border border-gray-600">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 sm:gap-8">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 sm:p-4 rounded-lg bg-gray-600 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-lg placeholder-gray-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Professional Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 sm:p-4 rounded-lg bg-gray-600 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-lg placeholder-gray-400"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="p-3 sm:p-4 rounded-lg bg-gray-600 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-lg placeholder-gray-400"
          />
          <textarea
            name="message"
            placeholder="Your Detailed Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="p-3 sm:p-4 rounded-lg bg-gray-600 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-lg placeholder-gray-400"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(66, 153, 225, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-full text-base sm:text-xl shadow-lg transition duration-300 ease-in-out uppercase tracking-wider flex items-center justify-center space-x-3"
          >
            Send Inquiry via WhatsApp
          </motion.button>
        </form>
      </div>
    </section>
  );
}
