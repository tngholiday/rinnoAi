'use client'
import React, { useState, useRef, useEffect } from 'react';
import { services, serviceCategories } from '@/app/data/services';
import { motion, useInView } from '@/app/utils/animation';
import { Icon } from '../ui/Icon';

const Services: React.FC = () => {    
  const [selectedCategory, setSelectedCategory] = useState<string>('all');  
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef); 

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <section id="services" className="py-20 bg-white dark:bg-zinc-900 " ref={sectionRef}>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-blue-50 dark:bg-zinc-900 text-blue-600 rounded-full px-4 py-1.5 font-medium text-sm mb-3"
          >
            Our Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4"
          >
            Comprehensive IT Solutions for Every Business Need
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-lg dark:text-gray-400"
          >
            From infrastructure management to cutting-edge software development, we deliver tailored solutions to help your business thrive.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            All Services
          </button>
          {serviceCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 * (index % 4) }}
              className="bg-white border border-gray-100 dark:bg-zinc-900 dark:border-zinc-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="bg-blue-50 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-all">
                <Icon name={service.icon} className="w-8 h-8 text-blue-600 group-hover:text-white transition-all" />
              </div>
              <div className="mb-1 flex items-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mr-2 ">{service.title}</h3>
                <span className="text-xs font-medium bg-gray-100 dark:bg-zinc-800 text-gray-600 px-2 py-0.5 rounded-full">
                  {service.category}
                </span>
              </div>
              <p className="text-gray-600 mb-5 dark:text-gray-400">{service.description}</p>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;