import { motion, useMotionValue, useTransform } from "framer-motion";

const skillsData = [
  { name: "Java (JEE, JPA, JDBC, JPQL, PLSQL)", icon: "https://img.icons8.com/color/48/java-coffee-cup-logo.png" },
  { name: "PHP (Laravel, PHPUnit)", icon: "https://img.icons8.com/color/48/php.png" },
  { name: "React (Frontend Development)", icon: "https://img.icons8.com/color/48/react-native.png" },
  { name: "JavaScript (ES6+, jQuery)", icon: "https://img.icons8.com/color/48/javascript.png" },
  { name: "HTML", icon: "https://img.icons8.com/color/48/html-5.png" },
  { name: "CSS / Tailwind CSS", icon: "https://img.icons8.com/color/48/css3.png" },
  { name: "SQL / MySQL", icon: "https://img.icons8.com/color/48/mysql-logo.png" },
  { name: "GitHub", icon: "https://img.icons8.com/material-outlined/48/github.png" },
  { name: "NetBeans / VS Code", icon: "https://img.icons8.com/color/48/visual-studio-code-2019.png" },
  { name: "Kotlin", icon: "https://img.icons8.com/color/48/kotlin.png" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h3
          className="text-5xl md:text-6xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-sky-200 drop-shadow-md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <TiltCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

// 3D Tilt Card Component
function TiltCard({ skill }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  return (
    <motion.div
      className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center justify-center shadow-xl cursor-pointer text-white perspective-1000"
      style={{ rotateX, rotateY }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const px = e.clientX - rect.left - rect.width / 2;
        const py = e.clientY - rect.top - rect.height / 2;
        x.set(px / 10);
        y.set(py / 10);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-3" />
      <h4 className="font-semibold text-lg text-center">{skill.name}</h4>
    </motion.div>
  );
}
