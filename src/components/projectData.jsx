// projectData.js


import recipeImg from "../assets/recipe.png";
import gradtrackImg from "../assets/gradtracking.png";
import letsauImg from "../assets/letsau.png";
import teketeImg from "../assets/tekete.png";
import streamingImg from "../assets/streaming.png";
import mernImg from "../assets/mern.png";
import spaniplugImg from "../assets/spaniplug.png";
import bracesImg from "../assets/braces.png";
import port6Img from "../assets/port6.png";
import cleaneaseImg from "../assets/cleanease.png";
import quotesImg from "../assets/random.png";
import heroImg from "../assets/portfolio.png";

export const categories = [
  "All",
  "E-commerce",
  "Client",
  "Personal",
  "Full Stack",
  "Frontend",
];

export const projectsData = [
  {
    title: "E-commerce Braces Shop",
    type: "Online Store",
    role: "Frontend & Backend Developer",
    description:
      "A full-featured e-commerce application for selling braces. Includes product listings, shopping cart, checkout, and responsive design.",
    features: [
      "Dynamic product listing and search",
      "Shopping cart with checkout",
      "Responsive design for mobile and desktop",
    ],
    challenge:
      "Integrated backend inventory management and optimized UI for smooth performance.",
    live: "https://ecommerce-app-three-sand.vercel.app/",
    github: "",
    status: "Completed",
    image: bracesImg,
    category: "E-commerce",
    technologies: {
      Languages: ["JavaScript (ES6+)", "HTML", "CSS"],
      Frameworks: ["React"],
      Libraries: ["Tailwind CSS"],
      Databases: ["Firebase"],
      IDEs: ["VS Code"],
      Tools: ["Vercel"],
    },
  },
  {
    title: "Personal Portfolio Case Study",
    type: "Developer Profile & Case Study",
    role: "Full Stack Developer",
    description:
      "A comprehensive case study showcasing my background, technical skills, certifications, and developer journey. Consolidates About Me, Skills, and Achievements into a single interactive experience.",
    features: [
      "Professional background and education",
      "Technical skills with interactive 3D cards",
      "Certifications and achievements",
      "Developer journey and personal values",
    ],
    challenge:
      "Designing a clean and engaging way to present personal and technical information without overwhelming the user.",
    status: "Completed",
    category: "Personal",
    image: heroImg,
    technologies: {
      Languages: ["JavaScript (ES6+)", "HTML", "CSS"],
      Frameworks: ["React"],
      Libraries: ["Framer Motion", "Tailwind CSS", "React Icons"],
      Tools: ["GitHub", "Vercel", "VS Code"],
    },
    isProfileProject: true,
  },
  {
    title: "Tekete Management System",
    type: "Customer Care System",
    role: "Junior Software Developer",
    description:
      "A ticketing system that lets customers log, track, and manage service requests. Developed as part of a group.",
    features: [
      "Ticket logging and tracking",
      "Admin dashboard for managing tickets",
      "Email notifications for updates",
    ],
    challenge:
      "Designed the system to handle multiple simultaneous users efficiently.",
    live: "http://training.tekete.co.za",
    github: "",
    status: "Completed",
    image: teketeImg,
    category: "Client",
    technologies: {
      Languages: ["PHP", "JavaScript (ES6+)", "HTML", "CSS"],
      Frameworks: ["Laravel"],
      Libraries: ["jQuery"],
      Databases: ["MySQL"],
      IDEs: ["VS Code", "PhpStorm"],
      Tools: ["PHPUnit"],
    },
  },
 
  {
    title: "Recipe Finder",
    type: "Recipe Search App",
    role: "React Developer",
    description:
      "A dynamic recipe search application developed with React allowing users to browse, search, and save recipes.",
    features: [
      "Dark mode support",
      "Responsive design",
      "Client-side filtering of recipes",
    ],
    challenge:
      "Integrated API for real-time recipe data and implemented reusable components.",
    live: "https://recipe-finder-seven-umber.vercel.app/",
    github: "https://github.com/cecilialetsau25/recipe_finder",
    status: "Completed",
    image: recipeImg,
    category: "Personal",
    technologies: {
      Languages: ["JavaScript (ES6+)", "HTML", "CSS"],
      Frameworks: ["React"],
      IDEs: ["VS Code"],
    },
  },
  {
    title: "GradTrack",
    type: "Internship Progress Tracker",
    role: "Frontend Developer",
    description:
      "A professional dashboard-style app to track learning goals for internships. Built with React and Tailwind CSS.",
    features: [
      "Add, update, and delete learning goals",
      "Track target completion dates",
      "Mark goals as 'Needs Mentor Review'",
      "Responsive and dashboard-style layout with hover effects",
    ],
    challenge:
      "Redesigned the classic task tracker into a professional pink-themed dashboard, creating custom card layouts and responsive components using React and Tailwind CSS.",
    live: "https://react-tailwind-task-tracker.vercel.app/",
    github: "https://github.com/cecilialetsau25/react-tailwind-task-tracker",
    status: "Completed",
    image: gradtrackImg,
    category: "Personal",
    technologies: {
      Languages: ["JavaScript (ES6+)", "HTML", "CSS"],
      Frameworks: ["React"],
      Libraries: ["Tailwind CSS", "React Icons", "React Router DOM"],
      IDEs: ["VS Code"],
    },
  },
  {
    title: "React Streaming App",
    type: "Movie Streaming Platform",
    role: "Frontend Developer",
    description:
      "A streaming platform built with React and Tailwind CSS, integrated with TMDB API.",
    features: [
      "Trending, popular, top-rated, upcoming movies",
      "Dynamic rows and hero banner",
      "Smooth animations with Framer Motion",
    ],
    challenge:
      "Implemented client-side API integration with dynamic rendering and animations.",
    live: "https://react-streaming-app-delta.vercel.app/",
    github: "https://github.com/cecilialetsau25/react-streaming-app",
    status: "Completed",
    image: streamingImg,
    category: "Personal",
    technologies: {
      Languages: ["JavaScript (ES6+)", "HTML", "CSS"],
      Frameworks: ["React"],
      Libraries: ["Tailwind CSS", "Framer Motion"],
      IDEs: ["VS Code"],
    },
  },
  {
    title: "Letsau’s Bank",
    type: "Banking System",
    role: "Solo Project",
    description:
      "A banking system project developed with Java and MySQL to handle accounts, transactions, and data management.",
    features: ["Account management", "Transaction history", "Data validation and security"],
    challenge:
      "Ensured data consistency and secure transaction handling in Java backend.",
    live: "https://letsau-bank-v2-ijc4.vercel.app/",
    github: "https://github.com/cecilialetsau25/LetsauBankV2",
    status: "Completed",
    image: letsauImg,
    category: "Personal",
    technologies: {
      Languages: ["Java", "HTML", "CSS"],
      Frameworks: [],
      Libraries: ["Bootstrap"],
      Databases: ["MySQL"],
      IDEs: ["IntelliJ IDEA"],
    },
  },
  {
  title: "Cleanease Laundry System",
  type: "Laundry Management System",
  role: "Individual Project — Full Stack Developer",
  description:
    "A laundry management system built with Laravel and React that handles customer orders, real-time tracking, and automated notifications. Admin and user authentication implemented with Supabase. Admin can view and manage all orders, while users must register to create their own account and track their orders.",
  features: [
    "Customer order creation & tracking",
    "Real-time order updates and notifications",
    "Admin dashboard with analytics",
    "Status categories: Pending, In Progress, Completed, Cancelled",
    "Secure authentication for both users and admins",
    "Role-based access control: Admin vs User",
    "Demo accounts: Admin pre-created, Users register freely"
  ],
  challenge:
    "Built a full end-to-end system including authentication, CRUD operations, Supabase analytics for total orders, pending, completed, and cancelled counts, plus real-time admin and customer dashboards.",
  live: "https://cleanease-v2.vercel.app/",
  github: "https://github.com/cecilialetsau25/Cleanease_Laundry_System",
  status: "Completed",
  image: cleaneaseImg,
  category: "Client",
  loginDetails: {
    admin: {
      email: "admin@system.com",
      password: "Admin@123",
      demo: "Pre-created account, can access all orders and analytics"
    },
    user: {
      registration: "Users must register to create their account",
      demo: "Once registered, they can log in and track orders"
    }
  },
  technologies: {
    Languages: ["PHP", "JavaScript (ES6+)", "HTML", "CSS"],
    Frameworks: ["Laravel", "React"],
    Libraries: ["Axios", "Tailwind CSS", "Bootstrap"],
    Databases: ["MySQL", "Supabase"],
    IDEs: ["VS Code", "IntelliJ IDEA"],
    Tools: ["Vercel", "PHPUnit"],
  },
}

,
  {
    title: "MERN TypeScript To-Do",
    type: "Task Management App",
    role: "Full Stack Developer",
    description:
      "A full-stack To-Do application built with MongoDB, Express, React, Node.js, and TypeScript.",
    features: ["Create, update, delete tasks", "Real-time updates", "Responsive frontend with TypeScript"],
    challenge:
      "Integrated frontend with backend REST APIs and hosted services on Render and Vercel.",
    live: "https://mern-typescript-todo-72oo.vercel.app/",
    github: "https://github.com/cecilialetsau25/mern-typescript-todo",
    status: "Completed",
    image: mernImg,
    category: "Full Stack",
    technologies: {
      Languages: ["TypeScript", "JavaScript (ES6+)", "HTML", "CSS"],
      Frameworks: ["React", "Express"],
      Libraries: ["Tailwind CSS", "Mongoose"],
      Databases: ["MongoDB"],
      IDEs: ["VS Code"],
      Tools: ["Render", "Vercel"],
    },
  },
  {
    title: "SpaniPlug",
    type: "Web Application",
    role: "Developer",
    description:
      "SpaniPlug is a web platform that connects consumers with service providers nearby.",
    features: ["Browse and interact with service listings", "Real-time updates", "Responsive UI with reusable components"],
    challenge:
      "Built a real-time interactive platform using Supabase for backend data storage.",
    live: "https://spaniplug.vercel.app/",
    github: "",
    status: "Completed",
    image: spaniplugImg,
    category: "Full Stack",
    technologies: {
      Languages: ["JavaScript (ES6+)", "HTML", "CSS"],
      Frameworks: ["React"],
      Database: ["Supabase"],
      Libraries: ["Tailwind CSS"],
      IDEs: ["VS Code"],
      Tools: ["Vercel"],
    },
  },
  {
    title: "Angular Quotes App",
    type: "Motivational Quotes App",
    role: "Frontend Developer",
    description:
      "A standalone Angular application that displays random motivational quotes with a clean and responsive UI.",
    features: ["Show random quotes", "Copy quote button", "Light/Dark mode", "Responsive design"],
    challenge:
      "Built as a standalone Angular app without NgModule, with routing and fully functional components. Deployed on GitHub and Vercel.",
    live: "https://quotes-app-ten-kappa.vercel.app/",
    github: "https://github.com/cecilialetsau25/quotes-app",
    status: "Completed",
    image: quotesImg,
    category: "Frontend",
    technologies: {
      Languages: ["TypeScript", "JavaScript", "HTML", "CSS"],
      Frameworks: ["Angular (Standalone Components)"],
      Libraries: ["None"],
      Databases: ["N/A"],
      IDEs: ["VS Code"],
      Tools: ["GitHub", "Vercel"],
    },
  },
  {
    title: "Blazor Portfolio App",
    type: "Interactive C# Web App",
    role: "Full Stack Developer",
    description:
      "A live Blazor WebAssembly app demonstrating interactive C# features including a calculator, unit converter, and counter.",
    features: ["Interactive Calculator, Counter, and Unit Converter", "Fully responsive portfolio style", "Deployed on Netlify for public access"],
    challenge:
      "Implemented Blazor WebAssembly components for seamless client-side interactivity.",
    live: "https://cheery-shortbread-e9e183.netlify.app/",
    github: "https://github.com/cecilialetsau25/blazortools",
    status: "Completed",
    image: port6Img,
    category: "Frontend",
    technologies: {
      Languages: ["C#", "HTML", "CSS"],
      Frameworks: ["Blazor WebAssembly"],
      Libraries: [".NET 10.0"],
      IDEs: ["Visual Studio"],
      Tools: ["Netlify"],
    },
  },
];
