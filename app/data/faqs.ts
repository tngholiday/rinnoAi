import { FAQ } from '../types';

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What types of businesses do you typically work with?',
    answer: 'We work with businesses of all sizes across various industries. Our clients range from small startups to large enterprises in healthcare, finance, retail, manufacturing, and more. We tailor our IT solutions to meet the specific needs of each business.',
    category: 'General'
  },
  {
    id: '2',
    question: 'How quickly can you respond to IT emergencies?',
    answer: 'For clients on our Professional and Enterprise plans, we provide priority emergency response with guaranteed response times (1 hour for critical issues). Our 24/7 monitoring system often allows us to detect and address issues before they impact your business.',
    category: 'Support'
  },
  {
    id: '3',
    question: 'Do you offer custom software development?',
    answer: 'Yes, we offer custom software development services tailored to your specific business requirements. Our development team works closely with you to understand your needs, design the solution, and implement it using modern technologies and best practices.',
    category: 'Services'
  },
  {
    id: '4',
    question: 'How do you ensure the security of our data?',
    answer: 'We implement multiple layers of security including advanced firewalls, encryption, multi-factor authentication, regular security audits, and employee training. We stay updated on the latest security threats and continuously enhance our security measures to protect your data.',
    category: 'Security'
  },
  {
    id: '5',
    question: 'Can you help us migrate to the cloud?',
    answer: 'Absolutely. We specialize in cloud migration services and have helped numerous businesses successfully transition to cloud platforms like AWS, Azure, and Google Cloud. We assess your current infrastructure, develop a migration strategy, and execute the transition with minimal disruption.',
    category: 'Cloud'
  },
  {
    id: '6',
    question: 'Do you provide IT training for our staff?',
    answer: 'Yes, we offer customized IT training programs for your staff. This includes security awareness training, software application training, and best practices for using your IT systems efficiently and securely.',
    category: 'Training'
  },
  {
    id: '7',
    question: 'How do your managed IT services work?',
    answer: 'Our managed IT services provide proactive monitoring, maintenance, and support for your IT infrastructure. We use advanced tools to monitor your systems 24/7, perform regular maintenance to prevent issues, and provide prompt support when needed. This allows your business to focus on core activities while we handle your IT needs.',
    category: 'Services'
  },
  {
    id: '8',
    question: 'What is your approach to disaster recovery?',
    answer: 'We develop comprehensive disaster recovery plans tailored to your business. This includes regular data backups, redundant systems, and detailed recovery procedures. We also conduct regular tests to ensure the effectiveness of the recovery plan in various scenarios.',
    category: 'Security'
  }
];

export const faqCategories = [...new Set(faqs.map(faq => faq.category))];