import { motion } from "framer-motion";
import heroImage from "../assets/tech12.jpg"; // your image path

export default function Hero() {
  return (
    <section className="text-white px-8 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Text */}
        <motion.div
          className="md:w-1/2 text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0, y: [0, -5, 0] }} // adds subtle bounce
          transition={{
            duration: 0.6,
            y: { repeat: Infinity, repeatType: "loop", duration: 2 },
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Cecilia 👋</h2>
          <p className="text-lg md:text-xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-green-400 to-yellow-400">
            A passionate Software Developer skilled in Java, PHP, React, and MySQL. 
            I love building modern, scalable applications and solving real-world problems with technology.
          </p>
          <a 
            href="#projects" 
            className="px-6 py-3 bg-blue-500 rounded-lg shadow hover:bg-blue-600 transition"
          >
            View My Work
          </a>
        </motion.div>

        {/* Right: Rounded Image */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0, y: [0, -5, 0] }} // adds subtle bounce
          transition={{
            duration: 0.6,
            y: { repeat: Infinity, repeatType: "loop", duration: 2 },
          }}
        >
          <img
            src={heroImage}
            alt="Cecilia"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
