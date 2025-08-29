import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-16">
      <motion.div
        className="text-center"
        animate={{ y: [0, -10, 0] }} // moves up 10px then back down
        transition={{
          duration: 2,      // 2 seconds for a full bounce cycle
          repeat: Infinity, // repeats forever
          repeatType: "loop"
        }}
      >
        
        <h3 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-green-400 to-yellow-400">About Me</h3>

       <p className="text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-100 via-green-400 to-yellow-400">
  I recently completed my Computer Science diploma at Tshwane University of Technology. 
  I have gained hands-on experience as a Software Developer Intern at Moepi Publishing 
  and at Tshimologong Precinct. I enjoy collaborating with teams, mentoring peers, 
  and developing innovative solutions. I work with technologies such as Java (JEE, JPA, JDBC, JPQL, PLSQL), 
  PHP (Laravel, PHPUnit), React, JavaScript (ES6+, jQuery), Node.js, HTML, CSS/Tailwind, 
  SQL/MySQL, PostgreSQL, and MongoDB to build modern, scalable applications.
</p>

      </motion.div>
    </section>
  );
}
