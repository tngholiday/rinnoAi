export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  expertise: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Statistic {
  id: string;
  value: string;
  label: string;
  icon: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
  benefits: string[];
  solutions: string[];
  image: string;
  stats: {
    value: string;
    label: string;
  }[];
}

export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  clientName: string;
  clientRole: string;
  clientCompany: string;
  clientImage: string;
  quote: string;
}