import { motion } from "framer-motion";
import melulaImg from "../assets/melula.png";
import recipeImg from "../assets/recipe.png";
import trackerImg from "../assets/tracker.png";
import letsauImg from "../assets/letsau.png";
import cleaneaseImg from "../assets/cleanease.png";
import teketeImg from "../assets/tekete.png";
import streamingImg from "../assets/streaming.png";
import mernImg from "../assets/mern.png";
import spaniplugImg from "../assets/spaniplug.png";
import bracesImg from "../assets/braces.png"; // 👈 screenshot for Braces project
import { FaGithub } from "react-icons/fa";

const projectsData = [
  {
    title: "E-commerce Braces Shop",
    type: "Online Store",
    role: "Frontend & Backend Developer",
    description:
      "A full-featured e-commerce application for selling braces. Includes product listings, shopping cart, checkout, and responsive design. Built with React, Tailwind CSS, and integrated with a backend for inventory management.",
    live: "https://ecommerce-app-tau-blue.vercel.app/",
    github: "", // Add GitHub repo if available
    image: bracesImg,
    technologies: {
      Languages: ["JavaScript (ES6+)", "HTML", "CSS"],
      Frameworks: ["React"],
      Libraries: ["Tailwind CSS"],
      Databases: ["Firebase"], // Or whichever backend you used
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
    live: "http://training.tekete.co.za",
    github: "",
    image: teketeImg,
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
      "A fully responsive e-commerce frontend built with React and Tailwind CSS, designed to replicate the Melula homepage experience. Features include dynamic product listings, interactive UI components, and a mobile-friendly layout. The project emphasizes reusable components, clean state management, and accessibility best practices, providing a smooth and modern user experience.",
    live: "https://melula-assignment.vercel.app/",
    github: "https://github.com/cecilialetsau25/Melula_Assignment",
    image: melulaImg,
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
      "A dynamic recipe search application developed with React that allows users to browse, search, and save recipes. The app includes dark mode, a responsive design, and client-side filtering to improve usability. Implemented modern React hooks for state and lifecycle management and designed components to be reusable and scalable. The project showcases clean UI/UX and practical use of APIs to fetch real-time recipe data.",
    live: "https://recipe-finder-eight-pi.vercel.app/",
    github: "https://github.com/cecilialetsau25/recipe_finder",
    image: recipeImg,
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
      "A productivity-focused task tracker built with React and Tailwind CSS. Users can create, update, and delete tasks, categorize them by status, and track progress in real-time. Features include smooth animations, responsive design, and intuitive UI interactions. The project emphasizes component-based architecture, state management with React hooks, and enhanced user experience through design consistency and visual feedback.",
    live: "https://react-tailwind-task-tracker.vercel.app/",
    github: "https://github.com/cecilialetsau25/react-tailwind-task-tracker",
    image: trackerImg,
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
      "A streaming platform built with React and Tailwind CSS, integrated with the TMDB API to showcase trending, popular, top-rated, and upcoming movies and TV shows. Features include dynamic rows, a hero banner, and smooth animations with Framer Motion.",
    live: "https://react-streaming-app-delta.vercel.app/",
    github: "https://github.com/cecilialetsau25/react-streaming-app",
    image: streamingImg,
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
    live: "https://letsau-bank-v2-ijc4.vercel.app/",
    github: "https://github.com/cecilialetsau25/LetsauBankV2",
    image: letsauImg,
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
    role: "Solo Project",
    description:
      "A laundry management system built with Laravel for handling customer orders, tracking, and notifications.",
    live: "",
    github: "https://github.com/cecilialetsau25/Cleanease_Laundry_System",
    image: cleaneaseImg,
    technologies: {
      Languages: ["PHP", "JavaScript (ES6+)", "HTML", "CSS"],
      Frameworks: ["Laravel"],
      Libraries: ["jQuery", "Bootstrap"],
      Databases: ["MySQL"],
      IDEs: ["IntelliJ IDEA"],
    },
  },
  {
    title: "MERN TypeScript To-Do",
    type: "Task Management App",
    role: "Full Stack Developer",
    description:
      "A full-stack To-Do application built with MongoDB, Express, React, Node.js, and TypeScript. Users can create, update, and delete tasks with real-time updates and a responsive design. The backend is hosted on Render, and the frontend is deployed on Vercel.",
    live: "https://mern-typescript-todo-72oo.vercel.app/",
    github: "https://github.com/cecilialetsau25/mern-typescript-todo",
    backend: "https://mern-typescript-todo-6.onrender.com/",
    image: mernImg,
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
      "SpaniPlug is a web platform that connects consumers with service providers nearby. Users can browse available services, view provider details, and interact with listings in real-time. Built with React, Supabase, and Tailwind CSS, the app emphasizes responsive design, intuitive UI, and reusable components for an optimized user experience.",
    live: "https://spaniplug.vercel.app/",
    github: "",
    image: spaniplugImg,
    technologies: {
      Languages: ["JavaScript (ES6+)", "HTML", "CSS"],
      Frameworks: ["React"],
      Database: ["Supabase"],
      Libraries: ["Tailwind CSS"],
      IDEs: ["VS Code"],
      Tools: ["Vercel"],
    },
  },
];

const colors = [
  "from-purple-500 to-pink-500",
  "from-green-400 to-teal-400",
  "from-yellow-400 to-orange-400",
  "from-blue-400 to-indigo-500",
  "from-pink-400 to-red-400",
  "from-purple-300 to-purple-600",
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-10 text-white">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className={`p-6 shadow-lg rounded-xl cursor-pointer flex flex-col justify-start items-start bg-gradient-to-r ${colors[index % colors.length]} text-white`}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4 w-full object-cover"
              />
              <h4 className="font-bold text-xl mb-2">{project.title}</h4>
              <p className="text-sm mb-2">{project.type}</p>
              <p className="text-sm mb-2 italic">Role: {project.role}</p>
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {Object.values(project.technologies).flat().map((tech, i) => (
                  <span
                    key={i}
                    className="bg-white/20 px-2 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-300"
                  >
                    Live
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded flex items-center gap-2 transition-colors duration-300"
                  >
                    <FaGithub size={18} />
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
