import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <section 
      className="min-h-[80vh] flex items-center justify-center px-4 md:px-8 relative overflow-hidden"
      style={{
        backgroundImage: 'url("/collegestudents.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Background Blob */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px]"
        >
          <path
            fill="#8ed1c6"
            d="M400 0C179.9 0 0 179.9 0 400s179.9 400 400 400 400-179.9 400-400S620.1 0 400 0zm0 700c-165.7 0-300-134.3-300-300S234.3 100 400 100s300 134.3 300 300-134.3 300-300 300z"
          />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto max-w-4xl text-center relative z-10"
      >
        <span className="inline-block bg-white/90 text-sm px-4 py-1 rounded-full mb-6 font-medium">
          🚀 Coming Soon
        </span>

        <h1 className="text-3xl md:text-[42px] font-bold mb-6 text-white leading-tight">
          The student-only marketplace for campus life.
        </h1>

        <p className="text-lg md:text-[22px] mb-12 text-white/90 max-w-[700px] mx-auto">
          Buy, sell, and save — with classmates, not strangers.
        </p>
      </motion.div>
    </section>
  );
};

export default Home; 