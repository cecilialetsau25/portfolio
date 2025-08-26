export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">Cecilia Letsau</h1>
          <div className="space-x-4">
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#skills" className="hover:text-blue-500">Skills</a>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center h-screen bg-gradient-to-r from-blue-100 to-purple-100 px-6">
        <h2 className="text-4xl font-bold mb-4">Hi, I'm Cecilia 👋</h2>
        <p className="text-lg max-w-xl">
          A passionate Software Developer skilled in Java, PHP, React, and MySQL. 
          I love building modern, scalable applications and solving real-world problems with technology.
        </p>
        <a href="#projects" className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
          View My Work
        </a>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold mb-4">About Me</h3>
        <p>
          I recently completed my Computer Science diploma at Tshwane University of Technology 
          and currently work as a Software Developer Intern at Moepi Publishing. 
          I enjoy collaborating with teams, mentoring peers, and developing innovative solutions.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-gray-100 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
  <div className="p-4 bg-white shadow rounded-lg">Java (JEE, JPA, JDBC, JPQL, PLSQL)</div>
  <div className="p-4 bg-white shadow rounded-lg">PHP (Laravel, PHPUnit)</div>
  <div className="p-4 bg-white shadow rounded-lg">React (Frontend Development)</div>
  <div className="p-4 bg-white shadow rounded-lg">JavaScript (ES6+, jQuery)</div>
  <div className="p-4 bg-white shadow rounded-lg">HTML</div>
  <div className="p-4 bg-white shadow rounded-lg">CSS / Tailwind CSS</div>
  <div className="p-4 bg-white shadow rounded-lg">SQL / MySQL</div>
  <div className="p-4 bg-white shadow rounded-lg">GitHub</div>
  <div className="p-4 bg-white shadow rounded-lg">NetBeans / VS Code</div>
  <div className="p-4 bg-white shadow rounded-lg">Kotlin</div>
</div>

        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold mb-6">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white shadow rounded-lg">
            <h4 className="font-bold">Recipe Finder</h4>
            <p className="text-sm">React app to search and save recipes with dark mode.</p>
            <a href="https://recipe-finder-eight-pi.vercel.app/" target="_blank" rel="noreferrer" className="text-blue-500">
              Live Demo
            </a>{" | "}
            <a href="https://github.com/cecilialetsau25/recipe_finder" target="_blank" rel="noreferrer" className="text-blue-500">
              GitHub
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="p-6 bg-white shadow rounded-lg">
    <h4 className="font-bold">Cleanease Laundry System</h4>
    <p className="text-sm">Laundry management system built with Laravel + PHP.</p>
  </div>

<div className="grid md:grid-cols-2 gap-6">
  <div className="p-6 bg-white shadow rounded-lg">
    <h4 className="font-bold">Recipe Finder</h4>
    <p className="text-sm">React app to search and save recipes with dark mode.</p>
    <a href="https://recipe-finder-eight-pi.vercel.app/" target="_blank" rel="noreferrer" className="text-blue-500">
      Live Demo
    </a>{" | "}
    <a href="https://github.com/cecilialetsau25/recipe_finder" target="_blank" rel="noreferrer" className="text-blue-500">
      GitHub
    </a>
  </div>

   <div className="p-6 bg-white shadow rounded-lg">
    <h4 className="font-bold">React Tailwind Task Tracker</h4>
    <p className="text-sm">Task tracker app using React + Tailwind CSS.</p>
    <a href="https://react-tailwind-task-tracker.vercel.app/" target="_blank" rel="noreferrer" className="text-blue-500">Live Demo</a>{" | "}
    <a href="https://github.com/cecilialetsau25/react-tailwind-task-tracker" target="_blank" rel="noreferrer" className="text-blue-500">GitHub</a>
  </div>

  <div className="p-6 bg-white shadow rounded-lg">
    <h4 className="font-bold">Melula Assignment</h4>
    <p className="text-sm">Frontend assignment project built with React + Tailwind.</p>
    <a href="https://melula-assignment.vercel.app/" target="_blank" rel="noreferrer" className="text-blue-500">Live Demo</a>{" | "}
    <a href="https://github.com/cecilialetsau25/Melula_Assignment" target="_blank" rel="noreferrer" className="text-blue-500">GitHub</a>
  </div>

  <div className="p-6 bg-white shadow rounded-lg">
    <h4 className="font-bold">Cleanease Laundry System</h4>
    <p className="text-sm">Laundry management system built with Laravel + PHP.</p>
    <a href="#" target="_blank" rel="noreferrer" className="text-blue-500">
      Live Demo
    </a>{" | "}
    <a href="#" target="_blank" rel="noreferrer" className="text-blue-500">
      GitHub
    </a>
  </div>

 
</div>

  
</div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-100 px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
          <p>Email: <a href="mailto:cmletsau@gmail.com" className="text-blue-500">cmletsau@gmail.com</a></p>
          <p>Phone: 072 484 1337</p>
          <p>
            <a href="https://github.com/cecilialetsau25" target="_blank" rel="noreferrer" className="text-blue-500">GitHub</a> | 
            <a href="https://linkedin.com/in/magalane-letsau" target="_blank" rel="noreferrer" className="text-blue-500 ml-2">LinkedIn</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white shadow-inner text-center py-4">
        <p>© {new Date().getFullYear()} Cecilia Letsau. All rights reserved.</p>
      </footer>
    </div>
  );
}
