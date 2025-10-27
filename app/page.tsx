'use client';

import Head from 'next/head';
import Navbar  from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Head>
        <title>Professional Enterprise Portfolio</title>
        <meta name="description" content="A high-performance enterprise portfolio showcasing expertise and innovative solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ServicesSection />
        <ContactSection />
      </main>

      <footer className="bg-gray-800 py-10 sm:py-12 text-center text-gray-400 text-sm border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mb-3">&copy; {new Date().getFullYear()} Full Stack Developer. All rights reserved.</p>
          <p className="mb-6 text-gray-300">Innovating for a brighter digital future.</p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300" aria-label="LinkedIn">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.78 7 2.476v6.759z" clipRule="evenodd" /></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300" aria-label="GitHub">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.82-.257.82-.574 0-.282-.01-1.03-.015-2.028-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.332-1.758-1.332-1.758-1.09-.742.083-.728.083-.728 1.205.084 1.838 1.238 1.838 1.238 1.07 1.834 2.807 1.304 3.49.996.108-.775.419-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.465-2.38.123-3.227-.12-.304-.523-1.52.115-3.176 0 0 1-.323 3.27.994.96-.267 1.98-.4 3-.404 1.02.004 2.04.137 3 .404 2.268-1.317 3.267-.994 3.267-.994.638 1.656.236 2.872.118 3.176-.342.847.124 1.917.124 3.227 0 4.61-2.807 5.62-5.474 5.922.43.37.823 1.102.823 2.222 0 1.606-.015 2.89-.015 3.284 0 .318.22.69.825.572C20.565 21.804 24 17.302 24 12c0-6.627-5.373-12-12-12z" clipRule="evenodd" /></svg>
            </a>
          </div>
          <p className="mt-3 text-gray-500 text-xs">Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>

 


    <a
      href="https://wa.me/923028334266" // 👉 replace with your WhatsApp number (format: https://wa.me/<countrycode><number>)
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110 z-50"
    >
      <FaWhatsapp size={28} />
    </a>
  

    </div>
  );
}
