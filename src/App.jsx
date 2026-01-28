import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ThreeScene from "./components/ThreeScene";
import Landing from "./components/Landing";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop"; // <-- new

export default function App() {
  return (
    <Router>
      {/* ScrollToTop ensures every page starts from top */}
      <ScrollToTop />

      <div
        className="relative w-full min-h-screen overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #001017 0%, rgba(0,0,0,0.2) 60%)",
        }}
      >
        {/* Global 3D Background */}
        <ThreeScene />

        {/* Navbar */}
        <div style={{ position: "relative", zIndex: 20, pointerEvents: "auto" }}>
          <Navbar />
        </div>

        {/* Page content */}
        <main
          style={{
            position: "relative",
            zIndex: 15,
            pointerEvents: "auto",
          }}
        >
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
