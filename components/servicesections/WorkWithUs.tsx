'use client'
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from '@/app/utils/animation';
import { Building2, Users, Globe, Award, Star } from 'lucide-react';

// Define the data structure for each title
interface CompanyData {
  name: string;
  logo: string;
  description: string;
  stats: {
    employees: string;
    countries: string;
    clients: string;
    awards: string;
  };
  rating: number;
}

// Create a mapping of titles to their corresponding data
const titleDataMap: Record<string, CompanyData[]> = {
  'Travel Partners': [
    {
      name: 'Ticket2Thailand',
      logo: 'https://ticket2thailand.com/uploads/0000/6/2023/08/26/ticket2thailand-logo1.webp',
      description: 'Your trusted partner for Thailand travel experiences',
      stats: {
        employees: '100+',
        countries: '5',
        clients: '50,000+',
        awards: '15'
      },
      rating: 4.8
    },
    {
      name: 'SkyRed Thailand',
      logo: 'https://skyredthailand.com/uploads/0000/1/2021/10/30/skyredlog-white.jpg',
      description: 'Premium travel services across Thailand',
      stats: {
        employees: '80+',
        countries: '3',
        clients: '30,000+',
        awards: '12'
      },
      rating: 4.7
    },
    {
      name: 'TNG Holidays',
      logo: 'https://www.tngholidays.com/uploads/0000/1/2020/06/15/logo-150-1.webp',
      description: 'Comprehensive holiday packages in Thailand',
      stats: {
        employees: '120+',
        countries: '4',
        clients: '45,000+',
        awards: '18'
      },
      rating: 4.9
    }
  ],
  'Technology Partners': [
    {
      name: 'TechCorp',
      logo: '/logos/techcorp.png',
      description: 'Leading technology solutions provider',
      stats: {
        employees: '500+',
        countries: '12',
        clients: '1000+',
        awards: '25'
      },
      rating: 4.7
    },
    {
      name: 'InnovateX',
      logo: '/logos/innovatex.png',
      description: 'Innovation-driven software company',
      stats: {
        employees: '300+',
        countries: '8',
        clients: '750+',
        awards: '18'
      },
      rating: 4.6
    },
    {
      name: 'DigitalWave',
      logo: '/logos/digitalwave.png',
      description: 'Digital transformation experts',
      stats: {
        employees: '400+',
        countries: '15',
        clients: '900+',
        awards: '30'
      },
      rating: 4.8
    }
  ],
  'Hospitality Partners': [
    {
      name: 'Luxury Hotels',
      logo: '/logos/luxury-hotels.png',
      description: 'Premium hospitality services',
      stats: {
        employees: '200+',
        countries: '10',
        clients: '30,000+',
        awards: '20'
      },
      rating: 4.9
    },
    {
      name: 'Resort World',
      logo: '/logos/resort-world.png',
      description: 'Exclusive resort experiences',
      stats: {
        employees: '150+',
        countries: '7',
        clients: '25,000+',
        awards: '15'
      },
      rating: 4.8
    },
    {
      name: 'Boutique Stays',
      logo: '/logos/boutique-stays.png',
      description: 'Unique boutique accommodations',
      stats: {
        employees: '100+',
        countries: '5',
        clients: '20,000+',
        awards: '12'
      },
      rating: 4.7
    }
  ]
};

interface WorkWithUsProps {
  title?: string;
}

const WorkWithUs: React.FC<WorkWithUsProps> = ({ title = 'Travel Partners' }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Get the companies data based on the title
  const companies = titleDataMap[title] || titleDataMap['Travel Partners'];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % companies.length);
      }, 5000); // Change slide every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, companies.length]);

  return (
    <section id="work-with-us" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-blue-50 to-purple-100 dark:from-pink-900/20 dark:via-blue-900/20 dark:to-purple-900/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full px-4 py-1.5 font-medium text-sm mb-3"
          >
            Our Partners
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-lg"
          >
            Partner with Thailand's leading companies to deliver exceptional experiences to customers worldwide.
          </motion.p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Carousel container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
            >
              {companies.map((company, index) => (
                <div
                  key={company.name}
                  className="w-1/3 flex-shrink-0 px-4"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="relative bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all h-full"
                  >
                    {/* Gradient border */}
                    <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 -z-10"></div>
                    <div className="absolute inset-[1px] rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-center h-32 mb-6">
                        <img
                          src={company.logo}
                          alt={`${company.name} logo`}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <div className="flex items-center justify-center mb-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < Math.floor(company.rating)
                                  ? 'text-yellow-400 fill-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                          <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                            {company.rating}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 text-center">
                        {company.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
                        {company.description}
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center">
                          <Users className="text-pink-500 mr-2" size={20} />
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Employees</p>
                            <p className="font-semibold text-gray-900 dark:text-gray-100">{company.stats.employees}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Globe className="text-blue-500 mr-2" size={20} />
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Countries</p>
                            <p className="font-semibold text-gray-900 dark:text-gray-100">{company.stats.countries}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Building2 className="text-purple-500 mr-2" size={20} />
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Clients</p>
                            <p className="font-semibold text-gray-900 dark:text-gray-100">{company.stats.clients}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Award className="text-pink-500 mr-2" size={20} />
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Awards</p>
                            <p className="font-semibold text-gray-900 dark:text-gray-100">{company.stats.awards}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-medium bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:from-pink-600 hover:to-blue-600 shadow-lg transition transform hover:-translate-y-0.5"
          >
            Become a Partner
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkWithUs; 