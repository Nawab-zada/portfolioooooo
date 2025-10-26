'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 lg:px-16 bg-gray-800">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 relative"
      >
        <span className="relative z-10">About My Expertise</span>
        <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-blue-500 rounded-full"></span>
      </motion.h2>
      <div className="max-w-5xl mx-auto text-center text-sm sm:text-base md:text-lg leading-relaxed">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mb-10 text-gray-200"
        >
          I am a seasoned Full-Stack Developer with 3 years of hands-on experience, dedicated to delivering impactful digital solutions. I've had the privilege to work with diverse organizations like Sturctur Ltd and Panacloud, where I contributed as a full-time Full-Stack Developer. My expertise spans high-performance web applications, scalable software architectures, and robust cloud infrastructures. My passion lies in tackling intricate challenges and producing exceptional outcomes that drive measurable business growth and redefine industry standards.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
        >
          <div className="bg-gray-700 p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-600 hover:border-blue-500 transform hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-blue-400">Frontend Innovation</h3>
            <p className="text-gray-300 text-sm sm:text-base">Leveraging cutting-edge frameworks like React and Next.js, powered by TypeScript, to build intuitive and dynamic user experiences that engage and convert.</p>
          </div>
          <div className="bg-gray-700 p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-600 hover:border-blue-500 transform hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-blue-400">Backend Engineering</h3>
            <p className="text-gray-300 text-sm sm:text-base">Developing scalable and secure server-side applications with Node.js, Next.js (API Routes), Python, and MongoDB, coupled with robust API design for seamless data flow and high reliability.</p>
          </div>
          <div className="bg-gray-700 p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-600 hover:border-blue-500 transform hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-400">Cloud & DevOps Mastery</h3>
            <p className="text-gray-300 text-sm sm:text-base">Implementing resilient cloud solutions on platforms like AWS, orchestrating with Docker and Kubernetes for automated, efficient, and reliable deployments.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
