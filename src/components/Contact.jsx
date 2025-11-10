import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-300 px-6 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h3
          className="text-2xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h3>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p>Email: <a href="mailto:cmletsau@gmail.com" className="text-blue-500">cmletsau@gmail.com</a></p>
          <p>Phone: 072 484 1337</p>
          <p>
            <a href="https://github.com/cecilialetsau25" target="_blank" rel="noreferrer" className="text-blue-500">GitHub</a> | 
            <a href="https://linkedin.com/in/magalane-letsau" target="_blank" rel="noreferrer" className="text-blue-500 ml-2">LinkedIn</a>
          </p>

        
        </motion.div>
      </div>
    </section>
  );
}
