import { Service } from '../types';

export const services: Service[] = [
  {
    id: '1',
    title: 'IT Infrastructure Management',
    description: 'Comprehensive management of your IT infrastructure, including servers, networks, and hardware.',
    icon: 'server',
    category: 'Infrastructure'
  },
  {
    id: '2',
    title: 'Cloud Solutions',
    description: 'Expert migration and management of cloud services to optimize cost and performance.',
    icon: 'cloud',
    category: 'Cloud'
  },
  {
    id: '3',
    title: 'Cybersecurity',
    description: 'Advanced security solutions to protect your business from evolving cyber threats.',
    icon: 'shield',
    category: 'Security'
  },
  {
    id: '4',
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business requirements and objectives.',
    icon: 'code',
    category: 'Development'
  },
  {
    id: '5',
    title: 'Data Analytics',
    description: 'Extract valuable insights from your data with our advanced analytics solutions.',
    icon: 'bar-chart',
    category: 'Analytics'
  },
  {
    id: '6',
    title: 'IT Consulting',
    description: 'Strategic IT consulting to align technology with your business goals.',
    icon: 'briefcase',
    category: 'Consulting'
  },
  {
    id: '7',
    title: 'Managed IT Services',
    description: '24/7 monitoring and management of your IT systems for peak performance.',
    icon: 'settings',
    category: 'Management'
  },
  {
    id: '8',
    title: 'Mobile App Development',
    description: 'Create powerful, user-friendly mobile applications for iOS and Android platforms.',
    icon: 'smartphone',
    category: 'Development'
  }
];

export const serviceCategories = [...new Set(services.map(service => service.category))];