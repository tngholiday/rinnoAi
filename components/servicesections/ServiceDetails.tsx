'use client'
import React, { useRef } from 'react';
import { motion, useInView } from '@/app/utils/animation';
import { allServices } from '@/lib/constants';
import { Icon } from '../ui/Icon';

interface ServiceDetailsProps {
  serviceKey: string;
  subServiceSlug: string;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ serviceKey, subServiceSlug }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  const service = allServices[serviceKey as keyof typeof allServices];
  const subServiceName = service.services.find(
    (item) => item.toLowerCase().replace(/\s+/g, "-") === subServiceSlug
  );

  // Define detailed content for each sub-service
  const serviceContent = {
    'custom-software-development': {
      benefits: [
        {
          title: 'Tailored Solutions',
          description: 'Custom software designed specifically for your business needs',
          icon: 'code',
          features: ['Business Process Automation', 'Custom Workflows', 'Integration Capabilities']
        },
        {
          title: 'Scalable Architecture',
          description: 'Built to grow with your business',
          icon: 'arrow-up',
          features: ['Microservices Architecture', 'Cloud-Native Design', 'Horizontal Scaling']
        },
        {
          title: 'Modern Technologies',
          description: 'Using the latest tech stack for optimal performance',
          icon: 'cpu',
          features: ['Latest Frameworks', 'Best Practices', 'Future-Proof Solutions']
        }
      ],
      process: [
        {
          title: 'Discovery & Planning',
          description: 'Understanding your requirements and creating a detailed roadmap',
          icon: 'search'
        },
        {
          title: 'Design & Architecture',
          description: 'Creating the technical design and system architecture',
          icon: 'layout'
        },
        {
          title: 'Development',
          description: 'Implementing the solution with best practices',
          icon: 'code'
        },
        {
          title: 'Testing & Quality',
          description: 'Rigorous testing and quality assurance',
          icon: 'check-circle'
        },
        {
          title: 'Deployment',
          description: 'Smooth deployment and launch',
          icon: 'rocket'
        },
        {
          title: 'Support & Maintenance',
          description: 'Ongoing support and maintenance',
          icon: 'life-buoy'
        }
      ],
      technologies: ['React', 'Node.js', 'Python', 'Java', 'AWS', 'Docker']
    },
    'e-commerce-solutions': {
      benefits: [
        {
          title: 'User-Friendly Interface',
          description: 'Intuitive shopping experience for your customers',
          icon: 'shopping-cart',
          features: ['Responsive Design', 'Easy Navigation', 'Quick Checkout']
        },
        {
          title: 'Secure Payments',
          description: 'Multiple secure payment gateway integrations',
          icon: 'shield',
          features: ['PCI Compliance', 'Multiple Gateways', 'Fraud Protection']
        },
        {
          title: 'Inventory Management',
          description: 'Efficient stock tracking and management',
          icon: 'package',
          features: ['Real-time Tracking', 'Automated Alerts', 'Multi-warehouse Support']
        }
      ],
      process: [
        {
          title: 'Market Analysis',
          description: 'Understanding your target market and competition',
          icon: 'bar-chart'
        },
        {
          title: 'Platform Selection',
          description: 'Choosing the right e-commerce platform',
          icon: 'shopping-bag'
        },
        {
          title: 'Design & Development',
          description: 'Creating a unique and engaging store',
          icon: 'layout'
        },
        {
          title: 'Integration',
          description: 'Connecting payment gateways and shipping',
          icon: 'link'
        },
        {
          title: 'Testing',
          description: 'Ensuring everything works perfectly',
          icon: 'check-circle'
        },
        {
          title: 'Launch & Marketing',
          description: 'Going live and promoting your store',
          icon: 'rocket'
        }
      ],
      technologies: ['Magento', 'Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'AWS']
    },
    'mobile-app-development': {
      benefits: [
        {
          title: 'Native Performance',
          description: 'Optimized for each platform',
          icon: 'smartphone',
          features: ['Platform-Specific Features', 'High Performance', 'Native UI']
        },
        {
          title: 'Cross-Platform',
          description: 'Reach users on all devices',
          icon: 'layers',
          features: ['Single Codebase', 'Consistent Experience', 'Cost-Effective']
        },
        {
          title: 'Offline Support',
          description: 'Work without internet connection',
          icon: 'wifi-off',
          features: ['Data Synchronization', 'Offline Storage', 'Background Sync']
        }
      ],
      process: [
        {
          title: 'Requirements',
          description: 'Gathering and analyzing app requirements',
          icon: 'file-text'
        },
        {
          title: 'UI/UX Design',
          description: 'Creating intuitive user interfaces',
          icon: 'layout'
        },
        {
          title: 'Development',
          description: 'Building the app with best practices',
          icon: 'code'
        },
        {
          title: 'Testing',
          description: 'Comprehensive testing on all devices',
          icon: 'check-circle'
        },
        {
          title: 'App Store Submission',
          description: 'Preparing and submitting to stores',
          icon: 'upload'
        },
        {
          title: 'Maintenance',
          description: 'Regular updates and improvements',
          icon: 'refresh-cw'
        }
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS']
    }
  };

  // Get content for the current sub-service or use default content
  const currentContent = serviceContent[subServiceSlug as keyof typeof serviceContent] || {
    benefits: [
      {
        title: 'Expert Implementation',
        description: 'Professional development by experienced team',
        icon: 'code',
        features: ['Best Practices', 'Code Quality', 'Performance Optimization']
      },
      {
        title: 'Quality Assurance',
        description: 'Rigorous testing and quality checks',
        icon: 'shield',
        features: ['Automated Testing', 'Manual Testing', 'Security Testing']
      },
      {
        title: 'Ongoing Support',
        description: 'Continuous maintenance and updates',
        icon: 'support',
        features: ['24/7 Support', 'Regular Updates', 'Performance Monitoring']
      }
    ],
    process: [
      {
        title: 'Analysis',
        description: 'Understanding your requirements',
        icon: 'search'
      },
      {
        title: 'Development',
        description: 'Building your solution',
        icon: 'code'
      },
      {
        title: 'Testing',
        description: 'Ensuring quality',
        icon: 'shield'
      },
      {
        title: 'Deployment',
        description: 'Launching your solution',
        icon: 'rocket'
      }
    ],
    technologies: ['Modern Stack', 'Cloud Services', 'Security Tools']
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-zinc-800 dark:to-zinc-900">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full px-4 py-1.5 font-medium text-sm mb-3"
          >
            {service.title}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4"
          >
            {subServiceName}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-lg"
          >
            Comprehensive solutions tailored to your specific needs
          </motion.p>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {currentContent.benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <Icon name={benefit.icon} className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {benefit.description}
              </p>
              <ul className="space-y-2">
                {benefit.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600 dark:text-gray-400">
                    <Icon name="check" className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center"
          >
            Our Development Process
          </motion.h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2 hidden md:block"></div>
            <div className="space-y-12">
              {currentContent.process.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white z-10 mx-4">
                    <Icon name={step.icon} className="w-6 h-6" />
                  </div>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center"
          >
            Technologies We Use
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {currentContent.technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white dark:bg-zinc-800 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <span className="text-gray-900 dark:text-gray-100 font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 shadow-lg transition transform hover:-translate-y-0.5"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetails; 