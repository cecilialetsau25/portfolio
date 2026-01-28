import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import { projectsData, categories } from "./projectData";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section id="projects" className="py-16 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">

       <motion.h3
  className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-200 leading-tight break-words"
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
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
              }`}
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
              onClick={() => navigate(`/projects/${index}`)}
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 cursor-pointer flex flex-col text-white"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />

              {/* Status badge stays */}
              {project.status && (
                <span
                  className={`mb-2 px-2 py-1 w-fit rounded-full text-[11px] font-semibold ${
                    project.status === "Completed"
                      ? "bg-green-500"
                      : "bg-yellow-400 text-black"
                  }`}
                >
                  {project.status}
                </span>
              )}

              <h4 className="font-semibold text-lg">{project.title}</h4>
              <p className="text-xs text-slate-300">{project.type}</p>
              <p className="text-xs italic text-slate-400 mb-3">
                Role: {project.role}
              </p>

              <p className="text-sm text-slate-300 mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* View details indicator */}
              <div className="mt-auto flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-3 transition-all">
                <span>View details</span>
                <FaArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
