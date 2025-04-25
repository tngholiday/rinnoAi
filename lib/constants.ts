export const siteConfig = {
  name: "RinnoAI Softwares",
  description: "Leading software development company specializing in AI, web development, mobile apps, and enterprise solutions. Transform your business with our innovative technology solutions.",
  links: {
    twitter: "https://twitter.com/rinnoai",
    github: "https://github.com/rinnoai",
    linkedin: "https://linkedin.com/company/rinnoai",
  },
};
import { Code, Database, Cloud, Layers ,Smartphone,BrainCircuit,Layers2, PenTool, Shield} from "lucide-react";
export const allServices = {
  softwareDev: {
    title: "Software Development",
    description: "End-to-end software solutions for businesses of all sizes",
    services: [
      "Custom Software Development",
      "Enterprise Software Solutions",
      "SaaS Product Development",
      "API Development & Integration",
      "Legacy Software Modernization"
    ],
    icon: Code  
  },
  webDev: {
    title: "Web Development",
    description: "Professional web development services using cutting-edge technologies",
    services: [
      "Website Design & Development",
      "Custom Web App Development",
    
      "E-commerce Solutions",
      
      "Frontend Development",
      "Backend Development"
    ],
    icon: Database
  },
  mobileDev: {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications services",
    services: [
      "Android App Development",
      "iOS App Development",
      "Cross-platform App Development",
    ],
    icon: Smartphone
  },
  gameDev: {
    title: "Game Development",
    description: "Engaging game experiences across platforms",
    services: [
      "2D & 3D Game Design",
      "Unity Game Development",
      "HTML5 Game Development",
    ],
    icon: Layers2
  },
  aiML: {
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by advanced AI",
    services: [
      "AI-powered Chatbots",
      "Natural Language Processing",
      "Machine Learning Model Training"
    ],
    icon: BrainCircuit
  },
  cloud: {
    title: "Cloud Services",
    description: "Comprehensive cloud solutions and consulting",
    services: [
      "Cloud App Development",
      "DevOps & CI/CD Services",
      "Cloud Security Solutions"
    ],
    icon: Cloud
  },
  testing: {
    title: "QA & Testing",
    description: "Comprehensive quality assurance services",
    services: [
      "Manual Testing",
      "Automated Testing",
      "Performance Testing",
    ],
    icon: Code
  },
  design: {
    title: "UI/UX Design",
    description: "User-centered design solutions",
    services: [
      "UI/UX Audit",
   
      "Mobile App & Web App Design",

      "Design Systems & Branding"
    ],
    icon: PenTool
  },
 
  marketing: {
    title: "Digital Marketing & SEO",
    description: "Complete digital marketing solutions",
    services: [
      "Search Engine Optimization",
      "Social Media Marketing",
      "Content Marketing",

    ],
    icon: PenTool
  },
  security: {
    title: "Cybersecurity",
    description: "Advanced security solutions for your business",
    services: [
      "Web & App Security",
      "Penetration Testing",
      "Data Encryption & Privacy",
      "Security Compliance"
    ],
    icon: Shield
  }
};

// Add NavSubItem and NavLink types
export type NavSubItem = { href: string; label: string; description: string; services?: string[] };
export type NavLink = { href: string; label: string; submenu?: NavSubItem[] };
export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    submenu: Object.entries(allServices).map(([key, service]) => ({
      href: `/services/${key}`,
      label: service.title,
      description: service.description,
      services: service.services,
    })),
  },
  {
    href: "/industries",
    label: "Industries",
    submenu: [
      {
        href: "/industries/healthcare",
        label: "Healthcare",
        description: "Digital transformation solutions for healthcare providers",
      },
      {
        href: "/industries/education",
        label: "Education",
        description: "EdTech solutions for modern learning",
      },
      {
        href: "/industries/logistics",
        label: "Logistics",
        description: "Smart solutions for supply chain and logistics",
      },
      {
        href: "/industries/ecommerce",
        label: "E-commerce",
        description: "End-to-end e-commerce solutions",
      },
    ],
  },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "/faq", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export const industries = {
  healthcare: {
    title: "Healthcare",
    description: "Digital transformation solutions for healthcare providers",
    solutions: [
      "Electronic Health Records (EHR)",
      "Telemedicine Platforms",
      "Healthcare Analytics",
      "Patient Management Systems",
      "Medical Imaging Solutions"
    ]
  },
  education: {
    title: "Education",
    description: "EdTech solutions for modern learning",
    solutions: [
      "Learning Management Systems",
      "Virtual Classrooms",
      "Student Information Systems",
      "Educational Apps",
      "Assessment Platforms"
    ]
  },
  logistics: {
    title: "Logistics",
    description: "Smart solutions for supply chain and logistics",
    solutions: [
      "Fleet Management Systems",
      "Warehouse Management",
      "Route Optimization",
      "Supply Chain Analytics",
      "Inventory Management"
    ]
  },
  ecommerce: {
    title: "E-commerce",
    description: "End-to-end e-commerce solutions",
    solutions: [
      "Custom E-commerce Platforms",
      "Marketplace Development",
      "Payment Integration",
      "Inventory Management",
      "Analytics & Reporting"
    ]
  }
};

export const services = [
  {
    title: "AI Solutions",
    description: "Custom artificial intelligence solutions tailored to your business needs, from chatbots to predictive analytics.",
    icon: "BrainCircuit",
  },
  {
    title: "Software Development",
    description: "End-to-end software development with the latest technologies and best practices.",
    icon: "Code2",
  },
  {
    title: "Cloud Services",
    description: "Scalable cloud solutions that grow with your business, ensuring reliability and performance.",
    icon: "Cloud",
  },
  {
    title: "Mobile Applications",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    icon: "Smartphone",
  },
];

export const teamMembers = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    bio: "Alex has over 15 years of experience in technology leadership and software innovation.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    bio: "Sarah leads our technical strategy with expertise in AI and distributed systems.",
    image: "https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Product",
    bio: "Michael ensures our products meet the highest standards of quality and user experience.",
    image: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Emily Wilson",
    role: "Lead Designer",
    bio: "Emily brings creative vision to all our products with her background in UX/UI design.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export const testimonials = [
  {
    name: "David Miller",
    company: "TechGrowth Inc.",
    text: "RinnoAI transformed our business with their custom AI solution. Our efficiency has increased by 40% since implementation.",
    image: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Lisa Park",
    company: "FutureVision",
    text: "The team at RinnoAI delivered our mobile app ahead of schedule and exceeded all our expectations for quality and performance.",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Robert Chen",
    company: "InnovateCorp",
    text: "Working with RinnoAI has been a game-changer for our business. Their cloud solutions have scaled seamlessly with our growth.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export const blogCategories = [
  "Technology Trends",
  "AI & Machine Learning",
  "Development",
  "Cloud Computing",
  "Cybersecurity",
  "Digital Transformation"
];

export const faqs = [
  {
    question: "What services does RinnoAI offer?",
    answer: "RinnoAI offers a comprehensive range of software development services including AI solutions, web development, mobile app development, cloud services, and digital transformation consulting."
  },
  {
    question: "How do you ensure project quality?",
    answer: "We follow industry best practices, implement rigorous testing protocols, and maintain continuous communication with our clients throughout the development process."
  },
  {
    question: "What industries do you serve?",
    answer: "We serve various industries including healthcare, education, logistics, e-commerce, finance, and manufacturing, providing tailored solutions for each sector."
  }
];