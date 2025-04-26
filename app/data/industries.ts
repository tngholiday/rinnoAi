import { Industry, CaseStudy } from '../types';

export const industries: Industry[] = [
  {
    id: '1',
    name: 'Healthcare',
    description: 'Secure and compliant IT solutions for healthcare providers, ensuring patient data protection and streamlined operations.',
    icon: 'stethoscope',
    benefits: [
      'HIPAA-compliant data management',
      'Electronic Health Records (EHR) integration',
      'Telemedicine platform support',
      'Medical device security'
    ],
    solutions: [
      'Healthcare data analytics',
      'Patient portal development',
      'Medical billing systems',
      'Remote patient monitoring'
    ],
    image: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stats: [
      { value: '99.99%', label: 'System Uptime' },
      { value: '100%', label: 'HIPAA Compliance' },
      { value: '45%', label: 'Cost Reduction' }
    ]
  },
  {
    id: '2',
    name: 'Finance',
    description: 'Robust and secure IT infrastructure for financial institutions, ensuring data security and regulatory compliance.',
    icon: 'banknote',
    benefits: [
      'Advanced security protocols',
      'Real-time transaction processing',
      'Regulatory compliance',
      'Fraud detection systems'
    ],
    solutions: [
      'Digital banking platforms',
      'Payment gateway integration',
      'Risk management systems',
      'Trading platforms'
    ],
    image: 'https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stats: [
      { value: '0.001s', label: 'Transaction Speed' },
      { value: '24/7', label: 'System Monitoring' },
      { value: '50%', label: 'Process Automation' }
    ]
  },
  {
    id: '3',
    name: 'Manufacturing',
    description: 'Smart manufacturing solutions that optimize production processes and enhance operational efficiency.',
    icon: 'factory',
    benefits: [
      'Real-time production monitoring',
      'Predictive maintenance',
      'Supply chain optimization',
      'Quality control automation'
    ],
    solutions: [
      'IoT integration',
      'Inventory management',
      'Production scheduling',
      'Quality assurance systems'
    ],
    image: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stats: [
      { value: '35%', label: 'Efficiency Increase' },
      { value: '40%', label: 'Downtime Reduction' },
      { value: '99%', label: 'Quality Rate' }
    ]
  },
  {
    id: '4',
    name: 'Retail',
    description: 'Digital transformation solutions for retail businesses, enhancing customer experience and operational efficiency.',
    icon: 'shopping-bag',
    benefits: [
      'Omnichannel integration',
      'Inventory optimization',
      'Customer analytics',
      'Mobile commerce solutions'
    ],
    solutions: [
      'E-commerce platforms',
      'POS systems',
      'Customer loyalty programs',
      'Supply chain management'
    ],
    image: 'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stats: [
      { value: '200%', label: 'Online Sales Growth' },
      { value: '45%', label: 'Customer Retention' },
      { value: '60%', label: 'Process Automation' }
    ]
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Healthcare Provider Transforms Patient Care with Digital Solutions',
    industry: 'Healthcare',
    challenge: 'A leading healthcare provider struggled with managing patient records efficiently and providing seamless telehealth services.',
    solution: 'Implemented a comprehensive digital health platform with integrated EHR system and secure telehealth capabilities.',
    results: [
      '50% reduction in administrative tasks',
      '30% increase in patient satisfaction',
      '99.9% system uptime',
      'Successful handling of 10,000+ telehealth consultations monthly'
    ],
    image: 'https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    clientName: 'Dr. Sarah Chen',
    clientRole: 'Chief Medical Officer',
    clientCompany: 'HealthFirst Medical Center',
    clientImage: 'https://images.pexels.com/photos/5214997/pexels-photo-5214997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'The digital transformation has revolutionized how we deliver care. Our staff can focus more on patients and less on paperwork.'
  },
  {
    id: '2',
    title: 'Financial Institution Achieves Digital Excellence',
    industry: 'Finance',
    challenge: 'A regional bank needed to modernize its digital banking platform while maintaining strict security standards.',
    solution: 'Developed a state-of-the-art digital banking platform with advanced security features and improved user experience.',
    results: [
      '200% increase in mobile banking adoption',
      '40% reduction in operational costs',
      'Zero security breaches',
      '95% customer satisfaction rate'
    ],
    image: 'https://images.pexels.com/photos/7567473/pexels-photo-7567473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    clientName: 'Michael Roberts',
    clientRole: 'CTO',
    clientCompany: 'SecureBank Financial',
    clientImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'Our digital transformation has positioned us as a leader in modern banking, significantly improving our customer experience and security posture.'
  },
  {
    id: '2',
    title: 'Financial Institution Achieves Digital Excellence',
    industry: 'Finance',
    challenge: 'A regional bank needed to modernize its digital banking platform while maintaining strict security standards.',
    solution: 'Developed a state-of-the-art digital banking platform with advanced security features and improved user experience.',
    results: [
      '200% increase in mobile banking adoption',
      '40% reduction in operational costs',
      'Zero security breaches',
      '95% customer satisfaction rate'
    ],
    image: 'https://images.pexels.com/photos/7567473/pexels-photo-7567473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    clientName: 'Michael Roberts',
    clientRole: 'CTO',
    clientCompany: 'SecureBank Financial',
    clientImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'Our digital transformation has positioned us as a leader in modern banking, significantly improving our customer experience and security posture.'
  }
];