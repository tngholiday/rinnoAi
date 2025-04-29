export const siteConfig = {
  name: "RinnoAI Softwares",
  description: "Leading software development company specializing in AI, web development, mobile apps, and enterprise solutions. Transform your business with our innovative technology solutions.",
  links: {
    twitter: "https://twitter.com/rinnoai",
    github: "https://github.com/rinnoai",
    linkedin: "https://linkedin.com/company/rinnoai",
  },
};
import { Code, Database, Cloud, Layers ,Smartphone,BrainCircuit,Layers2, PenTool, Shield, ShoppingCart, HeartHandshake, BookOpen, Truck, Video, ChartLine, User, Warehouse, CreditCard, Plane  } from "lucide-react";
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
      {
        href: "/industries/travel",
        label: "Travel & Tourism",
        description: "Streamline travel ",
      },
    ],
  },
  
 {href: "/about", label: "About Us"},
  { href: "/careers", label: "Careers" },
  
];

export const industries = {
  travel: {
    title: "Travel & Tourism",
    description: "Streamline travel and tourism operations",
    solutions: [
      {
        title: "Booking Systems",
        description: "Manage reservations and bookings",
        icon: Plane
      },
      {
        title: "Inventory Management",
        description: "Optimize inventory and supply chain operations",
        icon: Warehouse
      },
      {
        title: "Customer Relationship Management",
        description: "Manage customer relationships and preferences",
        icon: User
      },
    ],
    solutionsDescription: "Streamline travel and tourism operations",
    icon: Plane
  },
  healthcare: {
    title: "Healthcare",
    description: "Digital transformation solutions for healthcare providers",
    solutions: [
      {
        title: "Electronic Health Records (EHR)",
        description: "Streamline patient records and medical data",
        icon: HeartHandshake
      },
      {
        title: "Telemedicine Platforms",
        description: "Provide remote consultations and patient monitoring",
        icon: Video
      },
      {
        title: "Healthcare Analytics",
        description: "Analyze medical data to improve patient care",
          icon: ChartLine
      },
      {
        title: "Patient Management Systems",
        description: "Manage patient information and medical records",
        icon: User
      },
      {
        title: "Medical Imaging Solutions",
        description: "Provide advanced imaging services for diagnosis",
        icon: HeartHandshake
      },
      {
        title: "Telemedicine Platforms",
        description: "Provide remote consultations and patient monitoring",
        icon: Video
      },
      {
        title: "Healthcare Analytics",
        description: "Analyze medical data to improve patient care",
          icon: ChartLine
      },
      {
        title: "Patient Management Systems",
        description: "Manage patient information and medical records",
        icon: User
      },
    ],
    solutionsDescription: "Digital transformation solutions for healthcare providers",  
    icon: HeartHandshake
  },
  education: {
    title: "Education",
    description: "EdTech solutions for modern learning",
    solutions: [
      {
        title: "Learning Management Systems",
        description: "Manage educational content and student progress",
        icon: BookOpen
      },
      {
        title: "Virtual Classrooms",
        description: "Create interactive learning environments",
        icon: Video
      },
      {
        title: "Student Information Systems",
        description: "Track student progress and performance",
        icon: User
      },
      {
        title: "Educational Apps",
        description: "Create educational apps for modern learning",
        icon: Smartphone
      },
      {
        title: "Assessment Platforms",
        description: "Create assessment platforms for modern learning",
        icon: BookOpen
      }
    ],
    solutionsDescription: "EdTech solutions for modern learning",
    icon: BookOpen
  },
  logistics: {
    title: "Logistics",
    description: "Smart solutions for supply chain and logistics",
    solutions: [
      {
        title: "Fleet Management Systems",
        description: "Track vehicle and driver performance",
        icon: Truck
      },
      {
        title: "Warehouse Management",
        description: "Optimize inventory and supply chain operations",
        icon: Warehouse
      },
      {
        title: "Route Optimization",
        description: "Optimize delivery routes and schedules",
        icon: Truck
      },
      {
        title: "Supply Chain Analytics",
        description: "Analyze supply chain data to improve efficiency",
        icon: ChartLine
      },
    ],
    solutionsDescription: "Smart solutions for supply chain and logistics",
    icon: Truck
  },
  ecommerce: {
    title: "E-commerce",
    description: "End-to-end e-commerce solutions",
    solutions: [
      {
        title: "Custom E-commerce Platforms",
        description: "Create tailored e-commerce solutions for your business",
        icon: ShoppingCart
      },
      {
        title: "Marketplace Development",
        description: "Build multi-vendor marketplaces for seamless trading",
        icon: ShoppingCart
      },
      {
        title: "Payment Integration",
        description: "Integrate secure payment gateways for smooth transactions",
        icon: CreditCard
      },  
  
    ],
    solutionsDescription: "End-to-end e-commerce solutions",
    icon: ShoppingCart
  },
 
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

export const blogPosts = [
  {
    slug: "how-to-build-a-website", 
    readTime: "8 min read",
    comments: "24 comments",  
    title: "How to Build a Website",
    description: "Learn step-by-step how to create your first website.",
    content: `
      Building a website involves planning, designing, developing, and launching it.
      Make sure to understand the purpose, choose the right tech stack, and test properly before going live.
    `,
    date: "2025-04-20",
  },
  {
    slug: "seo-tips-for-beginners",
    readTime: "8 min read",
    comments: "24 comments",
    title: "SEO Tips for Beginners",
    description: "A quick guide to boosting your site's visibility.",
    content: `
      SEO is crucial for organic traffic. Focus on keywords, optimize meta tags,
      improve page load speed, and produce high-quality content regularly.
    `,
    date: "2025-04-22",
  },
];

export const aboutData = {
  softwareDev: {
    title: "Software Development",
    subtitle: "About Our Software Development",
    description: "End-to-end software solutions for businesses of all sizes",
    additionalDescription: "Our team of expert developers specializes in creating custom software solutions that drive business growth. We combine cutting-edge technologies with industry best practices to deliver robust, scalable, and maintainable applications.",
    image: "https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt: "Software development team working",
    features: [
      {
        title: "Custom Software Development",
        description: "Tailored solutions for your business",
        icon: "code",
        color: "blue"
      },
      {
        title: "Enterprise Solutions",
        description: "Scalable enterprise applications",
        icon: "building",
        color: "green"
      }
    ]
  },
  webDev: {
    title: "Web Development",
    subtitle: "About Our Web Development",
    description: "Professional web development services using cutting-edge technologies",
    additionalDescription: "We create modern, responsive, and user-friendly websites and web applications that help businesses establish a strong online presence. Our web solutions are optimized for performance, security, and user experience.",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt: "Web development process",
    features: [
      {
        title: "Website Design & Development",
        description: "Modern and responsive websites",
        icon: "globe",
        color: "blue"
      },
      {
        title: "E-commerce Solutions",
        description: "Powerful online stores",
        icon: "shopping-cart",
        color: "green"
      }
    ]
  },
  mobileDev: {
    title: "Mobile App Development",
    subtitle: "About Our Mobile Development",
    description: "Native and cross-platform mobile applications services",
    additionalDescription: "We develop high-performance mobile applications that provide seamless user experiences across all devices. Our mobile solutions are designed to meet your business needs while ensuring optimal performance and user engagement.",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt: "Mobile app development",
    features: [
      {
        title: "Native App Development",
        description: "Platform-specific applications",
        icon: "smartphone",
        color: "blue"
      },
      {
        title: "Cross-platform Development",
        description: "Multi-platform solutions",
        icon: "layers",
        color: "green"
      }
    ]
  },
  aiML: {
    title: "AI & Machine Learning",
    subtitle: "About Our AI Solutions",
    description: "Intelligent solutions powered by advanced AI",
    additionalDescription: "We leverage cutting-edge AI and machine learning technologies to create intelligent solutions that automate processes, enhance decision-making, and drive business innovation. Our AI solutions are tailored to your specific business needs.",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt: "AI and machine learning",
    features: [
      {
        title: "AI-powered Chatbots",
        description: "Intelligent customer service",
        icon: "message-circle",
        color: "blue"
      },
      {
        title: "Machine Learning Models",
        description: "Advanced data analysis",
        icon: "brain",
        color: "green"
      }
    ]
  },
  cloud: {
    title: "Cloud Services",
    subtitle: "About Our Cloud Solutions",
    description: "Comprehensive cloud solutions and consulting",
    additionalDescription: "We provide end-to-end cloud services that help businesses migrate to and optimize their cloud infrastructure. Our cloud solutions ensure scalability, security, and cost-effectiveness for your business operations.",
    image: "https://images.pexels.com/photos/1181678/pexels-photo-1181678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageAlt: "Cloud services",
    features: [
      {
        title: "Cloud Migration",
        description: "Seamless cloud transition",
        icon: "cloud",
        color: "blue"
      },
      {
        title: "DevOps Services",
        description: "Automated deployment",
        icon: "code",
        color: "green"
      }
    ]
  }
};
