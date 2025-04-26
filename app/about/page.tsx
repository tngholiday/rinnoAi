'use client'
import React, { useEffect } from 'react';
import { 
  Cpu, 
  Lightbulb, 
  Users, 
  Star, 
  Code, 
  BarChart, 
  MessageSquare, 
  ArrowRight,
  CheckCircle,
  Clock,
  Building,
  HeartHandshake,
  Globe,
  Moon,
  Sun
} from 'lucide-react';

const AboutUs: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="font-sans text-gray-800 dark:text-gray-200">
      {/* Theme Toggle Button */}
      <button 
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
      >
        {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-900 to-indigo-800 dark:from-pink-950 dark:to-indigo-950 py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 inline-flex items-center justify-center p-3 bg-pink-600 bg-opacity-30 rounded-full">
              <Cpu size={36} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Powering the Future with <span className="text-pink-300">Intelligent Solutions</span>
            </h1>
            <p className="text-xl text-pink-100 max-w-3xl mb-10">
              At Rinno AI Software, we leverage cutting-edge artificial intelligence to solve complex problems and drive innovation for businesses worldwide.
            </p>
            <button className="bg-white dark:bg-gray-800 text-pink-900 dark:text-white hover:bg-pink-50 dark:hover:bg-gray-700 transition duration-300 font-medium py-3 px-8 rounded-lg inline-flex items-center">
              Discover Our Solutions <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-pink-50 dark:bg-pink-900 p-10 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-pink-200 dark:bg-pink-800 rounded-bl-full opacity-70"></div>
              <Lightbulb className="text-pink-600 dark:text-pink-300 mb-6 h-12 w-12" />
              <h2 className="text-3xl font-bold text-pink-900 dark:text-pink-100 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                To democratize artificial intelligence by creating accessible, powerful, and ethical AI solutions that empower businesses of all sizes to innovate and thrive in the digital era.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <span className="bg-pink-100 dark:bg-pink-800 text-pink-800 dark:text-pink-200 px-4 py-2 rounded-full text-sm font-medium">Innovation</span>
                <span className="bg-pink-100 dark:bg-pink-800 text-pink-800 dark:text-pink-200 px-4 py-2 rounded-full text-sm font-medium">Accessibility</span>
                <span className="bg-pink-100 dark:bg-pink-800 text-pink-800 dark:text-pink-200 px-4 py-2 rounded-full text-sm font-medium">Ethics</span>
              </div>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-900 p-10 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-200 dark:bg-indigo-800 rounded-bl-full opacity-70"></div>
              <Globe className="text-indigo-600 dark:text-indigo-300 mb-6 h-12 w-12" />
              <h2 className="text-3xl font-bold text-indigo-900 dark:text-indigo-100 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                To be the global leader in AI innovation, creating a future where intelligent technology seamlessly integrates with human expertise to solve the world's most pressing challenges.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <span className="bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200 px-4 py-2 rounded-full text-sm font-medium">Leadership</span>
                <span className="bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200 px-4 py-2 rounded-full text-sm font-medium">Integration</span>
                <span className="bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200 px-4 py-2 rounded-full text-sm font-medium">Impact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From humble beginnings to industry leadership, our path has been defined by innovation, perseverance, and a commitment to excellence.
            </p>
          </div>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-pink-400 before:via-pink-500 before:to-indigo-600">
            {/* Timeline items */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-pink-500 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Clock size={20} />
              </div>
              <div className="w-full md:w-[calc(50%-2.5rem)] bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-bold text-pink-600 dark:text-pink-300">2018</div>
                  <div className="text-xs font-semibold text-gray-400 dark:text-gray-500">Founding</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Rinno AI Is Born</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Founded by a team of visionary AI researchers and entrepreneurs, Rinno AI Software starts its journey to revolutionize how businesses leverage artificial intelligence.
                </p>
              </div>
            </div>
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-pink-600 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Code size={20} />
              </div>
              <div className="w-full md:w-[calc(50%-2.5rem)] bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-bold text-pink-600 dark:text-pink-300">2020</div>
                  <div className="text-xs font-semibold text-gray-400 dark:text-gray-500">Breakthrough</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">First Major Product Launch</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  After extensive research and development, we launched our flagship AI analytics platform, helping companies extract actionable insights from complex data.
                </p>
              </div>
            </div>
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-pink-700 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Building size={20} />
              </div>
              <div className="w-full md:w-[calc(50%-2.5rem)] bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-bold text-pink-600 dark:text-pink-300">2022</div>
                  <div className="text-xs font-semibold text-gray-400 dark:text-gray-500">Expansion</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Global Expansion</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Rinno AI Software expands to Europe and Asia, opening new offices and forming strategic partnerships to bring our solutions to a global audience.
                </p>
              </div>
            </div>
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-indigo-600 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Star size={20} />
              </div>
              <div className="w-full md:w-[calc(50%-2.5rem)] bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-bold text-pink-600 dark:text-pink-300">2025</div>
                  <div className="text-xs font-semibold text-gray-400 dark:text-gray-500">Today</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Industry Leader</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Today, Rinno AI Software stands as an industry leader with a comprehensive suite of AI solutions trusted by Fortune 500 companies and innovative startups alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Meet the visionaries and experts driving innovation and excellence at Rinno AI Software.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member Cards */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg group">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="CEO" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Dr. Sarah Chen</h3>
                <p className="text-pink-600 dark:text-pink-400 font-medium mb-4">Chief Executive Officer</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Former AI researcher at MIT, Sarah brings over 15 years of experience in artificial intelligence and business leadership.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="w-8 h-8 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center text-pink-600 dark:text-pink-300 hover:bg-pink-200 dark:hover:bg-pink-800 transition-colors">
                    <Users size={16} />
                  </a>
                  <a href="#" className="w-8 h-8 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center text-pink-600 dark:text-pink-300 hover:bg-pink-200 dark:hover:bg-pink-800 transition-colors">
                    <Globe size={16} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg group">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="CTO" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Michael Rodrigues</h3>
                <p className="text-pink-600 dark:text-pink-400 font-medium mb-4">Chief Technology Officer</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  With a background in machine learning and software architecture, Michael leads our technical vision and innovation strategy.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="w-8 h-8 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center text-pink-600 dark:text-pink-300 hover:bg-pink-200 dark:hover:bg-pink-800 transition-colors">
                    <Users size={16} />
                  </a>
                  <a href="#" className="w-8 h-8 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center text-pink-600 dark:text-pink-300 hover:bg-pink-200 dark:hover:bg-pink-800 transition-colors">
                    <Globe size={16} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg group">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="COO" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Amara Johnson</h3>
                <p className="text-pink-600 dark:text-pink-400 font-medium mb-4">Chief Operating Officer</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A seasoned business strategist, Amara oversees our operations and ensures we deliver exceptional value to our clients.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="w-8 h-8 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center text-pink-600 dark:text-pink-300 hover:bg-pink-200 dark:hover:bg-pink-800 transition-colors">
                    <Users size={16} />
                  </a>
                  <a href="#" className="w-8 h-8 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center text-pink-600 dark:text-pink-300 hover:bg-pink-200 dark:hover:bg-pink-800 transition-colors">
                    <Globe size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button className="inline-flex items-center bg-pink-50 dark:bg-pink-900 text-pink-800 dark:text-pink-100 hover:bg-pink-100 dark:hover:bg-pink-800 transition duration-300 font-medium py-3 px-8 rounded-lg">
              Meet Our Full Team <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pink-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These principles guide everything we do and define who we are as an organization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center text-pink-600 dark:text-pink-300 mb-6">
                <Lightbulb size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We continuously push the boundaries of what's possible, embracing new ideas and technologies to deliver groundbreaking solutions.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-300 mb-6">
                <CheckCircle size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We are committed to the highest standards of quality in everything we do, from code to customer experience.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-300 mb-6">
                <HeartHandshake size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Integrity</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We operate with transparency, honesty, and accountability, building trust with our clients, partners, and within our team.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center text-green-600 dark:text-green-300 mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe in the power of diverse perspectives and work together across disciplines to create holistic solutions.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center text-yellow-600 dark:text-yellow-300 mb-6">
                <Globe size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Responsibility</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We develop AI with ethical considerations at the forefront, ensuring our technology benefits humanity and the planet.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center text-red-600 dark:text-red-300 mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Customer Focus</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We put our customers at the center of everything we do, listening to their needs and delivering solutions that drive real value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products & Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Solutions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI products and services designed to transform how businesses operate and innovate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="group">
              <div className="h-64 rounded-xl overflow-hidden mb-6">
                <img 
                  src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Rinno Analytics Platform" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Rinno Analytics Platform</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our flagship analytics solution uses advanced machine learning to transform raw data into actionable business intelligence, helping companies make data-driven decisions with confidence.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Real-time data processing and visualization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Predictive analytics and forecasting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Customizable dashboards and reporting</span>
                  </li>
                </ul>
                <a href="#" className="text-pink-600 dark:text-pink-400 font-medium inline-flex items-center hover:text-pink-800 dark:hover:text-pink-300">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div className="group">
              <div className="h-64 rounded-xl overflow-hidden mb-6">
                <img 
                  src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Rinno Cognitive Assistant" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Rinno Cognitive Assistant</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  An intelligent virtual assistant that leverages natural language processing to automate customer interactions, streamline operations, and enhance productivity.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Advanced conversational AI capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Seamless integration with existing systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Continuous learning and improvement</span>
                  </li>
                </ul>
                <a href="#" className="text-pink-600 dark:text-pink-400 font-medium inline-flex items-center hover:text-pink-800 dark:hover:text-pink-300">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <button className="bg-pink-600 text-white hover:bg-pink-700 dark:hover:bg-pink-500 transition duration-300 font-medium py-3 px-8 rounded-lg inline-flex items-center">
              Explore All Solutions <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it—hear from the organizations that have transformed their operations with Rinno AI Software.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-sm relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <div className="mb-6">
                <div className="flex space-x-1 text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic mb-6">
                "Implementing Rinno's AI analytics platform has transformed how we approach business intelligence. We've seen a 40% increase in operational efficiency and gained insights that were previously impossible to uncover."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Testimonial" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">Jennifer Martinez</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">CIO, Global Innovations Inc.</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-sm relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <div className="mb-6">
                <div className="flex space-x-1 text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic mb-6">
                "The Rinno Cognitive Assistant has revolutionized our customer service. Our response times have decreased by 80% while customer satisfaction scores have increased by 35%. The ROI has been incredible."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Testimonial" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">David Johnson</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">VP of Customer Experience, TechForward</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-sm relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <div className="mb-6">
                <div className="flex space-x-1 text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 stroke-current" />
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic mb-6">
                "As a startup, we needed AI solutions that could scale with our rapid growth. Rinno understood our unique challenges and delivered a customized solution that has been instrumental to our success."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/8434891/pexels-photo-8434891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Testimonial" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">Sarah Kim</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Founder & CEO, NexGen Solutions</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-sm relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <div className="mb-6">
                <div className="flex space-x-1 text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic mb-6">
                "The team at Rinno AI has been exceptional partners in our digital transformation journey. Their expertise and support have made all the difference in successfully implementing AI across our organization."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Testimonial" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">Robert Chen</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Director of Innovation, Enterprise Global</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-900 to-indigo-800 dark:from-pink-950 dark:to-indigo-950 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
              <p className="text-xl text-pink-100 mb-8">
                Contact us today to schedule a consultation and discover how Rinno AI Software can help you leverage the power of artificial intelligence to drive innovation and growth.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-pink-800 dark:bg-pink-900 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-pink-200">Email</div>
                    <div className="font-medium">info@rinnoai.com</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-pink-800 dark:bg-pink-900 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-pink-200">Phone</div>
                    <div className="font-medium">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-pink-800 dark:bg-pink-900 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-pink-200">Location</div>
                    <div className="font-medium">101 Innovation Drive, Silicon Valley, CA</div>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition duration-300">
                  <Users size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition duration-300">
                  <Globe size={18} />
                </a>
              </div>
            </div>
            <div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h3>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company</label>
                    <input 
                      type="text" 
                      id="company" 
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Your company name"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full bg-pink-600 text-white p-3 rounded-lg font-medium hover:bg-pink-700 transition duration-300">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;