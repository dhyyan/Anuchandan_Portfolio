import drivezyImg from '../assets/projects/drivezy.png';
import luminovaImg from '../assets/projects/luminova.png';
import adminImg from '../assets/projects/admin.png';
import olxImg from '../assets/projects/olx.png';
import netflixImg from '../assets/projects/netflix.png';

export const portfolioData = {
  name: "Anuchandana S",
  title: "Frontend Developer — MERN Stack Developer",
  location: "Kochi, Kerala",
  email: "anuchandana1029@gmail.com",
  phone: "+91 6238432890",
  linkedin: "https://www.linkedin.com/in/anuchandana-sunil-57012b319/",
  github: "https://github.com/anuchandana963",
  
  profileSummary: "Frontend-focused MERN stack developer with hands-on experience building scalable full-stack web applications using React.js, Node.js, and MongoDB. Skilled in RESTful API integration, authentication (JWT, Firebase), and responsive user interface development. Strong foundation in data structures and problem-solving with 100+ LeetCode problems solved.",
  
  technicalSkills: {
    languages: ["JavaScript", "TypeScript", "C"],
    frontend: ["React.js", "Redux", "Tailwind CSS", "Bootstrap", "Vanilla CSS"],
    backend: ["Node.js", "Express.js", "RESTful APIs"],
    databases: ["MongoDB", "Firebase"],
    tools: ["Git", "GitHub", "Postman", "Figma", "npm"],
    concepts: ["Authentication", "Authorization", "JWT", "MVC", "Clean Architecture", "OOP"],
  },
  
  projects: [
    {
      title: "Drivezy - Vehicle Rental Platform",
      github: "https://github.com/anuchandana963/DRIVEZY",
      image: drivezyImg,
      description: "Built a full-stack vehicle rental platform with JWT-based authentication and role-based access control. Implemented MongoDB geospatial indexing for location-based search and distance filtering.",
      bulletPoints: [
        "Built a full-stack vehicle rental platform with JWT-based authentication and role-based access control.",
        "Implemented MongoDB geospatial indexing for location-based search and distance filtering.",
        "Developed an admin dashboard for managing users and approvals.",
        "Designed real-time chat and notification features for user interaction."
      ]
    },
    {
      title: "Luminova - Watch E-commerce Platform",
      github: "https://github.com/anuchandana963/Luminovaa",
      image: luminovaImg,
      description: "Developed a full-stack e-commerce application with advanced filtering by category, price, and brand. Improved performance using pagination and optimized database queries.",
      bulletPoints: [
        "Developed a full-stack e-commerce application with advanced filtering by category, price, and brand.",
        "Improved performance using pagination and optimized database queries.",
        "Implemented dynamic product recommendation features."
      ]
    },
    {
      title: "User Management System & Admin Dashboard",
      github: "https://github.com/anuchandana963/USER-MANAGEMENT-Redux",
      image: adminImg,
      description: "Built a React and TypeScript admin dashboard with Redux for state management. Implemented CRUD operations using modular and reusable components.",
      bulletPoints: [
        "Built a React and TypeScript admin dashboard with Redux for state management.",
        "Implemented CRUD operations using modular and reusable components.",
        "Designed a responsive UI using Tailwind CSS."
      ]
    },
    {
      title: "OLX-like Buy & Sell Platform",
      github: "#",
      image: olxImg,
      description: "Developed a product listing platform using React and Firebase. Integrated Firebase Authentication and image upload functionality.",
      bulletPoints: [
        "Developed a product listing platform using React and Firebase.",
        "Integrated Firebase Authentication and image upload functionality.",
        "Implemented search, filtering, and lazy loading for performance."
      ]
    },
    {
      title: "Netflix Clone - Streaming Web App",
      github: "https://github.com/anuchandana963/Netflix-Clone-React",
      image: netflixImg,
      description: "Built a responsive streaming platform using React and Firebase with authentication and protected routes.",
      bulletPoints: [
        "Built a responsive streaming platform using React and Firebase with authentication and protected routes."
      ]
    }
  ],
  
  experience: [
    {
      title: "Self-Employed / Personal Projects",
      duration: "2024 - Present",
      bulletPoints: [
        "Developed and deployed multiple full-stack web applications using the MERN stack.",
        "Implemented authentication systems, REST APIs, and responsive UI components.",
        "Applied clean architecture principles to ensure scalable and maintainable codebases."
      ]
    }
  ],
  
  certifications: [
    "Completed MERN Stack Development Bootcamp at Brototype.",
    "Solved 100+ problems on LeetCode focusing on data structures and algorithms."
  ],
  
  education: [
    {
      institution: "Brototype Bootcamp",
      degree: "MERN Stack Development",
      duration: "April 2026"
    },
    {
      institution: "GHSS Palayad",
      degree: "Higher Secondary in Computer Commerce",
      duration: "March 2024"
    }
  ],
  
  services: [
    {
      title: "Frontend Development",
      description: "Building responsive, robust and scalable frontends using React, Redux, and modern CSS frameworks."
    },
    {
      title: "Backend APIs",
      description: "Developing robust RESTful APIs in Node.js and Express.js, connecting them gracefully to MongoDB."
    },
    {
      title: "Full-Stack Web Apps",
      description: "End-to-end web application development encompassing both client-side and server-side components."
    },
    {
      title: "UI/UX Implementation",
      description: "Accurately translating Figma designs into interactive, pixel-perfect web interfaces."
    }
  ]
};
