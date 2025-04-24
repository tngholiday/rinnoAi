'use client'
import React, { useRef, useState } from 'react';
import { motion, useInView } from '@/app/utils/animation';
import { industries, caseStudies } from '@/app/data/industries';
import { Icon } from '../ui/Icon';
import { ChevronRight, ArrowRight } from 'lucide-react';

const Industries: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0].id);
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);

  const selectedIndustryData = industries.find(ind => ind.id === selectedIndustry);

  return (
    <section id="industries" ref={sectionRef} className="py-20 container mx-auto max-w-7xl  from-gray-50 to-blue-50">
      <div className=" px-4">
        <div className="text-center  mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-blue-100 text-blue-600 rounded-full px-4 py-1.5 font-medium text-sm mb-3"
          >
            Industries
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Industry-Specific IT Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            We deliver tailored technology solutions across various industries, helping businesses overcome unique challenges and achieve digital excellence.
          </motion.p>
        </div>

        {/* Industry Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setSelectedIndustry(industry.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                selectedIndustry === industry.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {industry.name}
            </button>
          ))}
        </motion.div>

        {selectedIndustryData && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 mix-blend-multiply"></div>
                <img
                  src={selectedIndustryData.image}
                  alt={selectedIndustryData.name}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {selectedIndustryData.name}
              </h3>
              <p className="text-gray-600 mb-6">
                {selectedIndustryData.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {selectedIndustryData.stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-md text-center">
                    <p className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {selectedIndustryData.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <ChevronRight className="text-blue-600 mr-2" size={16} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Our Solutions</h4>
                  <ul className="space-y-2">
                    {selectedIndustryData.solutions.map((solution, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <ChevronRight className="text-blue-600 mr-2" size={16} />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium bg-blue-600 text-white hover:bg-blue-700 shadow-lg transition transform hover:-translate-y-0.5"
              >
                Learn More <ArrowRight className="ml-2" size={18} />
              </a>
            </motion.div>
          </div>
        )}

        {/* Case Studies */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Success Stories</h3>
            <p className="text-gray-600">
              Discover how we've helped businesses in various industries achieve their goals through technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all"
              >
                <div className="relative h-48 rounded-lg overflow-hidden mb-6">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-gray-900 mb-4">{study.title}</h4>
                
                <div className="mb-4">
                  <h5 className="font-medium text-gray-900 mb-2">Challenge:</h5>
                  <p className="text-gray-600">{study.challenge}</p>
                </div>

                <div className="mb-4">
                  <h5 className="font-medium text-gray-900 mb-2">Solution:</h5>
                  <p className="text-gray-600">{study.solution}</p>
                </div>

                <div className="mb-6">
                  <h5 className="font-medium text-gray-900 mb-2">Results:</h5>
                  <ul className="space-y-1">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <ChevronRight className="text-blue-600 mr-2" size={16} />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center space-x-4 border-t border-gray-200 pt-6">
                  <img
                    src={study.clientImage}
                    alt={study.clientName}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{study.clientName}</p>
                    <p className="text-sm text-gray-600">{study.clientRole}</p>
                    <p className="text-sm text-blue-600">{study.clientCompany}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;