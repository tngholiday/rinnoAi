'use client'
import React, { useRef } from 'react';
import { teamMembers } from '@/app/data/team';
import { motion, useInView } from '@/app/utils/animation';

const Team: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <section id="team" ref={sectionRef} className="py-20 bg-white dark:bg-zinc-900">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-blue-50 dark:bg-zinc-900 text-blue-600 rounded-full px-4 py-1.5 font-medium text-sm mb-3"
          >
            Our Team
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4"
          >
            Meet Our Expert Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-lg"
          >
            Our team of experienced IT professionals is dedicated to delivering innovative solutions tailored to your business needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-md group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent opacity-50"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{member.bio}</p>
                <div>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">Expertise</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Join our team of talented professionals and help us shape the future of technology.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium bg-blue-600 text-white hover:bg-blue-700 shadow-lg transition transform hover:-translate-y-0.5"
          >
            View Career Opportunities
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;