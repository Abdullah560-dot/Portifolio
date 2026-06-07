export const projects = [
  {
    id: "hammadeh-travel",
    title: "Hammadeh Group Travel Management System",
    summary:
      "A full-stack travel platform combining a responsive landing page with an advanced administration dashboard for complete content management and SEO optimization.",
    description:
      "Designed and developed a full-stack travel platform consisting of a responsive landing page and an advanced administration dashboard. Implemented complete content management capabilities including services, travel offers, destinations, galleries, customer requests, and SEO configuration. Built scalable REST APIs and dynamic content workflows, enabling non-technical administrators to manage and update the entire website from a centralized dashboard.",
    image: "/projects/hammadeh-travel.webp",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    category: "Web App",
    challenges: [
      "Building a user-friendly CMS interface for non-technical administrators",
      "Managing complex travel package hierarchies and multi-language content",
      "Ensuring seamless synchronization between frontend content and admin updates",
    ],
    solutions: [
      "Designed an intuitive content management interface with drag-and-drop gallery uploads",
      "Implemented a robust REST API with flexible content querying and filtering",
      "Built real-time content caching system with invalidation strategies for instant frontend updates",
    ],
    results: [
      "Reduced content update time from hours to minutes for administrators",
      "Improved SEO scores through dynamic meta tags and structured data generation",
      "Enabled 24/7 self-service content management without technical support",
    ],
    liveUrl: "https://hammadeh-group-xooz.vercel.app/",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "captal-construction",
    title: "Construction Management Dashboard",
    summary:
      "An enterprise-grade construction management dashboard enabling project tracking, contractor management, material monitoring, and real-time budget control across multiple construction sites.",
    description:
      "Built an enterprise-grade construction management dashboard for Captal, enabling project tracking, contractor management, material monitoring, and real-time budget control across multiple construction sites. The platform centralizes operational data and provides instant insights into project progress, costs, and resource utilization.",
    image: "/projects/captal-construction.webp",
    tech: [
      "React.js",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
      "Recharts",
      "Node.js",
      "MongoDB",
    ],
    category: "Dashboard",
    challenges: [
      "Managing complex project data across multiple construction sites and departments",
      "Handling large volumes of materials, suppliers, and contractor records efficiently",
      "Implementing real-time budget tracking and cost calculations across ongoing projects",
    ],
    solutions: [
      "Designed a normalized Redux state architecture with RTK Query for efficient data fetching and caching",
      "Implemented server-side pagination, filtering, and optimized rendering for large datasets",
      "Developed a real-time cost monitoring system using memoized selectors and background processing for accurate budget calculations",
    ],
    results: [
      "Improved dashboard performance by 40% through code splitting and lazy loading",
      "Successfully managed and displayed 10,000+ project, material, and contractor records with smooth user experience",
      "Reduced API requests by 60% through optimized RTK Query caching and data synchronization strategies",
    ],
    liveUrl: "https://captalsa.com/",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "al-safeer-delivery",
    title: "Al-Safeer Delivery Dashboard",
    summary:
      "A comprehensive administration dashboard for the Al-Safeer Delivery Platform, enabling full management of restaurants, products, categories, delivery zones, and customer operations with real-time visibility.",
    description:
      "Developed and maintained a comprehensive administration dashboard for the Al-Safeer Delivery Platform, enabling full management of restaurants, products, categories, delivery zones, and customer operations. The system provided administrators with real-time visibility into orders, user activity, and business performance through an intuitive and scalable interface.",
    image: "/projects/al-safeer-delivery.webp",
    tech: [
      "React.js",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Google Maps API",
    ],
    category: "Dashboard",
    challenges: [
      "Managing large volumes of interconnected data between restaurants, products, orders, and delivery regions",
      "Synchronizing real-time chat and order updates across multiple users",
      "Optimizing dashboard performance while handling frequent API requests and dynamic data",
    ],
    solutions: [
      "Implemented Redux Toolkit and RTK Query for efficient state management and server-side caching",
      "Developed reusable components and optimized rendering strategies to improve responsiveness",
      "Integrated Google Maps services for accurate delivery zone management and location handling",
      "Built scalable API communication patterns to support real-time operational workflows",
    ],
    results: [
      "Streamlined administrative operations by centralizing all platform management tools in a single dashboard",
      "Improved data management efficiency through automated CRUD workflows",
      "Enhanced customer support experience with integrated real-time communication features",
      "Delivered a scalable and maintainable solution capable of supporting platform growth and increasing order volume",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },

  {
    id: "mackbook-landing",
    title: "MacBook Product Landing Page",
    summary:
      "An immersive and interactive landing page showcasing Apple's MacBook product with stunning 3D visualizations, smooth animations, and engaging product demonstrations.",
    description:
      "Developed a premium landing page for MacBook featuring interactive 3D product visualization with smooth parallax scrolling and scroll-triggered animations. The page delivers an engaging user experience with dynamic content transitions, immersive visuals, and seamless performance across all devices.",
    image: "/projects/mackbook-landing.webp",
    tech: ["React.js", "Three.js", "GSAP", "Tailwind CSS"],
    category: "Web App",
    challenges: [
      "Integrating complex 3D models and rendering them smoothly in the browser",
      "Creating scroll-based animations that are performant and responsive across devices",
      "Coordinating Three.js rendering with GSAP timeline animations without conflicts",
    ],
    solutions: [
      "Optimized Three.js scene with efficient lighting, shadows, and culling for 60 FPS performance",
      "Implemented Intersection Observer API with GSAP for trigger-based animations optimized for performance",
      "Built a custom animation controller synchronizing Three.js camera movements with GSAP timelines",
    ],
    results: [
      "Achieved 60 FPS smooth performance on all devices including mobile",
      "3D model loads in under 2 seconds with progressive enhancement",
      "20% increase in user engagement with scroll interaction tracking",
    ],
    liveUrl: "https://mackbook-landingpagev1.vercel.app/",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "realtime-chat",
    title: "Real-Time Chat Application",
    summary:
      "A full-stack real-time chat application enabling instant messaging between users with live online status updates, secure authentication, and responsive modern UI.",
    description:
      "Developed a full-stack real-time chat application enabling instant messaging between users with live online status updates. Implemented secure authentication, real-time communication using Socket.IO, and a responsive modern UI. The application supports user management, message persistence, and seamless real-time interactions.",
    image: "/projects/realtime-chat.webp",
    tech: [
      "React.js",
      "Tailwind CSS",
      "DaisyUI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "WebSockets",
    ],
    category: "Web App",
    challenges: [
      "Implementing real-time bidirectional communication between multiple clients",
      "Managing user sessions and online status across different devices",
      "Ensuring message persistence and delivery reliability",
    ],
    solutions: [
      "Leveraged Socket.IO with namespace-based rooms for efficient real-time messaging",
      "Implemented JWT authentication with secure token refresh mechanisms",
      "Designed MongoDB schema with indexing for fast message retrieval and queries",
    ],
    results: [
      "Sub-100ms message delivery latency with automatic reconnection handling",
      "Seamless real-time updates for online status and typing indicators",
      "Support for multiple concurrent users with stable WebSocket connections",
    ],
    liveUrl: "https://fullstack-chatapp-zvum.onrender.com",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "multiple-dashboards",
    title: "Enterprise Dashboards - Multiple Companies",
    summary:
      "Developed multiple enterprise-grade administration dashboards for various companies, showcasing expertise in building scalable, data-intensive applications tailored to different business domains.",
    description:
      "Successfully designed and deployed multiple enterprise dashboards for diverse industries including delivery platforms, construction management, travel administration, and business operations. Each dashboard was built with scalable architecture, real-time data management, role-based access control, and intuitive UI/UX. These projects demonstrate proficiency in handling complex requirements, managing large datasets, and delivering production-grade solutions.",
    image: "/projects/multiple-dashboards.webp",
    tech: [
      "React.js",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
      "Recharts",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    category: "Multiple Dashboards",
    challenges: [
      "Designing scalable architecture that works across different business domains",
      "Managing complex interconnected data and real-time synchronization",
      "Ensuring consistent UX while adapting to specific client requirements",
      "Handling performance optimization for large-scale datasets",
    ],
    solutions: [
      "Built modular, reusable component library adaptable to various use cases",
      "Implemented Redux Toolkit and RTK Query for robust state management across all projects",
      "Developed standardized patterns for authentication, authorization, and data fetching",
      "Created performance optimization strategies including pagination, virtualization, and smart caching",
    ],
    results: [
      "Delivered 5+ enterprise dashboards across different industries with consistent quality",
      "Maintained 40-60% performance improvement through code optimization",
      "Enabled 10,000+ data records management per dashboard with smooth user experience",
      "Reduced development time for subsequent dashboards through reusable patterns and components",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
];

export const projectCategories = [
  "All",
  "Dashboard",
  "Web App",
  "Multiple Dashboards",
];
