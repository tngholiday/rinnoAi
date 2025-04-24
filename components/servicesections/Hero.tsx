'use client'
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { ChevronRight, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const params = useParams();
  // derive slug from URL (serviceId or subServiceSlug)
  const rawSlugParam = params.subServiceSlug ?? params.serviceId ?? '';
  const rawSlug = Array.isArray(rawSlugParam) ? rawSlugParam[0] : rawSlugParam;
  const pageTitle = rawSlug
    ? rawSlug.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    : 'Transforming Business Through Technology';

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-20 md:pt-32 pb-20 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50" />
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-40 blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-purple-100 rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-teal-100 rounded-full opacity-30 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <div className="inline-block bg-white bg-opacity-80 backdrop-blur-sm rounded-full px-4 py-1 shadow-sm mb-6">
              <span className="text-blue-600 font-medium text-sm">{pageTitle}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {pageTitle}
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-xl">
              We deliver comprehensive IT services and innovative solutions that help businesses thrive in the digital age. Focus on your core business while we handle your technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium bg-blue-600 text-white hover:bg-blue-700 shadow-lg transition transform hover:-translate-y-0.5"
              >
                Get Started <ChevronRight className="ml-2" size={18} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium bg-white text-blue-600 border border-blue-200 hover:border-blue-300 shadow-sm transition transform hover:-translate-y-0.5"
              >
                Explore Services <ArrowRight className="ml-2" size={18} />
              </a>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            {/* Hero image container with subtle floating animation */}
            <div className="relative w-full h-full">
              <div className="relative w-full aspect-square max-w-md mx-auto animate-float">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl transform rotate-6"></div>
                <div className="absolute inset-0 bg-white/70 backdrop-blur-sm shadow-2xl rounded-2xl border border-gray-100 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="IT Services"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Stats pill */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3 animate-fade-in-up">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">99.9% Uptime</p>
                  <p className="text-xs text-gray-500">Guaranteed Reliability</p>
                </div>
              </div>
              
              {/* Security pill */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3 animate-fade-in-down">
                <div className="bg-green-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Enterprise Security</p>
                  <p className="text-xs text-gray-500">Advanced Protection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;