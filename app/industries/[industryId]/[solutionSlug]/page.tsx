import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/app/utils/animation';
import { industries, caseStudies } from '@/app/data/industries';
import { ChevronRight, ArrowRight } from 'lucide-react';

const IndustriesPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <div ref={sectionRef}>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Industry Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 mb-12"
            >
              Discover how our tailored IT solutions drive innovation and growth across different industries
            </motion.p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative h-64">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{industry.name}</h3>
                    <p className="text-gray-200">{industry.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {industry.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Benefits</h4>
                      <ul className="space-y-2">
                        {industry.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <ChevronRight className="text-blue-600 mr-2" size={16} />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center w-full px-6 py-3 rounded-full font-medium bg-blue-600 text-white hover:bg-blue-700 shadow-md transition transform hover:-translate-y-0.5"
                    >
                      Learn More <ArrowRight className="ml-2" size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-gray-600">
              Real-world examples of how our solutions have transformed businesses across industries
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl p-6 shadow-lg"
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

                <h3 className="text-xl font-semibold text-gray-900 mb-4">{study.title}</h3>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Challenge:</h4>
                  <p className="text-gray-600">{study.challenge}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Solution:</h4>
                  <p className="text-gray-600">{study.solution}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <ChevronRight className="text-blue-600 mr-2" size={16} />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600 mb-6">
                  "{study.quote}"
                </blockquote>

                <div className="flex items-center space-x-4">
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
      </section>
    </div>
  );
};

export default IndustriesPage;