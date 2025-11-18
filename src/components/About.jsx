import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaAward, FaTrophy, FaKey, FaUserTie } from "react-icons/fa";
import heroImage from "../assets/hero22.jpg";

export default function About() {
  const certifications = [
    {
      title: "Computer Science Diploma",
      subtitle: "Tshwane University of Technology",
      icon: <FaGraduationCap className="text-blue-400 w-8 h-8 mb-3" />,
      link: "https://www.tut.ac.za/",
    },
    {
      title: "Software Developer Intern",
      subtitle: "Moepi Publishing & Tshimologong Precinct",
      icon: <FaLaptopCode className="text-green-400 w-8 h-8 mb-3" />,
      link: "https://www.linkedin.com/in/cecilia-letsau-80706b305/",
    },
    {
      title: "Golden Key International Honour Society",
      subtitle: "Academic excellence & leadership recognition",
      icon: <FaKey className="text-yellow-400 w-8 h-8 mb-3" />,
      link: "#",
    },
    {
      title: "Mentor & Leader",
      subtitle: "Guiding peers & fostering teamwork",
      icon: <FaUserTie className="text-purple-400 w-8 h-8 mb-3" />,
      link: "#",
    },
    {
      title: "React & JavaScript Workshops",
      subtitle: "Hands-on training & projects",
      icon: <FaAward className="text-yellow-400 w-8 h-8 mb-3" />,
      link: "#",
    },
    {
      title: "Hackathon Participation",
      subtitle: "Team projects & innovative solutions",
      icon: <FaTrophy className="text-purple-400 w-8 h-8 mb-3" />,
      link: "#",
    },
  ];

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-20 relative">
      <div className="relative flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-16">

        {/* Left: Image */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0, y: [0, -5, 0] }}
          transition={{
            duration: 0.8,
            y: { repeat: Infinity, repeatType: "loop", duration: 2 },
          }}
        >
          <img
            src={heroImage}
            alt="Cecilia"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-xl shadow-2xl border-4 border-white/20"
            style={{ objectPosition: "top" }}
          />
        </motion.div>

        {/* Right: Text content */}
        <motion.div
          className="md:w-1/2 text-left flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0, y: [0, -5, 0] }}
          transition={{
            duration: 0.8,
            y: { repeat: Infinity, repeatType: "loop", duration: 2 },
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-green-400 to-yellow-400">
            Hi, I'm Cecilia 👋
          </h2>

          <p className="text-lg md:text-xl mb-4 text-gray-100">
            Hi, I'm Cecilia Letsau 👋. I hold a Computer Science Diploma from Tshwane University of Technology and gained hands-on experience as a Software Developer Intern at Moepi Publishing and Tshimologong Precinct.
          </p>

          <p className="text-lg md:text-xl mb-6 text-gray-100">
            I build modern, scalable applications using Java, PHP, React, Node.js, JavaScript, HTML, CSS/Tailwind, SQL/MySQL, PostgreSQL, and MongoDB. I enjoy mentoring peers, leading projects, and creating solutions that make an impact.

Passionate about tech and innovation, I thrive on hackathons, hands-on projects, and exploring new tools to push my skills further.
          </p>
        </motion.div>
      </div>

      {/* Certifications / Recognition Cards */}
      <motion.div
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition transform flex flex-col items-center text-center"
          >
            {cert.icon}
            <h3 className="text-xl font-semibold text-white mb-1">{cert.title}</h3>
            <p className="text-gray-400 text-sm">{cert.subtitle}</p>
          </a>
        ))}
      </motion.div>

      {/* Optional decorative blurred elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-0 w-48 h-48 bg-yellow-400 rounded-full opacity-20 blur-3xl -z-10"></div>
    </section>
  );
}
