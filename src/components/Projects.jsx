import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import melulaImg from "../assets/melula.png";
import recipeImg from "../assets/recipe.png";
import trackerImg from "../assets/tracker.png";
import letsauImg from "../assets/letsau.png";
import teketeImg from "../assets/tekete.png";
import streamingImg from "../assets/streaming.png";
import mernImg from "../assets/mern.png";
import spaniplugImg from "../assets/spaniplug.png";
import bracesImg from "../assets/braces.png";
import port6Img from "../assets/port6.png"; // Blazor App image
import cleaneaseImg from "../assets/cleanease.png";

const categories = ["All", "E-commerce", "Client", "Personal", "Full Stack", "Frontend"];

const projectsData = [
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
    live: "https://ecommerce-app-tau-blue.vercel.app/",
    github: "",
    status: "In Progress",
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
    title: "Melula Assignment",
    type: "E-commerce Frontend",
    role: "Frontend Developer",
    description:
      "A fully responsive e-commerce frontend built with React and Tailwind CSS, replicating the Melula homepage.",
    features: [
      "Dynamic product listings",
      "Responsive mobile-first design",
      "Interactive UI components",
    ],
    challenge:
      "Maintained pixel-perfect design and reusable components across pages.",
    live: "https://melula-assignment.vercel.app/",
    github: "https://github.com/cecilialetsau25/Melula_Assignment",
    status: "In Progress",
    image: melulaImg,
    category: "E-commerce",
    technologies: {
      Languages: ["JavaScript (ES6+)", "HTML", "CSS"],
      Frameworks: ["React"],
      Libraries: ["Tailwind CSS"],
      IDEs: ["VS Code"],
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
    live: "https://recipe-finder-eight-pi.vercel.app/",
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
    title: "React Tailwind Task Tracker",
    type: "Task Management App",
    role: "Frontend Developer",
    description:
      "A productivity-focused task tracker built with React and Tailwind CSS.",
    features: [
      "Create, update, delete tasks",
      "Categorize tasks by status",
      "Track progress in real-time",
    ],
    challenge:
      "Implemented smooth animations and state management for real-time updates.",
    live: "https://react-tailwind-task-tracker.vercel.app/",
    github: "https://github.com/cecilialetsau25/react-tailwind-task-tracker",
    status: "Completed",
    image: trackerImg,
    category: "Personal",
    technologies: {
      Languages: ["JavaScript (ES6+)", "HTML", "CSS"],
      Frameworks: ["React"],
      Libraries: ["Tailwind CSS"],
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
  role: "Admin email**admin@sytem.com** password**Admin@123**--user register any",
  description:
    "A laundry management system built with Laravel and React that handles customer orders, real-time tracking, and automated notifications.",

  features: [
    "Customer order creation & tracking",
    "Real-time order updates and notifications",
    "Admin dashboard with analytics",
    "Status categories: Pending, In Progress, Completed, Cancelled",
    "Secure authentication for both users and admins"
  ],

  challenge:
    "Built a full end-to-end system including authentication, CRUD operations, Supabase analytics for total orders, pending, completed, and cancelled counts, plus real-time admin and customer dashboards.",

  live: "https://cleanease-v2.vercel.app/",
  github: "https://github.com/cecilialetsau25/Cleanease_Laundry_System",

  // 🔥 Added admin login + demo instructions
 

  status: "In Progress",
  image: cleaneaseImg,
  category: "Client",

  technologies: {
    Languages: ["PHP", "JavaScript (ES6+)", "HTML", "CSS"],
    Frameworks: ["Laravel", "React"],
    Libraries: ["Axios", "Tailwind CSS", "Bootstrap"],
    Databases: ["MySQL", "Supabase"],
    IDEs: ["VS Code", "IntelliJ IDEA"],
    Tools: ["Vercel", "PHPUnit"]
  }
},

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
    backend: "https://mern-typescript-todo-6.onrender.com/",
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

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-16 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h3
          className="text-5xl md:text-6xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-sky-200 drop-shadow-md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h3>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg font-semibold ${
                activeCategory === cat
                  ? "bg-cyan-400 text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              } transition-colors duration-300`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg cursor-pointer flex flex-col justify-start items-start text-white transition-transform duration-200"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
            >
              <div className="w-full rounded-lg overflow-hidden mb-4">
                <img src={project.image} alt={project.title} className="w-full object-cover h-40" />
              </div>

              <div className="mb-3 w-full flex justify-between items-center">
                <span
                  className={`px-2 py-1 rounded-full text-[11px] font-semibold ${
                    project.status && project.status.toLowerCase().includes("complete")
                      ? "bg-green-500/90 text-white"
                      : "bg-yellow-400/90 text-black"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <h4 className="font-semibold text-lg mb-1 text-white">{project.title}</h4>
              <p className="text-xs mb-1 text-slate-200">{project.type}</p>
              <p className="text-xs mb-2 italic text-slate-300">Role: {project.role}</p>

              <p className="text-sm mb-2 text-slate-200">{project.description}</p>

              {project.features && (
                <ul className="text-xs mb-2 text-slate-300 list-disc list-inside">
                  {project.features.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
              )}

              {project.challenge && (
                <p className="text-xs mb-2 text-amber-300 italic">
                  Challenge: {project.challenge}
                </p>
              )}

              <div className="flex flex-wrap gap-2 mb-4">
                {Object.values(project.technologies).flat().map((tech, i) => (
                  <span key={i} className="bg-white/6 px-2 py-1 rounded-full text-[11px] text-white">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-3 w-full">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-cyan-400 hover:bg-cyan-500 text-black font-semibold py-2 px-3 rounded-lg transition-colors duration-300"
                  >
                    Live
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/6 border border-white/8 text-white font-semibold py-2 px-3 rounded-lg text-sm hover:bg-white/10 transition-colors duration-300"
                  >
                    <FaGithub size={16} />
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
