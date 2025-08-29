import { motion } from "framer-motion";

const skillsData = [
  { name: "Java (JEE, JPA, JDBC, JPQL, PLSQL)", experience: "3 Years" },
  { name: "PHP (Laravel, PHPUnit)", experience: "1.5 Years" },
  { name: "React (Frontend Development)", experience: "1 Year" },
  { name: "JavaScript (ES6+, jQuery)", experience: "2 Years" },
  { name: "HTML", experience: "3 Years" },
  { name: "CSS / Tailwind CSS", experience: "2.5 Years" },
  { name: "SQL / MySQL", experience: "2 Years" },
  { name: "GitHub", experience: "3 Years" },
  { name: "NetBeans / VS Code", experience: "3 Years" },
  { name: "Kotlin", experience: "6 Months" },
];

// Array of gradient colors
const colors = [
  "from-purple-500 to-pink-500",
  "from-green-400 to-teal-400",
  "from-yellow-400 to-orange-400",
  "from-blue-400 to-indigo-500",
  "from-pink-400 to-red-400",
  "from-purple-300 to-purple-600",
  "from-green-300 to-green-600",
  "from-yellow-200 to-yellow-500",
  "from-blue-200 to-blue-500",
  "from-red-300 to-red-600",
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-10 text-white">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className={`p-6 shadow-lg rounded-xl cursor-pointer flex flex-col justify-center items-start bg-gradient-to-r ${colors[index % colors.length]} text-white`}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h4 className="font-bold text-lg mb-1">{skill.name}</h4>
              <p className="text-sm">{skill.experience} experience</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
