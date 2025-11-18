import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ThreeScene from "./components/ThreeScene"; // added — render globally
import Landing from "./components/Landing";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <Router>
      <div
        className="relative w-full min-h-screen overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #001017 0%, rgba(0,0,0,0.2) 60%)",
        }}
      >
        {/* ThreeScene now global — sits behind all pages */}
        <ThreeScene />

        <div style={{ position: "relative", zIndex: 20, pointerEvents: "auto" }}>
          <Navbar />
        </div>

        <main
          style={{
            position: "relative",
            zIndex: 15,
            pointerEvents: "auto",
            marginTop: 64,
            height: "calc(100vh - 64px)",
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
