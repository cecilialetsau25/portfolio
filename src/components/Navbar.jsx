import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [position, setPosition] = useState("bottom-0 justify-center");

  useEffect(() => {
    if (location.pathname === "/") {
      setPosition("bottom-0 justify-center"); // Landing page: bottom center
    } else {
      setPosition("top-0 justify-end"); // Other pages: top right
    }
  }, [location.pathname]);

  return (
    <nav
      className={`fixed w-full z-20 border-t border-white/10 shadow-md transition-all duration-300 flex ${position} px-6 py-3`}
    >
      <div className="flex items-center space-x-3 md:space-x-6">
        <Link
          to="/"
          className="font-semibold italic tracking-widest text-lg bg-gradient-to-r from-sky-400 via-sky-300 to-sky-200 text-transparent bg-clip-text hover:from-cyan-300 hover:via-cyan-200 hover:to-cyan-100 transition-colors"
        >
          Home
        </Link>
        <span className="text-slate-200">|</span>
        <Link
          to="/about"
          className="font-semibold italic tracking-widest text-lg bg-gradient-to-r from-sky-400 via-sky-300 to-sky-200 text-transparent bg-clip-text hover:from-cyan-300 hover:via-cyan-200 hover:to-cyan-100 transition-colors"
        >
          About
        </Link>
        <span className="text-slate-200">|</span>
        <Link
          to="/skills"
          className="font-semibold italic tracking-widest text-lg bg-gradient-to-r from-sky-400 via-sky-300 to-sky-200 text-transparent bg-clip-text hover:from-cyan-300 hover:via-cyan-200 hover:to-cyan-100 transition-colors"
        >
          Skills
        </Link>
        <span className="text-slate-200">|</span>
        <Link
          to="/projects"
          className="font-semibold italic tracking-widest text-lg bg-gradient-to-r from-sky-400 via-sky-300 to-sky-200 text-transparent bg-clip-text hover:from-cyan-300 hover:via-cyan-200 hover:to-cyan-100 transition-colors"
        >
          Projects
        </Link>
        <span className="text-slate-200">|</span>
        <Link
          to="/contact"
          className="font-semibold italic tracking-widest text-lg bg-gradient-to-r from-sky-400 via-sky-300 to-sky-200 text-transparent bg-clip-text hover:from-cyan-300 hover:via-cyan-200 hover:to-cyan-100 transition-colors"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
