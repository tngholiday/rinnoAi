'use client'
import React, { useRef } from 'react';
import { statistics } from '@/app/data/stats';
import { motion, useInView } from '@/app/utils/animation';
import { Icon } from '../ui/Icon';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);
  const isStatsInView = useInView(statsRef);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-zinc-800 dark:to-zinc-900">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-blue-100 text-blue-600 rounded-full px-4 py-1.5 font-medium text-sm mb-3"
            >
              About Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6"
            >
              Innovative IT Solutions Driving Business Success
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-700 dark:text-gray-300 mb-6"
            >
              Founded in 2010, TechSphere has been at the forefront of delivering cutting-edge IT solutions to businesses of all sizes. Our mission is to empower organizations through technology, helping them navigate the digital landscape with confidence.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-700 dark:text-gray-300 mb-8 "
            >
              With a team of experienced IT professionals, we offer a comprehensive range of services from IT infrastructure management and cybersecurity to software development and cloud solutions. Our client-centric approach ensures that we understand your unique business needs and deliver solutions that drive growth and success.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
                className="flex space-x-4"
            >
              <a 
                href="#team" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium bg-blue-600 text-white hover:bg-blue-700 shadow-lg transition transform hover:-translate-y-0.5"
              >
                Meet Our Team
              </a>
              <a 
                href="#contact" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium bg-white text-blue-600 border border-blue-200 hover:border-blue-300 shadow-sm transition transform hover:-translate-y-0.5"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative p-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 mix-blend-multiply"></div>
              <img 
                src="https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team working on IT solutions"
                className="w-full h-auto"
              />
            </div>
            
            {/* Feature cards overlapping the image */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Enterprise Security</p>
                  <p className="text-sm text-gray-500">Advanced protection systems</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Fast Response Time</p>
                  <p className="text-sm text-gray-500">24/7 technical support</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl p-6 shadow-md text-center"
              >
                <div className="bg-blue-50 w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Icon name={stat.icon} className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;