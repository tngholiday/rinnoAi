'use client'
import React, { useRef } from 'react';
import { pricingPlans } from '@/app/data/pricing';
import { motion, useInView } from '@/app/utils/animation';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <section id="pricing" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-blue-50 text-blue-600 rounded-full px-4 py-1.5 font-medium text-sm mb-3"
          >
            Pricing Plans
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Transparent Pricing for Your IT Needs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Choose the plan that best fits your business requirements. All plans include our core IT support services.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden border ${
                plan.popular 
                  ? 'border-blue-200 relative z-10 transform md:-translate-y-4 scale-105' 
                  : 'border-gray-100'
              }`}
            >
              {plan.popular && (
                <div className="bg-blue-600 text-white text-center text-sm font-medium py-1.5">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="flex-shrink-0 bg-green-100 rounded-full p-1 mr-2 mt-0.5">
                        <Check size={14} className="text-green-600" />
                      </span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center py-3 px-6 rounded-full font-medium transition transform hover:-translate-y-0.5 ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'
                      : 'bg-white text-blue-600 border border-blue-200 hover:border-blue-300 shadow-sm'
                  }`}
                >
                  Get Started
                </a>
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
          <p className="text-gray-600 mb-4">
            Need a custom plan tailored to your specific business needs?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
          >
            Contact Us for Custom Pricing
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;