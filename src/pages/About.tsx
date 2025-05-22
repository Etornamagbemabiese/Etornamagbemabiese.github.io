import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 md:px-16 max-w-[1200px]"
      >
        <h2 className="text-2xl md:text-[32px] font-bold text-center text-[#333333] mb-6">
          What is Zellit?
        </h2>

        <p className="text-base md:text-lg text-gray-600 max-w-[650px] mx-auto text-center">
          Zellit is a mobile-first marketplace built exclusively for college students. By requiring .edu email verification and geofencing each campus, Zellit creates a trusted, student-only environment to buy and sell everything from textbooks to dorm furniture. It's Craigslist, reinvented for Gen Z — safer, simpler, and made just for your school.
        </p>
      </motion.div>
    </section>
  );
};

export default About; 