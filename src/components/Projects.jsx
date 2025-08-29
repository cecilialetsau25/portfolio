import { motion } from "framer-motion";
import melulaImg from "../assets/melula.png";
import recipeImg from "../assets/recipe.png";
import trackerImg from "../assets/tracker.png";

const projectsData = [
  {
    title: "Melula Assignment",
    type: "E-commerce Frontend",
    description: "Frontend project built with React + Tailwind.",
    live: "https://melula-assignment.vercel.app/",
    github: "https://github.com/cecilialetsau25/Melula_Assignment",
    image: melulaImg
  },
  {
    title: "Recipe Finder",
    type: "Recipe Search App",
    description: "React app to search and save recipes with dark mode.",
    live: "https://recipe-finder-eight-pi.vercel.app/",
    github: "https://github.com/cecilialetsau25/recipe_finder",
    image: recipeImg 
  },

  {
    title: "React Tailwind Task Tracker",
    type: "Task Management App",
    description: "Task tracker app using React + Tailwind CSS.",
    live: "https://react-tailwind-task-tracker.vercel.app/",
    github: "https://github.com/cecilialetsau25/react-tailwind-task-tracker",
    image: trackerImg 
  }
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-16 bg-gray-600">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-10 text-white">Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-50 shadow-lg rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300 flex items-start gap-4"
              whileHover={{ scale: 1.05 }}
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-16 h-16 rounded-full object-cover"
                />
              )}
              <div>
                <h4 className="font-bold text-xl mb-1">{project.title}</h4>
                <p className="text-sm italic text-gray-500 mb-2">{project.type}</p>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a href={project.live} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Live Demo</a>{" | "}
                <a href={project.github} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">GitHub</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
