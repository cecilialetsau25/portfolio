// src/pages/ProjectDetail.jsx
import { useParams, useNavigate } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaGithub, FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
 import { projectsData } from "./ProjectData";
 //import { projectsData } from "./projectData";


// ✅ IMPORT YOUR EXISTING COMPONENTS
import About from "./About";
import Skills from "./Skills";

/* ================= TECH ICON MAP ================= */
const techIcons = {
  Java: "https://img.icons8.com/color/48/java-coffee-cup-logo.png",
  "C#": "https://img.icons8.com/color/48/c-sharp-logo.png",
  PHP: "https://img.icons8.com/color/48/php.png",
  JavaScript: "https://img.icons8.com/color/48/javascript.png",
  "JavaScript (ES6+)": "https://img.icons8.com/color/48/javascript.png",
  TypeScript: "https://img.icons8.com/color/48/typescript.png",
  HTML: "https://img.icons8.com/color/48/html-5.png",
  CSS: "https://img.icons8.com/color/48/css3.png",
  React: "https://img.icons8.com/color/48/react-native.png",
  Angular: "https://angular.io/assets/images/logos/angular/angular.png",
  Laravel: "https://img.icons8.com/color/48/laravel.png",
  MongoDB: "https://img.icons8.com/color/48/mongodb.png",
  Firebase: "https://img.icons8.com/color/48/firebase.png",
  MySQL: "https://img.icons8.com/color/48/mysql-logo.png",
  "Tailwind CSS": "https://img.icons8.com/color/48/tailwindcss.png",
  GitHub: "https://img.icons8.com/material-outlined/48/github.png",
  default: "https://img.icons8.com/color/48/code.png",
};

/* ================= HELPERS ================= */
const getTechStack = (technologies = {}) => Object.values(technologies).flat();

const getWorkType = (project) => {
  if (
    project.description?.toLowerCase().includes("group") ||
    project.category === "Client"
  ) {
    return "Team Project";
  }
  return "Individual Project";
};

const getLessonsLearned = (features = []) =>
  features.map(
    (feature) => `Learned how to implement ${feature.toLowerCase()} effectively`
  );

/* ================= MAIN COMPONENT ================= */
export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectsData[Number(projectId)];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Project not found
      </div>
    );
  }

  /* ================= PROFILE PROJECT MODE ================= */
  if (project.isProfileProject) {
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <button
            onClick={() => navigate("/projects")}
            className="flex items-center gap-2 mb-10 text-cyan-400 hover:text-cyan-300"
          >
            <FaArrowLeft /> Back to Projects
          </button>

          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-16
                       bg-clip-text text-transparent
                       bg-gradient-to-r from-purple-400 via-cyan-400 to-sky-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {project.title}
          </motion.h1>

          <About />
          <Skills />
        </div>
      </section>
    );
  }

  /* ================= NORMAL PROJECT MODE ================= */
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-white">

        {/* BACK */}
        <button
          onClick={() => navigate("/projects")}
          className="flex items-center gap-2 mb-10 text-cyan-400 hover:text-cyan-300"
        >
          <FaArrowLeft /> Back to Projects
        </button>

        {/* IMAGE CARD */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl mb-10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[420px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {project.title}
            </motion.h1>

            {/* STATUS + LINKS */}
            <div className="flex flex-wrap items-center gap-4">
              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold
                  ${
                    project.status === "Completed"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
              >
                {project.status}
              </span>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full
                             bg-cyan-400/20 text-cyan-300 text-sm font-semibold
                             hover:bg-cyan-400/30 transition"
                >
                  <FaExternalLinkAlt size={14} /> Live
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full
                             bg-white/10 text-slate-200 text-sm font-semibold
                             hover:bg-white/20 transition"
                >
                  <FaGithub size={14} /> GitHub
                </a>
              )}

              <span className="text-sm text-slate-300">{project.type}</span>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">

          <p className="text-slate-300 max-w-3xl mb-16">{project.description}</p>

          <Section title="Project Overview">
            <div className="grid md:grid-cols-2 gap-8 text-slate-300">
              <div>
                <h4 className="font-semibold text-cyan-300 mb-2">Role</h4>
                <p>{project.role}</p>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-300 mb-2">
                  Individual / Team Work
                </h4>
                <p>{getWorkType(project)}</p>
              </div>
            </div>
          </Section>

          <Section title="Tech Stack">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {getTechStack(project.technologies).map((tech, i) => (
                <TechCard key={i} tech={tech} />
              ))}
            </div>
          </Section>

          {project.challenge && (
            <Section title="Challenges">
              <p className="text-slate-300 max-w-3xl">{project.challenge}</p>
            </Section>
          )}

          {project.features && (
            <Section title="Lessons Learned">
              <ul className="list-disc list-inside space-y-2 text-slate-300">
                {getLessonsLearned(project.features).map((lesson, i) => (
                  <li key={i}>{lesson}</li>
                ))}
              </ul>
            </Section>
          )}

          {/* ================= LOGIN / DEMO DETAILS ================= */}
          {project.loginDetails && (
            <Section title="Demo Login Details">
              <div className="text-slate-300 space-y-4">
                {project.loginDetails.admin && (
                  <div>
                    <h4 className="font-semibold text-cyan-300 mb-1">Admin:</h4>
                    <p>Email: <span className="font-mono">{project.loginDetails.admin.email}</span></p>
                    <p>Password: <span className="font-mono">{project.loginDetails.admin.password}</span></p>
                    <p className="italic">{project.loginDetails.admin.demo}</p>
                  </div>
                )}
                {project.loginDetails.user && (
                  <div>
                    <h4 className="font-semibold text-cyan-300 mb-1">User:</h4>
                    <p>{project.loginDetails.user.registration}</p>
                    <p className="italic">{project.loginDetails.user.demo}</p>
                  </div>
                )}
              </div>
            </Section>
          )}

        </div>
      </div>
    </section>
  );
}

/* ================= SECTION ================= */
function Section({ title, children }) {
  return (
    <div className="mb-16">
      <motion.h2
        className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text
                   bg-gradient-to-r from-cyan-400 to-sky-300"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {title}
      </motion.h2>
      {children}
    </div>
  );
}

/* ================= TECH CARD ================= */
function TechCard({ tech }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  const icon = techIcons[tech.replace(/\(.*?\)/g, "").trim()] || techIcons.default;

  return (
    <motion.div
      className="bg-white/5 border border-white/10 rounded-2xl p-6
                 flex flex-col items-center justify-center shadow-xl cursor-pointer"
      style={{ rotateX, rotateY }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left - rect.width / 2) / 10);
        y.set((e.clientY - rect.top - rect.height / 2) / 10);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileHover={{ scale: 1.05 }}
    >
      <img src={icon} alt={tech} className="w-12 h-12 mb-3" />
      <p className="text-sm font-semibold text-center">{tech}</p>
    </motion.div>
  );
}
