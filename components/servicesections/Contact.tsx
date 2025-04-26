'use client';

import React, { useRef } from 'react';
import { motion, useInView } from '@/app/utils/animation';
import { useForm, ValidationError } from '@formspree/react' ; // <-- Change here!
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  const [state, handleSubmit] = useForm("mgvkvylg"); // <-- Your Formspree form ID
  if (state.succeeded) {
    return (
      <section className="py-20 bg-white dark:bg-zinc-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-pink-600">Thank you for your message!</h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">We'll get back to you soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-white dark:bg-zinc-900">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-pink-50 dark:bg-zinc-900 text-pink-600 rounded-full px-4 py-1.5 font-medium text-sm mb-3"
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
                <div className="bg-pink-50 dark:bg-zinc-900 p-3 rounded-full mr-4">
                  <MapPin className="text-pink-600" size={24} />
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
                <div className="bg-pink-50 p-3 rounded-full mr-4">
                  <Mail className="text-pink-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Email Us</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    <a href="mailto:info@techsphere.com" className="hover:text-pink-600 transition">
                      info@techsphere.com
                    </a><br />
                    <a href="mailto:support@techsphere.com" className="hover:text-pink-600 transition">
                      support@techsphere.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-pink-50 p-3 rounded-full mr-4">
                  <Phone className="text-pink-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-400  ">
                    <a href="tel:+15551234567" className="hover:text-pink-600 transition">
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
              className="bg-gradient-to-br from-pink-600 dark:from-zinc-900 to-indigo-700 dark:to-zinc-900 text-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="font-semibold text-lg mb-2 text-white">24/7 Emergency IT Support</h3>
              <p className="text-pink-100 mb-4">
                For urgent IT issues requiring immediate assistance, our technical team is available 24/7.
              </p>
              <a
                href="tel:+15559112233"
                className="inline-flex items-center justify-center px-4 py-2 rounded-full font-medium bg-white text-pink-600 hover:bg-pink-50 transition"
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
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition"
                />
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition"
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full py-3 px-6 rounded-lg font-medium bg-pink-600 text-white hover:bg-pink-700 shadow-md transition transform hover:-translate-y-0.5"
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
