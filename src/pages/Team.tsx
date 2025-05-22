import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Etornam Agbemabiese',
    role: 'CEO – Business Team',
    school: 'UNC Chapel Hill - Business Admin, Computer Science',
    quote: 'Built by students. For students.',
    image: '/info/etornam-headshot.jpeg',
  },
  {
    name: 'Shreejal Paudel',
    role: 'CTO – Developer Team',
    school: 'UNC Chapel Hill - Computer Science',
    quote: 'Campus resale should be click-and-done.',
    image: '/info/shreejal-headshot.jpeg',
  },
  {
    name: 'Saksham Rustagi',
    role: 'Lead Back End Engineer – Developer Team',
    school: 'UNC Chapel Hill - Computer Science, Business',
    quote: 'No downtime. No nonsense.',
    image: '/info/saksham-headshot.jpeg',
  },
  {
    name: 'Apurwa Khanal',
    role: 'Lead Front End – Developer Team',
    school: 'UNC Chapel Hill - Computer Science',
    quote: 'If it's not slick, I don't ship it.',
    image: '/info/apurwa-headshot.jpeg',
  },
  {
    name: 'Nicole Tan',
    role: 'Engineer – Developer Team',
    school: 'NC State University - Computer Science, Graphic Comm',
    quote: 'Making Zellit smooth behind the scenes.',
    image: '/info/nicole-headshot.jpeg',
  },
  {
    name: 'Ahmed Abnowf',
    role: 'Secretary – Business Team',
    school: 'UNC Chapel Hill - Info Science, Public Policy',
    quote: 'Keeping the gears running clean.',
    image: '/info/headshot-info.jpeg',
  },
  {
    name: 'Joseph Warioba',
    role: 'CMO – Marketing Team',
    school: 'UNC Chapel Hill - Biochemistry',
    quote: 'Turning heads on campus — and online.',
    image: '/info/joseph-headshot.jpeg',
  },
  {
    name: 'Xinyi (Lydia) Chen',
    role: 'Branding Specialist – Marketing Team',
    school: 'UNC Chapel Hill - Media & Journalism, Pre-Law',
    quote: 'Making Zellit unforgettable.',
    image: '/info/lydia-headshot.jpeg',
  },
  {
    name: 'Monica Bach',
    role: 'Marketing Specialist – Marketing Team',
    school: 'UNC Chapel Hill - Advertising/PR, Statistics',
    quote: 'Spreading the word, one campus at a time.',
    image: '/info/monica-headshot.jpeg',
  },
];

const Team: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 md:px-16 max-w-6xl"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#333333] mb-4">
          Meet the Founders
        </h2>
        <p className="text-base md:text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Built by students who wanted a safer, smarter way to resell on campus.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full w-36 h-36 mx-auto object-cover"
              />
              <h3 className="text-xl font-semibold text-center mt-4 text-[#333333]">
                {member.name}
              </h3>
              <p className="text-sm text-center text-gray-500">{member.role}</p>
              <p className="text-sm text-center text-gray-600">{member.school}</p>
              <p className="text-sm italic text-center mt-2 text-gray-600">
                "{member.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Team; 