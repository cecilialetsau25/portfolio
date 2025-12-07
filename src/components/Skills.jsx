

import { motion, useMotionValue, useTransform } from "framer-motion";

const skillsCategories = [
 {
  title: "Programming Languages",
  skills: [
    { name: "Java", icon: "https://img.icons8.com/color/48/java-coffee-cup-logo.png" },
    { name: "C#", icon: "https://img.icons8.com/color/48/c-sharp-logo.png" },
    { name: "PHP", icon: "https://img.icons8.com/color/48/php.png" },
    { name: "JavaScript (ES6+)", icon: "https://img.icons8.com/color/48/javascript.png" },
    { name: "TypeScript", icon: "https://img.icons8.com/color/48/typescript.png" },
    { name: "Kotlin", icon: "https://img.icons8.com/color/48/kotlin.png" },
    { name: "HTML", icon: "https://img.icons8.com/color/48/html-5.png" },
    { name: "CSS", icon: "https://img.icons8.com/color/48/css3.png" },
    { name: "SQL", icon: "https://img.icons8.com/color/48/mysql-logo.png" },
  ],
},

   {
    title: "Frameworks / Libraries",
    skills: [
      { name: "React", icon: "https://img.icons8.com/color/48/react-native.png" },
      { name: "Angular (Standalone Components)", icon: "https://angular.io/assets/images/logos/angular/angular.png" },
      { name: "Laravel", icon: "https://img.icons8.com/color/48/code.png"  },
      { name: "Tailwind CSS", icon: "https://img.icons8.com/color/48/css3.png" },
      { name: "Bootstrap", icon: "https://img.icons8.com/color/48/bootstrap.png" },
      { name: "jQuery", icon: "https://img.icons8.com/color/48/code.png" },
      { name: "Express.js", icon: "https://img.icons8.com/color/48/express-js.png" },
      { name: "Mongoose", icon: "https://img.icons8.com/color/48/mongodb.png" },
      
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: "https://img.icons8.com/color/48/mysql-logo.png" },
      { name: "MongoDB", icon: "https://img.icons8.com/color/48/mongodb.png" },
      { name: "Firebase", icon: "https://img.icons8.com/fluency/48/database.png" },
      { name: "Supabase", icon: "https://img.icons8.com/fluency/48/database.png" },
      { name: "PostgreSQL", icon: "https://img.icons8.com/color/48/postgreesql.png" },
    ],
  },
 {
  title: "Tools & IDEs",
  skills: [
    { name: "Git/GitHub", icon: "https://img.icons8.com/material-outlined/48/github.png" },
    { name: "VS Code", icon: "https://img.icons8.com/color/48/visual-studio-code-2019.png" },
    { name: "NetBeans", icon: "https://img.icons8.com/color/48/apache-netbeans.png" },
    { name: "PhpStorm", icon: "https://img.icons8.com/color/48/code.png"  },
    { name: "IntelliJ IDEA", icon: "https://img.icons8.com/color/48/intellij-idea.png" },
    { name: "Vercel", icon: "https://img.icons8.com/color/48/vercel.png" },
    // Use a more generic hosting/server icon for Render (if Render logo link fails)
    
  ],
}
,


 {
  title: "Other Skills",
  skills: [
    { name: "Frontend & Backend Integration", icon: "https://img.icons8.com/color/48/code.png" },
    { name: "API Consumption", icon: "https://img.icons8.com/color/48/api.png" },
    { name: "Project Management", icon: "https://img.icons8.com/color/48/project.png" },
    { name: "Mentoring & Team Collaboration", icon: "https://img.icons8.com/color/48/teamwork.png" },
  ],
},

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

        {skillsCategories.map((category, idx) => (
          <div key={idx} className="mb-12">
            <h4 className="text-2xl font-semibold mb-6 text-white">{category.title}</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.skills.map((skill, index) => (
                <TiltCard key={index} skill={skill} />
              ))}
            </div>
          </div>
        ))}
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
