import { AcademicCapIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Name with Icon linking to Hero section */}
        <a href="#home" className="flex items-center space-x-2">
          
          
        </a>

        {/* Navbar Links */}
        <div className="space-x-4">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>
      </div>
    </nav>
  );
}
