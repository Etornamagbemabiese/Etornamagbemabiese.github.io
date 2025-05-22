import React from 'react';
import { motion } from 'framer-motion';

const Mission: React.FC = () => {
  return (
    <section className="py-20 bg-[#eaeaea]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container max-w-5xl mx-auto px-6 text-center"
      >
        <h2 className="text-3xl font-bold mb-6 text-[#333333]">
          Why We Built Zellit
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          College students today are stuck using outdated, fragmented resale options — from sketchy Craigslist posts to spammy Facebook groups. It's risky, it's inconvenient, and it's not made for Gen Z. We created Zellit to fix all of that.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-8 rounded-2xl shadow-sm max-w-2xl mx-auto"
        >
          <blockquote className="text-lg text-gray-700 italic">
            "83% of Gen Z has bought or wants to buy secondhand — but there's no good way to do it on campus."
          </blockquote>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Mission; 