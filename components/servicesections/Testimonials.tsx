  'use client'
  import React, { useRef, useState } from 'react';
import { testimonials } from '@/app/data/testimonials';
import { motion, useInView } from '@/app/utils/animation';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-blue-100 text-blue-600 rounded-full px-4 py-1.5 font-medium text-sm mb-3"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Discover how our IT solutions have helped businesses across various industries achieve their goals.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Controls */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 flex justify-between w-full">
            <button
              onClick={prevTestimonial}
              className="bg-white p-3 rounded-full shadow-md text-gray-700 hover:text-blue-600 focus:outline-none transition transform hover:-translate-y-0.5"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-white p-3 rounded-full shadow-md text-gray-700 hover:text-blue-600 focus:outline-none transition transform hover:-translate-y-0.5"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Testimonial carousel */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-white rounded-2xl p-8 shadow-lg relative z-10"
                  >
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                      <div className="flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={18}
                              className={`${
                                i < testimonial.rating
                                  ? 'text-yellow-400 fill-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-700 text-lg italic mb-6">"{testimonial.content}"</p>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-blue-600">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium bg-white text-blue-600 border border-blue-200 hover:border-blue-300 shadow-sm transition transform hover:-translate-y-0.5"
          >
            View All Case Studies
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;