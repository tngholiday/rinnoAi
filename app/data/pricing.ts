import { PricingPlan } from '../types';

export const pricingPlans: PricingPlan[] = [
  {
    id: '1',
    name: 'Starter',
    price: 299,
    period: 'month',
    description: 'Essential IT support for small businesses',
    features: [
      'Remote IT support',
      'Basic security monitoring',
      'Email support',
      'Business hours availability',
      'Monthly system health reports'
    ],
    popular: false
  },
  {
    id: '2',
    name: 'Professional',
    price: 599,
    period: 'month',
    description: 'Comprehensive IT solutions for growing businesses',
    features: [
      'All Starter features',
      'Advanced security suite',
      'Cloud backup solutions',
      'Priority support response',
      'Quarterly strategy consultations',
      'Extended hours availability',
      'Dedicated account manager'
    ],
    popular: true
  },
  {
    id: '3',
    name: 'Enterprise',
    price: 1299,
    period: 'month',
    description: 'Full-scale IT management for large organizations',
    features: [
      'All Professional features',
      'Custom security solutions',
      'Dedicated support team',
      '24/7 monitoring and support',
      'Comprehensive disaster recovery',
      'Monthly executive reports',
      'Technology roadmap planning',
      'On-site support options'
    ],
    popular: false
  }
];