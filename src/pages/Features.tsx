import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: '🔒',
    title: 'Verified Access',
    description: 'Only .edu emails allowed — safer by default.',
  },
  {
    icon: '📍',
    title: 'Campus-Only Listings',
    description: 'Everything you see is from your school — no strangers.',
  },
  {
    icon: '🤖',
    title: 'AI-Powered Discovery',
    description: 'Smart suggestions based on your major, dorm, and classes.',
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 md:px-16 max-w-[1200px]"
      >
        <h2 className="text-2xl md:text-[32px] font-bold text-center text-[#333333] mb-12">
          Key Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md"
              tabIndex={0}
            >
              <div
                className="w-12 h-12 bg-[#8ed1c6] rounded-full mb-6 flex items-center justify-center text-2xl"
                role="img"
                aria-label={feature.title}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-[#333333]">
                {feature.title}
              </h3>
              <p className="text-base md:text-[16px] text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Features; 