import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-transparent px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-md"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            Contact Me
          </motion.h3>

          <motion.div
            className="mt-4 space-y-3 text-sm md:text-base text-slate-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <p>
              Email:{" "}
              <a
                href="mailto:cmletsau@gmail.com"
                className="text-cyan-300 hover:text-cyan-400 underline transition-colors"
              >
                cmletsau@gmail.com
              </a>
            </p>

            <p>Phone: <span className="text-slate-100">+27 72 484 1337</span></p>

            <p className="flex flex-wrap gap-3 items-center">
              <a
                href="https://github.com/cecilialetsau25"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-300 hover:text-cyan-400 underline transition-colors"
              >
                GitHub
              </a>
              <span className="text-slate-400">|</span>
              <a
                href="https://linkedin.com/in/cecilia-letsau-80706b305"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-300 hover:text-cyan-400 underline transition-colors"
              >
                LinkedIn
              </a>
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
           
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
