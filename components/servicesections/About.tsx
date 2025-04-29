'use client'
import React, { useRef } from 'react';
import { statistics } from '@/app/data/stats';
import { motion, useInView } from '@/app/utils/animation';
import { Icon } from '../ui/Icon';
import { allServices, aboutData } from "@/lib/constants";

// Define the data structure for each title
interface AboutData {
  title: string;
  subtitle: string;
  description: string;
  additionalDescription: string;
  image: string;
  imageAlt: string;
  features: {
    title: string;
    description: string;
    icon: string;
    color: string;
  }[];
}

// Create a mapping of service keys to their corresponding images and features
const serviceImages: Record<string, { image: string; imageAlt: string }> = {
  softwareDev: {
    image: 'https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt: 'Software development team working'
  },
  webDev: {
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt: 'Web development process'
  },
  mobileDev: {
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt: 'Mobile app development'
  },
  gameDev: {
    image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt: 'Game development process'
  },
  aiML: {
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt: 'AI and machine learning'
  },
  cloud: {
    image: 'https://images.pexels.com/photos/1181678/pexels-photo-1181678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt: 'Cloud services'
  },
  testing: {
    image: 'https://images.pexels.com/photos/1181679/pexels-photo-1181679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt: 'Quality assurance and testing'
  },
  design: {
    image: 'https://images.pexels.com/photos/1181680/pexels-photo-1181680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt: 'UI/UX design process'
  },
  marketing: {
    image: 'https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt: 'Digital marketing strategies'
  },
  security: {
    image: 'https://images.pexels.com/photos/1181682/pexels-photo-1181682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt: 'Cybersecurity solutions'
  }
};

// Function to generate about data from service data
const generateAboutData = (serviceKey: string): AboutData => {
  const service = allServices[serviceKey as keyof typeof allServices];
  const images = serviceImages[serviceKey] || serviceImages.softwareDev;

  return {
    title: service.title,
    subtitle: `About Our ${service.title}`,
    description: service.description,
    additionalDescription: `Our team of experts specializes in delivering high-quality ${service.title.toLowerCase()} solutions. We combine industry best practices with innovative approaches to ensure your success.`,
    image: images.image,
    imageAlt: images.imageAlt,
    features: [
      {
        title: service.services[0],
        description: 'Expert implementation',
        icon: 'shield',
        color: 'blue'
      },
      {
        title: service.services[1] || 'Custom Solutions',
        description: 'Tailored to your needs',
        icon: 'star',
        color: 'green'
      }
    ]
  };
};

interface AboutProps {
  serviceKey?: string;
}

const About: React.FC<AboutProps> = ({ serviceKey = 'softwareDev' }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);
  const isStatsInView = useInView(statsRef);

  // Get the about data based on the service key
  const data = aboutData[serviceKey as keyof typeof aboutData] || aboutData.softwareDev;

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
              {data.subtitle}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6"
            >
              {data.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-700 dark:text-gray-300 mb-6"
            >
              {data.description}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-700 dark:text-gray-300 mb-8"
            >
              {data.additionalDescription}
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
                src={data.image}
                alt={data.imageAlt}
                className="w-full h-auto"
              />
            </div>
            
            {/* Feature cards overlapping the image */}
            {data.features.map((feature, index) => (
              <div 
                key={feature.title}
                className={`absolute ${index === 0 ? '-bottom-6 -left-6' : '-top-6 -right-6'} bg-white rounded-xl shadow-lg p-4 max-w-xs`}
              >
                <div className="flex items-center gap-3">
                  <div className={`bg-${feature.color}-100 p-3 rounded-lg`}>
                    <Icon name={feature.icon} className={`w-6 h-6 text-${feature.color}-600`} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{feature.title}</p>
                    <p className="text-sm text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;