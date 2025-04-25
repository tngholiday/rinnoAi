'use client'
import React, { useRef, useState } from 'react';
import { motion, useInView } from '@/app/utils/animation';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);
  const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ 
    type: null, 
    message: '' 
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulating form submission
    setFormStatus({
      type: 'success',
      message: 'Thank you for your message! We will get back to you shortly.'
    });
    // Reset form fields
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-white dark:bg-zinc-900">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-blue-50 dark:bg-zinc-900 text-blue-600 rounded-full px-4 py-1.5 font-medium text-sm mb-3"
            >
              Contact Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6"
            >
              Get in Touch with Our IT Experts
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 dark:text-gray-400 mb-8"
            >
              Have questions about our services or need a custom solution? Reach out to us and our team will get back to you promptly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6 mb-8"
            >
              <div className="flex items-start">
                <div className="bg-blue-50 dark:bg-zinc-900 p-3 rounded-full mr-4">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Office Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    123 Innovation Drive<br />
                    Tech Valley, CA 94103
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-full mr-4">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Email Us</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    <a href="mailto:info@techsphere.com" className="hover:text-blue-600 transition">
                      info@techsphere.com
                    </a><br />
                    <a href="mailto:support@techsphere.com" className="hover:text-blue-600 transition">
                      support@techsphere.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-full mr-4">
                  <Phone className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-400  ">
                    <a href="tel:+15551234567" className="hover:text-blue-600 transition">
                      (555) 123-4567
                    </a><br />
                    <span className="text-sm">Monday-Friday, 8am-6pm PST</span>
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-blue-600 dark:from-zinc-900 to-indigo-700 dark:to-zinc-900 text-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="font-semibold text-lg mb-2 text-white">24/7 Emergency IT Support</h3>
              <p className="text-blue-100 mb-4">
                For urgent IT issues requiring immediate assistance, our technical team is available 24/7.
              </p>
              <a
                href="tel:+15559112233"
                className="inline-flex items-center justify-center px-4 py-2 rounded-full font-medium bg-white text-blue-600 hover:bg-blue-50 transition"
              >
                <Phone size={16} className="mr-2" />
                (555) 911-2233
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Send Us a Message</h3>
            
            {formStatus.type && (
              <div 
                className={`mb-6 p-4 rounded-lg ${
                  formStatus.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                }`}
              >
                {formStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition"
                  placeholder="Your Company"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service You're Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition"
                >
                  <option value="">Select a service</option>
                  <option value="IT Infrastructure">IT Infrastructure Management</option>
                  <option value="Cloud Solutions">Cloud Solutions</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Software Development">Software Development</option>
                  <option value="IT Consulting">IT Consulting</option>
                  <option value="Managed IT">Managed IT Services</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 shadow-md transition transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;